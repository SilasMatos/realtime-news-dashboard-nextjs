'use client'

import { NewsCard } from '@/features/dashboard/components/news-card'
import type { NewsArticle } from '@/types/news'
import { useI18n } from '@/i18n/i18n-provider'

interface NewsListProps {
  articles: NewsArticle[]
}

export function NewsList({ articles }: NewsListProps) {
  const [featured, ...rest] = articles
  const { t } = useI18n()

  return (
    <div className="space-y-8">
      {featured && (
        <div className="mb-12">
          <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            {t('dashboard.featuredStory')}
          </h2>
          <NewsCard article={featured} featured />
        </div>
      )}

      <div>
        <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          {t('dashboard.latestUpdates')}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      </div>
    </div>
  )
}
