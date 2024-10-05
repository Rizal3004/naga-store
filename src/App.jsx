// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <>
      <Header />
      <div
        className="bg-cover bg-center md:bg-fixed content-start min-h-screen"
        style={{
          backgroundImage: "url('src/assets/background.jpg')", // Ganti dengan link gambar yang diinginkan
        }}
      >
        <Hero />
        <div className="rounded-lg shadow-lg">
          <Card />
        </div>
      </div>
      <Footer />
    </>
  );
}
