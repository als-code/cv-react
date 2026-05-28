import React from 'react'
import { useLanguage } from '../LanguageContext'

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button onClick={toggleLanguage} className="chip-button chip-button--full" style={{ marginTop: '8px' }}>
      {language === 'es' ? 'English' : 'Español'}
    </button>
  )
}