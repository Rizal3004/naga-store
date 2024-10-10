// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Track from './components/Track';
import Preloader from './components/Preloader';
import Checkout from './components/Checkout';
import Card_P from './components/cards/Card_P';
import Card_M from './components/cards/Card_M';
import Card_F from './components/cards/Card_F'; 
import PaymentSucces from './components/PaymentSucces';
import DetailOrder from './components/DetailOrder';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate delay for preloader
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader /> 
      ) : (
        <Router>
          <Header />
          <div
            className="bg-cover bg-center md:bg-fixed content-start min-h-screen"
            style={{
              backgroundImage: "url('/img/background.jpg')",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/track" element={<Track />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/card_p" element={<Card_P />} /> 
              <Route path="/card_m" element={<Card_M />} /> 
              <Route path="/card_f" element={<Card_F />} />
              <Route path="/payment-succes" element={<PaymentSucces />} />
              <Route path="/detail-order/:id" element={<DetailOrder />} />
              {/* <Route path="/profile" element={<Profile />} /> */}
            </Routes>

            <div className="rounded-lg shadow-lg"></div>
          </div>
          <Footer />
        </Router>
      )}
    </>
  );
}
