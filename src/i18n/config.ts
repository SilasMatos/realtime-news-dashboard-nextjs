import en from "@/i18n/locales/en.json"
import pt from "@/i18n/locales/pt.json"
import es from "@/i18n/locales/es.json"

export const locales = { en, pt, es } as const

export type Locale = keyof typeof locales
export type TranslationKeys = typeof en

export const DEFAULT_LOCALE: Locale = "pt"

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  pt: "Português",
  es: "Español",
}

export const LOCALE_API_LANGUAGE: Record<Locale, string> = {
  en: "en",
  pt: "pt",
  es: "es",
}

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split(".")
  let current: unknown = obj

  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key]
    } else {
      return path
    }
  }

  return typeof current === "string" ? current : path
}

export function getTranslation(locale: Locale, key: string): string {
  const translations = locales[locale]
  return getNestedValue(translations as unknown as Record<string, unknown>, key)
}
