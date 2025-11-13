# Collège Albert Camus - Bois-Colombes

Official website for **Collège Albert Camus** in Bois-Colombes, France. Built with Next.js, shadcn/ui components, and React Query for data management.

This monorepo contains the school's web presence with modern tooling and components.

## Project Overview

- **Institution**: Collège Albert Camus, Bois-Colombes, France
- **Domain**: https://clg-camus-bois-colombes.ac-versailles.fr
- **Purpose**: Official school website with news, resources, and information for students, parents, and staff

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **Data Management**: React Query (TanStack Query)
- **Fonts**: Roboto Condensed, Yrsa, Roboto Mono
- **Deployment**: Ready for production deployment

## Monorepo Structure

```
├── apps/
│   └── web/              # Next.js web application
├── packages/
│   ├── ui/               # Shared UI components (shadcn/ui)
│   ├── eslint-config/    # ESLint configuration
│   └── typescript-config/# TypeScript configuration
└── turbo.json           # Build pipeline configuration
```

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run linting
pnpm lint
```

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Tailwind

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button"
```

## React Query (TanStack Query)

React Query is configured for efficient data fetching and caching throughout the website:

- **Query Client**: Configured with 5min stale time and 10min cache time
- **DevTools**: Available in development mode for debugging
- **Provider**: Wrapped around the entire app for global state management

### Usage Examples

Perfect for fetching school data, news, events, and student resources:

```tsx
import { useQuery, useMutation } from '@tanstack/react-query'

// Fetch school news/announcements
const { data: news, isLoading } = useQuery({
  queryKey: ['school-news'],
  queryFn: () => fetch('/api/news').then(res => res.json())
})

// Fetch student schedule/calendar
const { data: calendar } = useQuery({
  queryKey: ['school-calendar'],
  queryFn: () => fetch('/api/calendar').then(res => res.json())
})

// Submit contact form
const contactMutation = useMutation({
  mutationFn: (formData) => fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData)
  })
})
```

The React Query DevTools will be available in development mode to help debug your queries.
