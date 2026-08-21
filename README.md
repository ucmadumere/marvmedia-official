# Marv Media Official Website

The official website for **Marv Media**, a creative agency that helps African entrepreneurs, thought leaders, and creatives communicate with clarity, consistency, and confidence.

The website presents the agency's services, portfolio, team, pricing, educational offerings, and blog content. It also provides contact and WhatsApp channels for prospective clients.

## Features

- Responsive agency website with animated sections and sliders
- Service listings, service details, and pricing packages
- Portfolio and individual project pages
- Blog listing and article pages
- Team, founder, FAQ, and contact pages
- Search-engine metadata with React Helmet
- Main and footer contact forms
- Email delivery through SMTP and Nodemailer
- MongoDB-backed server error logging
- Direct WhatsApp contact button

## Technology stack

### Frontend

- React 18
- Vite 6
- React Router
- React Helmet Async
- Swiper
- AOS, Animate.css, and WOW.js
- Bootstrap and project-specific CSS

### Backend

- Node.js and Express
- Nodemailer
- MongoDB and Mongoose
- CORS
- dotenv

## Project structure

```text
marvmedia-official/
├── backend/
│   ├── models/          # MongoDB models
│   ├── routes/          # Contact-form API routes
│   ├── utils/           # Backend helpers and error logging
│   └── index.js         # Express application entry point
├── public/
│   └── assets/          # Images, fonts, CSS, and browser scripts
├── src/
│   ├── components/      # Shared React components
│   ├── data/            # Services, portfolio, and blog content
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Route-level page components
│   ├── utils/           # API configuration
│   ├── App.jsx          # Application routes and shared layout
│   └── main.jsx         # React entry point
├── .env.example         # Frontend environment template
├── index.html
└── vite.config.js
```

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm
- A running MongoDB database
- SMTP credentials for sending contact-form emails

### 1. Install the frontend dependencies

```bash
npm install
```

### 2. Configure the frontend

Copy `.env.example` to `.env` and set the contact API, CMS API, and canonical site URL:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_PUBLIC_API_URL=http://localhost:4000
VITE_SITE_URL=https://marvmedia.ng
VITE_TURNSTILE_SITE_KEY=
```

If omitted, these variables use the defaults shown in `.env.example`.

### 3. Install the backend dependencies

```bash
cd backend
npm install
```

### 4. Configure the backend

Copy `backend/.env.example` to `backend/.env`, then provide the required values:

```env
EMAIL_USER=your-smtp-username
EMAIL_PASS=your-smtp-password
MAIL_RECEIVER=recipient@example.com
PORT=5000
SMTP_HOST=smtp.example.com
SMTP_PORT=587
MONGO_URI=mongodb://localhost:27017/marvmedia
ALLOWED_ORIGINS=http://localhost:5173,https://marvmedia.ng,https://www.marvmedia.ng
TRUST_PROXY=
REQUIRE_TURNSTILE=false
TURNSTILE_SECRET_KEY=
```

Use port `465` when your SMTP provider requires a secure SMTP connection. Do not commit real credentials to source control.

For production spam protection, create a Cloudflare Turnstile widget for the public domain, set `VITE_TURNSTILE_SITE_KEY` in the frontend environment, and set both `REQUIRE_TURNSTILE=true` and `TURNSTILE_SECRET_KEY` in the backend environment. Set `TRUST_PROXY=1` only when the backend is deployed behind one trusted reverse proxy. Keep `ALLOWED_ORIGINS` restricted to the real frontend domains.

### 5. Start the backend

From the `backend` directory:

```bash
npm run dev
```

The API runs on `http://localhost:5000` by default.

### 6. Start the frontend

In a separate terminal, from the project root:

```bash
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

## Available scripts

### Frontend

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

### Backend

Run these commands inside `backend/`:

| Command | Description |
| --- | --- |
| `npm run dev` | Start Express with Nodemon |
| `npm start` | Start Express with Node.js |
| `npm test` | Run backend validation and sanitization tests |

## Application routes

The frontend includes the following main routes:

- `/` — Home
- `/about-us` — Agency story, vision, mission, and team
- `/services` and `/services/:slug` — Services and service details
- `/portfolio` and `/portfolio/:slug` — Work and project details
- `/blog` and `/blog/:slug` — Blog content
- `/pricing` — Packages and pricing
- `/team` and `/our-founder` — Team information
- `/learn-with-marv` — Educational offering
- `/marv-design` — Marv Design page
- `/faq` — Frequently asked questions
- `/contact-us` — Contact page

Unknown routes display the custom not-found page.

## API endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `POST` | `/api/contactform` | Submit the full contact form |
| `POST` | `/api/contact` | Submit the compact footer form |
| `GET` | `/api/health` | Check API and database health |

The full form accepts `name`, `email`, `phone`, `business`, `service`, and `message`. The `name`, `email`, `service`, and `message` fields are required.

The footer form requires `name`, `email`, and `message`.

Both endpoints deliver submissions to `MAIL_RECEIVER`. Email or server failures are recorded in MongoDB through the `ErrorLog` model.

## Content management

The site does not currently use a CMS. Most editable content lives in:

- `src/data/services.js`
- `src/data/portfolioData.js`
- `src/data/blogData.js`
- The relevant components under `src/pages/` and `src/components/`

Images and other static assets are stored under `public/assets/`.

## Production deployment

1. Run `npm run build` to generate the frontend bundle.
2. Deploy `dist/` to a static host that supports SPA route fallback to `index.html`.
3. Deploy `backend/` to a Node.js host with its production environment variables configured.
4. Set `VITE_API_BASE_URL` to the public backend URL before building the frontend.
5. Restrict the backend CORS configuration to the production frontend domain when deploying publicly.

## License

This is a private project for Marv Media. No public license is currently provided.
