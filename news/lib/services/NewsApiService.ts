// ============================================================
// NewsApiService Class
// ============================================================
// Handles all data fetching for news articles.
// Practice: async methods, error handling, encapsulation,
// and the Singleton pattern.
// ============================================================

import { NewsArticle } from "../models/NewsArticle";

// TODO: You'll need mock data to start. Import it once you create it:
// import { mockArticles } from "../../data/mockArticles";

export class NewsApiService {
  // TODO: Define a private property to hold the base URL for API requests.
  //   private baseUrl: string;
  //
  // BONUS (Singleton pattern):
  //   private static instance: NewsApiService;
  //   static getInstance(): NewsApiService { ... }
  //   Make the constructor private so only getInstance can create one.

  constructor() {
    // TODO: Accept an optional baseUrl string parameter.
    // Default to something like "https://api.example.com" or leave empty for mock mode.
  }

  // TODO: async fetchArticles(category?: string): Promise<NewsArticle[]>
  // For now, return mock data filtered by category if provided.
  // Later, replace with a real fetch() call.
  //
  // Steps:
  //   1. Start with your mock articles array
  //   2. If category is provided, filter to only that category
  //   3. Map raw data to NewsArticle instances using NewsArticle.fromApiResponse()
  //      or by calling `new NewsArticle(...)` directly
  //   4. Return the array
  //
  // Wrap in try/catch — throw a meaningful error on failure.

  // TODO: async fetchArticleById(id: string): Promise<NewsArticle | null>
  // Find a single article by its id from the mock data.
  // Return null if not found.

  // TODO: async searchArticles(query: string): Promise<NewsArticle[]>
  // Search articles where title or content includes the query string.
  // Make the search case-insensitive.
  // Hint: .toLowerCase() on both the query and the fields you're checking.

  // TODO: async fetchCategories(): Promise<string[]>
  // Return a unique list of all categories from the articles.
  // Hint: new Set(articles.map(a => a.category)) then spread into array.
}
