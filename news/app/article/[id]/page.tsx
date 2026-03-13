// ============================================================
// Article Detail Page — /article/[id]
// ============================================================
// Displays a single full article.
// Practice: dynamic routes, params, async data fetching,
// and consuming class methods in a page component.
// ============================================================

// TODO: Import your service and model
// import { NewsApiService } from "@/lib/services/NewsApiService";
// import { NewsArticle } from "@/lib/models/NewsArticle";

// TODO: Define the page props (Next.js App Router style).
// interface ArticlePageProps {
//   params: Promise<{ id: string }>;
// }

// TODO: Build the page component.
// export default async function ArticlePage({ params }: ArticlePageProps) {
//   const { id } = await params;
//
//   // TODO: Instantiate NewsApiService and fetch the article by ID.
//   // const service = new NewsApiService();
//   // const article = await service.fetchArticleById(id);
//
//   // TODO: Handle the case where article is null (not found).
//   // Return a "Article not found" UI or call notFound() from "next/navigation".
//
//   // TODO: Render the full article:
//   //   - Category badge
//   //   - Title (use article.title)
//   //   - Author and formatted date (use article.formatPublishedDate())
//   //   - Reading time (use article.readingTime)
//   //   - "Breaking News" indicator if applicable (use article.isBreakingNews)
//   //   - Full content (use article.content — NOT getSummary())
//   //   - Image if article.imageUrl exists
//   //   - Back link to home page
// }

export default function ArticlePage() {
  return <div>TODO: Implement Article Detail Page</div>;
}
