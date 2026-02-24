import { NewsList } from '@/features/dashboard/components/news-list'
import { NewsAPIService } from '@/http/news-api'
import { DashboardHeader } from '@/features/dashboard/components/dashboard-header'
import { DashboardError } from '@/features/dashboard/components/dashboard-error'

interface NewsPageProps {
  category?: string
  query?: string
}

export async function NewsPage({
  category = 'technology',
  query
}: NewsPageProps) {
  try {
    const searchTerm = query ?? category
    const newsResponse = await NewsAPIService.getNewsByCategory(searchTerm)

    return (
      <main className="container mx-auto px-4 py-8 lg:py-12">
        <DashboardHeader category={category} />
        <NewsList articles={newsResponse.articles} />
      </main>
    )
  } catch {
    return (
      <main className="container mx-auto px-4 py-8 lg:py-12">
        <DashboardError />
      </main>
    )
  }
}
