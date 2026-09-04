# Personal Finance & Wealth Tracker — Complete Product & Engineering Roadmap

> **Target:** Production-grade mobile app (Google Play Store) + Web Dashboard  
> **Goal:** Learn React/React Native + Node.js/TypeScript while shipping a real product  
> **Audience:** 4-year experienced Node.js backend developer leveling up to full-stack + mobile

---

## Table of Contents
1. [Market Analysis — What Top Apps Do](#1-market-analysis)
2. [Complete Feature List](#2-complete-feature-list)
3. [Tech Stack Decision](#3-tech-stack-decision)
4. [System Architecture](#4-system-architecture)
5. [Database Schema](#5-database-schema)
6. [API Architecture](#6-api-architecture)
7. [Phased Roadmap](#7-phased-roadmap)
8. [CI/CD Pipeline](#8-cicd-pipeline)
9. [Testing Strategy](#9-testing-strategy)
10. [Deployment Strategy](#10-deployment-strategy)
11. [Documentation Plan](#11-documentation-plan)
12. [Interview-Ready Talking Points](#12-interview-ready-talking-points)

---

## 1. Market Analysis

### Top Competitors & Their Differentiators

| App | Model | Key Strength | Weakness |
|---|---|---|---|
| **YNAB** | Zero-based budgeting | Intentional spending mindset | Steep learning curve, $99/yr |
| **Monarch Money** | Flexible budgeting + investments | Couples support, AI assistant | Paid only |
| **Empower** | Wealth tracking | Free, investment dashboard | Weak budgeting |
| **PocketGuard** | "What's left to spend" | Subscription tracker, Pace feature | Limited free tier |
| **Goodbudget** | Envelope method | Simple, manual = mindful | No bank sync on free tier |
| **Copilot** | AI auto-categorization | Learns patterns, Apple-only | iOS only, paid |
| **Honeydue** | Couples finance | Partner sharing, chat | Niche audience |
| **Walnut (India)** | SMS parsing | Auto-detects transactions from SMS | Outdated UX |
| **Money Manager** | Manual tracking | Popular in Asia, clean UI | No cloud sync |

### Most Selling Features (by demand)
1. **Zero-based / envelope budgeting** — users want to assign every rupee a job
2. **Net worth tracking over time** — visual growth motivates users
3. **Subscription & bill tracker** — one of the top requested features on Reddit
4. **AI auto-categorization** — saves manual effort
5. **Recurring transaction detection** — reduces re-entry
6. **Spending pace alert** — "You're 80% through your Food budget with 15 days left"
7. **Savings goals with progress bars** — gamification
8. **Offline-first** — must work without internet
9. **CSV/PDF export** — power users need data portability
10. **Biometric lock** — privacy in a financial app is non-negotiable
11. **Multi-currency** — essential for Indian diaspora and travelers
12. **Dark mode** — expected in 2026
13. **Couples/family sharing** — high LTV users
14. **Investment P&L tracking** — differentiates from basic budgeters

---

## 2. Complete Feature List

### Module 1: Authentication & Security
- [ ] Email/password signup with email verification
- [ ] JWT access tokens (15min) + Refresh tokens (30 days) with rotation
- [ ] Biometric authentication on mobile (Expo LocalAuthentication)
- [ ] PIN fallback
- [ ] Auto-lock after inactivity timeout
- [ ] Password reset via OTP
- [ ] Session management (view & revoke active sessions)
- [ ] Rate limiting on auth endpoints (OWASP compliance)

### Module 2: Account & Card Management
- [ ] Add/edit/delete Bank Accounts (Name, Balance, Account Number last-4)
- [ ] Add/edit/delete Credit Cards (Name, Limit, Outstanding, Due Date)
- [ ] Add/edit/delete Cash Wallets & Digital Wallets (UPI, PayTM etc.)
- [ ] Real-time aggregates: Total Bank Balance, Total Liabilities, Net Balance, Available Funds
- [ ] Credit utilization % with alert when > 30%
- [ ] Payment due date reminders (push notifications)
- [ ] Account color coding & icons

### Module 3: Transaction Ledger
- [ ] Add/edit/delete transactions
- [ ] Fields: Date, Description, Category, Sub-category, Source Account, Type (Debit/Credit), Amount, Notes, Tags, Receipt photo
- [ ] Auto-update source account balance on transaction add/edit/delete
- [ ] Split transactions (e.g., a restaurant bill split between Food and Entertainment)
- [ ] Recurring transactions (daily/weekly/monthly/custom) with auto-creation
- [ ] Bulk import via CSV
- [ ] SMS parsing for auto-detection (Android, optional V2 feature)
- [ ] Advanced filters: date range, category, account, amount range, tags
- [ ] Full-text search on description
- [ ] Pagination with infinite scroll
- [ ] Swipe to delete / edit on mobile

### Module 4: Budget Management
- [ ] Set monthly budget caps per category
- [ ] Zero-based budgeting mode (allocate entire income to categories)
- [ ] Envelope budgeting visual (fill-up animation)
- [ ] Real-time spend tracking vs budget
- [ ] Columns: Category, Budget, Spent, Variance, Health %
- [ ] Visual health indicators: green < 60%, yellow 60–85%, orange 85–99%, red > 100%
- [ ] Spending pace alert: "At this rate, you'll exhaust Food budget by the 20th"
- [ ] Rollover unused budget to next month (toggle per category)
- [ ] Budget templates (Starter, Aggressive Saver, 50/30/20, Zero-Based)
- [ ] Budget copy from previous month

### Module 5: Investment Portfolio Tracker
- [ ] Add/edit/delete investments
- [ ] Asset classes: Stocks, Crypto, Mutual Funds, ETFs, Fixed Deposits, Gold, Real Estate
- [ ] Fields: Name, Ticker, Asset Class, Quantity, Avg Buy Price, Buy Date, Notes
- [ ] Current Price: fetch from mock API (V1) → real API like Yahoo Finance / Alpha Vantage (V2)
- [ ] Calculated fields: Total Invested, Current Value, P&L (₹), P&L (%)
- [ ] Portfolio allocation pie chart
- [ ] Individual asset performance cards
- [ ] Overall XIRR / CAGR calculation
- [ ] SIP tracker (Systematic Investment Plan)
- [ ] Realized vs Unrealized gains

### Module 6: Financial Dashboard & Insights
- [ ] KPI Summary cards: Total Spent This Month, Net Monthly Outflow, Current Liabilities, Portfolio Value, Net Worth
- [ ] Net worth trend line chart (monthly)
- [ ] Expense breakdown pie chart by category
- [ ] Budget vs Actual bar chart
- [ ] Monthly income vs expense bar chart
- [ ] Top 5 spending categories this month
- [ ] Biggest single transactions this month
- [ ] Month-over-month comparison (this month vs last month)
- [ ] Weekly spending heatmap calendar

### Module 7: Savings Goals
- [ ] Create savings goals (Name, Target Amount, Target Date, Linked Account)
- [ ] Manual or automatic contribution tracking
- [ ] Progress bar with projected completion date
- [ ] Milestone celebrations (gamification)

### Module 8: Bills & Subscriptions
- [ ] Log recurring bills (Netflix, rent, EMIs)
- [ ] Due date calendar view
- [ ] Push notification reminders (3 days before, day of)
- [ ] Subscription spend summary (monthly, annual)
- [ ] Detect and suggest subscription cancellations

### Module 9: Reports & Export
- [ ] Monthly financial summary report
- [ ] Category-wise yearly breakdown
- [ ] Net worth history report
- [ ] Export transactions to CSV
- [ ] Generate PDF statement (monthly)
- [ ] Share report as image/PDF

### Module 10: Settings & Personalization
- [ ] Custom categories with icons and colors
- [ ] Custom sub-categories
- [ ] Currency selection (INR, USD, EUR, GBP)
- [ ] Date format preference
- [ ] First day of month/week setting
- [ ] Dark/Light/System theme
- [ ] Notification preferences
- [ ] Data backup & restore (local + cloud)
- [ ] Delete account with data wipe

---

## 3. Tech Stack Decision

### Why This Stack

```
Mobile App (Primary)     → React Native + Expo (TypeScript)
Web App (Secondary)      → React + Vite (TypeScript)
Backend API              → Node.js + Express + TypeScript
Database                 → PostgreSQL + Prisma ORM
Cache / Sessions         → Redis
Auth                     → JWT (custom) or Clerk (managed)
File Storage             → Cloudinary (receipt photos)
Push Notifications       → Expo Notifications + Firebase FCM
Charts (Mobile)          → Victory Native / react-native-gifted-charts
Charts (Web)             → Recharts
State Management         → Zustand (simple, TypeScript-first)
Server State / Caching   → TanStack Query (React Query)
Form Handling            → React Hook Form + Zod
Navigation (Mobile)      → Expo Router (file-based, similar to Next.js)
Testing (Backend)        → Jest + Supertest
Testing (Frontend)       → Jest + React Testing Library + Detox (E2E)
CI/CD                    → GitHub Actions
Backend Deploy           → Railway (Hobby → Production tier)
Web Deploy               → Vercel
Mobile Deploy            → Expo EAS Build → Google Play Store
Monitoring               → Sentry (errors) + PostHog (analytics)
API Docs                 → Swagger / OpenAPI 3.0
```

### Tech Stack Justification (Interview-Ready)

| Decision | Why |
|---|---|
| **Expo + React Native** | Single codebase for Android + iOS + Web. Expo SDK handles camera, biometrics, notifications without native config. EAS Build creates production APK/AAB directly. |
| **PostgreSQL over MongoDB** | Financial data is relational. ACID transactions are critical for balance updates. Prisma provides type-safe ORM with migrations. |
| **Prisma ORM** | Auto-generates TypeScript types from schema. Handles migrations. Prevents SQL injection natively. |
| **Zustand over Redux** | Simpler boilerplate. TypeScript-first. Fine-grained subscriptions. Easier to learn for React beginners. |
| **TanStack Query** | Handles server state, caching, background refetch, pagination — removes 60% of common async state management code. |
| **Zod for validation** | Schema validation shared between frontend and backend. Single source of truth for data shapes. |
| **Railway for backend** | Git-push deploys. Built-in PostgreSQL & Redis. Cheaper than Heroku. Auto-deploys from GitHub. |

---

## 4. System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                          │
│                                                              │
│   ┌──────────────────┐         ┌──────────────────┐         │
│   │  React Native    │         │   React Web App  │         │
│   │  Expo (Mobile)   │         │   Vite (Browser) │         │
│   │  Android / iOS   │         │   Admin/Desktop  │         │
│   └────────┬─────────┘         └────────┬─────────┘         │
└────────────┼──────────────────────────── ┼──────────────────┘
             │  HTTPS / REST API           │
             │  + JWT Bearer Token         │
┌────────────▼─────────────────────────────▼──────────────────┐
│                        API LAYER                             │
│                                                              │
│   ┌──────────────────────────────────────────────────┐      │
│   │   Node.js + Express + TypeScript                 │      │
│   │   ├── /auth       (signup, login, refresh)       │      │
│   │   ├── /accounts   (bank, cards, wallets)         │      │
│   │   ├── /transactions (CRUD + filters)             │      │
│   │   ├── /budgets    (monthly caps + analytics)     │      │
│   │   ├── /investments(portfolio)                    │      │
│   │   ├── /goals      (savings goals)                │      │
│   │   ├── /reports    (aggregations + export)        │      │
│   │   └── /users      (profile + settings)           │      │
│   └──────────────────────────────────────────────────┘      │
│                                                              │
│   ┌─────────────┐    ┌─────────┐    ┌──────────────┐       │
│   │ PostgreSQL  │    │  Redis  │    │  Cloudinary  │       │
│   │ (Primary DB)│    │ (Cache) │    │ (File Store) │       │
│   └─────────────┘    └─────────┘    └──────────────┘       │
└─────────────────────────────────────────────────────────────┘
             │
┌────────────▼────────────────────────────────────────────────┐
│                     EXTERNAL SERVICES                        │
│   Firebase FCM (Push) | Sentry (Errors) | PostHog (Analytics)│
└─────────────────────────────────────────────────────────────┘
```

### Monorepo Structure (Recommended)

```
finance-tracker/
├── apps/
│   ├── mobile/              # Expo React Native app
│   │   ├── app/             # Expo Router (file-based navigation)
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── stores/          # Zustand stores
│   │   └── package.json
│   │
│   ├── web/                 # React + Vite web dashboard
│   │   ├── src/
│   │   │   ├── pages/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   └── stores/
│   │   └── package.json
│   │
│   └── api/                 # Node.js + Express backend
│       ├── src/
│       │   ├── routes/
│       │   ├── controllers/
│       │   ├── services/
│       │   ├── middleware/
│       │   ├── prisma/
│       │   └── utils/
│       └── package.json
│
├── packages/
│   ├── shared-types/        # Shared TypeScript interfaces (DTOs)
│   ├── shared-validation/   # Shared Zod schemas
│   └── shared-utils/        # Pure utility functions (currency, date)
│
├── .github/
│   └── workflows/           # GitHub Actions CI/CD
│
├── docs/                    # API docs, ADRs, setup guides
├── package.json             # Root workspaces config (pnpm)
└── turbo.json               # Turborepo build orchestration
```

> **Why Turborepo + pnpm workspaces?** Shared types and Zod schemas are defined ONCE in `packages/` and used by both the API and the mobile/web clients. This eliminates duplicate type definitions — a key interview talking point about DRY architecture.

---

## 5. Database Schema

```sql
-- Users
CREATE TABLE users (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email         VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name          VARCHAR(100),
  currency      VARCHAR(3) DEFAULT 'INR',
  theme         VARCHAR(10) DEFAULT 'system',
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

-- Refresh Tokens (for JWT rotation)
CREATE TABLE refresh_tokens (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID REFERENCES users(id) ON DELETE CASCADE,
  token_hash TEXT NOT NULL,
  device_info TEXT,
  expires_at TIMESTAMPTZ NOT NULL,
  revoked    BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Accounts (Bank, Card, Cash, Wallet)
CREATE TABLE accounts (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id          UUID REFERENCES users(id) ON DELETE CASCADE,
  name             VARCHAR(100) NOT NULL,
  type             VARCHAR(20) NOT NULL,  -- 'bank' | 'credit_card' | 'cash' | 'wallet'
  balance          DECIMAL(15,2) DEFAULT 0,
  credit_limit     DECIMAL(15,2),         -- credit cards only
  available_limit  DECIMAL(15,2),         -- credit cards only
  due_date         DATE,                   -- credit cards only
  last_four        VARCHAR(4),
  color            VARCHAR(7),
  icon             VARCHAR(50),
  is_active        BOOLEAN DEFAULT TRUE,
  created_at       TIMESTAMPTZ DEFAULT NOW(),
  updated_at       TIMESTAMPTZ DEFAULT NOW()
);

-- Categories
CREATE TABLE categories (
  id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id   UUID REFERENCES users(id) ON DELETE CASCADE,  -- NULL = system default
  name      VARCHAR(100) NOT NULL,
  icon      VARCHAR(50),
  color     VARCHAR(7),
  type      VARCHAR(10) NOT NULL,  -- 'expense' | 'income' | 'both'
  parent_id UUID REFERENCES categories(id)  -- for sub-categories
);

-- Transactions
CREATE TABLE transactions (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id           UUID REFERENCES users(id) ON DELETE CASCADE,
  account_id        UUID REFERENCES accounts(id),
  category_id       UUID REFERENCES categories(id),
  type              VARCHAR(10) NOT NULL,   -- 'debit' | 'credit' | 'transfer'
  amount            DECIMAL(15,2) NOT NULL,
  description       TEXT,
  notes             TEXT,
  tags              TEXT[],
  date              DATE NOT NULL,
  is_recurring      BOOLEAN DEFAULT FALSE,
  recurrence_rule   JSONB,                  -- { frequency: 'monthly', day: 1 }
  receipt_url       TEXT,
  created_at        TIMESTAMPTZ DEFAULT NOW(),
  updated_at        TIMESTAMPTZ DEFAULT NOW()
);

-- Budgets
CREATE TABLE budgets (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID REFERENCES users(id) ON DELETE CASCADE,
  category_id UUID REFERENCES categories(id),
  amount      DECIMAL(15,2) NOT NULL,
  month       DATE NOT NULL,              -- Store as first day of month: 2025-01-01
  rollover    BOOLEAN DEFAULT FALSE,
  UNIQUE(user_id, category_id, month)
);

-- Investments
CREATE TABLE investments (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID REFERENCES users(id) ON DELETE CASCADE,
  name            VARCHAR(200) NOT NULL,
  ticker          VARCHAR(20),
  asset_class     VARCHAR(30) NOT NULL,   -- 'stock' | 'crypto' | 'mutual_fund' | 'etf' | 'fd' | 'gold' | 'real_estate'
  quantity        DECIMAL(20,8) NOT NULL,
  avg_buy_price   DECIMAL(15,4) NOT NULL,
  current_price   DECIMAL(15,4),
  price_updated_at TIMESTAMPTZ,
  buy_date        DATE,
  notes           TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Savings Goals
CREATE TABLE savings_goals (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id          UUID REFERENCES users(id) ON DELETE CASCADE,
  name             VARCHAR(200) NOT NULL,
  target_amount    DECIMAL(15,2) NOT NULL,
  current_amount   DECIMAL(15,2) DEFAULT 0,
  target_date      DATE,
  linked_account_id UUID REFERENCES accounts(id),
  icon             VARCHAR(50),
  color            VARCHAR(7),
  created_at       TIMESTAMPTZ DEFAULT NOW()
);

-- Net Worth Snapshots (daily job stores this)
CREATE TABLE net_worth_history (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID REFERENCES users(id) ON DELETE CASCADE,
  date            DATE NOT NULL,
  bank_balance    DECIMAL(15,2) DEFAULT 0,
  investment_value DECIMAL(15,2) DEFAULT 0,
  liabilities     DECIMAL(15,2) DEFAULT 0,
  net_worth       DECIMAL(15,2) DEFAULT 0,
  UNIQUE(user_id, date)
);
```

### Key Database Design Decisions
- **Decimal over Float** for all monetary values — avoids floating point precision bugs
- **CASCADE deletes** — deleting a user wipes all their data cleanly (GDPR compliance)
- **Tags as TEXT[]** on transactions — avoids a separate join table for simple tagging
- **Net worth history** pre-calculated daily — avoids expensive real-time aggregation for charts
- **Refresh token hashing** — tokens stored as bcrypt hashes, never plain text

---

## 6. API Architecture

### REST Conventions
```
GET    /api/v1/transactions          → list (paginated, filtered)
POST   /api/v1/transactions          → create
GET    /api/v1/transactions/:id      → get single
PATCH  /api/v1/transactions/:id      → update (partial)
DELETE /api/v1/transactions/:id      → delete
```

### Key Endpoints

```
AUTH
POST   /api/v1/auth/signup
POST   /api/v1/auth/login
POST   /api/v1/auth/refresh
POST   /api/v1/auth/logout
POST   /api/v1/auth/forgot-password
POST   /api/v1/auth/reset-password

ACCOUNTS
GET    /api/v1/accounts              → list all accounts with computed aggregates
POST   /api/v1/accounts
PATCH  /api/v1/accounts/:id
DELETE /api/v1/accounts/:id

TRANSACTIONS
GET    /api/v1/transactions?page&limit&category&account&from&to&type&search
POST   /api/v1/transactions
PATCH  /api/v1/transactions/:id
DELETE /api/v1/transactions/:id
POST   /api/v1/transactions/bulk-import  → CSV import

BUDGETS
GET    /api/v1/budgets?month=2025-01      → list with real-time spend pulled in
POST   /api/v1/budgets
PATCH  /api/v1/budgets/:id

INVESTMENTS
GET    /api/v1/investments             → list with current value calculations
POST   /api/v1/investments
PATCH  /api/v1/investments/:id
DELETE /api/v1/investments/:id
POST   /api/v1/investments/refresh-prices  → trigger price update

DASHBOARD
GET    /api/v1/dashboard/summary           → all KPI cards in one call
GET    /api/v1/dashboard/expense-breakdown → pie chart data
GET    /api/v1/dashboard/monthly-cashflow  → bar chart data
GET    /api/v1/dashboard/net-worth-history → line chart data

REPORTS
GET    /api/v1/reports/monthly?month=2025-01
GET    /api/v1/reports/export/csv?from=2025-01-01&to=2025-01-31
GET    /api/v1/reports/export/pdf?month=2025-01
```

### Middleware Stack (Express)
```typescript
app.use(helmet())           // Security headers
app.use(cors(corsConfig))   // CORS whitelist
app.use(rateLimit({...}))   // 100 req/min per IP on auth, 1000 on others
app.use(compression())      // gzip
app.use(express.json({ limit: '5mb' }))
app.use(requestLogger)      // Morgan or Pino
app.use(authenticate)       // JWT verification (except /auth routes)
app.use(errorHandler)       // Global error handler
```

---

## 7. Phased Roadmap

### Phase 0 — Foundation & Setup (Week 1–2)
**Goal:** Working monorepo with auth end-to-end

**Backend:**
- [ ] Initialize Turborepo monorepo with pnpm workspaces
- [ ] Set up `apps/api` — Express + TypeScript + Prisma + PostgreSQL
- [ ] Implement auth: signup, login, JWT + refresh token rotation
- [ ] Set up shared `packages/shared-types` and `packages/shared-validation`
- [ ] Configure ESLint + Prettier + Husky pre-commit hooks
- [ ] Write first integration tests with Jest + Supertest for auth routes
- [ ] Set up Docker Compose for local PostgreSQL + Redis

**Mobile:**
- [ ] Initialize `apps/mobile` with Expo Router + TypeScript
- [ ] Build auth screens: Splash, Login, Signup, Forgot Password
- [ ] Set up Zustand auth store + TanStack Query
- [ ] Implement secure token storage (Expo SecureStore)
- [ ] Biometric login scaffold

**Learning Focus:** TypeScript generics, Prisma migrations, Expo Router file conventions

---

### Phase 1 — Core Modules: Accounts & Transactions (Week 3–6)
**Goal:** Users can track money in and out

**Backend:**
- [ ] Accounts CRUD API with balance aggregation endpoint
- [ ] Transactions CRUD API with balance auto-update logic
- [ ] Database transaction (BEGIN/COMMIT) for atomic balance updates
- [ ] Pagination with cursor-based approach
- [ ] Filtering and full-text search on transactions
- [ ] Seed data script for development
- [ ] Write service layer tests with mocked Prisma client

**Mobile:**
- [ ] Accounts list screen with aggregated totals
- [ ] Add/Edit Account bottom sheet (react-native-bottom-sheet)
- [ ] Transaction list with infinite scroll and pull-to-refresh
- [ ] Add Transaction screen with category picker, account picker
- [ ] Swipe-to-delete transactions
- [ ] Offline queue: queue mutations when offline, sync when back online

**Learning Focus:** Zustand slices, TanStack Query mutations + optimistic updates, React Hook Form + Zod validation

---

### Phase 2 — Budget Module (Week 7–9)
**Goal:** Users can set budgets and see real-time health

**Backend:**
- [ ] Budget CRUD endpoints
- [ ] Dashboard aggregation: current month spend per category (SQL GROUP BY)
- [ ] Spending pace calculation algorithm
- [ ] Budget health query (JOIN budgets with aggregated transactions)

**Mobile:**
- [ ] Budget list screen with animated progress bars
- [ ] Color-coded health indicators (green/yellow/orange/red)
- [ ] Add/Edit Budget screen with category selector
- [ ] Spending pace card on Dashboard
- [ ] Budget copy from previous month action

**Learning Focus:** Complex SQL aggregations with Prisma, Reanimated 2 animated progress bars

---

### Phase 3 — Dashboard & Investments (Week 10–13)
**Goal:** Full financial picture visible at a glance

**Backend:**
- [ ] Investment CRUD API
- [ ] Mock price fetcher service (seeded current prices, refreshable)
- [ ] Dashboard summary endpoint (single call returns all KPI data)
- [ ] Net worth history snapshot job (node-cron, runs daily at midnight)
- [ ] Expense breakdown aggregation (GROUP BY category for pie chart)
- [ ] Monthly cashflow aggregation (income vs expense per month, last 6 months)

**Mobile:**
- [ ] Investment portfolio screen with P&L cards
- [ ] Portfolio allocation pie chart (Victory Native)
- [ ] Dashboard home screen with KPI cards
- [ ] Net worth trend line chart (last 12 months)
- [ ] Expense breakdown pie chart
- [ ] Month-over-month bar chart

**Learning Focus:** Victory Native charts, node-cron scheduled jobs, SQL window functions for time series

---

### Phase 4 — Advanced Features (Week 14–17)
**Goal:** Features that differentiate from basic trackers

- [ ] **Savings Goals** module with progress tracking
- [ ] **Recurring transactions** — auto-create on schedule (cron job)
- [ ] **Bill reminders** — push notifications via Expo + FCM
- [ ] **CSV import** — parse CSV, validate, batch-insert transactions
- [ ] **PDF export** — generate monthly statement using `pdfkit`
- [ ] **Receipt photo capture** — Expo Camera → upload to Cloudinary
- [ ] **Tags** — add/filter transactions by custom tags
- [ ] **Split transactions** — one transaction split across categories
- [ ] **Custom categories** — users create their own with icon/color

**Learning Focus:** Node.js streams for CSV parsing, Expo Camera/MediaLibrary permissions, background tasks

---

### Phase 5 — Web Dashboard (Week 18–20)
**Goal:** Desktop-friendly interface for power users

- [ ] Initialize `apps/web` with Vite + React + TypeScript + Tailwind + shadcn/ui
- [ ] Shared auth (same JWT tokens) 
- [ ] Transactions data table (TanStack Table) with sorting, filtering, pagination
- [ ] Dashboard charts (Recharts)
- [ ] Budget management table
- [ ] Investment portfolio table with live P&L
- [ ] CSV export and PDF report download buttons
- [ ] Responsive design (tablet-friendly)

**Learning Focus:** TanStack Table, shadcn/ui component patterns, Recharts, Vite config

---

### Phase 6 — Production Hardening & Deployment (Week 21–23)
**Goal:** Production-ready, monitored, documented

- [ ] Sentry integration (mobile + backend)
- [ ] PostHog analytics (feature usage, retention)
- [ ] Proper logging with Pino (structured JSON logs)
- [ ] Health check endpoint `/api/health`
- [ ] API rate limiting audit
- [ ] Database indexes on all foreign keys + frequent query columns
- [ ] EXPLAIN ANALYZE slow queries and optimize
- [ ] Helmet + CORS + input sanitization audit
- [ ] Data backup strategy (PostgreSQL daily dumps to S3)
- [ ] Environment-specific configs (dev/staging/production)
- [ ] Secrets management (Railway env vars, never in code)

**Play Store Preparation:**
- [ ] App icons (all sizes) — use Expo's asset tools
- [ ] Splash screen
- [ ] Privacy Policy page (required by Play Store)
- [ ] Data deletion request flow (GDPR/Play Store requirement)
- [ ] EAS Build profile for production (AAB format)
- [ ] Play Store listing: screenshots, description, category selection
- [ ] Internal Testing → Closed Testing → Production rollout

---

## 8. CI/CD Pipeline

### GitHub Actions Workflows

#### `.github/workflows/ci.yml` — Runs on every PR
```yaml
name: CI

on:
  pull_request:
    branches: [main, develop]

jobs:
  lint-and-type-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'pnpm' }
      - run: pnpm install --frozen-lockfile
      - run: pnpm turbo lint
      - run: pnpm turbo typecheck

  test-api:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_PASSWORD: testpass
          POSTGRES_DB: finance_test
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
      - run: pnpm install --frozen-lockfile
      - run: pnpm --filter api prisma migrate deploy
        env:
          DATABASE_URL: postgresql://postgres:testpass@localhost:5432/finance_test
      - run: pnpm --filter api test
        env:
          DATABASE_URL: postgresql://postgres:testpass@localhost:5432/finance_test
          JWT_SECRET: test-secret-min-32-chars-long-here

  test-mobile:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
      - run: pnpm install --frozen-lockfile
      - run: pnpm --filter mobile test

  build-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
      - run: pnpm install --frozen-lockfile
      - run: pnpm turbo build
```

#### `.github/workflows/deploy-api.yml` — Deploys backend on merge to main
```yaml
name: Deploy API

on:
  push:
    branches: [main]
    paths: ['apps/api/**', 'packages/**']

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to Railway
        uses: bervProject/railway-deploy@main
        with:
          railway_token: ${{ secrets.RAILWAY_TOKEN }}
          service: finance-tracker-api
```

#### `.github/workflows/deploy-mobile.yml` — EAS Build on release tag
```yaml
name: EAS Build (Android)

on:
  push:
    tags: ['v*']

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm install -g eas-cli
      - run: pnpm --filter mobile install
      - name: EAS Build
        run: eas build --platform android --profile production --non-interactive
        env:
          EXPO_TOKEN: ${{ secrets.EXPO_TOKEN }}
```

### Branch Strategy (GitFlow Simplified)
```
main        → production (protected, requires PR)
develop     → integration branch
feature/*   → individual features
hotfix/*    → urgent production fixes
release/*   → release candidate testing
```

---

## 9. Testing Strategy

### Testing Pyramid

```
         /\
        /E2E\          Detox (critical user flows only: login, add transaction)
       /──────\
      /Integr-\        Supertest (API routes with real DB in test container)
     /──────────\
    /    Unit    \     Jest (services, utilities, Zod schemas, pure functions)
   /──────────────\
```

### Backend Testing Conventions

```typescript
// services/__tests__/transaction.service.test.ts
describe('TransactionService', () => {
  describe('createTransaction', () => {
    it('should deduct amount from account balance for debit', async () => { ... })
    it('should add amount to account balance for credit', async () => { ... })
    it('should throw if account does not belong to user', async () => { ... })
    it('should rollback balance update if transaction insert fails', async () => { ... })
  })
})

// routes/__tests__/transactions.route.test.ts (integration)
describe('POST /api/v1/transactions', () => {
  it('should return 401 without auth token', async () => { ... })
  it('should return 400 with invalid body (Zod)', async () => { ... })
  it('should create transaction and update account balance atomically', async () => { ... })
})
```

### What to Test (Prioritized)
1. **Auth flows** — signup, login, token refresh, revocation
2. **Balance update atomicity** — core business logic
3. **Budget calculations** — spend aggregation correctness
4. **API input validation** — Zod rejection of malformed data
5. **Authorization** — users cannot access other users' data

### Coverage Target
- Backend services: **80%+**
- API routes: **70%+** (integration tests cover more ground)
- Frontend: **50%+** (component render tests + hook tests)

---

## 10. Deployment Strategy

### Infrastructure Overview

```
GitHub (Source)
    │
    ├── CI checks pass → merge to main
    │
    ├── apps/api → Railway (auto-deploy)
    │              └── Railway PostgreSQL (managed)
    │              └── Railway Redis (managed)
    │
    ├── apps/web → Vercel (auto-deploy from main)
    │
    └── apps/mobile → EAS Build (on tag push)
                      └── Google Play Store (manual submit or EAS Submit)
```

### Environment Variables Management

```
# apps/api/.env.example (commit this)
DATABASE_URL=
REDIS_URL=
JWT_ACCESS_SECRET=        # min 32 chars
JWT_REFRESH_SECRET=       # min 32 chars, different from access
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=30d
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
SENTRY_DSN=
PORT=3000
NODE_ENV=development
```

### Railway Setup (10 minutes)
1. Create Railway project → Add PostgreSQL plugin → Add Redis plugin
2. Deploy from GitHub repo → set root directory to `apps/api`
3. Add env vars in Railway dashboard
4. Railway auto-runs `prisma migrate deploy` on startup (add to package.json `start` script)

### Google Play Store Deployment
1. Create Expo account → EAS project
2. `eas build:configure` → generates `eas.json`
3. Production profile generates signed AAB (Android App Bundle)
4. Upload AAB to Play Console → fill store listing
5. **Required:** Privacy Policy URL, App category (Finance), content rating
6. Start with Internal Testing track → Closed Testing → Open → Production

---

## 11. Documentation Plan

### Docs to Write (as you build)

```
docs/
├── README.md                   # Project overview, quick start
├── CONTRIBUTING.md             # How to contribute, PR process
├── ARCHITECTURE.md             # System design decisions (ADRs)
├── api/
│   ├── openapi.yaml            # OpenAPI 3.0 spec (auto-generated from routes)
│   └── ENDPOINTS.md            # Human-readable API reference
├── setup/
│   ├── LOCAL_SETUP.md          # Step-by-step local dev setup
│   ├── DEPLOYMENT.md           # How to deploy to Railway + Play Store
│   └── ENV_VARIABLES.md        # All env vars with descriptions
└── decisions/
    ├── ADR-001-monorepo.md     # Why Turborepo
    ├── ADR-002-postgres.md     # Why PostgreSQL over MongoDB
    └── ADR-003-expo.md         # Why Expo over bare React Native
```

### ADR (Architecture Decision Record) Template
```markdown
# ADR-001: Use Turborepo for Monorepo

**Status:** Accepted  
**Date:** 2025-01-01

## Context
Need to share TypeScript types and Zod schemas between API and mobile clients.

## Decision
Use Turborepo with pnpm workspaces.

## Consequences
+ Shared packages ensure type safety across boundaries
+ Single `turbo build` command builds all apps in correct order
− Slightly more complex initial setup
```

---

## 12. Interview-Ready Talking Points

When discussing this project in interviews, use the **STAR** pattern and highlight these decisions:

### Architecture
- "I built a monorepo using Turborepo with pnpm workspaces so Zod validation schemas are shared between the API and frontend — a single source of truth that eliminates an entire class of client-server contract mismatches."
- "I use PostgreSQL's ACID transactions to guarantee that a transaction record and the corresponding account balance update succeed or fail atomically — critical for financial correctness."

### Security
- "JWT access tokens expire in 15 minutes. Refresh tokens are stored as bcrypt hashes in the database and rotated on every use. If a refresh token is detected being reused, all sessions for that user are revoked (token family invalidation)."
- "All user input goes through Zod schemas before reaching the database. Prisma uses parameterized queries by default, so SQL injection is structurally impossible."

### Performance
- "The net worth history chart could require aggregating 12 months of transactions at runtime. I solved this with a nightly cron job that pre-computes and stores snapshots in a separate table, keeping the chart query O(1)."
- "Transactions are paginated using cursor-based pagination rather than OFFSET, which stays performant as the dataset grows — OFFSET N requires scanning N rows."

### React / React Native
- "I use TanStack Query for all server state. Optimistic updates make the UI feel instant — when a user adds a transaction, it shows immediately in the list while the API call runs in the background, with automatic rollback on error."
- "Expo Router uses file-based routing (like Next.js) which I found maps well to my existing mental model from backend route organization."

### Deployment
- "The CI pipeline runs TypeScript type-checking, ESLint, and integration tests with a real PostgreSQL container on every PR. Merging to main triggers an automatic Railway deploy. The mobile app is built and submitted to Google Play via EAS Build when I push a version tag."

---

## Realistic Timeline Summary

| Phase | Duration | Deliverable |
|---|---|---|
| Phase 0: Foundation | 2 weeks | Auth end-to-end, monorepo running |
| Phase 1: Accounts + Transactions | 4 weeks | Core money tracking working |
| Phase 2: Budgets | 3 weeks | Budget health visible |
| Phase 3: Dashboard + Investments | 4 weeks | Full financial picture |
| Phase 4: Advanced Features | 4 weeks | Differentiating features |
| Phase 5: Web Dashboard | 3 weeks | Desktop interface |
| Phase 6: Production + Play Store | 3 weeks | Live on Play Store |
| **Total** | **~23 weeks** | **Production app on Play Store** |

> Adjust based on time available. If 10 hrs/week → ~12 months. If 20 hrs/week → ~6 months.

---

## Quick Start — First Day Commands

```bash
# 1. Install pnpm (faster than npm, required for workspaces)
npm install -g pnpm

# 2. Install Turborepo
pnpm add -g turbo

# 3. Install Expo CLI + EAS CLI
npm install -g expo-cli eas-cli

# 4. Create project
mkdir finance-tracker && cd finance-tracker
pnpm init

# 5. Initialize apps
mkdir -p apps/api apps/mobile apps/web packages/shared-types packages/shared-validation

# 6. In apps/api
cd apps/api
pnpm init
pnpm add express prisma @prisma/client zod bcryptjs jsonwebtoken helmet cors express-rate-limit pino
pnpm add -D typescript @types/express @types/node ts-node nodemon jest supertest @types/jest

# 7. In apps/mobile
cd ../mobile
npx create-expo-app . --template expo-template-blank-typescript

# 8. Docker Compose for local DB
# docker-compose.yml in root:
# postgres:16 on port 5432
# redis:7 on port 6379
```

---

*Last updated: 2026-07-06 — Built for production, designed for learning.*
