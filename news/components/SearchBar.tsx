// ============================================================
// SearchBar Component
// ============================================================
// Text input for searching articles.
// Practice: controlled inputs, debouncing, and event handlers.
// ============================================================

// TODO: Import React hooks
// "use client";
// import { useState } from "react";

// TODO: Define props.
// interface SearchBarProps {
//   onSearch: (query: string) => void;
//   placeholder?: string;
// }

// TODO: Build the component.
// export default function SearchBar({ onSearch, placeholder = "Search articles..." }: SearchBarProps) {
//
//   // TODO: Create a local state for the input value.
//   // const [query, setQuery] = useState("");
//
//   // TODO: Create a handleChange function.
//   // Update local state AND call onSearch with the new value.
//   //
//   // BONUS: Implement debouncing so onSearch isn't called on every keystroke.
//   // Hint: use setTimeout and clearTimeout, or look into useDeferredValue.
//
//   // TODO: Create a handleClear function that resets the input and calls onSearch("").
//
//   return (
//     <div className="relative">
//       {/* TODO: Render a text input with value={query} and onChange={handleChange} */}
//       {/* TODO: Render a clear button (X) when query is not empty */}
//     </div>
//   );
// }

export default function SearchBar() {
  return <div>TODO: Implement SearchBar</div>;
}
