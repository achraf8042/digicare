import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Screenshots from './components/Screenshots'
import Demo from './components/Demo'
import Pricing from './components/Pricing'
import Benefits from './components/Benefits'
import Footer from './components/Footer'
import HelpCenter from './components/HelpCenter'
import PrivacyPolicy from './components/PrivacyPolicy'
import License from './components/License'
import Marketing from './components/Marketing'
import ScrollToTop from './components/ScrollToTop'

const Home = () => (
  <>
    <Hero />
    <Marketing />
    <Features />
    <Screenshots />
    <Demo />
    <Pricing />
    <Benefits />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/license" element={<License />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
