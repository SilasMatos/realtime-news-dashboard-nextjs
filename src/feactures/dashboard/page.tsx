import { NewsList } from "@/feactures/dashboard/components/news-list"
import { NewsStats } from "@/feactures/dashboard/components/news-starts"
import { UseQueryOptions } from "@tanstack/react-query"
import { NewsAPIService } from '@/services/news-api'

export default async function NewsPage() {
  try {
    // Busca notícias usando SSR
    const newsResponse = await NewsAPIService.getTechNews()
    
    return (



        <main className="container mx-auto px-4 py-8 lg:py-12">
          <div className="mb-12">
            <h1 className="font-serif text-4xl lg:text-6xl font-light tracking-tight text-balance mb-4">
              Últimas  Notícias de Tecnologia
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              Fique informado com as últimas notícias de tecnologia do Globo e Estadão
            </p>
          </div>


     
          <NewsList articles={newsResponse.articles} />
        </main>

    )
  } catch (error) {
    console.error('Erro ao buscar notícias:', error)
    
    return (
  
    
        <main className="container mx-auto px-4 py-8 lg:py-12">
          <div className="mb-12">
            <h1 className="font-serif text-4xl lg:text-6xl font-light tracking-tight text-balance mb-4">
              Erro ao Carregar Notícias
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              Não foi possível carregar as notícias no momento. Tente novamente mais tarde.
            </p>
          </div>
        </main>

  )

  }
}