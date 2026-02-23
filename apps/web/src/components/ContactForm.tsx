import * as React from 'react'

type State =
  | {status: 'idle'}
  | {status: 'submitting'}
  | {status: 'success'; message: string}
  | {status: 'error'; message: string}

export function ContactForm() {
  const [state, setState] = React.useState<State>({status: 'idle'})

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState({status: 'submitting'})

    const fd = new FormData(e.currentTarget)
    const payload = Object.fromEntries(fd.entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload),
      })
      const data = (await res.json()) as {ok?: boolean; message?: string}
      if (!res.ok || !data.ok) throw new Error(data.message || 'Error enviando el mensaje')
      ;(e.currentTarget as HTMLFormElement).reset()
      setState({status: 'success', message: data.message || 'Mensaje enviado.'})
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Error enviando el mensaje'
      setState({status: 'error', message})
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4">
      {/* honeypot */}
      <div className="hidden">
        <label>
          Website
          <input name="company_website" autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Nombre" name="firstName" placeholder="Tu nombre" required />
        <Field label="Apellido" name="lastName" placeholder="Tu apellido" required />
      </div>
      <Field label="Correo" name="email" type="email" placeholder="tu@correo.com" required />
      <Field label="Empresa" name="company" placeholder="Nombre de tu empresa" />
      <Field label="Teléfono (opcional)" name="phone" placeholder="+57…" />
      <Field label="Mensaje" name="message" placeholder="Cuéntanos sobre tus necesidades…" textarea required />

      <button
        disabled={state.status === 'submitting'}
        className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-condor-navy px-6 py-3 text-sm font-semibold text-condor-yellow hover:bg-condor-bluegray transition-all duration-200 disabled:opacity-60 cursor-pointer"
      >
        {state.status === 'submitting' ? 'Enviando…' : 'Enviar mensaje'}
      </button>

      {state.status === 'success' ? (
        <p className="text-sm text-condor-navy font-semibold">{state.message}</p>
      ) : state.status === 'error' ? (
        <p className="text-sm text-red-700">{state.message}</p>
      ) : null}

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
  textarea,
}: {
  label: string
  name: string
  placeholder?: string
  required?: boolean
  type?: string
  textarea?: boolean
}) {
  return (
    <label className="block">
      <div className="text-xs font-semibold text-foreground mb-1">{label}</div>
      {textarea ? (
        <textarea
          className="mt-1 w-full rounded-xl border border-condor-navy/20 bg-white px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/60 focus:outline-none focus:ring-2 focus:ring-condor-navy/40 focus:border-condor-navy/40 transition-all duration-200"
          name={name}
          placeholder={placeholder}
          required={required}
          rows={5}
        />
      ) : (
        <input
          className="mt-1 w-full rounded-xl border border-condor-navy/20 bg-white px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/60 focus:outline-none focus:ring-2 focus:ring-condor-navy/40 focus:border-condor-navy/40 transition-all duration-200"
          name={name}
          placeholder={placeholder}
          required={required}
          type={type ?? 'text'}
        />
      )}
    </label>
  )
}
