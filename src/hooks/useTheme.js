import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

export default function useTheme() {
  const value = useContext(ThemeContext)
  if (!value) {
    throw new Error('useTheme debe usarse dentro de <ThemeProvider />')
  }
  return value
}
