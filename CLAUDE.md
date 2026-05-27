# Project Context
Stack: Next.js + React + TypeScript
Deploy: Cloudflare Pages
Origin: Migrated from Lovable

## Code Standards
- TypeScript strict mode
- Tailwind for styling
- No inline styles
- Components in /components, pages in /app

## What to avoid
- No useEffect for data fetching (use server components)
- No any types
- No console.log in production code

## Testing
- Vitest for unit tests
- Playwright for e2e

## Cloudflare Constraints
- Use @cloudflare/next-on-pages adapter
- No Node.js APIs not supported in Workers
- Edge runtime preferred
