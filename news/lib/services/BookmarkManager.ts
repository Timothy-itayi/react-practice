// ============================================================
// BookmarkManager Class
// ============================================================
// Manages bookmarked article IDs using localStorage.
// Practice: class-based state management, localStorage API,
// JSON serialization, and defensive coding.
// ============================================================
//
// Usage example (once implemented):
//   const bookmarks = new BookmarkManager();
//   bookmarks.add("article-123");
//   bookmarks.isBookmarked("article-123"); // true
//   bookmarks.getAll(); // ["article-123"]
//   bookmarks.remove("article-123");
//
// ============================================================

export class BookmarkManager {
  // TODO: Define a private property for the localStorage key.
  //   private readonly storageKey: string;
  //
  // TODO: Define a private Set<string> to hold bookmarked article IDs in memory.
  //   private bookmarks: Set<string>;

  constructor() {
    // TODO: Accept an optional storageKey parameter (default: "news-bookmarks").
    // On construction, load any existing bookmarks from localStorage.
    // Hint: JSON.parse(localStorage.getItem(this.storageKey) || "[]")
    // Watch out: localStorage is not available during SSR in Next.js.
    // Wrap in a try/catch or check typeof window !== "undefined".
  }

  // TODO: add(articleId: string): void
  // Add the article ID to the Set and persist to localStorage.

  // TODO: remove(articleId: string): void
  // Remove the article ID from the Set and persist to localStorage.

  // TODO: toggle(articleId: string): boolean
  // If bookmarked, remove it. If not, add it.
  // Return the new bookmarked state (true if now bookmarked, false if removed).

  // TODO: isBookmarked(articleId: string): boolean
  // Return whether the article ID is in the Set.

  // TODO: getAll(): string[]
  // Return all bookmarked article IDs as an array.

  // TODO: clear(): void
  // Remove all bookmarks and update localStorage.

  // TODO: get count(): number
  // Return the number of bookmarked articles.

  // ---------- Private Helper ----------

  // TODO: private persist(): void
  // Save the current Set to localStorage as a JSON array.
  // Hint: localStorage.setItem(this.storageKey, JSON.stringify([...this.bookmarks]))
  // Guard against SSR (typeof window !== "undefined").
}
