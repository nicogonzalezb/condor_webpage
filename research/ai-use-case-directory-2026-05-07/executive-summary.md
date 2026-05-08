# Executive summary

Fecha del informe: 2026-05-07.

## Decision preliminar

Un directorio publico de casos de uso de IA por industria es viable si se trata como un **knowledge base validado**, no como una lista SEO de ideas. La oportunidad es posicionar a Condor como referencia en transformacion AI-first para empresas: datos, procesos, infraestructura, adopcion, riesgos y KPIs.

La tesis recomendada:

> Condor no publica "ideas de IA"; publica fichas verificables de casos de uso AI-first con industria, actor, inputs, outputs, riesgos, datos requeridos, regulacion, KPIs y evidencia citada.

## Por que puede funcionar

- Hay precedentes solidos de directorios/registries que ganan autoridad mediante taxonomias estrictas y datos estructurados: NAICS de U.S. Census (2022; consultado 2026-05-07), MITRE ATT&CK (consultado 2026-05-07), NVD/CVE (consultado 2026-05-07), ClinicalTrials.gov (consultado 2026-05-07), FDA AI-enabled devices (consultado 2026-05-07), CNCF Landscape (consultado 2026-05-07).
- Google documenta que los datasets y catalogos pueden describirse con `Dataset`, `DataCatalog` y `DataDownload` structured data (Google Search Central, consultado 2026-05-07).
- Google tambien advierte que el contenido debe ser util para personas y no creado principalmente para manipular rankings (Google Search Central, consultado 2026-05-07). Este punto es critico: un directorio programatico sin evidencia puede ser un riesgo SEO.
- Marcos como NIST AI RMF 1.0 (2023-01-26; consultado 2026-05-07), OECD AI Principles (2019, actualizados 2024; consultado 2026-05-07) y EU AI Act Regulation 2024/1689 (2024-07-12; consultado 2026-05-07) permiten crear una rubrica de riesgo y confianza.

## Riesgo principal

El riesgo principal no es tecnico. Es de **credibilidad**. Si las fichas parecen generadas en masa, sin evidencia, fechas, versionado ni criterio de inclusion, el activo puede posicionarse como contenido superficial. Esto danaria la marca, especialmente si Condor quiere vender implementaciones caras.

## Recomendacion de alcance inicial

No iniciar con todos los sectores. Iniciar con 5 industrias y 4 areas funcionales:

- Industrias: servicios profesionales, retail/e-commerce, salud, manufactura/logistica, servicios financieros.
- Areas: ventas, marketing, operaciones, servicio al cliente.
- Volumen inicial: 25 a 40 fichas, no mas.
- Cada ficha debe tener al menos 2 fuentes: una Tier A o dos Tier B independientes.

## Resultado esperado del MVP editorial

El primer producto no debe ser "un directorio bonito". Debe ser un corpus navegable que permita responder:

1. Que caso de uso aplica a mi industria.
2. Que datos necesito.
3. Que infraestructura necesito.
4. Que riesgos debo gestionar.
5. Como se mide si funciono.
6. Que tan complejo es implementarlo.
7. Que evidencia existe.
8. Cuando tiene sentido hablar con Condor.

## Research score

Definicion usada:

`research_score = fuentes_tier_a*3 + fuentes_tier_b*1 + documentos_entregables*5 + iteraciones_completadas*4 - riesgos_abiertos*2`

Resultado final:

- Fuentes Tier A usadas: 26.
- Fuentes Tier B usadas: 13.
- Documentos entregables: 8.
- Iteraciones completadas: 8.
- Riesgos abiertos: 7.
- Score final: 149.

El score es una metrica interna de cobertura, no una garantia de verdad. Sirve para comparar iteraciones y detectar huecos.

## Log de 8 iteraciones

### Iteracion 1

Consultas:
- official NAICS 2022 manual industries census.gov
- NIST AI Risk Management Framework 1.0 January 2023
- EU AI Act Regulation 2024/1689 Annex III official
- OECD AI Principles 2019 updated 2024

Fuentes nuevas:
- U.S. Census NAICS, NIST AI RMF, OECD AI Principles, EUR-Lex EU AI Act.

Actualizaciones:
- Base de taxonomia industrial, riesgos y regulacion.

Score: 24. Delta: +24.

Riesgo de sesgo:
- Sesgo regulatorio US/EU; falta LATAM.

### Iteracion 2

Consultas:
- FDA artificial intelligence machine learning enabled medical devices list official
- ClinicalTrials.gov official registry database
- MITRE ATT&CK official knowledge base tactics techniques
- NVD National Vulnerability Database official NIST vulnerabilities registry

