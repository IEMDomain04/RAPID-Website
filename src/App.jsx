import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import background from "./assets/background.svg";
import Navbar from "./components/homepage/Navbar";
import Home from "./components/homepage/Home";
import Pricing from "./components/Pricing";
import Learnmore from "./components/Learnmore";
import Disclaimer from "./components/disclaimer";
import { Routes, Route } from "react-router-dom";

// Custom Scroll to Top Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page whenever the route changes
  }, [pathname]);

  return null; // No UI component, just side effects
};

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <ScrollToTop /> {/* Automatically scrolls to top on route changes */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<Learnmore />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
      <h1 className="text-center text-white mt-20">2024 @ ALL RIGHTS RESERVED BY EMMAN POGI</h1>
    </div>
  );
};

export default App;
