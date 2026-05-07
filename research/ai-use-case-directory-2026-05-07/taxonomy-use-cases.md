# Taxonomia de casos de uso

Fecha del informe: 2026-05-07.

## Definicion operativa

Un caso de uso de IA es una aplicacion concreta donde un actor usa datos, modelos y procesos para producir un output que cambia una decision, tarea o flujo operativo.

No cuenta como caso de uso:

- "Usar ChatGPT en marketing" sin proceso.
- "Automatizar ventas" sin actor, input, output y KPI.
- "IA para retail" sin tarea especifica.
- "Mejorar productividad" sin metrica.

## Plantilla por ficha

### Identidad

- `use_case_id`: identificador estable.
- `title`: nombre claro.
- `slug`: URL.
- `summary`: descripcion en 50-120 palabras.
- `status`: draft, reviewed, published, deprecated.
- `version`: semver o fecha-version.
- `date_published`.
- `date_modified`.

### Clasificacion

- `industry`: industria principal.
- `industry_code`: NAICS/CIIU si aplica.
- `functional_area`: ventas, marketing, operaciones, finanzas, servicio, legal, talento, tecnologia.
- `process`: proceso especifico.
- `maturity_level`: basico, intermedio, avanzado.
- `ai_type`: predictivo, generativo, recomendacion, clasificacion, vision, NLP, agentes, optimizacion.

### Actor

- `primary_actor`: quien usa el output.
- `secondary_actors`: quienes proveen datos o son afectados.
- `decision_owner`: quien aprueba o toma la decision.
- `affected_people`: clientes, empleados, pacientes, usuarios, proveedores.

### Input

- `data_inputs`: datos necesarios.
- `data_sources`: CRM, ERP, ecommerce, helpdesk, documentos, sensores, data warehouse.
- `data_quality_requirements`: completitud, frescura, granularidad, historico minimo.
- `sensitive_data`: si/no y tipo.
- `integration_requirements`: APIs, ETL, warehouse, BI, canales.

### Output

- `ai_output`: prediccion, recomendacion, texto, alerta, clasificacion, decision assistida.
- `human_action`: que hace una persona con el output.
- `automation_level`: asistido, semi-automatico, automatico con excepciones, automatico.
- `failure_mode`: que pasa si se equivoca.

### Riesgos

Basarse en NIST AI RMF 1.0 (2023-01-26; consultado 2026-05-07): https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10

- `risk_category`: privacidad, seguridad, sesgo, explicabilidad, robustez, legal, operacional, reputacional.
- `risk_level`: bajo, medio, alto.
- `risk_rationale`: por que.
- `mitigations`: controles.
- `human_review_required`: si/no.
- `monitoring_required`: si/no.

### Regulacion

- `regulatory_domains`: salud, finanzas, empleo, educacion, consumo, datos personales.
- `eu_ai_act_relevance`: no aplica, posible high-risk, high-risk, prohibido, incierto.
- `regulatory_notes`: notas con fuentes.

Referencia:
- EU AI Act Regulation 2024/1689, 2024-07-12; consultado 2026-05-07: https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng

### KPIs

- `primary_kpi`: metrica principal.
- `secondary_kpis`: metricas secundarias.
- `baseline_needed`: que baseline se requiere antes.
- `measurement_window`: periodo minimo.
- `success_threshold`: umbral sugerido si hay evidencia; si no, marcar "por definir".

### Evidencia

- `example_cited`: ejemplo con URL.
- `source_tier`: Tier A o Tier B.
- `source_date`: fecha de publicacion o consulta.
- `evidence_strength`: alta, media, baja.
- `claim_limits`: que NO se puede inferir de la fuente.

### Comercial

- `condor_offer`: diagnostico AI-first, implementacion 6 semanas, data foundation, agentes, analytics, training.
- `implementation_complexity`: baja, media, alta.
- `estimated_timeline`: rango, no promesa cerrada.
- `budget_band`: opcional; si se usa, debe ser conservador.
- `cta`: siguiente paso.

## Ejemplo de ficha resumida

Titulo:
- Calificacion de leads B2B con IA.

Industria:
- Servicios profesionales.

Actor:
- VP comercial o sales operations.

Input:
- CRM, historial de oportunidades, fuente de lead, interacciones, industria, tamano de empresa.

Output:
- Score y razonamiento de prioridad para seguimiento.

Riesgos:
- Sesgo por historico comercial incompleto.
- Automatizar decisiones sin revision humana.
- Datos CRM desactualizados.

KPIs:
- Tiempo de respuesta a leads.
- Conversion de lead a oportunidad.
- Precision del score frente a resultado real.
- Productividad comercial.

Regulacion:
- Posible privacidad/datos personales; regulacion especifica depende de jurisdiccion.

Evidencia:
- Requiere fuentes especificas por implementacion. No afirmar uplift sin caso citado.

## Niveles de evidencia

Alta:
- Registro oficial, regulador, paper revisado, benchmark reconocido o documentacion primaria.

Media:
- Caso de proveedor con datos concretos, reporte academico/industrial reconocido, whitepaper metodologico.

Baja:
- Blog, opinion, claim comercial sin metodologia, anecdota.

## Campos obligatorios para publicar

- Titulo.
- Industria.
- Actor.
- Input.
- Output.
- Riesgos.
- KPI.
- Fuente con URL.
- Fecha.
- Nivel de confianza.

## Campos que bloquean publicacion si faltan

- Fuente para cualquier claim cuantitativo.
- Riesgo cuando hay datos sensibles o decisiones sobre personas.
- Fecha de actualizacion.
- Distincion entre evidencia y recomendacion editorial.

