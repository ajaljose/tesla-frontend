# Tesla Frontend

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.1-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.0-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A high-performance, visually stunning Tesla-inspired frontend built with **React 19**, **Vite**, and **Tailwind CSS 4**. This project showcases modern web development practices, including state-of-the-art state management with Redux Toolkit and efficient API integration using RTK Query.

## 🚀 Quick Start & Setup

Follow these steps to get the project running locally:

### 1. Clone the repository
```bash
git clone <repository-url>
cd tesla-frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory and add the following:
```env
VITE_API_BASE_URL=http://localhost:5000/api/v1
```
or 
```env
VITE_API_BASE_URL=https://nodejs-backend-services.onrender.com/api/v1
```
### 4. Run the development server
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

---

## 🛠️ Tech Stack

- **Core**: React 19 (Latest), Vite (Fast Bundling)
- **State Management**: Redux Toolkit (RTK)
- **Data Fetching**: RTK Query (Efficient Caching & API State)
- **Styling**: Tailwind CSS (Modern CSS Architecture)
- **Routing**: React Router Dom

---

## 🏗️ Project Structure

The codebase follows a modular and scalable structure, organized by features and shared components:

```text
src/
├── app/                # Global store configuration and router setup
├── assets/             # Static assets (images, logos)
├── common/             # Shared global components (Navbar, Footer, Buttons)
├── layout/             # Main application layout wrappers
├── pages/              # Feature-based page modules
│   ├── car-details/    # Vehicle details logic and components
│   ├── landing/        # Home/Landing page sections
│   ├── product-list/   # Vehicle listing and filtering
│   └── common/         # Page-specific shared components/constants
├── services/           # Base API configurations and HTTP utilities
├── index.css           # Global styles and Tailwind directives
└── main.jsx            # Application entry point
```

---

## ✨ Key Features & Highlights

### 🏎️ Dynamic Vehicle Configuration
Detailed car overview page leveraging **RTK Query** for real-time data fetching. Features a custom **Color Selector** that dynamically updates the model preview without page reloads, using derived state to ensure a smooth user experience.

### 🛡️ Scalable Routing & Navigation
A robust routing system that handles dynamic car slugs. The Navbar is intelligently designed to conditionally render elements (like "Order Now") based on the current route, utilizing advanced CSS patterns to prevent layout shifts.

### 🍱 Component-Driven Architecture
Reusable components following the atomic design principle. Components like `CustomButton`, `CustomLoader`, and `FeatureCard` allow for rapid UI development while maintaining consistent aesthetics.

### ⚡ Performance Optimized
- **Lazy Loading**: Pages and heavy components are loaded on demand to reduce bundle size.
- **Zero Layout Shifts**: Careful implementation of element visibility to ensure a stable viewing experience.
- **Memoized Selectors**: Intelligent state selection for efficient re-renders.

---

## 📦 Build & Deployment

To create a production-ready bundle:
```bash
npm run build
```
This will generate a `dist` folder ready to be deployed to Vercel.

---

## 🗒️ Changelog

For a full list of changes and version history, please see [CHANGELOG.md](./CHANGELOG.md).

---
