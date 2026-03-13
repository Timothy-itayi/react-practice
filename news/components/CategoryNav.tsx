// ============================================================
// CategoryNav Component
// ============================================================
// Horizontal nav bar for filtering articles by category.
// Practice: event handling, active state management, and
// using the Category class.
// ============================================================

// TODO: Import the Category class
// import { Category } from "@/lib/models/Category";

// TODO: Define props.
// interface CategoryNavProps {
//   categories: Category[];
//   activeCategory: string | null;  // slug of the currently selected category, null = "All"
//   onCategoryChange: (slug: string | null) => void;
// }

// TODO: Build the component.
// export default function CategoryNav({ categories, activeCategory, onCategoryChange }: CategoryNavProps) {
//   return (
//     <nav className="flex gap-2 overflow-x-auto py-4">
//
//       {/* TODO: Render an "All" button that sets activeCategory to null */}
//       {/* Highlight it when activeCategory is null */}
//
//       {/* TODO: Map over categories and render a button for each */}
//       {/* Use category.displayLabel for the button text */}
//       {/* Use category.slug to identify which is active */}
//       {/* Highlight the active one with different styling */}
//       {/* onClick should call onCategoryChange(category.slug) */}
//
//     </nav>
//   );
// }

export default function CategoryNav() {
  return <div>TODO: Implement CategoryNav</div>;
}
