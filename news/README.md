# News App — Full-Stack Learning Project

No templates. No copy-paste. No vibes-only coding.

This is a hands-dirty exercise in building a full-stack news aggregator from a blank editor — the kind of thing that separates engineers who *understand* systems from engineers who just glue libraries together and pray.

The point: sharpen the skills that actually get tested in frontend and full-stack interviews. Not trivia questions about the virtual DOM. Not reciting hook rules from memory. The real stuff — can you model data, wire up an API, manage state, handle errors, and build a UI that doesn't fall apart when something unexpected happens?

Every line is written manually. Autocomplete is off. If it compiles, it's because we understood it, not because an AI finished the sentence.

Scoped to be completable in a few days.

## Learning Goals

### Backend — Node.js + Express
- Setting up an Express server with routes and middleware
- Designing RESTful endpoints (`GET`, `POST`, `PUT`, `DELETE`)
- URL parameters, query strings, and request bodies
- Fetching data from third-party APIs and transforming it
- Error handling, status codes, and response formatting
- Serving the API on a separate port and connecting it to the frontend

### Frontend — React + Hooks + State Management
- `useState` for local component state
- `useEffect` for data fetching and side effects
- `useCallback` and `useMemo` for performance
- Lifting state up and passing data via props
- Conditional rendering and list rendering
- Controlled inputs (search, filters)
- Consuming our own Express API with `fetch`

### Glue — Connecting It All
- Frontend calls Express API, Express calls third-party API (or serves mock data)
- Understanding the full request chain: browser → React → Express → external API → back
- Managing loading, error, and empty states across the stack
- Environment variables for API keys and URLs

## Phases

### Phase 1: Data Modeling with Classes ← Current
Build TypeScript classes (`NewsArticle`, `Category`) to practice OOP fundamentals — constructors, methods, getters, static factories. Work with mock data.

### Phase 2: React UI with Hooks
Wire up components (`ArticleCard`, `ArticleList`, `CategoryNav`, `SearchBar`) using `useState` and `useEffect`. Render mock data on screen. Practice state management patterns.

### Phase 3: Express API
Stand up an Express server with endpoints like:
- `GET /api/articles` — list all articles (with optional `?category=` filter)
- `GET /api/articles/:id` — single article by ID
- `GET /api/categories` — list categories

Swap the frontend from reading mock data directly to fetching from these endpoints.

### Phase 4: Third-Party API
Replace mock data in Express with real data from an external news API. Transform external responses into our own `NewsArticle` shape. Handle API keys, rate limits, and errors.

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 19, Next.js 16, TypeScript |
| Styling | Tailwind CSS 4 |
| Backend | Node.js, Express |
| Data | Mock data → Express API → Third-party news API |

## Project Structure

```
news/
├── app/                        # Next.js pages
│   ├── page.tsx                # Main news feed
│   ├── layout.tsx              # Root layout
│   └── article/[id]/page.tsx   # Article detail
├── components/                 # React components
│   ├── ArticleCard.tsx
│   ├── ArticleList.tsx
│   ├── CategoryNav.tsx
│   ├── SearchBar.tsx
│   └── ErrorBoundary.tsx
├── lib/                        # Business logic
│   ├── models/
│   │   ├── NewsArticle.ts
│   │   └── Category.ts
│   └── services/
│       ├── NewsApiService.ts
│       ├── ArticleFilter.ts
│       ├── BookmarkManager.ts
│       └── PaginationController.ts
├── data/
│   └── mockArticles.ts         # Seed data
├── server/                     # Express API (Phase 3)
│   └── (coming soon)
└── public/
    └── images/
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
