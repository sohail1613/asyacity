import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import WhyProfessional from './pages/WhyProfessional';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Applications from './pages/Applications';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  return (
    <div className="app-shell min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/why-professional" element={<WhyProfessional />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/site-teklif-formu" element={<Applications initialType="site" />} />
          <Route path="/insan-kaynaklari-basvuru-formu" element={<Applications initialType="career" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
