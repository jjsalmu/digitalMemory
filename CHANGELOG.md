# 📝 Changelog - digiMem

Historial de cambios y versiones de la aplicación.

---

## [v1.03.1] - 2026-10-16

### 🐛 Corrección: PIN oculto con asteriscos

**Problema:** el campo del PIN usaba `type="password"`, que muestra puntos (●) en lugar de asteriscos y, en Android, deja visible el último dígito un instante antes de ocultarlo.

**Solución:**
- Los campos pasan a ser de texto numérico y en pantalla se escribe siempre un `*`
- El dígito real se guarda solo en memoria (`pinValues`); nunca aparece en el campo
- Al corregir un dígito, el nuevo sustituye al anterior (sin acumular asteriscos)
- Se admite pegar el PIN completo y el retroceso en teclados móviles
- Ya no aparece el aviso del navegador para guardar contraseñas

---

## [v1.03] - 2026-10-16

### ☁️ Sincronización con GitHub

**Novedad:** la base de datos puede guardarse en un repositorio de GitHub y sincronizarse entre dispositivos.

**Cómo funciona:**
- Menú ☰ → **Sincronizar con GitHub** (usuario, repositorio, rama, archivo y token)
- Usa la API de GitHub (Contents) con un *fine-grained token* limitado a un solo repositorio
- Sincronización **automática**: al desbloquear con el PIN, 4 s después de cada cambio, al recuperar la conexión y al volver a la app
- Botón **Sincronizar ahora** para hacerlo manualmente

**Fusión de datos (varios dispositivos):**
- Cada dato guarda su fecha de modificación (`updatedAt`); gana la versión más reciente
- Los borrados se registran, de modo que un dato eliminado en un dispositivo no reaparece en otro
- Si se edita un dato después de que otro dispositivo lo borrara, se conserva
- Conflictos de versión (409/422) se reintentan automáticamente
- No se generan commits si no hay cambios

**Seguridad:**
- Aviso y confirmación si el repositorio es **público**
- El token se guarda solo en este dispositivo y se puede borrar desde la misma pantalla
- Compatible con archivos antiguos (array JSON) y con importar/exportar

### 🔧 Service Worker
- Estrategia *red primero* con respaldo offline: las actualizaciones de la app llegan sin vaciar la caché
- No intercepta peticiones a otros dominios (api.github.com)
- Caché versionada (`digimem-v1.03`) e iconos incluidos para uso offline

---

## [v1.02.1] - 2026-02-09

### 🐛 Corrección crítica (Hotfix)

**Problema identificado:** Los botones de edición se mostraban todos simultáneamente en lugar de alternar entre modos.

**Causa raíz:** Conflicto de especificidad CSS entre `.edit-buttons { display: flex }` y `.hidden { display: none }`

**Solución implementada:**
```css
.edit-buttons.hidden {
    display: none !important;
}
```

**Resultado:**
- ✅ Modo normal: Solo "Editar" y "Eliminar" visibles
- ✅ Modo edición: Solo "Guardar" y "Cancelar" visibles
- ✅ Alternancia correcta entre modos
- ✅ Comportamiento ahora funciona como se diseñó en v1.02

**Tipo de release:** Hotfix (corrección de bug crítico)

---

## [v1.02] - 2026-02-09

### 🎯 Mejora de interfaz de edición

**Objetivo:** Simplificar y limpiar la interfaz durante la visualización y edición de datos.

**Cambios implementados:**

#### Modo visualización (normal)
- ✅ Solo se muestran 2 botones: **Editar** y **Eliminar**
- ✅ Fecha visible debajo del contenido
- ✅ Interfaz limpia y sin distracciones

#### Modo edición (al editar)
- ✅ Solo se muestran 2 botones: **Guardar** y **Cancelar**
- ✅ Fecha oculta temporalmente
- ✅ Foco en la tarea de edición
- ✅ Menos elementos en pantalla = menos confusión

**Beneficios:**
- 🎨 Interfaz más limpia y profesional
- 🎯 Usuario ve solo las opciones relevantes
- ✨ Mejor experiencia de uso (UX)
- 📱 Menos elementos en pantalla móvil

