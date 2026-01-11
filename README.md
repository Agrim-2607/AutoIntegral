# AutoIntegral

AutoIntegral — Hackathon edition. A platform that connects users with local mechanics based on vehicle type (Car, Scooty, Bike, Auto/E-rikshaw) and city/location.

## Table of Contents

- Website Structure
- Round 1 — What We Built
- Round 2 — What’s New
- Data Flow & Diagrams (placeholders)
- Database Schema (detailed)
- Technical Stack
- File Structure
- Environment & Setup
## Website Structure (required order)

1) Header

- **Logo**: top-left, links to home.
- **Login / Signup**: functional buttons that open a modal (popup) containing the Supabase Auth UI or custom forms. Modal logic: store open state in context, validate inputs, and call the Auth endpoints from the `server/` (Express) API or directly via Supabase JS SDK in `src/supabaseClient.js`.

2) About Us

- **Who we are**: Short introduction: a community-driven mechanic discovery and booking platform built during a hackathon.
- **What we do**: Connects users to vetted local mechanics by vehicle type and city; lists services and enables feedback.
- **How we do it**: Client-side search + server-side (or Supabase) filters, user authentication, and relational storage of mechanics, services, and feedback.
- **Our Vision**: To make vehicle maintenance accessible, transparent, and locally scalable.

3) Search Filters

- **City selector**: dropdown or autocomplete for city names (supports location biasing if geolocation is available).
- **Vehicle type selector**: options — Car, Scooty, Bike, Auto/E-rikshaw.
- **Find Nearest Mechanics button**: triggers a search that applies chosen city and vehicle filters, optionally uses geolocation to compute distance, and returns sorted mechanic profiles.

4) Mechanic Interface

- **Profile cards**: display mechanic name, rating (avg rating and stars), location (city/area), estimated distance (if geolocation used), specialties, and a quick contact/book button.
- **Detail modal/page**: expanded profile with full services offered, prices, availability, and feedback list.

5) Footer

- **Logo and tagline**: "Connecting People with Mechanics"
- **Feedback / Support** button: anchors to feedback UI or route `/feedback`.
- **FAQ**: short collapsible FAQ with a link to the full FAQ page.
- **Social media**: handles/links for Twitter, Instagram, LinkedIn.


## Round 1 — What We Built

This project started as a hackathon prototype (Round 1). The initial scope was intentionally minimal to validate core UX and layout. Key characteristics of the Round 1 prototype:

- Minimal mechanic data: two example mechanics hard-coded as mock data (see `src/data/mockMechanics.js`). Each record contained `name`, `location`, and `rating`.
- Basic mechanic display: a simple list or cards rendered by `src/components/MechanicsListSection.jsx` using the mock data.
- Header: included `Header.jsx` with logo and non-functional (dead) `Login` / `Signup` buttons that opened UI placeholders but did not perform live authentication.
- About Us: short, static content implemented in `src/components/AboutSection.jsx` (basic text only).
- Feedback: simple feedback option present in the UI but stored as mock/local state — no relational feedback persistence in Round 1.
- No search/filtering by city or vehicle type — the app did not support `Find Nearest Mechanics` in Round 1; this is a Round 2 priority.

Files that reflect the Round 1 prototype:

- `src/data/mockMechanics.js` — contains the two example mechanic entries used to populate the UI.
- `src/components/MechanicsListSection.jsx` — renders the mechanic cards from mock data.
- `src/components/Header.jsx` — top nav with logo and placeholder login/signup buttons.
- `src/components/AboutSection.jsx` — basic about text used in the prototype.
- `src/components/Footer.jsx` — basic footer with a link to feedback (non-persisted in Round 1).

This Round 1 prototype validated layout and basic user flows and provided the foundation for Round 2 enhancements (live Auth, filters, real data, RLS, and distance search).

## Round 2 — What’s New (Transition from prototype → functional app)

- Live Auth: real login/signup flows using Supabase Auth (Email magic links or email/password). Hook the login modal to `src/supabaseClient.js`.
- City & Vehicle filters: indexed queries and server-side filters so the mechanic search is dynamic and performance.
- Contact / FAQ: add a dedicated FAQ page and `Contact Us` with a toll-free number placeholder (e.g., 1800-000-000).


## Data Flow & Diagrams (placeholders)

