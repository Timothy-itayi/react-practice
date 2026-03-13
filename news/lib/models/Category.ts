// ============================================================
// Category Class
// ============================================================
// Represents a news category (e.g. "Technology", "Sports").
// Practice: simple class with methods and computed properties.
// ============================================================

export class Category {
  // TODO: Define properties:
  //   - name (string) — display name, e.g. "Technology"
  //   - slug (string) — URL-safe identifier, e.g. "technology"
  //   - description (string)
  //   - articleCount (number) — defaults to 0

  constructor() {
    // TODO: Accept name, slug, description, and optional articleCount.
    // Set articleCount to 0 if not provided.
  }

  // TODO: toUrlPath(): string
  // Return a URL path segment for this category.
  // Example: "/category/technology"

  // TODO: get isEmpty(): boolean
  // Return true if articleCount is 0.

  // TODO: get displayLabel(): string
  // Return formatted string like "Technology (42)" — name plus count in parens.

  // TODO: incrementCount(amount?: number): void
  // Increase articleCount by `amount` (default 1).
  // Hint: this mutates the instance's articleCount.

  // TODO: static fromSlug(slug: string): Category
  // Factory that creates a Category from just a slug.
  // Capitalize the slug for the name, use empty string for description.
  // Hint: slug.charAt(0).toUpperCase() + slug.slice(1)
}
