# Sistema de tráfico — Condór

## Objetivo

Construir una arquitectura que permita publicar, medir y mejorar tráfico orgánico sin rediseñar la web cada vez que cambie el copy.

El sistema debe vender una tesis clara:

> Condór implementa IA aplicada a marketing, ventas y operaciones comerciales para empresas B2B en LATAM.

## Principios

- La home no es el sistema de tráfico. La home es la puerta principal de confianza.
- Cada página debe responder una intención de búsqueda específica.
- Las páginas SEO deben conectar con una oferta clara, no solo informar.
- Medimos primero adquisición y conversión; después optimizamos contenido.
- La autoridad personal de Nicolás debe transferirse a Condór.

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

## Taxonomía editorial

### Pilares

1. IA para marketing
2. IA para ventas
3. Agentes y automatización
4. Data y analítica comercial
5. Implementación y adopción
6. Opinión y criterio sobre IA

### Audiencias

- Founders B2B.
- Gerentes comerciales.
- Heads de marketing.
- Equipos de operaciones.
- Empresas de servicios profesionales.

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

### Semana 2

- Publicar 3 páginas SEO comerciales.
- Reestructurar 2 casos con formato de conversión.
- Agregar CTAs internos desde soluciones.

### Semana 3

- Publicar 3 recursos informativos.
- Revisar primeras impresiones en Search Console.
- Ajustar títulos/meta descriptions según CTR.

### Semana 4

- Publicar 4 páginas SEO adicionales.
- Crear dashboard simple de tráfico/leads.
- Priorizar nuevas páginas según queries reales.

## Backlog inicial de contenidos

### Comerciales

- Consultor de inteligencia artificial para empresas en Colombia.
- Implementación de IA para marketing y ventas.
- Automatización de ventas con IA.
- Agentes de IA para atención comercial.
- IA para equipos comerciales B2B.

### Informativos

- Cómo saber si tu empresa está lista para implementar IA.
- Qué procesos de ventas se pueden automatizar con IA.
- Cómo usar IA en marketing sin llenar tu empresa de herramientas sueltas.
- Cuándo contratar un consultor de IA y cuándo no.
- Qué datos necesitas antes de crear un agente de IA.

### Opinión/autoridad

- La IA no reemplaza procesos rotos.
- El problema no es ChatGPT, es la adopción.
- Por qué las empresas compran demos de IA y no sistemas.

## Decisión actual

Antes de crecer el volumen de contenido, Condór debe tener:

1. Medición activa.
2. Una oferta premium clara.
3. Casos con estructura de confianza.
4. Una taxonomía editorial.
5. Un flujo semanal de publicación y revisión.

