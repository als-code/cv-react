import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Resume from './pages/Resume.jsx'
import NotFound from './pages/NotFound.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import ConfirmedContact from './pages/ConfirmedContact.jsx'
import { ThemeProvider } from './ThemeContext'
import { LanguageProvider } from './LanguageContext'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Resume />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/confirmed" element={<ConfirmedContact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App