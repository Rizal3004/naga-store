// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const images = [
  "src/assets/slide1.jpeg",
  "src/assets/slide2.jpg",
  "src/assets/slide3.jpg",
  "src/assets/slide4.jpg",
  "src/assets/slide5.jpg", 
  "src/assets/slide6.jpg"
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
      <div className="max-w-4xl mx-auto p-4">
        <div className="relative bg-gray-800 rounded-lg overflow-hidden">
          <img
            alt="Background with various game icons"
            className="carousel-item rounded-lg w-full h-64 object-cover" // Menggunakan rounded-lg untuk sudut melengkung
            height={400}
            src={images[currentImageIndex]} // Gunakan gambar saat ini
            width={1200}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50  backdrop-blur-sm p-4 flex items-center">
            <img
              alt="PUBG Mobile (Indonesia) icon"
              className="w-16 h-16 rounded-lg mr-4"
              height={64}
              src="https://storage.googleapis.com/a1aa/image/oRCLRLe1pQW9VqDnfqUjeBKXfZRYPxgmeJHvBD02L4qqDaccC.jpg"
              width={64}
            />
            <div>
              <h2 className="text-white text-xl font-semibold">
                PUBG Mobile (Indonesia)
              </h2>
              <p className="text-gray-400">KRAFTON</p>
              <div className="flex space-x-2 mt-2">
                <span className="flex items-center text-gray-400 text-sm">
                  <i className="fas fa-headset mr-1"></i>
                  Customer Service 24/7
                </span>
                <span className="flex items-center ttext-gray-400 text-sm">
                  <i className="fas fa-check-circle mr-1"></i>
                  Official Distributor
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
