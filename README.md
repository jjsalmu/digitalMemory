# 💾 digiMem v1.0

**Digital Memory** - Tu memoria personal encriptada y privada.

[![Versión](https://img.shields.io/badge/versión-1.0-blue.svg)](https://github.com)
[![Licencia](https://img.shields.io/badge/licencia-Personal-green.svg)](https://github.com)
[![PWA](https://img.shields.io/badge/PWA-Ready-purple.svg)](https://github.com)

---

## 🎉 ¡Primera versión estable!

digiMem v1.0 es una aplicación web progresiva (PWA) que te permite guardar y recuperar información de forma segura y privada, directamente en tu dispositivo.

---

## ✨ Características principales

### 🔐 Seguridad
- **Login con PIN dinámico** basado en la fecha actual (DDMM)
- Dígitos ocultos para privacidad
- **100% offline** - tus datos nunca salen de tu dispositivo
- Sin servidores, sin tracking, sin anuncios

### 🔍 Búsqueda inteligente
- Sugerencias en tiempo real mientras escribes
- Búsqueda por similitud y coincidencias parciales
- Resaltado de palabras encontradas
- Hasta 8 sugerencias mostradas simultáneamente

### 📝 Gestión de contenido
- **Formato preservado** - mantiene saltos de línea y espacios
- Edición in-line de cualquier dato guardado
- Visualización optimizada en pantalla completa
- Fuente monoespaciada para mejor legibilidad

### 💾 Backup y restauración
- Exporta todos tus datos a JSON
- Importa datos con opción de reemplazar o agregar
- Mantén copias de seguridad fácilmente

### 📱 Progressive Web App (PWA)
- **Instalable** como app nativa en Android/iOS
- Funciona completamente **offline**
- Icono personalizado en tu pantalla de inicio
- Sin ocupar espacio innecesario

---

## 🚀 Instalación rápida

### Método 1: GitHub Pages (Recomendado)

1. **Sube los archivos a GitHub:**
   - `digiMem.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`

2. **Activa GitHub Pages:**
   - Ve a Settings → Pages
   - Selecciona rama "main"
   - Guarda los cambios

3. **Accede desde tu móvil:**
   ```
   https://tu-usuario.github.io/tu-repo/digiMem.html
   ```

4. **Instala como app:**
   - Abre en Chrome (Android) o Safari (iOS)
   - Menú (⋮) → "Añadir a pantalla de inicio"
   - ¡Listo!

### Método 2: Uso local

Simplemente abre `digiMem.html` en tu navegador.

**Nota:** Para instalar como PWA se requiere HTTPS (usa GitHub Pages u otro hosting).

---

## 📖 Uso

### Primer acceso
1. Introduce el PIN: **DDMM** (día y mes actual)
   - Ejemplo: Si es 6 de febrero → PIN: **0602**
   - El PIN cambia automáticamente cada día

### Guardar un dato
1. Abre el menú (☰)
2. Selecciona "Guardar nuevo dato"
3. Escribe el tema y el contenido
4. Presiona "Guardar"

### Buscar información
1. Escribe en el buscador
2. Selecciona de las sugerencias
3. O presiona Enter para buscar todo

### Editar o eliminar
- Usa los botones "✏️ Editar" o "🗑️ Eliminar" en cada resultado

### Exportar/Importar
1. Abre el menú (☰)
2. Selecciona "Exportar datos" (descarga JSON)
3. O "Importar datos" (carga JSON previo)

---

## 🛠️ Especificaciones técnicas

### Arquitectura
- **Frontend:** HTML5 + CSS3 + JavaScript ES6+
- **Almacenamiento:** LocalStorage API
- **Offline:** Service Workers
- **Instalación:** Web App Manifest

### Requisitos
- Navegador moderno (Chrome 90+, Safari 14+, Firefox 88+)
- JavaScript habilitado
- LocalStorage disponible

### Tamaño
- **App completa:** ~75KB
- **Iconos incluidos:** 2 (192x192, 512x512)
- **Sin dependencias externas**

### Compatibilidad
| Navegador | Versión mínima | PWA |
|-----------|----------------|-----|
| Chrome    | 90+            | ✅   |
| Edge      | 90+            | ✅   |
| Safari    | 14+            | ✅   |
| Firefox   | 88+            | ⚠️   |

⚠️ Firefox tiene soporte limitado de PWA

---

## 🔒 Privacidad y seguridad

### ¿Qué datos se guardan?
- Todo se almacena en **tu dispositivo** usando LocalStorage
- **Nunca** se envían datos a servidores externos
- No hay tracking, cookies ni analytics

### ¿Es seguro?
- ✅ Login con PIN diario
- ✅ Sin conexión a internet (después de instalar)
- ✅ Código abierto y auditable
- ✅ Sin terceros involucrados

### Recomendaciones
1. Exporta tus datos regularmente como backup
2. Guarda el archivo JSON en un lugar seguro
3. No compartas tu PIN con nadie
4. Usa un navegador con protección por contraseña

---

## 📂 Estructura de archivos

```
digiMem-v1.0/
├── digiMem.html       # Aplicación principal
├── manifest.json      # Configuración PWA
├── sw.js             # Service Worker
├── icon-192.png      # Icono 192x192
├── icon-512.png      # Icono 512x512
├── CHANGELOG.md      # Historial de versiones
└── README.md         # Este archivo
```

---

## 🐛 Problemas conocidos

### No puedo instalar como app
- **Solución:** Debes usar HTTPS. Usa GitHub Pages u otro hosting con SSL.

### Perdí mis datos
- **Prevención:** Exporta regularmente usando "Exportar datos".
- **Recuperación:** Importa el último archivo JSON guardado.

### El PIN no funciona
- **Verifica:** Asegúrate de usar el formato DDMM del día actual.
- **Ejemplo:** 6 de febrero = 0602, 25 de diciembre = 2512

### No se mantiene el formato
- **Verificado:** v1.0 preserva saltos de línea y espacios correctamente.

---

## 🤝 Contribuir

¿Encontraste un bug? ¿Tienes una sugerencia?

1. Abre un Issue en GitHub
2. Describe el problema o mejora
3. Incluye capturas si es relevante

---

## 📋 Roadmap

### v1.1 (próximo)
- [ ] Categorías/etiquetas
- [ ] Filtros avanzados
- [ ] Ordenamiento personalizado

### v1.2
- [ ] Búsqueda por fecha
- [ ] Historial de cambios
- [ ] Papelera de reciclaje

### v2.0
- [ ] Modo oscuro
- [ ] Temas personalizables
- [ ] Sincronización opcional
- [ ] Compartir datos encriptados

---

## 📄 Licencia

Este proyecto es de uso personal y privado.

---

## 👨‍💻 Autor

Desarrollado con ❤️ para mantener tu información segura y accesible.

---

## 🙏 Agradecimientos

- A los usuarios que probaron las versiones beta
- A la comunidad de desarrolladores web
- A Claude (Anthropic) por asistencia en el desarrollo

---

## 📞 Soporte

¿Necesitas ayuda?

1. Consulta el [CHANGELOG.md](CHANGELOG.md)
2. Revisa los problemas conocidos (arriba)
3. Abre un Issue en GitHub

---

## 🎯 Filosofía del proyecto

> "Tu información es tuya. Debe estar en tu dispositivo, bajo tu control, y accesible cuando la necesites."

digiMem no es solo una app de notas, es tu **memoria digital personal** que respeta tu privacidad absoluta.

---

**digiMem v1.0** - Tu memoria, tu control, tu privacidad. 💾🔒

---

Made with 💾 | [GitHub](https://github.com) | [Changelog](CHANGELOG.md)
