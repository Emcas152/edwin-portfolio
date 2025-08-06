# 🚀 Edwin Castillo - Portafolio Personal

Un portafolio web moderno y responsivo que muestra mis proyectos, habilidades y experiencia como desarrollador Full Stack.

## ✨ Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y escritorio
- **Integración con GitHub API**: Muestra automáticamente mis repositorios más recientes
- **Estadísticas de GitHub**: Visualización de stats, lenguajes y contribuciones
- **Interfaz Moderna**: Diseño limpio con Tailwind CSS y componentes personalizados
- **Navegación Suave**: Scrolling suave entre secciones
- **Formulario de Contacto**: Interfaz para contacto directo
- **Carga Dinámica**: Paginación de proyectos con botón "Ver más"

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript
- **Estilizado**: Tailwind CSS v4
- **Build Tool**: Vite
- **Componentes**: Componentes UI personalizados
- **API**: GitHub REST API
- **Hosting**: Preparado para Vercel/Netlify

## 📂 Estructura del Proyecto

```
edwin-portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── input.tsx
│   │   └── GitHubStats.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (v18 o superior)
- npm o yarn

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/Emcas152/edwin-portfolio.git
   cd edwin-portfolio
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:5173
   ```

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Previsualiza la build de producción

## 🎨 Personalización

### Cambiar Información Personal

1. **Edita `src/App.tsx`** y actualiza:
   - Username de GitHub en la API call
   - Información personal (nombre, descripción, contactos)
   - Enlaces de redes sociales

2. **Personaliza los colores** en `src/index.css`:
   ```css
   :root {
     --primary: tu-color-primario;
     --secondary: tu-color-secundario;
   }
   ```

### Agregar Nuevas Secciones

1. Crea nuevos componentes en `src/components/`
2. Importa y añádelos a `App.tsx`
3. Actualiza la navegación si es necesario

## 📊 Funcionalidades

### 🔗 Integración con GitHub
- Obtiene automáticamente tus repositorios
- Filtra forks y repositorios privados
- Ordena por popularidad y actividad reciente
- Muestra lenguajes, estrellas y forks

### 📱 Diseño Responsivo
- Mobile-first approach
- Breakpoints optimizados
- Componentes adaptativos

### 🎯 Optimización
- Lazy loading de imágenes
- Paginación de contenido
- Estados de carga
- Manejo de errores

## 🌐 Despliegue

### Vercel (Recomendado)

1. **Conecta tu repositorio con Vercel**
2. **Configura las variables de entorno si es necesario**
3. **Deploy automático en cada push**

### Netlify

1. **Conecta tu repositorio con Netlify**
2. **Build command**: `npm run build`
3. **Publish directory**: `dist`

### GitHub Pages

1. **Instala gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Añade script en package.json**:
   ```json
   "homepage": "https://tu-usuario.github.io/edwin-portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Contacto

- **Email**: [edwincas1522@hotmail.com](mailto:edwincas1522@hotmail.com)
- **LinkedIn**: [edwin-castillo-90132250](https://www.linkedin.com/in/edwin-castillo-90132250)
- **GitHub**: [Emcas152](https://github.com/Emcas152)
- **WhatsApp**: [+502 3755 8713](https://wa.me/50237558713)

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

---

⭐ **¡Si te gusta este proyecto, dale una estrella!** ⭐
