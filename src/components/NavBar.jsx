import { NavLink } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'

function NavBar() {
  const { language } = useLanguage();

  const texts = {
    es: { resume: 'Currículum', about: 'Sobre mí', projects: 'Proyectos' },
    en: { resume: 'Resume', about: 'About Me', projects: 'Projects' }
  };

  const t = texts[language];

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <NavLink className="navbar__link" to="/" end>
        {t.resume}
      </NavLink>

      <NavLink className="navbar__link" to="/about-me">
        {t.about}
      </NavLink>

      <NavLink className="navbar__link" to="/projects">
        {t.projects}
      </NavLink>

      {/* <NavLink className="navbar__link" to="/portfolio">
        Portfolio
      </NavLink> */}
    </nav>
  )
}

export default NavBar