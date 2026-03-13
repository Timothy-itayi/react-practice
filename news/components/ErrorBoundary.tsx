// ============================================================
// ErrorBoundary Component (CLASS COMPONENT)
// ============================================================
// This is the ONE place in modern React where you MUST use a
// class component. There is no hook equivalent for catching
// render errors.
//
// Practice: React.Component, lifecycle methods, static methods,
// and class-based state management.
// ============================================================

"use client";

import React from "react";

// TODO: Define the props interface.
// interface ErrorBoundaryProps {
//   children: React.ReactNode;
//   fallback?: React.ReactNode;  // optional custom fallback UI
// }

// TODO: Define the state interface.
// interface ErrorBoundaryState {
//   hasError: boolean;
//   error: Error | null;
// }

// TODO: Implement the class component.
//
// class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
//
//   constructor(props: ErrorBoundaryProps) {
//     super(props);
//     // TODO: Initialize state with hasError: false, error: null
//   }
//
//   // TODO: static getDerivedStateFromError(error: Error): ErrorBoundaryState
//   // This static lifecycle method is called when a child component throws.
//   // Return the new state: { hasError: true, error }
//   // Note: this is a STATIC method — it doesn't have access to `this`.
//
//   // TODO: componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void
//   // This lifecycle method is called after an error is caught.
//   // Use it for side effects like logging the error.
//   // console.error("ErrorBoundary caught:", error, errorInfo);
//   // In production, you'd send this to an error tracking service.
//
//   // TODO: render()
//   // If hasError is true:
//   //   - If a custom fallback prop was provided, render that
//   //   - Otherwise, render a default error UI with:
//   //     - An error message
//   //     - A "Try Again" button that resets state to { hasError: false, error: null }
//   //       using this.setState(...)
//   // If no error, render this.props.children
// }

// Placeholder until you implement the class above
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