**Implementación técnica:**
- Botones separados en dos grupos (normal/edición)
- Uso de clase `.hidden` para alternar visibilidad
- ID único para fecha permite ocultarla durante edición

---

## [v1.01] - 2026-02-09

### 🎨 Optimización de espacio en pantalla

**Problema resuelto:** El contenido no aprovechaba todo el ancho de la pantalla disponible.

**Cambios implementados:**
- **Body padding:** 20px → 5px (ganancia: ~30px)
- **Container padding:** 10px → 5px (ganancia: ~10px)
- **Card padding:** 24px → 12px general / 8px para resultados (ganancia: ~32px)
- **Result-item padding:** 20px → 10px (ganancia: ~20px)
- **Contenido párrafo:** Añadido `width: 100%` y `box-sizing: border-box`

**Resultado:**
- ✅ 92px adicionales de ancho en dispositivos de 360px
- ✅ 38% más espacio para el contenido
- ✅ Mejor aprovechamiento de pantallas móviles
- ✅ Texto visible en casi todo el ancho disponible

### 📊 Impacto visual
Antes: ~238px para contenido  
Ahora: ~330px para contenido  
Mejora: +38% de espacio útil

---

## [v1.0] - 2026-02-06 🎉 PRIMERA VERSIÓN ESTABLE

### 🎊 Hitos alcanzados
- **Primera versión de producción estable**
- Todas las características fundamentales completadas
- Interfaz optimizada y probada
- Aplicación lista para uso diario

### ✨ Mejoras finales
- **Aprovechamiento completo del ancho de pantalla**
  - Contenido de resultados usa todo el ancho disponible
  - Mejor visualización en dispositivos móviles y tablets
  - Área de búsqueda centrada con max-width de 600px

### 📋 Características completas en v1.0

#### 🔐 Seguridad
- Login con PIN dinámico (día + mes)
- Dígitos ocultos con asteriscos
- Datos almacenados localmente
- Sin conexión a servidores externos

#### 🔍 Búsqueda y Navegación
- Búsqueda inteligente con similitud
- Dropdown de sugerencias en tiempo real
- Resaltado de coincidencias
- Hasta 8 sugerencias mostradas

#### 📝 Gestión de Contenido
- Formato preservado (saltos de línea, espacios)
- Edición in-line de datos
- Visualización optimizada con padding 10px
- Interlineado compacto (line-height: 1)
- Fuente monoespaciada para mejor legibilidad

#### 💾 Importar/Exportar
- Exportación completa a JSON
- Importación con opción de reemplazar o agregar
- Backup y restauración de datos

#### 🎨 Interfaz
- Menú hamburguesa lateral
- Modal para nuevos datos
- Botones de tamaño optimizado
- Header fijo con versión visible
- Diseño responsive

#### 📱 PWA (Progressive Web App)
- Instalable como app nativa
- Funciona completamente offline
- Service Worker para caché
- Iconos de alta resolución
- Manifest configurado

