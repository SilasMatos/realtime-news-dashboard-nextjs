import { NewsList } from '@/features/dashboard/components/news-list'
import { NewsAPIService } from '@/http/news-api'
import { DashboardHeader } from '@/features/dashboard/components/dashboard-header'
import { DashboardError } from '@/features/dashboard/components/dashboard-error'

export async function NewsPage() {
  try {
    const newsResponse = await NewsAPIService.getTechNews()

    return (
      <main className="container mx-auto px-4 py-8 lg:py-12">
        <DashboardHeader />
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
