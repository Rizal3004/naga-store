// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './heros/Hero';

export default function Home() {
  const navigate = useNavigate();

  const handleCardClick = (game) => {
    if (game === 'pubg') {
      navigate('/card_p'); 
    } else if (game === 'mobilelegend') {
      navigate('/card_m'); 
    } else if (game === 'freefire') {
      navigate('/card_f');
    }
  };

  return (
    <>
      <Hero />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      <div className="container mx-auto p-8 animate-fade-right">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {/* Free Fire Card */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative">
            <img
              alt="pubg logo"
              className="object-cover h-48 w-full rounded-lg transition-all duration-300 hover:scale-110"
              src="/img/pubg.jpg"
              onClick={() => handleCardClick('pubg')}
            />
            <div className="p-4">
              <h2 className="text-white text-lg font-semibold">PUBG M</h2>
              <p className="text-gray-400">KRAFTON</p>
            </div>
            <button
              className="absolute bottom-4 right-4 bg-gray-500 hover:bg-sky-500 text-white rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => handleCardClick('pubg')}
            >
              <i className="fas fa-search" />
            </button>
          </div>
          {/* ML Card */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative">
            <img
              alt="ml logo"
              className="object-cover h-48 w-full rounded-lg transition-all duration-300 hover:scale-110"
              src="/img/mlicon.jpg"
              onClick={() => handleCardClick('mobilelegend')}
            />
            <div className="p-4">
              <h2 className="text-white text-lg font-semibold">MOBILE LEGENDS</h2>
              <p className="text-gray-400">MONTOON</p>
            </div>
            <button
              className="absolute bottom-4 right-4 bg-gray-500 hover:bg-sky-500 text-white rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => handleCardClick('mobilelegend')}
            >
              <i className="fas fa-search" />
            </button>
          </div>
          {/* FF Card */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative">
            <img
              alt="ff logo"
              className="object-cover h-48 w-full rounded-lg transition-all duration-300 hover:scale-110"
              src="/img/fficon.png"
              onClick={() => handleCardClick('freefire')}
            />
            <div className="p-4">
              <h2 className="text-white text-lg font-semibold">FREE FIRE</h2>
              <p className="text-gray-400">GARENA</p>
            </div>
            <button
              className="absolute bottom-4 right-4 bg-gray-500 hover:bg-sky-500 text-white rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => handleCardClick('freefire')}
            >
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
