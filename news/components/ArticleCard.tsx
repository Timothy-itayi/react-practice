// ============================================================
// ArticleCard Component
// ============================================================
// Displays a single article as a card in the feed.
// Practice: receiving a class instance as a prop and calling
// its methods/getters in JSX.
// ============================================================

// TODO: Import NewsArticle from your models
// import { NewsArticle } from "@/lib/models/NewsArticle";

// TODO: Define the props interface.
// interface ArticleCardProps {
//   article: NewsArticle;
//   onBookmarkToggle?: (articleId: string) => void;
//   isBookmarked?: boolean;
// }

// TODO: Build the component.
// export default function ArticleCard({ article, onBookmarkToggle, isBookmarked }: ArticleCardProps) {
//   return (
//     <article className="...">
//
//       {/* TODO: Display the category as a badge/tag */}
//       {/* Hint: article.category */}
//
//       {/* TODO: Display the article title */}
//       {/* Make it a link to /article/[id] */}
//
//       {/* TODO: Display the summary using article.getSummary() */}
//
//       {/* TODO: Display metadata row:
//           - Author name
//           - Formatted date using article.formatPublishedDate()
//           - Reading time using article.readingTime getter
//           - "Breaking" indicator if article.isBreakingNews
//       */}
//
//       {/* TODO: Add a bookmark button that calls onBookmarkToggle */}
//       {/* Toggle visual state based on isBookmarked prop */}
//
//     </article>
//   );
// }

export default function ArticleCard() {
  return <div>TODO: Implement ArticleCard</div>;
}
