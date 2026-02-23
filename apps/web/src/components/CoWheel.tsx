import * as React from 'react'

type Props = {
  words: string[]
  intervalMs?: number
  className?: string
  variant?: 'default' | 'brand'
}

function renderWordWithBoldCO(word: string, variant: Props['variant']) {
  const w = word ?? ''
  const lower = w.toLowerCase()
  if (lower.startsWith('co') && w.length >= 2) {
    const rest = w.slice(2)
    return (
      <>
        <span className="font-extrabold tracking-tight">CO</span>
        <span className={variant === 'brand' ? '' : 'opacity-85'}>{rest}</span>
      </>
    )
  }
  return <>{w}</>
}

/**
 * Lightweight rotating-word component for the "co" wordplay.
 * Accessibility: the animation is aria-hidden; a stable sr-only label is provided.
 * Motion: respects prefers-reduced-motion (falls back to first word).
 */
export function CoWheel({words, intervalMs = 2200, className, variant = 'default'}: Props) {
  const safeWords = words.filter(Boolean)
  const [idx, setIdx] = React.useState(0)
  const [reduceMotion, setReduceMotion] = React.useState(false)

  React.useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    if (!mq) return
    const onChange = () => setReduceMotion(Boolean(mq.matches))
    onChange()
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])

  React.useEffect(() => {
    if (reduceMotion) return
    if (safeWords.length <= 1) return
    const t = window.setInterval(() => setIdx((i) => (i + 1) % safeWords.length), intervalMs)
    return () => window.clearInterval(t)
  }, [reduceMotion, intervalMs, safeWords.length])

  const current = safeWords[idx] ?? safeWords[0] ?? 'company'

  return (
    <span className={className}>
      <span className="sr-only">{current}</span>
      <span aria-hidden className="inline-flex overflow-hidden align-bottom h-[1.15em]">
        <span
          className="inline-flex flex-col transition-transform duration-500 will-change-transform"
          style={{transform: `translateY(-${idx * 1.15}em)`}}
        >
          {safeWords.map((w) => (
            <span key={w} className="leading-[1.15] h-[1.15em]">
              {renderWordWithBoldCO(w, variant)}
            </span>
          ))}
        </span>
      </span>
    </span>
  )
}
