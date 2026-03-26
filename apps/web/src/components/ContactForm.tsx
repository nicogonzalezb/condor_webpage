import * as React from 'react'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxkKmSI2hP4Ak--tep2geuog712o3_dBsFefeq-_h7GRBPNncRwW5mBwD049Buns6hcqg/exec'

type Status = 'idle' | 'submitting' | 'success'

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>('idle')
  const formRef = React.useRef<HTMLFormElement>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = formRef.current
    if (!form) return

    // Honeypot check
    const honeypot = form.querySelector<HTMLInputElement>('[name="company_website"]')
    if (honeypot?.value) {
      setStatus('success')
      return
    }

    setStatus('submitting')

    const fd = new FormData(form)
    const data = {
      firstName: fd.get('firstName'),
      email: fd.get('email'),
      phone: fd.get('phone'),
    }

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(data),
      })
      form.reset()
      setStatus('success')
    } catch {
      setStatus('idle')
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="mt-6 space-y-4">
      {/* honeypot */}
      <div className="hidden">
        <label>
          Website
          <input name="company_website" autoComplete="off" />
        </label>
      </div>

      <Field label="Nombre" name="firstName" placeholder="Tu nombre" required />
      <Field label="Correo" name="email" type="email" placeholder="tu@correo.com" required />
      <Field label="Teléfono" name="phone" placeholder="+57…" required />

      <button
        disabled={status === 'submitting'}
        className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-condor-navy px-6 py-3 text-sm font-semibold text-condor-yellow hover:bg-condor-bluegray transition-all duration-200 disabled:opacity-60 cursor-pointer"
      >
        {status === 'submitting' ? 'Enviando…' : 'Enviar mensaje'}
      </button>

      {status === 'success' && (
        <p className="text-sm text-condor-navy font-semibold">Mensaje recibido. Te contactaremos pronto.</p>
      )}

      <p className="pt-2 text-xs text-foreground-muted">
        Al enviar aceptas nuestra política de privacidad. No usamos urgencia falsa ni vendemos tus datos.
      </p>
    </form>
  )
}

function Field({
  label,
  name,
  placeholder,
  required,
  type,
}: {
  label: string
  name: string
  placeholder?: string
  required?: boolean
  type?: string
}) {
  return (
    <label className="block">
      <div className="text-xs font-semibold text-foreground mb-1">{label}</div>
      <input
        className="mt-1 w-full rounded-xl border border-condor-navy/20 bg-white px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/60 focus:outline-none focus:ring-2 focus:ring-condor-navy/40 focus:border-condor-navy/40 transition-all duration-200"
        name={name}
        placeholder={placeholder}
        required={required}
        type={type ?? 'text'}
      />
    </label>
  )
}
