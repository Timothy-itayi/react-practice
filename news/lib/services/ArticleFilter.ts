// ============================================================
// ArticleFilter Class
// ============================================================
// Provides chainable filtering and sorting for article arrays.
// Practice: method chaining, immutability, and fluent API design.
// ============================================================
//
// Usage example (once implemented):
//   const results = new ArticleFilter(articles)
//     .byCategory("technology")
//     .byDateRange(startDate, endDate)
//     .sortBy("publishedAt", "desc")
//     .getResults();
//
// ============================================================

import { NewsArticle } from "../models/NewsArticle";

export class ArticleFilter {
  // TODO: Define a private property to hold the current filtered array.
  //   private articles: NewsArticle[];

  constructor() {
    // TODO: Accept a NewsArticle[] and store a COPY of it (don't mutate the original).
    // Hint: [...articles] or articles.slice()
  }

  // TODO: byCategory(category: string): ArticleFilter
  // Filter articles to only those matching the given category.
  // IMPORTANT: return `this` so methods can be chained.

  // TODO: byDateRange(start: Date, end: Date): ArticleFilter
  // Filter articles where publishedAt is between start and end (inclusive).
  // Return `this`.

  // TODO: bySearchTerm(query: string): ArticleFilter
  // Filter articles where title OR content includes the query (case-insensitive).
  // Return `this`.

  // TODO: recentOnly(): ArticleFilter
  // Keep only articles where isRecent() returns true.
  // Return `this`.

  // TODO: sortBy(field: "publishedAt" | "title" | "readingTime", direction?: "asc" | "desc"): ArticleFilter
  // Sort the internal articles array by the given field.
  // Default direction to "desc".
  // Return `this`.
  //
  // Hint for sorting:
  //   this.articles.sort((a, b) => {
  //     const valA = a[field]; // or call the getter
  //     const valB = b[field];
  //     ... compare and apply direction ...
  //   });

  // TODO: limit(count: number): ArticleFilter
  // Keep only the first `count` articles. Return `this`.

  // TODO: getResults(): NewsArticle[]
  // Return the current filtered/sorted array. This is the terminal method.

  // TODO: get count(): number
  // Return the current number of articles after all filters applied.
}
