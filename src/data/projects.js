/** Set to true once screenshots are in public/projects/ (e.g. cv-online.webp). */
export const SHOW_PROJECT_IMAGES = false;

export const proyectsPageInfo = [
  {
    info: {
      es: 'Proyectos que he realizado durante mi carrera profesional, aprendiendo nuevas tecnologías y desarrollando proyectos personales.',
      en: 'Projects I have worked on during my professional career, learning new technologies and developing personal projects.',
    },
  },
]
export const proyects = [
  {
    title: {
      es: 'Web Seguimiento Videojuegos Retro',
      en: 'Web Tracking Retro Games',
    }, 
    stack: {
      es: 'React, Javascript, TailwindCSS, Node.js, Express, PostgreSQL, Docker, Ubuntu Server',
      en: 'React, Javascript, TailwindCSS, Node.js, Express, PostgreSQL, Docker, Ubuntu Server',
    },
    image: '/projects/savestate.webp',
    url: 'https://github.com/als-code/savestate',
    description: {
      es: 'Una web que permite llevar un seguimiento de los videojuegos retro que has jugado, tienes en propiedad y calificarlos.',
      en: 'A webpage that allows you to track the retro games you have played, you have in property and qualify them.',
    },
    challenges: {
      es: 'Sincronización en tiempo real con la base de datos PostgreSQL y manejo de estados globales para la actualización instantánea del backlog.',
      en: 'Synchronization in real time with the PostgreSQL database and global state management for instant backlog updates.',
    },
  },
  {
    title: {
      es: 'CV Online',
      en: 'Online CV',
    }, 
    stack: {
      es: 'React, Vite, CSS',
      en: 'React, Vite, CSS',
    },
    image: '/projects/cv-online.webp',
    url: 'https://github.com/als-code/cv-react',
    description: {
      es: 'Mi CV online. Página WEB SPA (Single Page Application). Empleo de tecnologías modernas como React y Vite, hosting en GitHub Pages.',
      en: 'My online CV. Single Page Application (SPA) WEB page. Use of modern technologies such as React and Vite, hosting on GitHub Pages.',
    },
    challenges: {
      es: 'Implementación de un sistema de internacionalización (i18n) dinámico y un custom hook para la gestión de temas (Dark/Light mode) con persistencia.',
      en: 'Implementation of a dynamic internationalization system (i18n) and a custom hook for theme management (Dark/Light mode) with persistence.',
    },
  },
  {
    title: {
      es: 'Página WEB de portfolio de artistas',
      en: 'Artists portfolio web page',
    }, 
    stack: {
      es: 'React, Vite, TailwindCSS',
      en: 'React, Vite, TailwindCSS',
    },
    image: '/projects/portfolio-web.webp',
    url: 'https://github.com/als-code',
    description: {
      es: 'Página web tipo onepage con proyectos y trabajos realizados.',
      en: 'Webpage type onepage with projects and works done.',
    },
    challenges: {
      es: 'Plantilla de portfolio en React + Vite + Tailwind con datos en JSON y temas intercambiables. Galería con filtros, lightbox y UI responsive; fondo en degradado con variables CSS.',
      en: 'Portfolio template in React + Vite + Tailwind with data in JSON and interchangeable themes. Gallery with filters, lightbox and responsive UI; background in gradient with CSS variables.',
    },
  },
    {
    title: {
      es: 'App Accesibilidad para daltonismo (En desarrollo)',
      en: 'Accessibility App for Daltonism (In development)',
    },
    stack: {
      es: 'Flutter, Dart, Figma',
      en: 'Flutter, Dart, Figma',
    },
    image: '/projects/color-accessibility.webp',
    url: 'https://github.com/als-code',
    description: {
      es: 'Una aplicación mobile (Android) de accesibilidad para personas con daltonismo, permite reconocer colores empleando la cámara del dispositivo.',
      en: 'An accessibility app (Android) for people with daltonism, allows color recognition using the device camera.',
    },
    challenges: {
      es: 'Integración eficiente de la cámara y procesamiento de imágenes en tiempo real para la detección precisa de colores.',
      en: 'Efficient camera integration and real-time image processing for accurate color detection.',
    },
  },
  

]