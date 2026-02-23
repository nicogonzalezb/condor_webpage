import type { APIRoute } from 'astro'
import nodemailer from 'nodemailer'

type Payload = {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  company?: string
  message?: string
  company_website?: string // honeypot
}

const ipHits = new Map<string, {count: number; resetAt: number}>()

function getClientIp(req: Request) {
  const h = req.headers
  const xff = h.get('x-forwarded-for')
  if (xff) return xff.split(',')[0].trim()
  const rip = h.get('x-real-ip')
  return rip || 'unknown'
}

function rateLimit(ip: string) {
  const now = Date.now()
  const windowMs = 60_000
  const max = 10
  const entry = ipHits.get(ip)
  if (!entry || entry.resetAt < now) {
    ipHits.set(ip, {count: 1, resetAt: now + windowMs})
    return {ok: true}
  }
  if (entry.count >= max) return {ok: false}
  entry.count += 1
  return {ok: true}
}

function env(name: string) {
  return process.env[name]?.trim()
}

async function trySendEmail(p: Required<Pick<Payload, 'firstName' | 'lastName' | 'email' | 'message'>> & Payload) {
  const host = env('SMTP_HOST')
  const port = Number(env('SMTP_PORT') || '587')
  const user = env('SMTP_USER')
  const pass = env('SMTP_PASS')
  const from = env('CONTACT_FROM') || user
  const to = env('CONTACT_TO')

  if (!host || !user || !pass || !from || !to) {
    return {sent: false as const, reason: 'smtp_not_configured' as const}
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {user, pass},
  })

  const subject = `Nuevo lead · ${p.firstName} ${p.lastName}`
  const text = [
    `Nombre: ${p.firstName} ${p.lastName}`,
    `Email: ${p.email}`,
    p.phone ? `Teléfono: ${p.phone}` : null,
    p.company ? `Empresa: ${p.company}` : null,
    '',
    'Mensaje:',
    p.message,
  ]
    .filter(Boolean)
    .join('\n')

  await transporter.sendMail({from, to, subject, text, replyTo: p.email})
  return {sent: true as const}
}

export const POST: APIRoute = async ({ request }) => {
  const ip = getClientIp(request)
  const rl = rateLimit(ip)
  if (!rl.ok) {
    return new Response(JSON.stringify({ok: false, message: 'Demasiadas solicitudes. Intenta más tarde.'}), {
      status: 429,
      headers: {'Content-Type': 'application/json'},
    })
  }

  let body: Payload
  try {
    body = (await request.json()) as Payload
  } catch {
    return new Response(JSON.stringify({ok: false, message: 'Body inválido.'}), {
      status: 400,
      headers: {'Content-Type': 'application/json'},
    })
  }

  // honeypot
  if (body.company_website && String(body.company_website).trim().length > 0) {
    return new Response(JSON.stringify({ok: true, message: 'Mensaje recibido.'}), {
      headers: {'Content-Type': 'application/json'},
    })
  }

  const firstName = String(body.firstName || '').trim()
  const lastName = String(body.lastName || '').trim()
  const email = String(body.email || '').trim()
  const message = String(body.message || '').trim()

  if (!firstName || !lastName || !email || !message) {
    return new Response(JSON.stringify({ok: false, message: 'Faltan campos requeridos.'}), {
      status: 400,
      headers: {'Content-Type': 'application/json'},
    })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ok: false, message: 'Email inválido.'}), {
      status: 400,
      headers: {'Content-Type': 'application/json'},
    })
  }

  try {
    const res = await trySendEmail({firstName, lastName, email, message, phone: body.phone, company: body.company})
    if (!res.sent) {
      return new Response(
        JSON.stringify({ok: true, message: 'Mensaje recibido. (Envío de email pendiente de configuración SMTP).'}),
        {headers: {'Content-Type': 'application/json'}},
      )
    }
    return new Response(JSON.stringify({ok: true, message: 'Mensaje enviado. Te contactaremos pronto.'}), {
      headers: {'Content-Type': 'application/json'},
    })
  } catch {
    return new Response(
      JSON.stringify({ok: false, message: 'No se pudo enviar el mensaje. Intenta más tarde.'}),
      {status: 500, headers: {'Content-Type': 'application/json'}},
    )
  }
}
