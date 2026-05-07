# Taxonomia de industrias

Fecha del informe: 2026-05-07.

## Recomendacion

Usar NAICS como columna vertebral inicial, con una capa editorial adaptada a LATAM.

Fuente primaria:
- U.S. Census Bureau, NAICS, 2022; consultado 2026-05-07: https://www.census.gov/naics/?r=prd-plgs

Razon:
- NAICS es una taxonomia industrial oficial usada para clasificar establecimientos empresariales en estadisticas economicas.
- Permite evitar categorias inventadas sin consistencia.
- Permite mapear industria > subsector > grupo > industria.

Limitacion:
- NAICS es norteamericana. Para LATAM puede requerir equivalencias con CIIU/ISIC. Esta equivalencia no se valido en esta fase.

## Modelo recomendado

Cada industria del directorio debe tener:

- `industry_id`: identificador interno.
- `naics_code`: codigo NAICS cuando aplique.
- `naics_label`: nombre oficial.
- `latam_label`: nombre editorial para usuarios.
- `sector`: categoria macro.
- `included_businesses`: que tipos de empresas entran.
- `excluded_businesses`: que queda fuera.
- `regulated`: si tiene regulacion fuerte.
- `data_maturity_notes`: notas sobre disponibilidad usual de datos.
- `priority`: alta, media, baja.
- `source_url`: fuente.
- `source_date`: fecha de fuente o fecha de consulta.

## Industrias iniciales sugeridas

### Servicios profesionales

Motivo:
- Buen encaje para Condor: procesos de conocimiento, ventas consultivas, datos comerciales, automatizacion documental.

Casos de uso probables:
- Calificacion de leads.
- Generacion asistida de propuestas.
- Analisis de pipeline.
- Busqueda semantica en documentos.
- Automatizacion de reporting.

Criterio de inclusion:
- Empresas cuyo valor depende de conocimiento experto, documentos, propuestas, CRM y relacion comercial.

Riesgos:
- Confidencialidad de clientes.
- Calidad de datos CRM.
- Alucinaciones en documentos.

### Retail y e-commerce

Motivo:
- Datos transaccionales, catalogo, inventario, atencion y marketing medible.

Casos de uso probables:
- Recomendaciones.
- Segmentacion.
- Forecast de demanda.
- Atencion automatizada.
- Pricing y promociones.

Riesgos:
- Sesgos de recomendacion.
- Privacidad.
- Integracion con inventario/ERP.

### Salud

Motivo:
- Alto potencial y alto riesgo. Existen fuentes regulatorias fuertes como FDA AI-enabled devices, consultado 2026-05-07: https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-enabled-medical-devices

Casos de uso probables:
- Triaje administrativo.
- Documentacion clinica.
- Deteccion en imagenes.
- Codificacion/facturacion.
- Gestion de citas.

Riesgos:
- Regulacion sanitaria.
- Datos sensibles.
- Decision clinica.
- Validacion prospectiva.

Criterio:
- Diferenciar fichas administrativas de fichas clinicas. Las clinicas requieren estandar de evidencia mucho mayor.

### Manufactura y logistica

Motivo:
- Casos de uso con datos operativos, sensores, inventario, rutas y mantenimiento.

Casos de uso probables:
- Mantenimiento predictivo.
- Forecast de demanda.
- Optimizacion de rutas.
- Control de calidad visual.
- Planeacion de inventario.

Riesgos:
- Calidad de sensores.
- Integracion OT/IT.
- Seguridad operacional.
- Costos de infraestructura.

### Servicios financieros

Motivo:
- Alta intensidad de datos y regulacion; buenos casos para riesgo, fraude, automatizacion y servicio.

Casos de uso probables:
- Deteccion de fraude.
- Scoring de riesgo.
- Atencion automatizada.
- Monitoreo de cumplimiento.
- Analisis documental.

Riesgos:
- Explicabilidad.
- Discriminacion.
- Regulacion financiera.
- Auditoria.

Referencia regulatoria transversal:
- EU AI Act Regulation 2024/1689, 2024-07-12; consultado 2026-05-07: https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng

## Criterios de inclusion de industrias

Una industria entra al directorio si cumple al menos 3 de 5:

1. Tiene procesos repetibles con datos digitales.
2. Tiene dolor operacional reconocible.
3. Tiene decision-makers con presupuesto.
4. Tiene fuentes publicas suficientes para validar casos.
5. Tiene conexion clara con una oferta de Condor.

## Criterios de exclusion

Excluir o posponer industrias cuando:

- No hay fuentes verificables.
- La mayoria de casos son altamente regulados y requieren validacion especializada.
- La industria atrae mucho trafico pero baja intencion comercial para Condor.
- La ficha dependeria de claims especulativos.

## Pendiente

- Validar mapeo NAICS -> CIIU/ISIC para Colombia/LATAM.
- Validar volumen SEO por industria y pais.
- Definir si "sector publico" entra como industria o como audiencia separada.

