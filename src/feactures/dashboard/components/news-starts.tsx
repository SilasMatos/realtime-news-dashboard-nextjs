import { Card } from "@/components/ui/card"
import { Newspaper, TrendingUp, Clock } from "lucide-react"
import { NewsArticle } from "@/types/news"

interface NewsStatsProps {
  articles: NewsArticle[]
}

export function NewsStats({ articles }: NewsStatsProps) {
  const today = new Date().toDateString()
  const todayArticles = articles.filter((article) => new Date(article.publishedAt).toDateString() === today).length

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
      <Card className="p-6 border-border/50 hover:border-primary/50 transition-colors">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <Newspaper className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">Total Articles</p>
            <p className="text-2xl font-semibold">{articles.length}</p>
          </div>
        </div>
      </Card>

      <Card className="p-6 border-border/50 hover:border-primary/50 transition-colors">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-secondary/10">
            <TrendingUp className="h-6 w-6 text-secondary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">Today's News</p>
            <p className="text-2xl font-semibold">{todayArticles}</p>
          </div>
        </div>
      </Card>

      <Card className="p-6 border-border/50 hover:border-primary/50 transition-colors">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-accent/50">
            <Clock className="h-6 w-6 text-accent-foreground" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">Last Updated</p>
            <p className="text-2xl font-semibold">
              {new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
