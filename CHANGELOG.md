# 📝 Changelog - digiMem

Historial de cambios y versiones de la aplicación.

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

### v0.9 (próxima)
- [ ] Categorías/etiquetas para organizar datos
- [ ] Búsqueda por fecha
- [ ] Modo oscuro

### v1.0 (primera versión estable)
- [ ] Todas las características básicas estabilizadas
- [ ] Documentación completa
- [ ] Testing exhaustivo

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
