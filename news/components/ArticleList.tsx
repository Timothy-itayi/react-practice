// ============================================================
// ArticleList Component
// ============================================================
// Renders a list of ArticleCards with loading and empty states.
// Practice: mapping over class instances, conditional rendering,
// and composing components.
// ============================================================

// TODO: Import what you need
// import { NewsArticle } from "@/lib/models/NewsArticle";
// import ArticleCard from "./ArticleCard";

// TODO: Define the props interface.
// interface ArticleListProps {
//   articles: NewsArticle[];
//   loading?: boolean;
//   onBookmarkToggle?: (articleId: string) => void;
//   bookmarkedIds?: Set<string>;
// }

// TODO: Build the component.
// export default function ArticleList({ articles, loading, onBookmarkToggle, bookmarkedIds }: ArticleListProps) {
//
//   // TODO: If loading is true, render a loading skeleton or spinner.
//
//   // TODO: If articles array is empty, render an "No articles found" message.
//
//   // TODO: Map over articles and render an ArticleCard for each.
//   //   - Pass the article instance as a prop
//   //   - Pass isBookmarked by checking bookmarkedIds.has(article.id)
//   //   - Pass onBookmarkToggle
//   //   - Don't forget the key prop (use article.id)
//
//   return (
//     <div className="grid gap-6">
//       {/* TODO: Render ArticleCards here */}
//     </div>
//   );
// }

export default function ArticleList() {
  return <div>TODO: Implement ArticleList</div>;
}
