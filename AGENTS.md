# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server (http://localhost:5173)
pnpm build        # Production build → build/client + build/server
pnpm start        # Run production server from built output
pnpm typecheck    # TypeScript type checking
pnpm lint         # ESLint checks
pnpm lint:fix     # Auto-fix ESLint issues
pnpm format       # Format with Prettier
pnpm format:check # Check formatting without modifying
```

There are no tests configured in this project.

## Architecture

**Daily Quiz** is a React Router v7 SSR app (Vite + TypeScript) that serves one quiz question per day. Deployed to Vercel.

### UI stack

- **Tailwind CSS v4** — `@tailwindcss/vite` + `tailwindcss`; global styles in `app/app.css` (imported from `app/root.tsx`). `tw-animate-css` adds animation utilities.
- **shadcn/ui** — Components follow the shadcn pattern; CLI package `shadcn`, registry config in `components.json` (style **radix-vega**, base color **zinc**, CSS variables). Primitives from **`radix-ui`**.
- **Icons** — `lucide-react`.
- **Class merging & variants** — `clsx` + `tailwind-merge` and `class-variance-authority`; `cn()` lives in `app/lib/utils.ts`.
- **Theming** — `next-themes` for light/dark (or system) preference.
- **Motion** — `motion` (Motion for React) for transitions / animated UI where used.
- **Fonts** — `@fontsource-variable/public-sans` for the primary typeface.
- **Forms & dates (UI-adjacent)** — `react-hook-form`, `react-day-picker` when those patterns are needed.

Shared UI building blocks live under `app/components/ui/`; layout and page composition under `app/components/`.

### Request Flow

1. **Server loader** (`routes/home.tsx`): Calculates which question to show using `START_DATE` env var + days elapsed → array index into `app/data/questions.server.ts`
2. **Client loader** (`routes/home.tsx`): Guards against timezone manipulation (prevents viewing future questions)
3. **Zustand store** (`app/stores/quiz-store.ts`): Persists all quiz state to LocalStorage, keyed by date string (YYYY-MM-DD)

### Question Types

Defined in `app/types/quiz-question.ts` — four types with distinct validation logic in `app/lib/validateAnswer.ts`:

- **multiple-choice**: A/B/C/D, `correctAnswer` is index 0–3
- **estimation**: Numeric with optional `tolerance` (exact) and `precision` (percentage)
- **exact-match**: Text with `acceptedVariations` array (case-insensitive)
- **top-five**: 5 correct answers, each with `variations`; partial scoring supported

Score is always 0%, 75% (close/partial), or 100%.

### State Management

`app/stores/quiz-store.ts` uses Zustand + immer + LocalStorage persistence. Key actions: `submitAnswer()`, `revealHint()`. The store prevents re-submission after `isCompleted` and enforces per-type attempt limits from env vars (`VITE_MAX_ATTEMPTS_*`).

### Environment Variables

Validated with Zod at startup (`app/lib/env.ts` / `app/lib/env.server.ts`):

- `START_DATE` (server-only, required): ISO date — first quiz question maps to index 0
- `VITE_MAX_ATTEMPTS_MULTIPLE_CHOICE` (default: 2)
- `VITE_MAX_ATTEMPTS_ESTIMATION`, `VITE_MAX_ATTEMPTS_EXACT_MATCH`, `VITE_MAX_ATTEMPTS_TOP_FIVE` (default: 5)

### Path Alias

`~/` maps to `./app/` (configured in `tsconfig.json` and `vite.config.ts`).

### Adding Quiz Questions

Questions live in `app/data/questions.server.ts` as a typed array. Each entry must match the discriminated union type in `app/types/quiz-question.ts`. New questions append to the end (index = days since START_DATE).
