import { apiClient } from "@/http/api-client"
import type { NewsParams, NewsResponse } from "@/types/news"

export async function getNews(params: NewsParams): Promise<NewsResponse> {
  const response = await apiClient.get<NewsResponse>(
    process.env.NEXT_PUBLIC_NEWS_API_URL ?? "",
    {
      params: {
        q: params.q,
        language: params.language || "pt",
        from: params.from,
        to: params.to,
        sortBy: params.sortBy || "publishedAt",
        domains: params.domains,
        apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
      },
    }
  )

  return response.data
}
