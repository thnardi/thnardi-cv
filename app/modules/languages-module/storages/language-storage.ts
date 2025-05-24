import { LanguageSlug } from '../types/languages'

export const getLanguageLocalStorage = (): LanguageSlug => {
  return localStorage.getItem('language') as LanguageSlug
}

export const setLanguageLocalStorage = (language: LanguageSlug) => {
  return localStorage.setItem('language', language)
}
