import type { APIRoute } from 'astro'
import nodemailer from 'nodemailer'

type Answers = {
  nombre?: string
  q1?: string
  q2?: string[]
  q3?: string
  q4?: string[]
  q5?: string
  q6?: string
  q7?: string
  q8?: string
  q9?: string
  q10?: string
  q11?: string
  q12?: string
}

function env(name: string) {
  return process.env[name]?.trim()
}

function formatHtml(a: Answers): string {
  const row = (label: string, value: string | string[] | undefined) => {
    const val = Array.isArray(value) ? value.join(', ') : value || '—'
    return `<tr>
      <td style="padding:8px 12px;background:#f4f4f4;font-weight:600;width:40%;vertical-align:top;font-size:13px">${label}</td>
      <td style="padding:8px 12px;font-size:13px">${val}</td>
    </tr>`
  }

  return `
    <div style="font-family:sans-serif;max-width:640px;margin:0 auto">
      <div style="background:#031463;color:#E8DB7D;padding:20px 24px">
        <h2 style="margin:0;font-size:18px;text-transform:uppercase;letter-spacing:2px">Test de Adopción IA</h2>
        <p style="margin:4px 0 0;opacity:.7;font-size:12px">Respuesta de: <strong>${a.nombre || 'sin nombre'}</strong></p>
      </div>
      <table style="width:100%;border-collapse:collapse;margin-top:0">
        ${row('Nombre', a.nombre)}
        ${row('Rol en el equipo', a.q9)}
        ${row('Nivel tecnología', a.q10)}
        <tr><td colspan="2" style="padding:6px 12px;background:#031463;color:#E8DB7D;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase">USO ACTUAL</td></tr>
        ${row('¿Usa IA?', a.q1)}
        ${row('Herramientas usadas', a.q2)}
        ${row('Reacción al escuchar "IA"', a.q3)}
        <tr><td colspan="2" style="padding:6px 12px;background:#031463;color:#E8DB7D;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase">APLICACIONES</td></tr>
        ${row('Tareas donde ayudaría más', a.q4)}
        ${row('Tarea que más consume tiempo', a.q5)}
        <tr><td colspan="2" style="padding:6px 12px;background:#031463;color:#E8DB7D;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase">SITUACIONES CONCRETAS</td></tr>
        ${row('Correo de seguimiento', a.q6)}
        ${row('Grabación de reunión', a.q7)}
        ${row('Experiencia previa con IA', a.q8)}
        <tr><td colspan="2" style="padding:6px 12px;background:#031463;color:#E8DB7D;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase">MOTIVACIÓN</td></tr>
        ${row('Una cosa que pediría a la IA', a.q11)}
        ${row('Disposición a aprender', a.q12)}
      </table>
    </div>
  `
}

export const POST: APIRoute = async ({ request }) => {
  let body: Answers
  try {
    body = (await request.json()) as Answers
  } catch {
    return new Response(JSON.stringify({ ok: false, message: 'Body inválido.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const host = env('SMTP_HOST')
  const port = Number(env('SMTP_PORT') || '587')
  const user = env('SMTP_USER')
  const pass = env('SMTP_PASS')
  const from = env('CONTACT_FROM') || user
  const to = env('CONTACT_TO')

  if (!host || !user || !pass || !from || !to) {
    // SMTP not configured — still return ok so the user sees success
    console.warn('[test] SMTP not configured, respuesta recibida pero no enviada:', body)
    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })

    await transporter.sendMail({
      from,
      to,
      subject: `Test IA · ${body.nombre || 'sin nombre'} — Sépa lo decir`,
      html: formatHtml(body),
    })

    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('[test] Error enviando email:', err)
    return new Response(JSON.stringify({ ok: false, message: 'Error al enviar.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
