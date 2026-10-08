# 🇧🇩 Bangla News 24

A modern and responsive Bangla news-reading web application built with **Next.js, TypeScript, Tailwind CSS, DaisyUI, Better Auth, and MongoDB**.

Bangla News 24 allows readers to browse the latest news, explore news by category, read full articles, and manage their accounts with email and social authentication.

## 🌐 Live Demo

[Visit Bangla News 24](https://bangla-news-24-topaz.vercel.app/)

## 📦 Repository

[GitHub Repository](https://github.com/rohanislambd/bangla-news-24-nextjs)

---

## ✨ Features

### 📰 News & Content

- Browse the latest news from the homepage.
- Explore news by different categories.
- View news articles in organized sections.
- Read full news articles through dynamic detail pages.
- Display article cards with relevant news information.
- View popular/most-read news.
- Integrated with an external News API for fetching news data.
- News ticker/marquee for highlighting important news.

### 🔐 Authentication

- User registration with email and password.
- User login with email and password.
- Google OAuth authentication.
- GitHub OAuth authentication.
- Secure session management using Better Auth.
- Authentication state-aware navigation and account controls.
- MongoDB integration for authentication data storage.

### 👤 User Profile

- View authenticated user information.
- Edit and update profile information.
- Session-aware profile management.
- User-specific account controls.

### 🧭 Navigation & UI

- Responsive navigation header.
- Category-based navigation.
- Dynamic routing for news categories and articles.
- Responsive design for desktop, tablet, and mobile devices.
- Clean and modern news-reading interface.
- Reusable React components.
- Responsive account controls based on authentication state.

---

## 🛠️ Technologies Used

- **Next.js** — React framework for building the application
- **React** — User interface development
- **TypeScript** — Type-safe JavaScript development
- **Tailwind CSS** — Utility-first CSS framework
- **DaisyUI** — Tailwind CSS component library
- **Better Auth** — Authentication and session management
- **MongoDB** — Database for authentication-related data
- **News API** — External API for fetching news and category data
- **Vercel** — Deployment and hosting

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   ├── category/
│   │   └── [categoryId]/
│   ├── profile/
│   ├── signin/
│   ├── signup/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Header.tsx
│   ├── UserInfo.tsx
│   └── ...
│
└── lib/
    ├── auth.ts
    └── ...
```

---

## 🚀 Getting Started

Follow the steps below to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/rohanislambd/bangla-news-24-nextjs.git
```

### 2. Navigate to the Project Directory

```bash
cd bangla-news-24-nextjs
```

### 3. Install Dependencies

Using npm:

```bash
npm install
```

Or using pnpm:

```bash
pnpm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory and add the required environment variables.

```env
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000

BETTER_AUTH_DB_URL=your_mongodb_connection_string

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

> Never commit your `.env.local` file or expose your secret keys publicly.

### 5. Run the Development Server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## 🔐 Authentication

Authentication is implemented using **Better Auth** with MongoDB as the database.

The application supports:

- Email and password authentication
- Google authentication
- GitHub authentication
- User sessions
- Profile management

The authentication API is handled through the Next.js API route:

```text
/api/auth/[...all]
```

---

## 🗄️ Database

The project uses **MongoDB** for storing authentication-related data.

Better Auth is configured with the MongoDB adapter to manage users, accounts, sessions, and other authentication data.

---

## 🔌 API Integration

The application fetches news and category information from an external news API.

The API is used for:

- News sections
- Category-based news
- Article information
- Popular/most-read content

---

## 📱 Responsive Design

The application is designed to work across different screen sizes:

- 📱 Mobile
- 📲 Tablet
- 💻 Desktop

Tailwind CSS utility classes are used to create the responsive layout and user interface.

---

## 🚀 Deployment

The application is deployed on **Vercel**.

### Production Build

To create a production build locally:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

---

## 🎯 Project Purpose

The main purpose of this project was to build a modern Bangla news platform while practicing real-world web development concepts such as:

- Next.js App Router
- Dynamic routes
- API integration
- Authentication
- OAuth
- Database integration
- Session management
- Profile management
- Responsive UI development
- Reusable React components
- TypeScript
- Modern frontend architecture

---

## 👨‍💻 Author

**Rohan Islam**

Aspiring Web Developer | Building and Learning Every Day

### GitHub

[github.com/rohanislambd](https://github.com/rohanislambd)

---
