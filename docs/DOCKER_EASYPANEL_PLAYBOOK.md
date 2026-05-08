# Docker / EasyPanel Playbook

## Contexto

La web pública corre como app Astro SSR dentro de Docker en EasyPanel. El build usa el `Dockerfile` del root del repo.

El servidor de producción es Linux x64. Si el lockfile se genera en macOS/arm64, npm puede omitir entradas reales de dependencias opcionales nativas que solo existen para Linux. En Docker, eso se manifiesta como errores de módulos nativos faltantes durante `astro build`.

## Config base recomendada

Usar Debian slim, no Alpine:

```dockerfile
FROM node:20-bookworm-slim AS builder
...
FROM node:20-bookworm-slim
```

Evitar Alpine para este proyecto porque Tailwind, Rollup y Lightning CSS usan binarios nativos por plataforma. Alpine usa musl y aumenta el riesgo de fallos con optional dependencies.

Instalar con lockfile:

```dockerfile
RUN npm ci
```

## Error típico

Ejemplos vistos en EasyPanel:

```text
Cannot find module @rollup/rollup-linux-x64-gnu
Cannot find module '../lightningcss.linux-x64-gnu.node'
Cannot find module '@tailwindcss/oxide-linux-x64-gnu'
```

Todos apuntan al mismo problema: npm no instaló una dependencia opcional nativa requerida para Linux x64.

## Fix usado

Mantener estas dependencias opcionales en el `package.json` raíz:

```json
"optionalDependencies": {
  "@rollup/rollup-linux-x64-gnu": "4.60.3",
  "@tailwindcss/oxide-linux-x64-gnu": "4.2.2",
  "lightningcss-linux-x64-gnu": "1.32.0"
}
```

Después de editar:

```bash
npm install --package-lock-only --force
npm run build:web
git add package.json package-lock.json Dockerfile apps/web/Dockerfile
git commit -m "Pin Linux native optional packages for Docker"
git push origin main
```

`--force` es necesario cuando se actualiza el lockfile desde macOS para paquetes opcionales que declaran otra plataforma.

## Checklist si vuelve a fallar

1. Leer el primer `Cannot find module ...` en el log de EasyPanel.
2. Si el paquete termina en `linux-x64-gnu`, agregarlo a `optionalDependencies` raíz con la versión que ya referencia el lockfile.
3. Buscar la versión esperada:

```bash
rg -n '"nombre-del-paquete"' package-lock.json
```

4. Regenerar lockfile:

```bash
npm install --package-lock-only --force
```

5. Confirmar que existe una entrada real:

```bash
rg -n 'node_modules/nombre-del-paquete' package-lock.json
```

6. Correr:

```bash
npm run build:web
```

7. Commit + push a `main` para disparar EasyPanel.

## Señal de éxito

En EasyPanel debe verse:

```text
RUN REPO_ROOT=/app npm run build
...
[build] Complete!
...
### Success
```

## Notas

- No arreglar esto actualizando Docker en el servidor primero. El problema normalmente está en la combinación npm + optional dependencies + lockfile generado en otra plataforma.
- No volver a `node:20-alpine` salvo que haya una razón fuerte y se fijen los paquetes `linux-x64-musl` equivalentes.
- Mantener el `Dockerfile` raíz y `apps/web/Dockerfile` sincronizados.
