# Denova Casting - Single Page Application

This is a combined React Single Page Application (SPA) that integrates five previously separate React projects into one unified application using React Router v6.

## Project Structure

```
denova_test0/
├── index.html              # Vite entry HTML (moved from public/)
├── vite.config.js          # Vite configuration
├── src/
│   ├── components/
│   │   ├── landing/          # Components from diamore-landing
│   │   ├── catalog/          # Components from diamore-catalog
│   │   ├── services/         # Components from diamore-services
│   │   └── Layout.jsx        # Main navigation layout
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── CatalogPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── LoginPage.jsx
│   │   └── ApplicationFormsPage.jsx
│   ├── styles/               # Page-specific CSS files
│   ├── App.jsx              # Main router setup
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Routes

- `/` - Landing Page (Home)
- `/catalog` - Catalog Page
- `/services` - Services Page
- `/login` - Login Page
- `/application-forms` - Application Forms Page

## Features

- **React Router v6**: Uses BrowserRouter for client-side routing
- **Navigation**: Centralized navigation bar in Layout component
- **Preserved Styling**: All original styles and UI preserved
- **Text Replacements**: 
  - "Empire Casting House" → "Denova Casting"
  - "Diamore Casting" → "Denova Casting"
  - Email addresses → "admdenova1@gmail.com"

## Installation

```bash
npm install
```

## Running the Application

```bash
npm run dev
# or
npm start
```

The application will start on `http://localhost:3000` and automatically open in your browser.

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Technologies Used

- React 18.2.0
- React Router DOM 6.20.0
- Vite 5.0.8 (Build tool and dev server)

## Notes

- All pages work correctly on refresh and direct URL access
- Navigation uses React Router's `<NavLink>` component (no page reloads)
- Each page maintains its original functionality and styling
- Components are organized by their original project source

