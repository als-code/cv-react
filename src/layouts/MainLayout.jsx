import React from 'react'
import { Outlet } from 'react-router-dom'
import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaNpm,
  FaPython,
  FaReact,
  FaTerminal,
  FaUbuntu,
} from 'react-icons/fa'
import { SiDart, SiFlutter, SiTypescript } from 'react-icons/si'
import NavBar from '../components/NavBar'
import LanguageToggle from '../components/LanguageToggle'
import useTheme from '../hooks/useTheme'
import { useLanguage } from '../LanguageContext'

const TECH_ICONS = {
  Git: <FaGitAlt />,
  'Ubuntu / Linux': <FaUbuntu />,
  'SSH connections': <FaTerminal />,
  React: <FaReact />,
  'Node.js': <FaNodeJs />,
  JavaScript: <FaJs />,
  TypeScript: <SiTypescript />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  Python: <FaPython />,
  npm: <FaNpm />,
  Figma: <FaFigma />,
  Flutter: <SiFlutter />,
  Dart: <SiDart />,
};

export function MainLayout() {
  const { theme, toggleTheme } = useTheme()
  const { language } = useLanguage()

  const texts = {
    es: {
      role: 'Desarrollador FullStack',
      skills: 'Stack',
      connect: 'Conectar',
      contact: 'Contacto',
      darkMode: 'Modo oscuro',
      lightMode: 'Modo claro',
    },
    en: {
      role: 'FullStack Developer',
      skills: 'Stack',
      connect: 'Connect',
      contact: 'Contact',
      darkMode: 'Dark mode',
      lightMode: 'Light mode',
    },
  }
  const t = texts[language]

  return (
    <div className="app-shell">
      {/* Sidebar */}
      <aside className="sidebar">
        <div>
          <div className="sidebar-header">
            <div className="sidebar-logo">ALS</div>
            <div className="sidebar-brand">
              <span className="sidebar-brand-title">Alejandro Lasierra Sabio</span>
              <span className="sidebar-brand-sub">{t.role}</span>
            </div>
          </div>

          <NavBar />
          <button
            onClick={toggleTheme}
            className="chip-button chip-button--full"
            style={{ marginTop: '12px' }}
          >
            {theme === 'light' ? t.darkMode : t.lightMode}
          </button>
          <LanguageToggle />
          <div className="sidebar-skills">
            <span className="sidebar-contact-label">{t.skills}</span>
            <div className="skills-grid">
              {Object.keys(TECH_ICONS).map((skillName) => (
                <div key={skillName} className="skill-tag">
                  <span className="skill-icon">{TECH_ICONS[skillName]}</span>
                  <span>{skillName}</span>
                </div>
              ))}
            </div>
            <p></p>
          </div>
        </div>

        <div className="sidebar-contact">

          <div className="sidebar-contact-row">
            <span className="label">{t.connect}</span>
            <div className="sidebar-contact-socials">
            </div>
          </div>
          <a href="https://www.linkedin.com/in/alejandro-lasierra/" target="_blank" rel="noopener noreferrer" className="chip-button">
            <span className="dot" />
            <span>LinkedIn</span>
          </a>
        {/* El acceso a Contacto se habilitará cuando el formulario envíe por API. */}
          <div className="sidebar-footer"></div>
        </div>
      </aside>

      {/* Main content */}
      <main className="main-area">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout