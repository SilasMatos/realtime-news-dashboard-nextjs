import { NewsResponse, NewsParams } from '@/types/news'

const NEWS_API_KEY = 'ee4ae45cb8c448a28ffab7aeac431018'
const NEWS_API_BASE_URL = 'https://newsapi.org/v2'

export class NewsAPIService {
  private static async fetchFromAPI(endpoint: string, params: Record<string, string>): Promise<NewsResponse> {
    const url = new URL(`${NEWS_API_BASE_URL}${endpoint}`)
    
    // Adiciona a API key aos parâmetros
    params.apiKey = NEWS_API_KEY
    
    // Adiciona os parâmetros à URL
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        url.searchParams.append(key, value)
      }
    })

    const response = await fetch(url.toString(), {
      headers: {
        'User-Agent': 'NewsApp/1.0',
      },
      cache: 'no-store', // Para garantir dados frescos no SSR
    })

    if (!response.ok) {
      throw new Error(`NewsAPI error: ${response.status} - ${response.statusText}`)
    }

    return response.json()
  }

  static async getEverything(params: NewsParams): Promise<NewsResponse> {
    const searchParams: Record<string, string> = {}
    
    if (params.q) searchParams.q = params.q
    if (params.language) searchParams.language = params.language
    if (params.from) searchParams.from = params.from
    if (params.to) searchParams.to = params.to
    if (params.sortBy) searchParams.sortBy = params.sortBy
    if (params.domains) searchParams.domains = params.domains

    return this.fetchFromAPI('/everything', searchParams)
  }

  static async getTechNews(): Promise<NewsResponse> {
    return this.getEverything({
      q: 'futebol',
      domains: 'globo.com,estadao.com',
      language: 'pt',
      sortBy: 'publishedAt'
    })
  }
}