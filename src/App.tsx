"use client"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import BlogPage from "./Pages/BlogPage";
import WorkPage from "./Pages/WorkPage";
import BoldVoice from "./Pages/ProjectPages/BoldVoice";

export function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="boldvoice" element={<BoldVoice />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
