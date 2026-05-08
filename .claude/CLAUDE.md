# Condor Web Project Notes

## Docker / EasyPanel deploys

When debugging EasyPanel Docker deploys for this repo, read:

@docs/DOCKER_EASYPANEL_PLAYBOOK.md

Important default:
- The production Docker image should use `node:20-bookworm-slim`, not Alpine.
- Keep `Dockerfile` and `apps/web/Dockerfile` synchronized.
- If EasyPanel logs show missing native packages such as Rollup, Lightning CSS, or Tailwind Oxide Linux bindings, follow the playbook before changing application code.
