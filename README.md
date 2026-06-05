# ✈️ Air Connection — Travel & Tours Portal

[![Tech Stack](https://img.shields.io/badge/Stack-React%2019%20%7C%20Vite%207%20%7C%20Tailwind%20v4-blue)](https://airconnection.pk)
[![IATA Authorized](https://img.shields.io/badge/IATA-Accredited%20Agent-emerald)](https://airconnection.pk)
[![SEO Optimized](https://img.shields.io/badge/SEO-AEO%20%26%20GEO%20Ready-red)](https://airconnection.pk)

Welcome to the official web application for **Air Connection Travel and Tours**, Pakistan's premier IATA-authorized travel agency and visa consultancy based in Blue Area, Islamabad. This portal is built using modern front-end technologies to deliver a fast, responsive, and search-optimized user experience.

---

## 🚀 Modern Tech Stack

*   **Core Framework**: [React 19](https://react.dev/) (utilizing concurrent rendering features).
*   **Build Tool**: [Vite 7](https://vite.dev/) (delivering instant Hot Module Replacement).
*   **Routing**: [TanStack Router v1](https://tanstack.com/router) (fully type-safe, file-based routing with automatic route tree generation).
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using inline `@theme` configuration and CSS variables).
*   **Animations**: [Framer Motion](https://www.framer.com/motion/) (smooth state transitions, splash screen, and card entrance reveals).
*   **Component Libraries**: [Radix UI](https://www.radix-ui.com/) (fully accessible primitives for Popovers, Dropdowns, Selects, and Dialogs).
*   **Icons**: [Lucide React](https://lucide.dev/) (consistent and clean visual system).

---

## 🛠️ Project Architecture & Directory Structure

```text
Airconnection/
├── public/                 # Static assets served at the root (robots.txt, sitemap.xml, favicons)
├── scripts/                # Node build and automation utilities
│   └── generate-sitemap.mjs# Auto-generates search sitemaps from route configurations
├── src/
│   ├── assets/             # Images, logos, and banners processed by Vite
│   ├── components/
│   │   ├── site/           # Main layout components (Navbar, Footer, BookingWidget, etc.)
│   │   └── ui/             # Reusable design system components (Button, Input, Popover)
│   ├── data/               # Static datasets (Airlines, FAQs, Visas, Testimonials)
│   ├── routes/             # TanStack File-Based Routing pages
│   ├── main.tsx            # Main application entry point
│   ├── routeTree.gen.ts    # Auto-generated TanStack Route tree configuration
│   └── styles.css          # Tailwind CSS theme configurations and custom utilities
├── package.json            # Node dependencies and build pipeline commands
├── tsconfig.json           # Type-safety configurations
└── vite.config.ts          # Vite bundling and routing plugins configuration
```

---

## ✨ Key Features & Configurations

### 1. Interactive Booking Widget
Located in [BookingWidget.tsx](file:///c:/Users/munaw/OneDrive/Desktop/Airconnection/src/components/site/BookingWidget.tsx), it is fully mobile-responsive and handles four distinct booking streams:
*   **Flights**: Supports Round-Trip, One-Way, and Multi-City routes with live form validations and WhatsApp direct inquiry triggers.
*   **Umrah**: Package selector (Economy, 3-Star, 4-Star, 5-Star) with durations, travelers counts, and official consultation triggers.
*   **Visa**: Integrated directory covering 50+ countries with automatic category routing.
*   **Hotels**: Destination search with check-in/out ranges and category selection.

### 2. High-Performance Media Assets
*   Banners and photographic images are served in modern **WebP** formats (`umrah-hero.webp` and `air_ticketing_hero_1777294022698.webp`) to optimize file size.
*   Logos are scaled and optimized (under 25 KB) to eliminate Largest Contentful Paint (LCP) performance penalties.

### 3. Comprehensive SEO, AEO, & GEO Setup
*   **Domain Alignment**: All canonical paths, Open Graph (OG) meta tags, and schema indices are unified to `https://airconnection.pk`.
*   **JSON-LD Structured Data**: Embedded in `__root.tsx` (main local business metadata), `air-ticketing.tsx` (Ticketing FAQs), `pakistan-visa.tsx` (Visa Services), and `umrah.tsx` (Umrah Package offers) to allow search engines and AI engines (ChatGPT, Gemini, Perplexity) to index and cite pricing.
*   **Sitemaps & Crawl Policies**: Automated sitemap generation script `generate-sitemap.mjs` runs during build pipelines to dynamically update sitemaps.

---

## 💻 Getting Started Locally

### Prerequisites
*   [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
*   [npm](https://www.npmjs.com/)

### Installation
1.  Clone the repository and navigate to the project directory:
    ```bash
    cd Airconnection
    ```
2.  Install all dependencies:
    ```bash
    npm install
    ```

### Run the Development Server
Launch Vite's development server locally:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser to view the application.

---

## 📦 Production Builds & Deployment

### Build Command
Compile the application, optimize assets, generate the route tree, and output production-ready static assets in the `dist` folder:
```bash
npm run build
```
*(Note: The build pipeline automatically runs `scripts/generate-sitemap.mjs` to keep the sitemap updated).*

### Preview Production Build Locally
Verify the production build locally:
```bash
npm run preview
```

### Automation & Script Overview
*   `npm run dev`: Starts local Vite dev server.
*   `npm run build`: Bundles the codebase for production.
*   `npm run prebuild`: Runs the XML sitemap generator.
*   `npm run lint`: Analyzes code for code styling or formatting issues.
*   `npm run format`: Automatically formats code using Prettier.
