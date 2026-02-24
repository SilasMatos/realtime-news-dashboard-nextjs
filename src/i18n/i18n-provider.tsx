'use client'

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect
} from 'react'
import type { ReactNode } from 'react'
import {
  locales,
  DEFAULT_LOCALE,
  getTranslation,
  LOCALE_API_LANGUAGE
} from '@/i18n/config'
import type { Locale, TranslationKeys } from '@/i18n/config'

interface I18nContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  translations: TranslationKeys
  apiLanguage: string
}

const I18nContext = createContext<I18nContextValue | null>(null)

const STORAGE_KEY = 'app-locale'

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && stored in locales) return stored as Locale
  const browserLang = navigator.language.split('-')[0]
  if (browserLang in locales) return browserLang as Locale
  return DEFAULT_LOCALE
}

interface I18nProviderProps {
  children: ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setLocaleState(getInitialLocale())
    setMounted(true)
  }, [])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem(STORAGE_KEY, newLocale)
    document.documentElement.lang = newLocale
  }, [])

  const t = useCallback((key: string) => getTranslation(locale, key), [locale])

  const value: I18nContextValue = {
    locale,
    setLocale,
    t,
    translations: locales[locale],
    apiLanguage: LOCALE_API_LANGUAGE[locale]
  }

  if (!mounted) {
    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
