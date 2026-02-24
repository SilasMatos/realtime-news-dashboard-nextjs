'use client'

import { useI18n } from '@/i18n/i18n-provider'

export function DashboardError() {
  const { t } = useI18n()

  return (
    <div className="mb-12">
      <h1 className="font-serif text-4xl font-light tracking-tight text-balance mb-4 lg:text-6xl">
        {t('dashboard.errorTitle')}
      </h1>
      <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
        {t('dashboard.errorDescription')}
      </p>
    </div>
  )
}
