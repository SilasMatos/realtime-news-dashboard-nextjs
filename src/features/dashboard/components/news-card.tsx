'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Calendar, User } from 'lucide-react'
import Image from 'next/image'
import type { NewsArticle } from '@/types/news'
import { useI18n } from '@/i18n/i18n-provider'

interface NewsCardProps {
  article: NewsArticle
  featured?: boolean
}

export function NewsCard({ article, featured = false }: NewsCardProps) {
  const { t, locale } = useI18n()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(locale, {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  if (featured) {
    return (
      <Card className="overflow-hidden border-border/50 transition-all duration-300 hover:border-primary/50 group">
        <div className="grid gap-0 lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-auto lg:min-h-[320px] overflow-hidden">
            <Image
              src={article.urlToImage || '/placeholder.svg'}
              alt={article.title}
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <Badge variant="secondary" className="font-medium">
                  {article.source.name}
                </Badge>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="size-3" />
                  {formatDate(article.publishedAt)}
                </span>
              </div>

              <h2 className="mb-4 font-serif text-2xl font-light leading-snug text-balance transition-colors group-hover:text-primary sm:text-3xl lg:text-4xl">
                {article.title}
              </h2>

              <p className="mb-6 leading-relaxed text-muted-foreground text-pretty">
                {article.description || t('dashboard.noDescription')}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-border/50 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="size-4" />
                <span>{article.author || t('dashboard.unknownAuthor')}</span>
              </div>

              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                {t('common.readMore')}
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="flex h-full flex-col overflow-hidden border-border/50 transition-all duration-300 hover:border-primary/50 group">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={article.urlToImage || '/placeholder.svg'}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {article.source.name}
          </Badge>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="size-3" />
            {formatDate(article.publishedAt)}
          </span>
        </div>

        <h3 className="mb-3 font-serif text-lg font-light leading-snug text-balance transition-colors group-hover:text-primary sm:text-xl">
          {article.title}
        </h3>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {article.description || t('dashboard.noDescription')}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <User className="size-3" />
            <span className="max-w-[140px] truncate">
              {article.author || t('dashboard.unknownAuthor')}
            </span>
          </div>

          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
          >
            {t('common.read')}
            <ExternalLink className="size-3" />
          </a>
        </div>
      </div>
    </Card>
  )
}
