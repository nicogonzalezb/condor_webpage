import fs from 'node:fs'
import path from 'node:path'

function repoRoot() {
  return process.env.REPO_ROOT || path.resolve(process.cwd(), '..', '..')
}

export function getCalendarUrl() {
  const fromEnv = import.meta.env.PUBLIC_CALENDAR_URL
  if (fromEnv) return fromEnv

  try {
    const p = path.join(repoRoot(), 'brand', 'link_google.txt')
    const raw = fs.readFileSync(p, 'utf8').trim()
    if (raw) return raw
  } catch {
    // ignore
  }

  return 'https://calendar.app.google/wxsgVcMGc2xRaZma6'
}
