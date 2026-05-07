# Sistema de tráfico — Condór

## Objetivo

Construir una arquitectura que permita publicar, medir y mejorar tráfico orgánico sin rediseñar la web cada vez que cambie el copy.

El sistema debe vender una tesis clara:

> Condór implementa IA aplicada a marketing, ventas y operaciones comerciales para empresas B2B en LATAM.

Evolución de posicionamiento:

> Condór transforma empresas B2B en organizaciones AI-first: datos, procesos, infraestructura, automatización, adopción y criterio ejecutivo.

## Principios

- La home no es el sistema de tráfico. La home es la puerta principal de confianza.
- Cada página debe responder una intención de búsqueda específica.
- Las páginas SEO deben conectar con una oferta clara, no solo informar.
- Medimos primero adquisición y conversión; después optimizamos contenido.
- La autoridad personal de Nicolás debe transferirse a Condór.
- Nicolás es la cara de criterio y autoridad; Condór es la capacidad institucional que implementa.
- Los directorios deben ser activos útiles para el mercado, no páginas creadas solo para capturar keywords.

## Posicionamiento

### Marca personal

Nicolás debe perfilarse como data scientist aplicado a transformación empresarial con IA.

Rol público:
- Explica cómo pensar con datos e IA.
- Traduce tecnología a decisiones de negocio.
- Muestra criterio sobre cuándo implementar IA y cuándo arreglar procesos/datos primero.
- Publica aprendizajes de implementación, adopción y arquitectura.

Promesa personal:

> Ayudo a líderes B2B a convertir datos, procesos e IA en sistemas que cambian cómo trabaja la empresa.

### Marca empresa

Condór no debe depender de Nicolás para vender cada proyecto.

Rol institucional:
- Diagnostica madurez AI-first.
- Diseña arquitectura de datos, automatización y agentes.
- Implementa sistemas en ciclos de 6 semanas.
- Capacita equipos para operar lo construido.
- Mide adopción e impacto.

Promesa de Condór:

> Convertimos empresas B2B en organizaciones AI-first con datos, infraestructura, agentes y adopción operativa.

### Relación Nico + Condór

Modelo recomendado:
- Nicolás atrae confianza, opinión y conversación.
- Condór captura demanda, estructura ofertas y entrega proyectos.
- El contenido personal alimenta páginas de autoridad de Condór.
- Los casos y directorios hacen que Condór sea más grande que una persona.

Frase interna:

> Nico abre puertas. Condór instala capacidades.

## Medición mínima

### Herramientas base

1. Google Search Console
   - Medir impresiones, queries, CTR, posición media e indexación.
   - Revisar semanalmente páginas con muchas impresiones y bajo CTR.

2. Google Analytics 4
   - Activar con `PUBLIC_GA_MEASUREMENT_ID`.
   - Medir sesiones, fuente/medio, páginas de entrada y conversiones.

3. Google Sheets o CRM simple
   - Registrar leads con fecha, fuente, landing, presupuesto, problema y estado.

### Eventos clave

Fase 1:
- Visita a página de oferta.
- Click en agenda.
- Envío de formulario.

Fase 2:
- Scroll 75%.
- Click en caso de éxito.
- Click desde artículo hacia oferta.
- Lead calificado.

### KPIs semanales

- Impresiones orgánicas.
- Clicks orgánicos.
- CTR orgánico.
- Páginas indexadas.
- Top 10 queries por impresiones.
- Leads desde orgánico.
- Clicks a agenda.
- Conversaciones calificadas.

## Arquitectura de páginas

### 1. Home

Función:
- Explicar posicionamiento.
- Construir confianza rápida.
- Llevar a oferta, casos y agenda.

URL:
- `/`

Intención:
- Tráfico de marca y referidos desde LinkedIn.

### 2. Oferta principal

Función:
- Convertir intención comercial.
- Explicar el paquete premium de 6 semanas.

URL sugerida:
- `/implementacion-ia-marketing-ventas`

Promesa:
- Implementación de IA para marketing y ventas en 6 semanas.

Debe incluir:
- Para quién es.
- Problemas que resuelve.
- Qué incluye.
- Metodología por semanas.
- Entregables.
- Rango de inversión o criterio de calificación.
- Casos relacionados.
- CTA a agenda.

### 3. Soluciones

