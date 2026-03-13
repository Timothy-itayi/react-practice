// ============================================================
// PaginationController Class (Generic)
// ============================================================
// Manages pagination state for any array of items.
// Practice: generics, computed state, boundary checking.
// ============================================================
//
// Usage example (once implemented):
//   const paginator = new PaginationController(articles, 10);
//   paginator.getCurrentPageItems(); // first 10 articles
//   paginator.nextPage();
//   paginator.getCurrentPageItems(); // articles 11-20
//   paginator.hasNextPage;  // true/false
//
// ============================================================

export class PaginationController<T> {
  // TODO: Define private properties:
  //   - items: T[]         — the full dataset
  //   - pageSize: number   — items per page
  //   - currentPage: number — current page index (1-based)

  constructor() {
    // TODO: Accept items (T[]) and pageSize (number, default 10).
    // Initialize currentPage to 1.
  }

  // TODO: getCurrentPageItems(): T[]
  // Return the slice of items for the current page.
  // Hint:
  //   const start = (this.currentPage - 1) * this.pageSize;
  //   const end = start + this.pageSize;
  //   return this.items.slice(start, end);

  // TODO: nextPage(): void
  // Move to the next page if one exists. Do nothing if already on last page.

  // TODO: prevPage(): void
  // Move to the previous page if one exists. Do nothing if already on page 1.

  // TODO: goToPage(page: number): void
  // Jump to a specific page. Clamp to valid range (1 to totalPages).
  // Hint: Math.max(1, Math.min(page, this.totalPages))

  // TODO: get totalPages(): number
  // Calculate total pages. Hint: Math.ceil(this.items.length / this.pageSize)

  // TODO: get hasNextPage(): boolean
  // True if currentPage < totalPages.

  // TODO: get hasPrevPage(): boolean
  // True if currentPage > 1.

  // TODO: get page(): number
  // Return the current page number.

  // TODO: get totalItems(): number
  // Return total number of items in the dataset.

  // TODO: reset(): void
  // Reset to page 1.

  // TODO: updateItems(newItems: T[]): void
  // Replace the dataset with new items and reset to page 1.
  // Useful when filters change and the underlying data is different.
}
