# React CV Portfolio

A lightweight, high-performance digital curriculum vitae and professional portfolio built with **React** and **Vite**, designed for seamless maintenance and clear user navigation.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)

## 🔗 Links & Contact

- **Live Demo:** [als-code.github.io/cv-react/](https://als-code.github.io/cv-react/)
- **LinkedIn:** [linkedin.com/in/alejandro-lasierra/](https://www.linkedin.com/in/alejandro-lasierra/)

## ✨ Key Features

- **Single Page Application (SPA):** Implements fluid, refresh-free navigation powered by `react-router-dom`.
- **Modular Architecture:** Structured with a strict separation of concerns across `pages/`, `components/`, and `layouts/`.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewports using modern CSS.
- **Persistent State:** User preferences for color themes (light/dark) and language selection are managed via Context API and persisted using `localStorage`.

## 🛠️ Tech Stack & Architecture

- **Core:** React 19, Vite (Build Tool), React Router v7.
- **State Management:** Decoupled `ThemeContext` and `LanguageContext` to prevent prop drilling and centralize persistence logic.
- **Data Layer:** Static CV records are temporarily managed via structured JS files within `src/data/`.
- **Future Roadmap:** Migration of the data layer to a centralized **PostgreSQL** database to synchronize data across multiple portfolio frontends.

## ⚙️ Installation & Setup

Execute the following commands to configure the local development environment:

```bash
# Clone the repository
git clone [https://github.com/als-code/cv-react.git](https://github.com/als-code/cv-react.git)
cd cv-react

# Install dependencies
npm install

# Start the development server
npm run dev
