# Learner's Interactive App (Ages 5-6) - Implementation Plan

An interactive educational platform designed for children aged 5-6, featuring five core pages and a learner-specific login system.

## Scope Summary
- **Login Page:** Capture learner's name, registration number, and learning aid.
- **Home Page:** Welcoming landing area with kid-friendly navigation.
- **About Page:** Information about the app's purpose.
- **Learn Page:** Rich multimedia content (phonics, digital flashcards, picture-word association, clickable letters).
- **Play Page:** Simple interactive games/animations.
- **Reflect Page:** Basic progress visualization or summary for the learner.

## Non-Goals
- Real backend authentication (persisted via `localStorage` for this session).
- Professional-grade high-fidelity games (we will use simple React/CSS-based interactive components).
- Hosting actual large video/audio files (we will use placeholders or royalty-free external links).

## Assumptions
- Target audience is 5-6 years old: UI should be high-contrast, large-buttoned, and highly visual.
- Data persistence is client-side only (no Supabase).
- Multimedia (songs, audios, videos) will be simulated or embedded from public sources.

## Affected Areas
- **Frontend:** Core React application, routing (`react-router-dom`), and component library (shadcn/ui).
- **Assets:** Icons, placeholder images, and audio/video containers.
- **State Management:** Local storage for session/learner info.

---

## Phases

### Phase 1: Foundation & Routing
- Install `react-router-dom`, `lucide-react`, and `framer-motion`.
- Set up the basic layout with a colorful, kid-friendly navigation bar.
- Create placeholder routes for all 6 pages (Login, Home, About, Learn, Play, Reflect).

### Phase 2: Authentication (Mock)
- Build the **Login Page** with fields for Name, Registration Number, and Learning Aid.
- Use `localStorage` to store user data.
- Implement a simple "Protected Route" logic so learners must "login" to see the main content.

### Phase 3: Learn Page (Multimedia & Phonics)
- **Clickable Letters:** A-Z grid that plays sound (mock) or shows an image.
- **Digital Flashcards:** Interactive cards with picture-word associations.
- **Multimedia Section:** Video/Audio player components for songs.
- **Phonics Activities:** Simple drag-and-drop or click-to-match UI.

### Phase 4: Home, Play & Reflect Pages
- **Home:** Hero section with "Start Learning" CTA.
- **Play:** A simple interactive memory game or "Pop the Bubbles" animation using `framer-motion`.
- **Reflect:** A simple "Sticker Board" or "Star Chart" showing simulated progress.
- **About:** Simple textual/visual explanation of the app.

### Phase 5: Styling & Polish
- Apply bright colors (Primary: Blue/Yellow/Green).
- Add fun animations and transitions between pages.
- Ensure responsive design for tablets/desktops.

---

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Setup routing, layout, and Mock Auth.
2. frontend_engineer — Build the complex "Learn" and "Play" interactive components.

**Per-agent instructions:**

### 1. frontend_engineer (Initial Setup & Auth)
- **Phases:** 1 & 2
- **Scope:** 
  - Install dependencies: `bun add react-router-dom framer-motion lucide-react`.
  - Create a main `Layout` component with a colorful navbar.
  - Implement the `LoginPage` that saves user data to `localStorage`.
  - Set up routing in `App.tsx`.
- **Files:** `src/App.tsx`, `src/components/layout/MainLayout.tsx`, `src/pages/LoginPage.tsx`.
- **Depends on:** none
- **Acceptance criteria:** App boots with a login screen; entering details redirects to a "Home" page that displays the learner's name.

### 2. frontend_engineer (Interactive Features)
- **Phases:** 3, 4 & 5
- **Scope:** 
  - Create `LearnPage` with Phonics grid and Flashcards.
  - Create `PlayPage` with at least one mini-game (e.g., matching game).
  - Create `ReflectPage` and `AboutPage`.
  - Use `framer-motion` for bouncy animations.
- **Files:** `src/pages/LearnPage.tsx`, `src/pages/PlayPage.tsx`, `src/pages/ReflectPage.tsx`, `src/pages/HomePage.tsx`.
- **Depends on:** Phase 1
- **Acceptance criteria:** All 5 main pages are accessible; "Learn" page has interactive letter/word components; UI is visually appealing for children.

**Do not dispatch:**
- supabase_engineer (No backend required)
- quick_fix_engineer (Frontend handles all logic here)
