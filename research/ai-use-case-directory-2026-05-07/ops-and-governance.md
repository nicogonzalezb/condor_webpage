# Operacion y gobernanza

Fecha del informe: 2026-05-07.

## Principio operativo

El directorio debe operar como un producto editorial con control de calidad, no como contenido generado y publicado en masa.

## Roles

### Owner editorial

Responsable:
- Priorizar industrias y fichas.
- Aprobar tono y utilidad.
- Mantener coherencia con posicionamiento de Condor.

### Revisor tecnico

Responsable:
- Validar inputs, outputs, integraciones, datos y complejidad.
- Marcar supuestos tecnicos.

### Revisor de riesgo/regulacion

Responsable:
- Revisar fichas de salud, finanzas, empleo, educacion, credito, seguridad y datos sensibles.
- Marcar "requiere revision legal" cuando aplique.

### Contributor externo

Responsable:
- Sugerir fichas, fuentes o correcciones.
- No publica directamente.

## Flujo editorial

1. Propuesta de ficha.
2. Clasificacion industrial.
3. Busqueda de fuentes.
4. Redaccion estructurada.
5. Revision tecnica.
6. Revision de riesgo.
7. Rubrica de credibilidad.
8. Publicacion.
9. Monitoreo de feedback.
10. Actualizacion/versionado.

## Moderacion

Aceptar contribuciones si:

- Incluyen URL y fecha.
- Mejoran evidencia, precision o actualizacion.
- Declaran conflicto de interes.
- No son promocionales.

Rechazar contribuciones si:

- Son claims sin fuente.
- Buscan promocionar una herramienta.
- Incluyen datos sensibles.
- Recomiendan automatizar decisiones de alto impacto sin controles.

## Conflicto de interes

Politica minima:

- Si Condor implementa un caso de uso, eso debe declararse como oferta relacionada, no como evidencia.
- Si una herramienta paga por visibilidad, debe marcarse como patrocinio.
- Si una ficha menciona proveedor, debe explicar por que entra.
- Rankings comerciales deben evitarse en MVP.

## Versionado

Cada ficha debe tener:

- Version.
- Fecha de publicacion.
- Fecha de modificacion.
- Cambios principales.
- Autor/revisor.
- Fuentes agregadas/eliminadas.

Modelo recomendado:

```text
v1.0 - Publicacion inicial.
v1.1 - Se agrega fuente regulatoria.
v1.2 - Se actualiza KPI y riesgos.
v2.0 - Cambio sustancial de clasificacion o recomendacion.
```

## Cadencia de actualizacion

- Fichas de alto trafico: mensual.
- Fichas reguladas: trimestral o cuando cambie normativa.
- Fichas generales: semestral.
- Directorio completo: auditoria trimestral.

## Reglas de deprecacion

Marcar como `deprecated` si:

- La fuente principal desaparece o queda obsoleta.
- El caso de uso queda regulatoriamente desactualizado.
- Hay evidencia nueva que contradice la ficha.
- El caso se vuelve demasiado generico para ser util.

## Datos estructurados y SEO

Recomendado:

- Usar `Dataset` o `DataCatalog` cuando se publique el corpus como dataset.
- Usar `DefinedTerm` para taxonomias.
- Usar canonical URLs.
- Usar `dateModified`.
- Mantener sitemap.

Fuentes:
- Google Dataset structured data, consultado 2026-05-07: https://developers.google.com/search/docs/appearance/structured-data/dataset
- Schema.org Dataset, consultado 2026-05-07: https://schema.org/Dataset
- Schema.org DefinedTerm, consultado 2026-05-07: https://schema.org/DefinedTerm

## Riesgos operativos

- Deuda editorial por fichas sin actualizar.
- Riesgo legal por claims regulatorios incorrectos.
- Riesgo reputacional por fichas genericas.
- Riesgo comercial por sesgo hacia servicios de Condor.
- Riesgo SEO por contenido programatico sin utilidad.

## Guard editorial

Antes de publicar, responder:

1. Esta ficha ayuda a una persona real a decidir?
2. Tiene fuentes con URL y fecha?
3. Distingue evidencia, inferencia y opinion?
4. Declara riesgos?
5. Tiene KPI medible?
6. Evita prometer resultados?
7. Tiene fecha y version?

