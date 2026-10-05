# Algoryx Admin Dashboard (Task 1)

## Description
A responsive, SaaS-style admin dashboard built for the Algoryx Frontend Internship (Task 1). It focuses on clean architecture, reusable components and a mobile-friendly layout.

## Features
- Responsive sidebar (slide-in drawer on mobile)
- Top navigation with live search
- Dashboard stat cards
- Recent orders table with status badges and search filtering
- User profile card
- Notifications dropdown
- Light fade-in animations (respects reduced-motion settings)
- Fully responsive layout

## Tech Stack
React 18, Vite 6, Tailwind CSS 4, Lucide React, JavaScript (ES Modules)

## Installation
```bash
npm install
```

## Running Locally
```bash
npm run dev
```
Open the URL shown in the terminal (usually http://localhost:5173).

## Build Instructions
```bash
npm run build
npm run preview
```
The production build is created in the `dist/` folder.

## Vercel Deployment
1. Push this project to a GitHub repository.
2. Go to vercel.com and sign in with GitHub.
3. Click **Add New > Project** and import the repository.
4. Vercel detects Vite automatically (Build command: `npm run build`, Output directory: `dist`).
5. Click **Deploy** to get your live URL.

## Folder Structure
```
algoryx-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Topbar.jsx
│   │   ├── StatCard.jsx
│   │   ├── OrdersTable.jsx
│   │   └── ProfileCard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── data.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
└── .gitignore
```
