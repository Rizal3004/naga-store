// eslint-disable-next-line no-unused-vars
import React from 'react';

const Hero_P = () => { 
  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
      <div className="max-w-4xl mx-auto py-3 p-2 animate-fade-down">
        <div className="relative bg-gray-800 rounded-lg overflow-hidden">
          <img
            alt="Background game"
            className="rounded-lg w-full h-64 object-cover"
            height={400}
            src='/img/slide6.jpg' 
            width={1200}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm p-4 flex items-center">
            <img 
              alt="pubg logo" 
              className="w-12 h-12 rounded-lg mr-4" 
              height="50" 
              src="/img/icon.png" 
              width="50" 
            />
            <div className="flex flex-col">
              <h1 className='text-white font-semibold'>PUBG M (Indonesia)</h1>
              <div className="flex space-x-2 mt-2">
                <span className="flex items-center text-gray-300 text-sm">
                  <i className="fas fa-headset mr-1"></i>
                  Customer Service 24/7
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero_P;