Función:
- Capturar búsquedas por capacidad.
- Ordenar el menú de servicios.

URLs actuales:
- `/soluciones/chat-agents`
- `/soluciones/data-ml`
- `/soluciones/gobernanza-consultoria`
- `/soluciones/software-a-medida`

Evolución:
- Convertir cada solución en una página orientada a intención, no solo a descripción.
- Agregar FAQs, casos, objeciones y CTA específico.

### 4. Casos

Función:
- Convertir autoridad en confianza.

URL:
- `/casos/[slug]`

Estructura mínima:
- Contexto.
- Problema.
- Qué hicimos.
- Resultado.
- Qué aprendimos.
- Qué haríamos distinto.
- CTA hacia oferta relacionada.

### 5. SEO editorial

Función:
- Capturar demanda informativa y moverla hacia oferta.

URL sugerida:
- `/recursos/[slug]`

Tipos de contenido:
- Guías.
- Comparativos.
- Playbooks.
- Casos de uso.
- Opinión técnica.

Cada recurso debe tener:
- Query objetivo.
- Intención.
- Oferta relacionada.
- CTA interno.
- Fecha de actualización.

### 6. SEO programático controlado

Función:
- Capturar búsquedas repetibles sin publicar páginas vacías.

Tipos:
- Consultor IA por ciudad.
- IA por área funcional.
- Automatización por proceso.
- Agentes IA por industria.

Ejemplos iniciales:
- `/consultor-ia-empresas-colombia`
- `/consultor-ia-marketing`
- `/automatizacion-ia-ventas`
- `/agentes-ia-para-empresas`
- `/ia-para-equipos-comerciales`

No publicar páginas programáticas si no tienen:
- Diferencia real en intención.
- Ejemplos concretos.
- CTA relevante.
- Interlinking con oferta y casos.

### 7. Directorios

Función:
- Ganar tráfico orgánico con activos de utilidad pública.
- Construir autoridad de entidad en IA, data science y transformación empresarial.
- Generar oportunidades de alianzas, charlas, leads y backlinks.

Los directorios funcionan cuando tienen:
- Datos estructurados.
- Páginas por entidad.
- Páginas por categoría/ciudad/industria.
- Actualización frecuente.
- Schema markup.
- Captura de correo o agenda.
- Curaduría humana.

Directorios recomendados para Condór:

1. Directorio de herramientas de IA para empresas en LATAM
   - URL base: `/directorio/herramientas-ia`
   - Páginas: herramienta, categoría, caso de uso, área funcional.
   - Monetización futura: afiliados, patrocinios, reportes, workshops.

2. Directorio de casos de uso de IA por industria
   - URL base: `/directorio/casos-uso-ia`
   - Páginas: industria, área, proceso, nivel de complejidad.
   - Conecta directo con consultoría e implementación.

3. Directorio de eventos y comunidades de IA/data en Colombia
   - URL base: `/directorio/eventos-ia-colombia`
   - Páginas: evento, comunidad, ciudad.
   - Útil para autoridad, networking, charlas y backlinks.

4. Directorio de prompts, workflows y automatizaciones empresariales
   - URL base: `/directorio/workflows-ia`
   - Páginas: área funcional, herramienta, objetivo.
   - Debe enfocarse en procesos reales, no en prompts genéricos.

5. Directorio de proveedores y talento AI-first en LATAM
   - URL base: `/directorio/ecosistema-ai-latam`
   - Páginas: empresa, consultor, comunidad, ciudad, especialidad.
   - Requiere curaduría fuerte para no competir contra el posicionamiento de Condór.

Directorio inicial recomendado:

> Casos de uso de IA por industria.

Razón:
- Es el más conectado con venta enterprise.
- Refuerza a Nicolás como data scientist aplicado.
- Permite hablar de datos, infraestructura, procesos y ROI.
- Genera páginas de intención comercial sin depender de noticias/eventos.

Estructura sugerida:
- `/directorio/casos-uso-ia`
- `/directorio/casos-uso-ia/ventas`
- `/directorio/casos-uso-ia/marketing`
- `/directorio/casos-uso-ia/servicios-profesionales`
- `/directorio/casos-uso-ia/retail`
- `/directorio/casos-uso-ia/salud`
- `/directorio/casos-uso-ia/logistica`
- `/directorio/casos-uso-ia/[caso]`

