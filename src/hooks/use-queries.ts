import { useQuery } from "@tanstack/react-query";
import { getNews } from "@/services/queries";
import type { NewsParams, NewsResponse } from "@/types/news";

export function useNews(params: NewsParams) {
  return useQuery<NewsResponse>({
    queryKey: ["news", params],
    queryFn: () => getNews(params),
    enabled: !!params.q,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}
