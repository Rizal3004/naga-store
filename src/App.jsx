// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog';
import Track from './components/Track';
import Preloader from './components/Preloader'; // Import Preloader
import Checkout from './components/Checkout'; // Import the Checkout component
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate delay for preloader
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as needed
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader /> // Display preloader while the app is loading
      ) : (
        <Router>
          <Header />
          <div
            className="bg-cover bg-center md:bg-fixed content-start min-h-screen"
            style={{
              backgroundImage: "url('/img/background.jpg')", // Replace with the desired image link
            }}
          >
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/track" element={<Track />} />
              <Route path="/checkout" element={<Checkout />} />
              {/* <Route path="/profile" element={<Profile />} /> */}
            </Routes>

            <div className="rounded-lg shadow-lg"></div>
          </div>
          <ContactUs />
        </Router>
      )}
    </>
  );
}
