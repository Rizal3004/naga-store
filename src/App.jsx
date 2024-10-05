// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import untuk routing
import Header from './components/Header';
import Hero from './components/Hero';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog'; // Impor Blog.jsx
import Track from './components/Track'; // Impor Track.jsx
import Profile from './components/Profile'; // Impor Profile.jsx
import './index.css';

export default function App() {
  return (
    <Router>
      <Header />
      <div
        className="bg-cover bg-center md:bg-fixed content-start min-h-screen"
        style={{
          backgroundImage: "url('src/assets/background.jpg')", // Ganti dengan link gambar yang diinginkan
        }}
      >
        {/* Definisikan Routes di sini */}
        <Routes>
          <Route path="/" element={<Hero />} /> {/* Halaman Home */}
          <Route path="/blog" element={<Blog />} /> {/* Halaman Blog */}
          <Route path="/track" element={<Track />} /> {/* Halaman Lacak Pesanan */}
          <Route path="/profile" element={<Profile />} /> {/* Halaman Your Profile */}
        </Routes>

        <div className="rounded-lg shadow-lg">
        </div>
      </div>
      <ContactUs />
    </Router>
  );
}