- DFD (Level 0) — Placeholder: image/diagram showing Users ↔ Frontend ↔ Backend (Express or Supabase) ↔ Database (Supabase Postgres). Description: user actions (search, book, review) flow from UI to API which queries Supabase; responses return mechanic lists or confirmation.
- DFD (Level 1) — Placeholder: image/diagram breaking down authentication flow, search flow, booking flow, and feedback flow.
- Database Schema Diagram — Placeholder: image/diagram linking `auth.users`, `profiles`, `mechanics`, `services`, and `feedback` tables with FK arrows.

How to add diagrams

- Place PNG/SVG files under `docs/diagrams/` and reference them here. Example:

	- `docs/diagrams/dfd-level0.png` — Level 0 DFD
	- `docs/diagrams/schema.png` — Database schema diagram

Include a short alt-text and a one-paragraph description for each diagram.

## Database Schema (detailed)

Primary tables and recommended columns (Supabase/Postgres):

- `auth.users` (Supabase-managed)
	- `id` (uuid, PK)
	- `email` (text)
	- `created_at` (timestamp)

- `profiles`
	- `id` (uuid, PK) — same as `auth.users.id` (recommended)
	- `display_name` (text)
	- `phone` (text)
	- `role` (text) — values: `customer`, `mechanic`, `admin`
	- `city` (text)
	- `avatar_url` (text)

- `mechanics`
	- `id` (uuid, PK)
	- `profile_id` (uuid, FK -> `profiles.id`)
	- `name` (text)
	- `vehicle_types` (text[]) — e.g., ['car','bike']
	- `specialties` (text[]) — e.g., ['brakes','engine']
	- `city` (text)
	- `geo` (geography/point or numeric lat/long)
	- `rating_avg` (numeric)
	- `rating_count` (int)
	- `contact` (text)

- `services`
	- `id` (uuid, PK)
	- `mechanic_id` (uuid, FK -> `mechanics.id`) — optional if service catalog is global
	- `title` (text) — e.g., "Oil Change"
	- `vehicle_type` (text)
	- `duration_minutes` (int)
	- `price` (numeric)
	- `description` (text)

- `feedback`
	- `id` (uuid, PK)
	- `user_id` (uuid, FK -> `auth.users.id`)
	- `mechanic_id` (uuid, FK -> `mechanics.id`)
	- `service_id` (uuid, FK -> `services.id`) — optional
	- `rating` (int) — 1..5
	- `comment` (text)
	- `created_at` (timestamp)

Notes:

- Keep `profiles` as the central user metadata table linked to `auth.users`.
- Use `geo` + indexed queries for nearest-mechanic searches. Use PostGIS or simple lat/long with Haversine calculations in queries.
- Add Supabase RLS policies so users can only edit their own `profiles` and `feedback`.

## Technical Stack

- Frontend: React (Vite), JSX, Tailwind CSS, PostCSS
- Backend: Node.js, Express.js (optional server to proxy or add business logic), Nodemon for development
- Database/Auth: Supabase (Postgres + Auth + Realtime)
- Dev tooling: npm, Vite, ESLint/Prettier (optional)

## File Structure (recommended mapping)

- `src/` (frontend)
	- `main.jsx` — Vite entry
	- `App.jsx` — Router and page layout
	- `index.css` — Tailwind + PostCSS
	- `supabaseClient.js` — creates Supabase client (reads `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`)
	- `context/AuthContext.jsx` — modal open state, auth state, and user provider
	- `components/Header.jsx` — Header with logo and Login/Signup modal triggers
	- `components/AboutSection.jsx` — Who we are / What we do / How we do it / Vision
	- `components/SearchFilters.jsx` — City + Vehicle selectors and Find button
	- `components/MechanicCard.jsx` — profile card with rating/location/distance
	- `components/MechanicProfileModal.jsx` — detailed mechanic view + book button
	- `components/Footer.jsx` — tag line, FAQ link, feedback/support button

- `server/` (optional backend)
	- `index.js` — Express server with endpoints for advanced queries, proxied Supabase calls, or webhook handling
	- `routes/auth.js` — optional server-side auth helpers
	- `routes/mechanics.js` — advanced search endpoints (distance calculation, filters)

- `src/api/` — small client wrappers if calling Supabase directly from frontend (e.g., `fetchMechanics`, `postFeedback`)

## Environment & Setup

Create a `.env` (or use your host env) with:

- `VITE_SUPABASE_URL` — Supabase project URL
- `VITE_SUPABASE_ANON_KEY` — Supabase anon key
- `SUPABASE_SERVICE_ROLE_KEY` — only on server-side (never commit)

Prerequisites:

- Node.js 16+ and npm