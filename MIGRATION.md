# Next.js Migration

This project has been migrated to Next.js.

The new Next.js project is located at: ../fortunes-nextjs

## Migration notes
- Node version: 20 (via nvm)
- Next.js version: 16 (App Router)
- Original framework: Create React App (React 16, class components)
- The fortune cookie image is served from `public/FortuneCookie.png`
- Fortune strings extracted from `src/App.js` and stored in `src/app/fortunes.json`
- App component converted from class component to functional component with `useState`
- Cookie component updated to use Next.js `<Image>` with `'use client'` directive
