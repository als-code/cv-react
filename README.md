# CV Online - Portfolio Personal

CV online desarrollado con **React + Vite**. La idea es tener un sitio ligero, rápido y fácil de mantener donde presentar experiencia, formación y proyectos con una navegación clara.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)

## 📫 Contacto

- LinkedIn: https://www.linkedin.com/in/alejandro-lasierra/

## 🚀 Demo en Vivo

Puedes consultar el resultado en este enlace: https://als-code.github.io/cv-react/ 

## ✨ Características

- **SPA (Single Page Application):** Navegación fluida y sin recargas de página gracias a `react-router-dom`.
- **Arquitectura simple y mantenible:** separación por `pages/`, `components/` y `layouts/`.
- **Diseño Responsivo:** Adaptado para dispositivos móviles, tablets y escritorio.
- **Preferencias persistentes:** tema (claro/oscuro) e idioma se guardan en `localStorage`.
- **Secciones Detalladas:**
  - **Resumen:** Vista principal con experiencia y educación.
  - **Sobre mí:** Información personal y biografía.
  - **Proyectos:** Galería de trabajos realizados.
  - **Contacto:** Formulario con validación y página de confirmación. (Omitida hasta tener backend.)

## 🛠️ Tecnologías Utilizadas

- **React 19** - Librería principal.
- **Vite** - Herramienta de construcción (build tool) ultra rápida.
- **React Router v7** - Gestión de rutas y navegación.
- **CSS Moderno** - Estilos personalizados y diseño responsivo.

## 📂 Estructura del Proyecto

```text
src/
 ├── components/     # Componentes pequeños y reutilizables
 ├── layouts/        # Estructura base (MainLayout con Outlet)
 ├── pages/          # Vistas principales (Home, About, Projects, etc.)
 ├── data/           # Datos del CV (experiencia, proyectos, skills...)
 ├── hooks/          # Hooks de la app (tema)
 ├── App.jsx         # Configuración de rutas
 └── main.jsx        # Punto de entrada de la aplicación
```

## ⚙️ Instalación y Configuración

Si quieres ejecutar este proyecto localmente, sigue estos pasos:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/als-code/cv-react.git
   ```

2. **Entra en la carpeta del proyecto:**
   ```bash
   cd cv-react
   ```

3. **Instala las dependencias:**
   ```bash
   npm install
   ```

4. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

5. Abre http://localhost:5173 en tu navegador.

## 🧭 Decisiones de implementación (breve)

- El **tema** se gestiona con un `ThemeContext` para evitar prop drilling y mantener la lógica de persistencia en un único sitio.
- El **idioma** se gestiona con un `LanguageContext` (ES/EN) y se persiste para respetar la preferencia del usuario.
- Los **datos del CV** se sirven actualmente desde `src/data/` (ficheros JS con la información de experiencia, formación, proyectos, etc.).  
  **Mejora futura**: mover esa fuente de datos a **PostgreSQL** para mantener el CV (React) sincronizado con la web de **portfolio** (aún en desarrollo) usando un único origen de datos.

