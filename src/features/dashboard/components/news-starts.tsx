'use client'

import { Card } from '@/components/ui/card'
import { Newspaper, TrendingUp, Clock } from 'lucide-react'
import type { NewsArticle } from '@/types/news'
import { useI18n } from '@/i18n/i18n-provider'

interface NewsStatsProps {
  articles: NewsArticle[]
}

export function NewsStats({ articles }: NewsStatsProps) {
  const { t, locale } = useI18n()
  const today = new Date().toDateString()
  const todayArticles = articles.filter(
    article => new Date(article.publishedAt).toDateString() === today
  ).length

  return (
    <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
      <Card className="border-border/50 p-6 transition-colors hover:border-primary/50">
        <div className="flex items-center gap-4">
          <div className="rounded-lg bg-primary/10 p-3">
            <Newspaper className="size-6 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              {t('dashboard.totalArticles')}
            </p>
            <p className="text-2xl font-semibold">{articles.length}</p>
          </div>
        </div>
      </Card>

      <Card className="border-border/50 p-6 transition-colors hover:border-primary/50">
        <div className="flex items-center gap-4">
          <div className="rounded-lg bg-secondary/10 p-3">
            <TrendingUp className="size-6 text-secondary" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              {t('dashboard.todayNews')}
            </p>
            <p className="text-2xl font-semibold">{todayArticles}</p>
          </div>
        </div>
      </Card>

      <Card className="border-border/50 p-6 transition-colors hover:border-primary/50">
        <div className="flex items-center gap-4">
          <div className="rounded-lg bg-accent/50 p-3">
            <Clock className="size-6 text-accent-foreground" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              {t('dashboard.lastUpdated')}
            </p>
            <p className="text-2xl font-semibold">
              {new Date().toLocaleTimeString(locale, {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
