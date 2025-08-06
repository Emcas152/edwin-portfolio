# 📋 Instrucciones para Publicar en GitHub Pages

## 🚀 Paso 1: Crear repositorio en GitHub

1. **Ve a GitHub.com** y haz login
2. **Clic en el "+" (top derecha)** → "New repository"
3. **Nombre del repositorio:** `edwin-portfolio`
4. **Descripción:** "Portafolio personal de Edwin Castillo - Desarrollador Full Stack"
5. **Público/Privado:** Elige "Public"
6. **NO marques** "Add a README file" (ya lo tienes)
7. **Clic en "Create repository"**

## 🔗 Paso 2: Conectar tu repositorio local

Copia y pega estos comandos en tu terminal (PowerShell):

```bash
git branch -M main
git remote add origin https://github.com/Emcas152/edwin-portfolio.git
git push -u origin main
```

## 🌐 Paso 3: Desplegar a GitHub Pages

Una vez que hayas subido tu código a GitHub, ejecuta:

```bash
npm run deploy
```

Este comando:
- Construye tu proyecto (`npm run build`)
- Sube los archivos a la rama `gh-pages`
- GitHub Pages los publica automáticamente

## ⚙️ Paso 4: Configurar GitHub Pages (en GitHub.com)

1. **Ve a tu repositorio** en GitHub
2. **Clic en "Settings"** (tab superior)
3. **Scroll down hasta "Pages"** (menú izquierdo)
4. **Source:** Debería estar en "Deploy from a branch"
5. **Branch:** Selecciona "gh-pages" y "/" (root)
6. **Clic en "Save"**

## 🎉 Paso 5: ¡Tu sitio estará listo!

Tu portafolio estará disponible en:
**https://Emcas152.github.io/edwin-portfolio/**

⏱️ **Nota:** Puede tardar 5-10 minutos en aparecer la primera vez.

## 🔄 Actualizaciones futuras

Para actualizar tu portafolio en el futuro:

```bash
# 1. Hacer cambios en tu código
# 2. Commit y push
git add .
git commit -m "Descripción de tus cambios"
git push

# 3. Redesplegar
npm run deploy
```

## 🛠️ Comandos útiles

- `npm run dev` - Servidor de desarrollo local
- `npm run build` - Construir para producción
- `npm run preview` - Vista previa de la build
- `npm run deploy` - Desplegar a GitHub Pages

## 🎯 URLs importantes

- **Repositorio:** https://github.com/Emcas152/edwin-portfolio
- **GitHub Pages:** https://Emcas152.github.io/edwin-portfolio/
- **Desarrollo local:** http://localhost:5173

¡Tu portafolio está listo para el mundo! 🚀