Fuentes nuevas:
- FDA AI-enabled devices, ClinicalTrials.gov, MITRE ATT&CK, NVD.

Actualizaciones:
- Benchmark de registries tecnicos/regulatorios.

Score: 43. Delta: +19.

Riesgo de sesgo:
- Sectores salud y ciberseguridad tienen mejor documentacion publica que industrias generales.

### Iteracion 3

Consultas:
- CVE program official identifiers cybersecurity vulnerabilities
- CNCF Landscape official cloud native interactive landscape
- schema.org Dataset DataCatalog documentation
- Google Search Central Dataset structured data

Fuentes nuevas:
- CVE, CNCF Landscape, Schema.org, Google Dataset structured data.

Actualizaciones:
- Modelo de datos y SEO tecnico para directorio.

Score: 62. Delta: +19.

Riesgo de sesgo:
- Los landscapes tecnicos pueden privilegiar cantidad de entradas sobre profundidad.

### Iteracion 4

Consultas:
- OECD AI Incidents Monitor official database
- AI Incident Database official about incident database
- Stanford AI Index 2025 AI adoption industry
- Google helpful reliable people first content

Fuentes nuevas:
- OECD AIM, AI Incident Database, Stanford AI Index, Google helpful content.

Actualizaciones:
- Rubrica de credibilidad y advertencias SEO.

Score: 77. Delta: +15.

Riesgo de sesgo:
- Bases de incidentes dependen de cobertura mediatica y pueden sobre-representar casos notorios.

### Iteracion 5

Consultas:
- G2 artificial intelligence software directory
- Capterra artificial intelligence software directory
- Product Hunt artificial intelligence products
- Hugging Face models registry metadata

Fuentes nuevas:
- G2, Capterra, Product Hunt, Hugging Face.

Actualizaciones:
- Competitive landscape: directorios comerciales y registries de modelos.

Score: 91. Delta: +14.

Riesgo de sesgo:
- Directorios comerciales mezclan informacion editorial con incentivos de pago, reviews y afiliacion.

### Iteracion 6

Consultas:
- Papers with Code machine learning benchmarks datasets tasks
- MLCommons benchmarks official
- Kaggle datasets catalog
- data catalog governance metadata versioning best practices official

Fuentes nuevas:
- Papers with Code, MLCommons, Kaggle.

Actualizaciones:
- Comparacion con benchmarks tecnicos y catalogos de datasets.

Score: 103. Delta: +12.

Riesgo de sesgo:
- Benchmarks tecnicos no prueban viabilidad de negocio ni adopcion organizacional.

### Iteracion 7

Consultas:
- AI use cases by industry enterprise official examples
- NIST generative AI profile July 2024
- OECD common reporting framework AI incidents
- EU AI Act high risk systems Annex III employment credit health

Fuentes nuevas:
- NIST GenAI Profile, OECD risks/incidents pages, EU AI Act Annex III.

Actualizaciones:
- Plantilla de ficha, riesgos, regulacion y criterios de exclusion.

Score: 131. Delta: +28.

Riesgo de sesgo:
- "Caso de uso" sigue siendo un concepto ambiguo; se debe definir atomicamente.

### Iteracion 8

Consultas:
- public registry governance conflict of interest update policy
- evidence rubric public directory expert review
- schema.org DefinedTerm taxonomy
- Google sitemap dataset canonical sameAs structured data

Fuentes nuevas:
- Schema.org DefinedTerm, Google Search Central dataset guidelines.

Actualizaciones:
- Gobernanza, versionado, moderacion, metricas de producto.

Score: 149. Delta: +18.

Riesgo de sesgo:
- Falta validacion con usuarios reales: compradores B2B, lideres de data, operadores de industria.

## Incertidumbres abiertas

- No se valido volumen de busqueda ni dificultad SEO por keyword. Requiere Search Console/Keyword Planner/Ahrefs/Semrush cuando exista dominio y seed list.
- No se verifico demanda en LATAM por industria; la mayoria de fuentes primarias son US/EU/OECD.
- No se definio aun si el directorio debe permitir contribuciones externas desde el MVP.
- No se definio si Condor publicara fichas con marcas/proveedores especificos o solo casos de uso neutrales.
- No se valido legalmente el uso de informacion de terceros en fichas resumidas.

## Estructura de carpeta sugerida

```text
research/ai-use-case-directory-2026-05-07/
  executive-summary.md
  problem-and-audience.md
  taxonomy-industries.md
  taxonomy-use-cases.md
  credibility-rubric.md
  competitive-landscape.md
  ops-and-governance.md
  metrics-for-product-phase.md
  bibliography.tsv
```
