import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Surahs from "./pages/Surahs";
import Hadiths from "./pages/Hadith";   // <-- поправили путь
import Duas from "./pages/Duas";
import Tajwid from "./pages/tajwid";       // убедись, что файл называется Tajwid.jsx
import Quran from "./pages/Quran";
import { motion } from "framer-motion";


export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white font-sans">
      <Router>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <div className="w-60 bg-gradient-to-b from-purple-800 to-black p-6 shadow-lg">
            <h1 className="text-2xl font-bold mb-8 text-center text-pink-400">تطبيق إسلامي</h1>
            <nav className="space-y-4 text-lg">
              <Link to="/" className="block hover:text-pink-400 transition">🏠 الرئيسية</Link>
              <Link to="/Surahs" className="block hover:text-pink-400 transition">📖 السور</Link>
              <Link to="/Hadiths" className="block hover:text-pink-400 transition">🕋 حديث</Link>
              <Link to="/Duas" className="block hover:text-pink-400 transition">🙏 دعاء</Link>
              <Link to="/tajwid" className="block hover:text-pink-400 transition">🗣 التجويد</Link>
              <Link to="/quran" className="block hover:text-pink-400 transition">📖 القرآن الكريم</Link>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Surahs" element={<Surahs />} />
              <Route path="/Hadiths" element={<Hadiths />} />
              <Route path="/Duas" element={<Duas />} />
              <Route path="/tajwid" element={<Tajwid />} />
              <Route path="/quran" element={<Quran />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}
