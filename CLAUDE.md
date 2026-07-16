# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

`tomcolarusso.com` — a personal website built as a Vite + Vue 3 (`<script setup>`, TypeScript) single-page app. Styling is Tailwind CSS v4 with shadcn-vue components. There is no backend, no test suite, and no data layer; content lives in the Vue views and the filesystem.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check with `vue-tsc -b` (all three tsconfig projects) then build for production to `dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — ESLint, fails on any warning (`--max-warnings 0`)
- `npm run typecheck` — `vue-tsc --noEmit` without emitting

There are no tests in this repo.

## Architecture

- **Routing** (`src/router/index.ts`): four lazy-loaded routes — Home, Experience, Photos, Contact — mapping to `src/views/*View.vue`. Uses `createWebHistory`, so any deploy must fall back to `index.html` for client-side routes. `App.vue` is the shell: `AppHeader` + `NavDrawer` (mobile) + `<RouterView>` + `AppFooter`.
- **Photo gallery** (`src/views/PhotosView.vue`): photos are discovered at build time via `import.meta.glob('@/assets/photos/*.{jpg,jpeg,png,...}', { eager: true })`. To add photos, drop image files into `src/assets/photos/` — no code change needed. Alt text is derived from the filename. `src/types/image-shim.d.ts` declares the uppercase extensions (`.JPEG`, `.JPG`, etc.) so imports type-check.
- **Styling** (`src/style.css`): Tailwind v4 with an `@theme` block defining the color tokens (`--color-background`, `--color-primary`, `--color-muted`, etc.). The design is a fixed dark theme. Reference colors as semantic classes (`bg-background`, `text-muted-foreground`) rather than hard-coded values.
- **Icons**: use `@lucide/vue`. Note `vite.config.ts` aliases the deprecated `lucide-vue-next` (which shadcn-vue's generator emits) to `@lucide/vue` — import from `@lucide/vue` directly in new code.
- `@/` is aliased to `src/` (in `vite.config.ts` and every tsconfig).

## Two-tier TypeScript / lint strictness

The repo intentionally splits config so that generated UI components are held to a looser standard than hand-written app code:

- **App code** (`tsconfig.app.json`, everything except `src/components/ui/**`): very strict — `noUncheckedIndexedAccess`, `noUnusedLocals`/`noUnusedParameters`, etc. ESLint runs `vueTsConfigs.strictTypeChecked`.
- **UI components** (`tsconfig.ui.json`, `src/components/ui/**`): looser (e.g. no `noUncheckedIndexedAccess`). These are **excluded from both `tsconfig.app.json` and the ESLint config**, so lint/strict-check failures there won't surface.

When adding non-generated code, keep it out of `src/components/ui/` so it gets the strict treatment.

## shadcn-vue components

`components.json` configures shadcn-vue (style `default`, base color `zinc`, lucide icons). UI primitives live in `src/components/ui/<name>/` with an `index.ts` barrel; variants use `class-variance-authority`, and `cn()` (`src/lib/utils.ts`, clsx + tailwind-merge) merges classes. Prefer generating new primitives via the shadcn-vue CLI over writing them by hand. Components are built on `reka-ui` (with some `radix-vue`).
