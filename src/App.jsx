import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import CatalogPage from './pages/CatalogPage';
import ServicesPage from './pages/ServicesPage';
import LoginPage from './pages/LoginPage';
import ApplicationFormsPage from './pages/ApplicationFormsPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="application-forms" element={<ApplicationFormsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



