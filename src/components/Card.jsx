// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

export default function Card() {
  // State untuk item yang dipilih
  const [selectedItem, setSelectedItem] = useState(null);

  // Fungsi untuk memilih item
  const handleSelectItem = (item) => {
    // Toggle item selection; if the selected item is clicked again, deselect it
    if (selectedItem && selectedItem.name === item.name) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  };

  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
      <div className="max-w-7xl mx-auto p-4 bg-gray-600 bg-opacity-50 bg-cover bg-center md:bg-fixed">
        <h1 className="text-xl font-bold mb-4 text-white text-center">PILIH ITEM</h1>

        {/* Grid container */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {/* Item 1 */}
          <div
            className={`relative bg-cyan-950 p-4 rounded-lg cursor-pointer ${
              selectedItem && selectedItem.name === '15000 UC' ? 'border-4 border-blue-500' : ''
            }`}
            onClick={() => handleSelectItem({ name: '15000 UC', price: 'Rp 1.150.000,-', discount: '1%' })}
          >
            <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-tr-lg rounded-bl-lg">
              1% OFF
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-bold">15000 UC</p>
                <p className="line-through">Rp 1.200.000,-</p>
                <p>Rp 1.150.000,-</p>
              </div>
              <img
                alt="UC icon"
                height={50}
                src="src/assets/uc.png"
                width={50}
              />
            </div>
            {selectedItem && selectedItem.name === '15000 UC' && (
              <div className="absolute top-2 right-2 text-green-500 text-2xl">
                <i className="fas fa-check-circle"></i>
              </div>
            )}
          </div>

          {/* Item 2 */}
          <div
            className={`relative bg-cyan-950 p-4 rounded-lg cursor-pointer ${
              selectedItem && selectedItem.name === '60 UC' ? 'border-4 border-blue-500' : ''
            }`}
            onClick={() => handleSelectItem({ name: '60 UC', price: 'Rp 13.495,-', discount: '1%' })}
          >
            <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-tr-lg rounded-bl-lg">
              1% OFF
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-bold">60 UC</p>
                <p className="line-through">Rp 13.631,-</p>
                <p>Rp 13.495,-</p>
              </div>
              <img
                alt="UC icon"
                height={50}
                src="src/assets/uc.png"
                width={50}
              />
            </div>
            {selectedItem && selectedItem.name === '60 UC' && (
              <div className="absolute top-2 right-2 text-green-500 text-2xl">
                <i className="fas fa-check-circle"></i>
              </div>
            )}
          </div>

          {/* Item 3 */}
          <div
            className={`relative bg-cyan-950 p-4 rounded-lg cursor-pointer ${
              selectedItem && selectedItem.name === '750 UC' ? 'border-4 border-blue-500' : ''
            }`}
            onClick={() => handleSelectItem({ name: '750 UC', price: 'Rp 90.000,-', discount: '1%' })}
          >
            <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-tr-lg rounded-bl-lg">
              1% OFF
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-bold">750 UC</p>
                <p className="line-through">Rp 95.000,-</p>
                <p>Rp 90.000,-</p>
              </div>
              <img
                alt="UC icon"
                height={50}
                src="src/assets/uc.png"
                width={50}
              />
            </div>
            {selectedItem && selectedItem.name === '750 UC' && (
              <div className="absolute top-2 right-2 text-green-500 text-2xl">
                <i className="fas fa-check-circle"></i>
              </div>
            )}
          </div>

          {/* Item 4 */}
          <div
            className={`relative bg-cyan-950 p-4 rounded-lg cursor-pointer ${
              selectedItem && selectedItem.name === '1200 UC' ? 'border-4 border-blue-500' : ''
            }`}
            onClick={() => handleSelectItem({ name: '1200 UC', price: 'Rp 199.000,-', discount: '1%' })}
          >
            <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-tr-lg rounded-bl-lg">
              1% OFF
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-bold">1200 UC</p>
                <p className="line-through">Rp 200.631,-</p>
                <p>Rp 199.000,-</p>
              </div>
              <img
                alt="UC icon"
                height={50}
                src="src/assets/uc.png"
                width={50}
              />
            </div>
            {selectedItem && selectedItem.name === '1200 UC' && (
              <div className="absolute top-2 right-2 text-green-500 text-2xl">
                <i className="fas fa-check-circle"></i>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
