# Metricas para fase de producto

Fecha del informe: 2026-05-07.

## Objetivo

Cuando el directorio exista como producto publico, medir si genera trafico util, confianza y demanda comercial, no solo sesiones.

## Metricas de adquisicion

- Impresiones organicas por pagina.
- Clicks organicos.
- CTR por query.
- Posicion promedio.
- Paginas indexadas.
- Queries nuevas por semana.
- Backlinks por ficha/categoria.

Fuente operativa sugerida:
- Google Search Console.

## Metricas de engagement

- Tiempo en ficha.
- Scroll depth 50/75/90.
- Clicks en filtros.
- Busquedas internas.
- Fichas vistas por sesion.
- Comparaciones iniciadas.
- Descargas/exportaciones si existen.
- Clicks a fuentes externas.

Interpretacion:
- Tiempo alto sin conversion puede indicar investigacion.
- Muchos filtros sin clicks pueden indicar mala taxonomia.
- Alta salida hacia fuentes puede ser positivo si el directorio se posiciona como curador confiable.

## Metricas de conversion

- Click a diagnostico AI-first.
- Click a agenda.
- Envio de formulario.
- Lead calificado.
- Reunion agendada.
- Oportunidad creada.
- Deal influenciado por ficha.

No medir solo "leads". Medir calidad:

- Cargo.
- Industria.
- Tamano de empresa.
- Presupuesto.
- Urgencia.
- Problema declarado.

## Metricas de calidad editorial

- Fichas publicadas.
- Fichas con score 75+.
- Fichas con al menos 1 Tier A.
- Fichas actualizadas en SLA.
- Fichas deprecadas.
- Claims corregidos.
- Fuentes rotas.
- Tiempo promedio desde draft a published.

## Metricas de contribucion

- Sugerencias recibidas.
- Sugerencias aceptadas.
- Correcciones recibidas.
- Correcciones aceptadas.
- Nuevas fuentes aportadas.
- Contribuciones por experto/industria.

## Metricas de confianza

- Porcentaje de fichas con version visible.
- Porcentaje de fichas con revisor.
- Porcentaje de fichas con riesgo/regulacion.
- Porcentaje de claims cuantitativos con URL/fecha.
- Numero de disclaimers por categoria.

## Metricas de producto

- Retencion de usuarios que vuelven al directorio.
- Fichas guardadas.
- Comparaciones completadas.
- Uso de filtros por industria/area/complejidad.
- Conversion desde categoria a ficha.
- Conversion desde ficha a oferta.
- Ratio ficha -> fuente externa -> retorno.

## Metricas comerciales

- Leads organicos atribuidos al directorio.
- Leads calificados por industria.
- Reuniones agendadas desde fichas.
- Propuestas enviadas influenciadas por el directorio.
- Revenue influenciado.
- Tiempo desde primera visita a reunion.

## Eventos recomendados

```text
directory_view
directory_filter_applied
use_case_card_click
use_case_source_click
use_case_cta_click
use_case_related_offer_click
use_case_feedback_submit
use_case_correction_submit
diagnostic_cta_click
calendar_click
lead_submit
```

## North Star Metric sugerida

Para fase inicial:

> Numero de conversaciones calificadas originadas o influenciadas por fichas con score editorial 75+.

Razon:
- Evita optimizar solo trafico.
- Conecta contenido con venta consultiva.
- Premia calidad editorial.

## Guardrails

- No crecer fichas publicadas si baja el porcentaje con fuentes Tier A/B.
- No optimizar CTR con titulos exagerados.
- No publicar categorias sin CTA relacionado.
- No usar rankings de proveedores sin politica de conflicto de interes.

## Fuentes

- Google helpful content, consultado 2026-05-07: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google Dataset structured data, consultado 2026-05-07: https://developers.google.com/search/docs/appearance/structured-data/dataset

