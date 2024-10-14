import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Header from "./components/Header";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Pricing from "./components/Pricing.jsx";
import Resume from "./components/Resume.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/features" element={<Features />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
