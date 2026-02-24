import type { NewsResponse, NewsParams } from "@/types/news"

const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY ?? ""
const NEWS_API_BASE_URL =
  process.env.NEXT_PUBLIC_NEWS_API_URL ?? "https://newsapi.org/v2"

export const CATEGORY_QUERY_MAP: Record<string, string> = {
  breaking: "breaking news",
  headlines: "headlines",
  world: "world",
  local: "local news",
  football: "football soccer",
  basketball: "basketball NBA",
  tennis: "tennis ATP",
  f1: "formula 1 racing",
  markets: "stock market economy",
  stocks: "stocks trading",
  crypto: "cryptocurrency bitcoin",
  finance: "personal finance",
  ai: "artificial intelligence",
  gadgets: "gadgets devices",
  startups: "startups tech",
  apps: "mobile apps",
  movies: "movies cinema",
  music: "music industry",
  gaming: "video games gaming",
  celebrities: "celebrities entertainment",
  science: "science research",
  health: "health medicine",
  politics: "politics government",
  technology: "technology",
}

export class NewsAPIService {
  private static async fetchFromAPI(
    endpoint: string,
    params: Record<string, string>,
    revalidate = 300
  ): Promise<NewsResponse> {
    const url = new URL(`${NEWS_API_BASE_URL}${endpoint}`)

    params.apiKey = NEWS_API_KEY

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        url.searchParams.append(key, value)
      }
    })

    const response = await fetch(url.toString(), {
      headers: { "User-Agent": "NewsApp/1.0" },
      next: { revalidate },
    })

    if (!response.ok) {
      throw new Error(
        `NewsAPI error: ${response.status} - ${response.statusText}`
      )
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

    return this.fetchFromAPI("/everything", searchParams)
  }

  static async getTopHeadlines(
    params: Partial<NewsParams> & { country?: string; category?: string }
  ): Promise<NewsResponse> {
    const searchParams: Record<string, string> = {}

    if (params.q) searchParams.q = params.q
    if (params.country) searchParams.country = params.country
    if (params.category) searchParams.category = params.category
    if (params.language) searchParams.language = params.language

    return this.fetchFromAPI("/top-headlines", searchParams)
  }

  static async getNewsByCategory(
    category: string,
    language = "pt"
  ): Promise<NewsResponse> {
    const query = CATEGORY_QUERY_MAP[category] ?? category
    return this.getEverything({
      q: query,
      language,
      sortBy: "publishedAt",
    })
  }

  static async getTechNews(language = "pt"): Promise<NewsResponse> {
    return this.getNewsByCategory("technology", language)
  }
}