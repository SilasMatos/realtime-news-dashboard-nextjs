export interface NewsParams {
  q: string;               // termo de busca (ex: "bitcoin", "futebol", etc)
  language?: string;       // ex: "pt", "en"
  from?: string;           // data inicial (YYYY-MM-DD)
  to?: string;             // data final (YYYY-MM-DD)
  sortBy?: "relevancy" | "popularity" | "publishedAt";
  domains?: string;        // domínios separados por vírgula (ex: "globo.com,bbc.com")
}

export interface NewsArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export interface NewsResponse {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
}
