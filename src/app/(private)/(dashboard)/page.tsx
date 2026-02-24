import { Suspense } from 'react'
import { NewsPage } from '@/features/dashboard/page'
import { NewsListSkeleton } from '@/features/dashboard/components/news-list-skeleton'

interface DashboardPageProps {
  searchParams: Promise<{ category?: string; q?: string }>
}

export default async function DashboardPage({
  searchParams
}: DashboardPageProps) {
  const params = await searchParams
  const category = params.category ?? 'technology'
  const query = params.q

  return (
    <Suspense key={`${category}-${query}`} fallback={<NewsListSkeleton />}>
      <NewsPage category={category} query={query} />
    </Suspense>
  )
}
