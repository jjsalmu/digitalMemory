# 📱 Cómo instalar "Mi Memoria Personal" como app en Android

## Método 1: Usando Chrome (Recomendado)

### Paso 1: Subir los archivos
1. Sube todos estos archivos a un servidor web o servicio de hosting:
   - `memoria-personal.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`

**Opciones de hosting gratuitas:**
- **GitHub Pages** (recomendado para principiantes)
- **Netlify Drop** (arrastra y suelta archivos)
- **Vercel**
- **Firebase Hosting**

### Paso 2: Acceder desde tu móvil
1. Abre **Chrome** en tu Android
2. Ve a la URL donde subiste los archivos
3. La app debería funcionar inmediatamente

### Paso 3: Instalar como app nativa
1. Toca el menú de Chrome (⋮) en la esquina superior derecha
2. Selecciona **"Añadir a pantalla de inicio"** o **"Instalar aplicación"**
3. Confirma el nombre de la app
4. ¡Listo! Ahora tendrás un icono en tu pantalla de inicio

---

## Método 2: Instalación local (sin servidor)

Si solo quieres probarla localmente sin subirla a internet:

### En tu móvil Android:

1. **Descarga todos los archivos** a tu móvil
2. Abre la app **Chrome**
3. En la barra de direcciones escribe: `file:///`
4. Navega hasta la carpeta donde descargaste los archivos
5. Toca `memoria-personal.html`

**Nota:** Este método funciona pero NO podrás instalarla como PWA porque los archivos deben estar en HTTPS.

---

## Método 3: Hosting rápido con Python (para pruebas)

Si tienes Termux o acceso a Python en tu móvil:

1. Coloca todos los archivos en una carpeta
2. Abre la terminal en esa carpeta
3. Ejecuta:
```bash
python3 -m http.server 8000
```
4. Accede desde Chrome a: `http://localhost:8000/memoria-personal.html`

---

## 🎯 Guía paso a paso con GitHub Pages (GRATIS y fácil)

### 1. Crear cuenta en GitHub
- Ve a https://github.com
- Regístrate gratis

### 2. Crear un nuevo repositorio
- Click en "New repository"
- Nombre: `memoria-personal` (o el que quieras)
- Marca "Public"
- Click "Create repository"

### 3. Subir tus archivos
- Click en "uploading an existing file"
- Arrastra los 5 archivos:
  - memoria-personal.html
  - manifest.json
  - sw.js
  - icon-192.png
  - icon-512.png
- Click "Commit changes"

### 4. Activar GitHub Pages
- Ve a Settings (⚙️)
- En el menú lateral, click en "Pages"
- En "Source", selecciona "main" branch
- Click "Save"
- Espera 1-2 minutos

### 5. Acceder a tu app
- GitHub te dará una URL como: `https://tu-usuario.github.io/memoria-personal/memoria-personal.html`
- Abre esa URL en Chrome en tu Android
- ¡Ya puedes instalarla como app!

---

## ✅ Verificar que funciona como PWA

Una vez instalada, tu app debería:
- ✅ Aparecer con su propio icono en el launcher
- ✅ Abrirse a pantalla completa (sin barra de Chrome)
- ✅ Funcionar offline después de la primera carga
- ✅ Guardar tus datos entre sesiones

---

## 🔧 Solución de problemas

**"No me aparece la opción de instalar"**
- Asegúrate de usar Chrome (no Firefox u otro navegador)
- Los archivos DEBEN estar en HTTPS (no http://)
- Verifica que todos los 5 archivos estén en el mismo directorio

**"Perdí mis datos al reinstalar"**
- Los datos se guardan en localStorage del navegador
- Si desinstalas Chrome o borras datos, se perderán
- Considera hacer backup exportando a archivo periódicamente

**"No funciona offline"**
- La primera vez necesitas conexión
- Después funcionará sin internet
- El Service Worker tarda unos segundos en registrarse

---

## 📝 Notas importantes

- Todos tus datos se guardan **solo en tu dispositivo**
- Nadie más puede ver tu información
- La app no envía datos a ningún servidor
- Funciona 100% offline después de instalarse
- Es completamente gratis

---

¿Necesitas ayuda? Aquí hay recursos:
- Video tutorial GitHub Pages: https://www.youtube.com/results?search_query=github+pages+tutorial
- Documentación GitHub Pages: https://docs.github.com/es/pages
