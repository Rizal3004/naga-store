// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const images = [
  "/img/slide1.jpeg",
  "/img/slide2.jpg",
  "/img/slide3.jpg",
  "/img/slide4.jpg",
  "/img/slide5.jpg", 
  "/img/slide6.jpg"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Ganti gambar setiap 3 detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen di-unmount
  }, []);

  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
      <div className="max-w-4xl mx-auto p-4 animate-fade-down">
        <div className="relative bg-gray-800 rounded-lg overflow-hidden">
          <img
            alt="Background game"
            className="carousel-item rounded-lg w-full h-64 object-cover" // Menggunakan rounded-lg untuk sudut melengkung
            height={400}
            src={images[currentImageIndex]} // Gunakan gambar saat ini
            width={1200}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50  backdrop-blur-sm p-4 flex items-center">
            <div>
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
}
