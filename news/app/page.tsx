// ============================================================
// Home Page — Main News Feed
// ============================================================
// The entry point of your app. Ties together all your classes
// and components.
//
// This is a SERVER component by default in Next.js App Router.
// For interactive features (search, category clicks, bookmarks),
// you'll need to either:
//   a) Make this a client component with "use client", OR
//   b) Extract interactive parts into client components and
//      compose them here.
//
// Recommended approach: keep this as a server component for the
// initial data fetch, and use client components for interactivity.
// ============================================================

// TODO: Import your services, models, and components
// import { NewsApiService } from "@/lib/services/NewsApiService";
// import { Category } from "@/lib/models/Category";
// import ArticleList from "@/components/ArticleList";
// import CategoryNav from "@/components/CategoryNav";
// import SearchBar from "@/components/SearchBar";
// import ErrorBoundary from "@/components/ErrorBoundary";

// TODO: Build the page.
// export default async function Home() {
//
//   // TODO: Instantiate NewsApiService
//   // const service = new NewsApiService();
//
//   // TODO: Fetch all articles
//   // const articles = await service.fetchArticles();
//
//   // TODO: Fetch categories (or derive them from articles)
//   // const categoryNames = await service.fetchCategories();
//   // const categories = categoryNames.map(slug => Category.fromSlug(slug));
//
//   return (
//     <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
//       <header className="border-b border-zinc-200 dark:border-zinc-800">
//         <div className="mx-auto max-w-4xl px-4 py-6">
//           {/* TODO: App title / logo */}
//           {/* TODO: SearchBar component */}
//         </div>
//       </header>
//
//       <main className="mx-auto max-w-4xl px-4 py-8">
//         {/* TODO: CategoryNav component */}
//
//         {/* TODO: Wrap ArticleList in ErrorBoundary */}
//         {/* <ErrorBoundary> */}
//         {/*   <ArticleList articles={articles} /> */}
//         {/* </ErrorBoundary> */}
//       </main>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950">
      <main className="text-center">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          News App
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          TODO: Wire up components and classes. Start with Phase 1.
        </p>
      </main>
    </div>
  );
}