Campos mínimos por caso de uso:
- Título.
- Industria.
- Área funcional.
- Proceso.
- Problema.
- Cómo ayuda la IA.
- Datos necesarios.
- Integraciones necesarias.
- Nivel de madurez requerido.
- Complejidad.
- Riesgo.
- Métrica de éxito.
- Ejemplo de implementación.
- Oferta relacionada.

CTA recomendado:

> Evalúa qué casos de uso tienen sentido para tu empresa.

## Taxonomía editorial

### Pilares

1. IA para marketing
2. IA para ventas
3. Agentes y automatización
4. Data y analítica comercial
5. Implementación y adopción
6. Opinión y criterio sobre IA
7. Madurez AI-first
8. Infraestructura y gobierno de datos

### Audiencias

- Founders B2B.
- Gerentes comerciales.
- Heads de marketing.
- Equipos de operaciones.
- Empresas de servicios profesionales.
- C-levels y juntas directivas.
- Líderes de transformación digital.
- Líderes de data/BI.

### Intenciones

- Aprender: "qué es", "cómo funciona".
- Comparar: "mejores herramientas", "consultor vs agencia".
- Implementar: "cómo implementar", "automatizar".
- Comprar: "consultor IA", "empresa IA", "agencia IA".

## Interlinking

Cada página debe enlazar hacia:
- Una oferta.
- Un caso relacionado.
- Un recurso de autoridad.
- Agenda o contacto.

Regla:
- Ninguna página SEO debe quedar como calle sin salida.

## Roadmap de implementación

### Semana 1

- Activar GA4 con `PUBLIC_GA_MEASUREMENT_ID`.
- Conectar Search Console.
- Crear página de oferta principal.
- Definir 10 URLs iniciales.
- Crear hoja/CRM de leads.
- Definir el primer directorio y su modelo de datos.

### Semana 2

- Publicar 3 páginas SEO comerciales.
- Reestructurar 2 casos con formato de conversión.
- Agregar CTAs internos desde soluciones.
- Crear template del directorio inicial.

### Semana 3

- Publicar 3 recursos informativos.
- Revisar primeras impresiones en Search Console.
- Ajustar títulos/meta descriptions según CTR.
- Publicar 10-20 entradas del directorio inicial con QA manual.

### Semana 4

- Publicar 4 páginas SEO adicionales.
- Crear dashboard simple de tráfico/leads.
- Priorizar nuevas páginas según queries reales.
- Agregar schema, sitemap segmentado e interlinking del directorio.

## Backlog inicial de contenidos

### Comerciales

- Consultor de inteligencia artificial para empresas en Colombia.
- Implementación de IA para marketing y ventas.
- Automatización de ventas con IA.
- Agentes de IA para atención comercial.
- IA para equipos comerciales B2B.
- Transformación AI-first para empresas.
- Consultor data scientist para empresas.
- Estrategia de datos e IA para empresas B2B.

### Informativos

- Cómo saber si tu empresa está lista para implementar IA.
- Qué procesos de ventas se pueden automatizar con IA.
- Cómo usar IA en marketing sin llenar tu empresa de herramientas sueltas.
- Cuándo contratar un consultor de IA y cuándo no.
- Qué datos necesitas antes de crear un agente de IA.
- Qué significa ser una empresa AI-first.
- Qué infraestructura necesita una empresa para implementar IA.
- Cómo priorizar casos de uso de IA por ROI y complejidad.

### Opinión/autoridad

- La IA no reemplaza procesos rotos.
- El problema no es ChatGPT, es la adopción.
- Por qué las empresas compran demos de IA y no sistemas.
- El data scientist moderno no solo modela: diseña decisiones.
- AI-first no es usar más herramientas, es cambiar cómo opera la empresa.

### Directorios

- Casos de uso de IA por industria.
- Herramientas de IA para equipos comerciales.
- Comunidades y eventos de IA/data en Colombia.
- Workflows de IA para marketing, ventas y operaciones.
- Ecosistema AI-first en LATAM.

## Decisión actual

Antes de crecer el volumen de contenido, Condór debe tener:

1. Medición activa.
2. Una oferta premium clara.
3. Casos con estructura de confianza.
4. Una taxonomía editorial.
5. Un flujo semanal de publicación y revisión.
6. Un primer directorio con datos útiles y foco comercial.
