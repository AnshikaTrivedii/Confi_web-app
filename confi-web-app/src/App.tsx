import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutUsPage from './pages/AboutUsPage';
import ProductsPage from './pages/ProductsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