### 🎨 Diseño Final
- **Nombre:** digiMem (Digital Memory)
- **Icono:** Chip de memoria digital con LED
- **Colores:** Degradado morado/azul (#667eea → #764ba2)
- **Tipografía:** System fonts + Courier New para contenido
- **Responsive:** Adapta a todo tipo de pantallas

### 📊 Estadísticas
- **Archivos:** 5 (HTML, manifest, service worker, 2 iconos)
- **Tamaño total:** ~75KB
- **Líneas de código:** ~1400 (HTML + CSS + JS)
- **Tiempo de desarrollo:** Sprint completo
- **Versiones beta:** 2 (v0.8, v0.9)

### 🛠️ Tecnologías
- HTML5
- CSS3 (Flexbox, Grid, Variables)
- JavaScript ES6+ (Vanilla)
- LocalStorage API
- Service Workers API
- Web App Manifest

### ✅ Compatibilidad verificada
- ✅ Chrome/Edge 90+
- ✅ Safari 14+
- ✅ Firefox 88+
- ✅ Android (Chrome)
- ✅ iOS (Safari)

---

## [v0.9] - 2026-02-06

### 🔧 Mejoras de UI/UX
- **Optimización del cuadro de contenido**
  - Reducido padding a 10px (antes 20px)
  - Interlineado ajustado a 1 (antes 1.8)
  - Mejora en la densidad de información mostrada

- **Botones de acción rediseñados**
  - Botones Editar/Eliminar/Guardar/Cancelar más pequeños
  - Padding reducido: 6px 14px (antes 10px 20px)
  - Font-size: 12px (antes 14px)
  - Diseño más discreto y profesional

- **Reposicionamiento del botón "Cerrar contenido"**
  - Movido a la parte inferior (después de los resultados)
  - Ancho completo para mejor accesibilidad
  - Centrado horizontalmente

### 📋 Otros cambios
- Sistema de versionado implementado
- Versión visible en: título, header y menú

---

## [v0.8] - 2026-02-06

### ✨ Características principales
- **Sistema de login con PIN dinámico**
  - PIN de 4 dígitos basado en día y mes actual (DDMM)
  - Dígitos ocultos como asteriscos (●●●●)
  - Validación automática

- **Búsqueda inteligente**
  - Dropdown de sugerencias en tiempo real
  - Búsqueda por similitud y coincidencias parciales
  - Resaltado de palabras encontradas
  - Máximo 8 sugerencias mostradas

- **Gestión de contenido**
  - Formato preservado (saltos de línea, espacios)
  - Recuadro grande para visualización (150px mínimo)
  - Fuente monoespaciada para mejor legibilidad
  - Edición in-line de datos guardados

- **Interfaz y navegación**
  - Menú hamburguesa lateral
  - Modal para agregar nuevos datos
  - Botón "Cerrar contenido" para ocultar resultados
  - Header fijo con nombre y versión

- **Importar/Exportar**
  - Exportación de datos a JSON
  - Importación con opción de reemplazar o agregar
  - Backup completo del localStorage

### 🎨 Diseño
- Icono de memoria digital (chip con LED)
- Nombre: **digiMem** (Digital Memory)
- Colores: Degradado morado/azul (#667eea → #764ba2)
- Botones uniformes de tamaño estándar
- Fuente Courier New para contenido

### 🔒 Seguridad
- Login obligatorio con PIN diario
- Contenido oculto hasta búsqueda específica
- Datos almacenados localmente (localStorage)
- Sin conexión a servidores externos

### 📱 Compatibilidad
- Progressive Web App (PWA)
- Instalable en Android/iOS
- Funciona completamente offline
- Service Worker para caché

### 🛠️ Archivos
- `digiMem.html` - Archivo principal
- `manifest.json` - Configuración PWA
- `sw.js` - Service Worker
- `icon-192.png` - Icono 192x192
- `icon-512.png` - Icono 512x512

---

## Formato de Versionado

Este proyecto usa **Versionado Semántico** (SemVer):
- **MAJOR.MINOR** (ej: v1.0, v2.3)
- MAJOR: Cambios incompatibles con versiones anteriores
- MINOR: Nuevas funcionalidades compatibles

Versiones en desarrollo: v0.x (beta)

---

## Próximas versiones planificadas

### v1.1 (próxima actualización menor)
- [ ] Categorías/etiquetas para organizar datos
- [ ] Filtros avanzados de búsqueda
- [ ] Ordenamiento personalizado

### v1.2
- [ ] Búsqueda por fecha
- [ ] Historial de cambios por dato
- [ ] Papelera de reciclaje

### v2.0 (futuras mejoras mayores)
- [ ] Modo oscuro
- [ ] Temas personalizables
- [ ] Sincronización opcional en la nube
- [ ] Compartir datos encriptados

---

## Notas de desarrollo

**Tecnologías utilizadas:**
- HTML5
- CSS3 (con variables y flexbox)
- JavaScript Vanilla (ES6+)
- LocalStorage API
- Service Workers API
- Web App Manifest

**Compatibilidad:**
- Chrome/Edge 90+
- Safari 14+
- Firefox 88+
- Navegadores modernos con soporte PWA

---

**Mantenedor:** Usuario de GitHub
**Licencia:** Uso personal
**Última actualización:** 2026-02-06
