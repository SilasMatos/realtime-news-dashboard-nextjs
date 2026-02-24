'use client'

import { useI18n } from '@/i18n/i18n-provider'

interface DashboardHeaderProps {
  category?: string
}

const CATEGORY_I18N_MAP: Record<string, string> = {
  technology: 'navbar.technology',
  breaking: 'navbar.breakingNews',
  headlines: 'navbar.latestHeadlines',
  world: 'navbar.worldNews',
  local: 'navbar.localNews',
  football: 'navbar.football',
  basketball: 'navbar.basketball',
  tennis: 'navbar.tennis',
  f1: 'navbar.formula1',
  markets: 'navbar.markets',
  stocks: 'navbar.stocks',
  crypto: 'navbar.crypto',
  finance: 'navbar.finance',
  ai: 'navbar.ai',
  gadgets: 'navbar.gadgets',
  startups: 'navbar.startups',
  apps: 'navbar.apps',
  movies: 'navbar.movies',
  music: 'navbar.music',
  gaming: 'navbar.gaming',
  celebrities: 'navbar.celebrities',
  science: 'navbar.science',
  health: 'navbar.health',
  politics: 'navbar.politics'
}

export function DashboardHeader({
  category = 'technology'
}: DashboardHeaderProps) {
  const { t } = useI18n()

  const i18nKey = CATEGORY_I18N_MAP[category]
  const categoryLabel = i18nKey ? t(i18nKey) : category

  return (
    <div className="mb-12">
      <h1 className="font-serif text-4xl font-light tracking-tight text-balance mb-4 lg:text-6xl">
        {categoryLabel}
      </h1>
      <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
        {t('dashboard.subtitle')}
      </p>
    </div>
  )
}
