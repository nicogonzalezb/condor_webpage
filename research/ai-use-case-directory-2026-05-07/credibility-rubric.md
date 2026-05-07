# Rubrica de credibilidad

Fecha del informe: 2026-05-07.

## Objetivo

Evitar que el directorio se convierta en contenido programatico superficial. La rubrica define como se valida una ficha antes de publicarla.

## Clasificacion de fuentes

### Tier A

Fuente primaria, oficial o institucional con responsabilidad directa sobre el dato.

Ejemplos:
- U.S. Census NAICS, 2022; consultado 2026-05-07: https://www.census.gov/naics/?r=prd-plgs
- NIST AI RMF 1.0, 2023-01-26; consultado 2026-05-07: https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10
- OECD AI Principles, 2019/2024; consultado 2026-05-07: https://www.oecd.org/en/topics/ai-principles.html
- EUR-Lex EU AI Act Regulation 2024/1689, 2024-07-12; consultado 2026-05-07: https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng
- FDA AI-enabled medical devices, consultado 2026-05-07: https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-enabled-medical-devices
- MITRE ATT&CK, consultado 2026-05-07: https://attack.mitre.org/
- NVD, consultado 2026-05-07: https://www.nist.gov/itl/nvd

Uso:
- Validar taxonomias, regulacion, riesgos, definiciones y registros.

### Tier B

Fuente secundaria, comercial, academica no normativa, comunidad o benchmark no regulatorio.

Ejemplos:
- Stanford AI Index 2025, consultado 2026-05-07: https://hai.stanford.edu/ai-index/2025-ai-index-report
- AI Incident Database, consultado 2026-05-07: https://incidentdatabase.ai/
- G2 AI Software, consultado 2026-05-07: https://www.g2.com/categories/artificial-intelligence
- Capterra AI Software, consultado 2026-05-07: https://www.capterra.com/artificial-intelligence-software/
- Papers with Code, consultado 2026-05-07: https://paperswithcode.com/
- Hugging Face Models, consultado 2026-05-07: https://huggingface.co/models

Uso:
- Contexto, discovery, ejemplos y senales de mercado.
- No validar claims regulatorios o cuantitativos sin respaldo adicional.

## Puntaje de ficha

Cada ficha recibe 0-100.

### Evidencia: 30 puntos

- 30: al menos 1 Tier A + 1 fuente independiente.
- 20: 2 fuentes Tier B independientes.
- 10: 1 fuente Tier B.
- 0: sin fuentes.

### Especificidad operativa: 20 puntos

- 20: actor, input, output, proceso y decision definidos.
- 10: actor/proceso definidos parcialmente.
- 0: descripcion generica.

### Riesgo y regulacion: 20 puntos

- 20: riesgos, controles y regulacion evaluados con fuentes.
- 10: riesgos listados sin fuente suficiente.
- 0: sin riesgos.

### KPIs y medicion: 15 puntos

- 15: KPI principal, baseline y ventana de medicion definidos.
- 8: KPI listado sin baseline.
- 0: sin KPI.

### Frescura y versionado: 10 puntos

- 10: fecha de publicacion, modificacion y version.
- 5: fecha parcial.
- 0: sin fecha.

### Neutralidad comercial: 5 puntos

- 5: separa evidencia de recomendacion de Condor.
- 0: mezcla claims comerciales con evidencia.

## Estados editoriales

- `draft`: ficha incompleta.
- `needs_sources`: faltan fuentes.
- `reviewed`: pasa rubrica interna.
- `published`: publica.
- `deprecated`: obsoleta o superada.
- `restricted`: no publicar por riesgo legal/regulatorio.

## Umbrales

- Publicacion normal: 75+.
- Publicacion con advertencia: 60-74.
- No publicar: <60.
- No publicar si hay claim cuantitativo sin URL y fecha.
- No publicar si afecta salud, empleo, credito o derechos fundamentales sin analisis regulatorio.

## Guard de claims

Cada claim debe tener:

- URL.
- Fecha de fuente o fecha de consulta.
- Tipo de fuente.
- Nota de uso.
- Limite de inferencia.

Ejemplo:

Claim permitido:
- "La FDA mantiene una lista de dispositivos medicos AI-enabled autorizados; consultado 2026-05-07: https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-enabled-medical-devices"

Claim no permitido:
- "La IA en salud siempre mejora diagnosticos."

## Incertidumbre

Se debe marcar explicitamente:

- `incierto`: cuando aplica regulacion segun contexto.
- `no verificado`: cuando hay ejemplo pero no evidencia independiente.
- `estimado`: cuando el dato es calculado internamente.
- `fuera de alcance`: cuando requiere validacion legal, clinica o financiera.

