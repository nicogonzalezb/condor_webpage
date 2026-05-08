# Competitive landscape

Fecha del informe: 2026-05-07.

## Tipos de directorios comparados

### 1. Registries regulatorios

Ejemplos:
- FDA AI-enabled medical devices, consultado 2026-05-07: https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-enabled-medical-devices
- ClinicalTrials.gov, consultado 2026-05-07: https://clinicaltrials.gov/

Que copiar:
- Identificadores estables.
- Estados.
- Fechas.
- Sponsors/organizaciones.
- Categoria regulatoria.
- Historial y resultados cuando existan.

Que evitar:
- UX pesada.
- Lenguaje demasiado institucional para compradores no expertos.

Aplicacion a Condor:
- Usar estructura y trazabilidad, pero con lenguaje ejecutivo.

### 2. Knowledge bases tecnicos

Ejemplos:
- MITRE ATT&CK, consultado 2026-05-07: https://attack.mitre.org/
- NVD, consultado 2026-05-07: https://www.nist.gov/itl/nvd
- CVE, consultado 2026-05-07: https://www.cve.org/

Que copiar:
- Taxonomia fuerte.
- Fichas atomicas.
- IDs.
- Relaciones entre entidades.
- Referencias externas.
- Campos tecnicos separados de narrativa.

Que evitar:
- Complejidad innecesaria desde el MVP.
- Dependencia de enriquecimiento manual sin priorizacion.

Aplicacion a Condor:
- Cada caso de uso debe tener ID, relaciones, riesgos, fuentes y version.

### 3. Landscapes de proveedores/productos

Ejemplos:
- CNCF Landscape, consultado 2026-05-07: https://landscape.cncf.io/
- CNCF Landscape repo, consultado 2026-05-07: https://github.com/cncf/landscape

Que copiar:
- Categorias visuales.
- Filtros.
- Metadata publica.
- Mantenimiento en repositorio.
- Separacion entre categorias y fichas.

Que evitar:
- Convertirse en mapa enorme poco accionable.
- Confundir productos con casos de uso.

Aplicacion a Condor:
- El directorio debe priorizar decision e implementacion, no logos.

### 4. Marketplaces y review sites

Ejemplos:
- G2 AI Software, consultado 2026-05-07: https://www.g2.com/categories/artificial-intelligence
- Capterra AI Software, consultado 2026-05-07: https://www.capterra.com/artificial-intelligence-software/
- Product Hunt AI, consultado 2026-05-07: https://www.producthunt.com/topics/artificial-intelligence

Que copiar:
- Filtros faciles.
- Comparaciones.
- CTA por categoria.
- Paginas indexables por categoria.

Que evitar:
- Sesgo de reviews/patrocinio.
- Ranking opaco.
- Mezclar editorial con monetizacion sin disclosure.

Aplicacion a Condor:
- Si se incluyen herramientas/proveedores, debe haber politica de conflicto de interes.

### 5. Registries tecnicos de modelos/datasets

Ejemplos:
- Hugging Face Models, consultado 2026-05-07: https://huggingface.co/models
- Kaggle Datasets, consultado 2026-05-07: https://www.kaggle.com/datasets
- Papers with Code, consultado 2026-05-07: https://paperswithcode.com/
- MLCommons, consultado 2026-05-07: https://mlcommons.org/

Que copiar:
- Tags.
- Licencias.
- Tareas.
- Benchmarks.
- Metadata tecnica.
- Contribuciones de comunidad.

Que evitar:
- Suponer que performance tecnica = valor de negocio.
- Usar datasets/modelos sin evaluar licencia, privacidad y fit empresarial.

Aplicacion a Condor:
- Los casos de uso deben incluir datos requeridos y metricas de negocio, no solo tecnica.

### 6. Bases de incidentes y riesgos

Ejemplos:
- OECD AI Incidents and Hazards Monitor, consultado 2026-05-07: https://oecd.ai/en/incidents/
- AI Incident Database, consultado 2026-05-07: https://incidentdatabase.ai/

Que copiar:
- Clasificacion de incidentes.
- Evidencia por evento.
- Contexto de dano.
- Reconocimiento de incertidumbre.

Que evitar:
- Sesgo hacia incidentes con cobertura mediatica.
- Extrapolar de un incidente a toda una industria.

Aplicacion a Condor:
- Incluir riesgos y fallas tipicas por caso de uso.

## Posicion competitivo recomendado

No competir como:

- "El mejor blog de IA".
- "El mayor listado de herramientas".
- "La Wikipedia de IA".

Competir como:

> El directorio de casos de uso AI-first para empresas, con enfoque en datos, implementacion, riesgos y KPIs.

## Que copiar de Ospi sin copiar el producto

Patron observable:
- Directorios con intencion SEO especifica.
- Paginas por entidad.
- Paginas por ciudad/categoria.
- Interlinking.
- Activo publico que ademas genera autoridad para charlas/consultoria.

Adaptacion para Condor:
- En lugar de eventos de IA, construir casos de uso por industria.
- En lugar de trafico amplio de comunidad, capturar trafico con intencion de implementacion.
- En lugar de solo visibilidad, conectar cada ficha con diagnostico AI-first.

Incertidumbre:
- No se valido con herramientas SEO el volumen exacto de busquedas. Requiere fase posterior.

