import * as React from 'react'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby1rSQEBNIf0AB9vCJJryFOf7T7CE26GgbNw8Gu6-wLHSP-mZk77HUzIWE6o2Idn6UU/exec'

type Answers = {
  nombre: string
  q1: string
  q2: string[]
  q3: string
  q4: string[]
  q5: string
  q6: string
  q7: string
  q8: string
  q9: string
  q10: string
  q11: string
  q12: string
}

const INITIAL: Answers = {
  nombre: '',
  q1: '',
  q2: [],
  q3: '',
  q4: [],
  q5: '',
  q6: '',
  q7: '',
  q8: '',
  q9: '',
  q10: '',
  q11: '',
  q12: '',
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function TestAdopcionForm() {
  const [answers, setAnswers] = React.useState<Answers>(INITIAL)
  const [status, setStatus] = React.useState<Status>('idle')

  function setField<K extends keyof Answers>(key: K, value: Answers[K]) {
    setAnswers(prev => ({ ...prev, [key]: value }))
  }

  function toggleCheck(key: 'q2' | 'q4', value: string, max?: number) {
    setAnswers(prev => {
      const current = prev[key]
      if (current.includes(value)) {
        return { ...prev, [key]: current.filter(v => v !== value) }
      }
      if (max && current.length >= max) return prev
      return { ...prev, [key]: [...current, value] }
    })
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(answers),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-condor-navy border-2 border-condor-yellow shadow-[6px_6px_0_#E8DB7D] p-8 text-center">
        <div className="text-4xl mb-4">✓</div>
        <div className="text-2xl font-black text-condor-yellow uppercase leading-tight mb-3">
          ¡Gracias, {answers.nombre || 'equipo'}!
        </div>
        <p className="text-condor-yellow/70 text-sm" style={{ fontFamily: 'var(--font-condor-mono)' }}>
          Nico ya tiene tus respuestas. Las revisará antes de la reunión.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-10">

      {/* Nombre */}
      <div>
        <Label>¿Cuál es tu nombre?</Label>
        <input
          required
          value={answers.nombre}
          onChange={e => setField('nombre', e.target.value)}
          placeholder="Tu nombre"
          className={inputCls}
        />
      </div>

      <Divider label="Sección 1 — ¿Cómo estás hoy con la IA?" />

      {/* Q1 */}
      <RadioGroup
        label="1. ¿Usas alguna herramienta de inteligencia artificial en tu trabajo?"
        name="q1"
        value={answers.q1}
        onChange={v => setField('q1', v)}
        options={[
          'Nunca la he usado',
          'La he probado una o dos veces',
          'La uso de vez en cuando (menos de una vez por semana)',
          'La uso varias veces a la semana',
          'La uso todos los días',
        ]}
      />

      {/* Q2 */}
      <CheckGroup
        label="2. ¿Cuál(es) de estas herramientas has usado? (marca todas las que apliquen)"
        name="q2"
        values={answers.q2}
        onChange={v => toggleCheck('q2', v)}
        options={[
          'ChatGPT',
          'Claude',
          'Gemini / Google AI',
          'Canva con IA',
          'MeetGeek / herramientas de transcripción',
          'Ninguna',
        ]}
        other
        otherValue={answers.q2.find(v => !['ChatGPT','Claude','Gemini / Google AI','Canva con IA','MeetGeek / herramientas de transcripción','Ninguna'].includes(v)) || ''}
        onOtherChange={v => {
          const fixed = ['ChatGPT','Claude','Gemini / Google AI','Canva con IA','MeetGeek / herramientas de transcripción','Ninguna']
          setAnswers(prev => ({
            ...prev,
            q2: [...prev.q2.filter(x => fixed.includes(x)), ...(v ? [v] : [])]
          }))
        }}
      />

      {/* Q3 */}
      <RadioGroup
        label='3. Cuando escuchas "inteligencia artificial", ¿qué sientes primero?'
        name="q3"
        value={answers.q3}
        onChange={v => setField('q3', v)}
        options={[
          'Curiosidad — quiero aprender más',
          'Neutral — ni me emociona ni me asusta',
          'Un poco de desconfianza — no sé si fiarme',
          'Miedo o resistencia — prefiero no usarla',
          'Ya la uso y me parece indispensable',
        ]}
      />

      <Divider label="Sección 2 — ¿Para qué la usarías?" />

      {/* Q4 */}
      <CheckGroup
        label="4. ¿Para qué tareas de tu trabajo crees que la IA podría ayudarte más? (elige hasta 3)"
        name="q4"
        values={answers.q4}
        onChange={v => toggleCheck('q4', v, 3)}
        options={[
          'Redactar o mejorar textos (correos, propuestas, informes)',
          'Resumir reuniones o documentos largos',
          'Crear presentaciones o contenido visual',
          'Organizar información o hacer seguimiento',
          'Responder preguntas rápidas o investigar',
          'Programar o automatizar tareas repetitivas',
          'No sé por dónde empezar',
        ]}
      />

      {/* Q5 */}
      <div>
        <Label>5. ¿Cuál es la tarea que más tiempo te consume en tu semana y que sientes que podría hacerse más rápido?</Label>
        <textarea
          value={answers.q5}
          onChange={e => setField('q5', e.target.value)}
          placeholder="Cuéntanos..."
          rows={3}
          className={textareaCls}
        />
      </div>

      <Divider label="Sección 3 — Situaciones concretas" />

      {/* Q6 */}
      <RadioGroup
        label="6. Imagina que tienes que escribir un correo de seguimiento a un cliente que recibió una propuesta hace 3 días y no ha respondido. ¿Qué harías?"
        name="q6"
        value={answers.q6}
        onChange={v => setField('q6', v)}
        options={[
          'Lo escribo yo desde cero',
          'Uso una plantilla que ya tengo guardada',
          'Le pido a alguien del equipo que lo redacte',
          'Le pido a una IA que me ayude a redactarlo',
          'No sé cómo pedirle a una IA que haga eso',
        ]}
      />

      {/* Q7 */}
      <RadioGroup
        label="7. Imagina que grabas una reunión de 1 hora con un cliente. ¿Qué harías con esa grabación?"
        name="q7"
        value={answers.q7}
        onChange={v => setField('q7', v)}
        options={[
          'Nada, no la reviso',
          'La escucho otra vez si necesito recordar algo',
          'La transcribo manualmente o pido que alguien la transcriba',
          'La paso por una herramienta que me da un resumen automático',
          'No sabía que eso se puede hacer',
        ]}
      />

      {/* Q8 */}
      <RadioGroup
        label="8. ¿Has intentado pedirle a una IA que haga algo y el resultado fue malo o confuso?"
        name="q8"
        value={answers.q8}
        onChange={v => setField('q8', v)}
        options={[
          'Sí, y por eso no la uso mucho',
          'Sí, pero aprendí cómo mejorar lo que le pedía',
          'No, todo lo que he pedido ha salido bien',
          'No la he usado lo suficiente para saberlo',
        ]}
      />

      <Divider label="Sección 4 — Tu contexto" />

      {/* Q9 */}
      <div>
        <Label>9. ¿Cuál es tu rol principal en el equipo?</Label>
        <input
          value={answers.q9}
          onChange={e => setField('q9', e.target.value)}
          placeholder="Ej: coordinación, contenido, informes..."
          className={inputCls}
        />
      </div>

      {/* Q10 */}
      <RadioGroup
        label="10. ¿Cómo describes tu nivel con la tecnología en general?"
        name="q10"
        value={answers.q10}
        onChange={v => setField('q10', v)}
        options={[
          'Básico — uso lo necesario y nada más',
          'Medio — aprendo cosas nuevas si me las enseñan',
          'Avanzado — me adapto rápido a herramientas nuevas',
          'Muy avanzado — a veces soy yo quien les enseña a otros',
        ]}
      />

      {/* Q11 */}
      <div>
        <Label>11. Si pudieras pedirle una sola cosa a la IA para tu trabajo, ¿qué sería?</Label>
        <textarea
          value={answers.q11}
          onChange={e => setField('q11', e.target.value)}
          placeholder="Lo que sea, no hay respuesta mala..."
          rows={3}
          className={textareaCls}
        />
      </div>

      {/* Q12 */}
      <RadioGroup
        label="12. ¿Qué tan dispuesto/a estás a aprender a usar IA en tu trabajo este año?"
        name="q12"
        value={answers.q12}
        onChange={v => setField('q12', v)}
        options={[
          'Para nada — no me interesa',
          'Un poco — si es muy fácil, sí',
          'Bastante — me parece útil y quiero aprender',
          'Totalmente — quiero usarla lo antes posible',
        ]}
      />

      {status === 'error' && (
        <p className="text-sm text-red-600 font-semibold">
          Algo salió mal. Intenta de nuevo o escríbele directamente a Nico.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full inline-flex items-center justify-center bg-condor-navy px-6 py-4 text-sm font-black text-condor-yellow uppercase tracking-widest hover:bg-condor-bluegray transition-all duration-200 disabled:opacity-60 cursor-pointer border-2 border-condor-navy shadow-[4px_4px_0_#031463]"
      >
        {status === 'submitting' ? 'Enviando…' : 'Enviar respuestas →'}
      </button>

      <p className="text-xs text-center" style={{ fontFamily: 'var(--font-condor-mono)', color: 'var(--color-foreground-muted)' }}>
        Tus respuestas son confidenciales y solo las verá el equipo de Condór.
      </p>
    </form>
  )
}

// ── Sub-components ────────────────────────────────────────────────

const inputCls =
  'mt-1 w-full border border-condor-navy/20 bg-white px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/60 focus:outline-none focus:ring-2 focus:ring-condor-navy/40 focus:border-condor-navy/40 transition-all duration-200'

const textareaCls =
  'mt-1 w-full border border-condor-navy/20 bg-white px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/60 focus:outline-none focus:ring-2 focus:ring-condor-navy/40 focus:border-condor-navy/40 transition-all duration-200 resize-none'

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm font-semibold text-foreground mb-2 leading-snug">{children}</div>
  )
}

function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 pt-2">
      <div className="h-px flex-1 bg-condor-navy/20" />
      <span
        className="text-xs font-black text-condor-navy uppercase tracking-widest whitespace-nowrap"
        style={{ fontFamily: 'var(--font-condor-mono)' }}
      >
        {label}
      </span>
      <div className="h-px flex-1 bg-condor-navy/20" />
    </div>
  )
}

function RadioGroup({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string
  name: string
  value: string
  onChange: (v: string) => void
  options: string[]
}) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="space-y-2 mt-3">
        {options.map(opt => (
          <label
            key={opt}
            className={`flex items-start gap-3 p-3 border-2 cursor-pointer transition-all duration-150 ${
              value === opt
                ? 'border-condor-navy bg-condor-navy/5'
                : 'border-condor-navy/20 hover:border-condor-navy/50'
            }`}
          >
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={() => onChange(opt)}
              className="mt-0.5 accent-[#031463] shrink-0"
            />
            <span className="text-sm text-foreground">{opt}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

function CheckGroup({
  label,
  name,
  values,
  onChange,
  options,
  other,
  otherValue,
  onOtherChange,
}: {
  label: string
  name: string
  values: string[]
  onChange: (v: string) => void
  options: string[]
  other?: boolean
  otherValue?: string
  onOtherChange?: (v: string) => void
}) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="space-y-2 mt-3">
        {options.map(opt => (
          <label
            key={opt}
            className={`flex items-start gap-3 p-3 border-2 cursor-pointer transition-all duration-150 ${
              values.includes(opt)
                ? 'border-condor-navy bg-condor-navy/5'
                : 'border-condor-navy/20 hover:border-condor-navy/50'
            }`}
          >
            <input
              type="checkbox"
              name={name}
              value={opt}
              checked={values.includes(opt)}
              onChange={() => onChange(opt)}
              className="mt-0.5 accent-[#031463] shrink-0"
            />
            <span className="text-sm text-foreground">{opt}</span>
          </label>
        ))}
        {other && (
          <div className="pt-1">
            <input
              type="text"
              placeholder="Otra: ¿cuál?"
              value={otherValue || ''}
              onChange={e => onOtherChange?.(e.target.value)}
              className={inputCls}
            />
          </div>
        )}
      </div>
    </div>
  )
}
