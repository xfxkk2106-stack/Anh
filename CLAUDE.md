# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**生日祝福项目 (Birthday Blessing Project)** — A pure frontend project for creating birthday blessings/greetings. No backend involved.

## Tech Stack

- **Vite** — Build tool and dev server
- **React** — UI framework
- **Framer Motion** — Declarative animations and transitions
- **Three.js** — Star field particle effect (raw WebGL, not r3f)
- **@react-three/fiber + drei** — Available but currently unused (star field uses raw Three.js)

## Commands

```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
```

## Architecture

Single-page scroll experience with three scenes managed by `App.jsx`:

1. **Opening** (`components/Opening/`) — StarField (Three.js shader particles), Title (Framer Motion fade-up), Envelope (click-to-open SVG)
2. **StarMapSection** (`components/Sections/`) — Scroll-triggered star map with date and message
3. **LetterSection** (`components/Sections/`) — Typewriter effect letter with background image

Scene flow: `opening → transition (1.2s) → main (scrollable sections)`

Key patterns:
- `useTypewriter` hook drives the letter-by-letter reveal
- `ScrollReveal` wraps elements for viewport-triggered entrance animations
- Star field uses raw Three.js with custom GLSL shaders (not React Three Fiber)
- All styling is inline or co-located — no CSS modules or separate stylesheets
