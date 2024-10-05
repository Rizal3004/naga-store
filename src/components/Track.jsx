// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

export default function Track() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleSearch = () => {
    if (searchTerm) {
      // Implement the search functionality here
      console.log(`Searching for: ${searchTerm}`);
      setShowMessage(false);
    } else {
      setShowMessage(true);
    }
  };

  return (
    <div className="backdrop-blur-md">
      <div className="w-full max-w-3xl mx-auto">
        <div className="p-10 rounded-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-grow w-full md:w-auto relative">
            <input
              className="w-full p-1 pl-1 bg-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ketik No WhatsApp atau No invoice"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
            <button
              onClick={handleSearch}
              className="bg-sky-500 text-white px-2 py-0 rounded-lg absolute right-0 top-0 bottom-0 h-full transition-transform transform hover:scale-105"
            >
              Cari Pesanan
            </button>
          </div>
        </div>
        {showMessage && (
          <p className="text-yellow-300 mt-2 text-center">
            ⚠ Harap isi nomor WhatsApp atau nomor invoice !
          </p>
        )}
      </div>
      <div className="text-center mt-6">
        <h1 className="text-white text-2xl mb-6">Riwayat Pesanan</h1>
        <img
          alt="Illustration of a person with a question mark and a package"
          className="mx-auto mb-4"
          height={100}
          src="src/assets/uc.png"
          width={150}
        />
        <p className="text-white text-center text-sm md:text-base lg:text-lg px-4">
        Produk belum bisa ditampilkan, silakan isi nomor HP terlebih dahulu
        </p>
      </div>
    </div>
  );
}
