import { NewsCard } from "@/feactures/dashboard/components/news-card"
import { NewsArticle } from "@/types/news"

interface NewsListProps {
  articles: NewsArticle[]
}

export function NewsList({ articles }: NewsListProps) {
  const [featured, ...rest] = articles

  return (
    <div className="space-y-8">
      {/* Featured Article */}
      {featured && (
        <div className="mb-12">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">Featured Story</h2>
          <NewsCard article={featured} featured />
        </div>
      )}

      {/* Regular Articles Grid */}
      <div>
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">Latest Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      </div>
    </div>
  )
}
