import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, User } from "lucide-react"
import { NewsArticle } from "@/types/news"

interface NewsCardProps {
  article: NewsArticle
  featured?: boolean
}

export function NewsCard({ article, featured = false }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  if (featured) {
    return (
      <Card className="overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 group">
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="relative h-64 lg:h-full overflow-hidden">
            <img
              src={article.urlToImage || "/placeholder.svg"}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="font-medium">
                  {article.source.name}
                </Badge>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {formatDate(article.publishedAt)}
                </span>
              </div>

              <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight mb-4 text-balance group-hover:text-primary transition-colors">
                {article.title}
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">{article.description || 'Descrição não disponível'}</p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border/50">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>{article.author || 'Autor não informado'}</span>
              </div>

              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Read more
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.urlToImage || "/placeholder.svg"}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="outline" className="text-xs">
            {article.source.name}
          </Badge>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formatDate(article.publishedAt)}
          </span>
        </div>

        <h3 className="font-serif text-xl font-light leading-tight mb-3 text-balance group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1">{article.description || 'Descrição não disponível'}</p>

        <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-auto">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <User className="h-3 w-3" />
            <span className="truncate">{article.author || 'Autor não informado'}</span>
          </div>

          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
          >
            Read
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </Card>
  )
}
