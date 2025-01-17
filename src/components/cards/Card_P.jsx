// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Hero_P from '../heros/Hero_P';
import Payment_P from '../payments/Payment_P';
import VoucherInput from '../VoucherInput';

export default function Card_P() {
  const [selectedItem, setSelectedItem] = useState(null);

  const dummyData = [
    { name: '15000 UC', price: 'Rp 1.150.000,-', discount: '1%', status: 'Tersedia' },
    { name: '60 UC', price: 'Rp 13.495,-', discount: '1%', status: 'Tersedia' },
    { name: '750 UC', price: 'Rp 90.000,-', discount: '1%', status: 'Tersedia' },
    { name: '1200 UC', price: 'Rp 199.000,-', discount: '1%', status: 'Tersedia' },
    { name: '300 UC', price: 'Rp 45.000,-', discount: '1%', status: 'Tersedia' },
    { name: '5000 UC', price: 'Rp 600.000,-', discount: '1%', status: 'Habis' },
  ];

  const handleSelectItem = (item) => {
    if (item.status === 'Habis') {
      // Do nothing if the item is out of stock
      return;
    }

    // Toggle item selection; if the selected item is clicked again, deselect it
    if (selectedItem && selectedItem.name === item.name) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
    console.log('Selected Item:', item); // Debugging
  };

  return (
    <>
      <Hero_P />
      <VoucherInput />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
      <div className="max-w-7xl my-4 mx-auto p-4 bg-gray-600 bg-opacity-40 bg-cover rounded-lg bg-center md:bg-fixed animate-fade-left">
        <h1 className="text-xl font-bold mb-2 text-white text-center">PILIH ITEM</h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 animate-fade-right">
          {dummyData.map((item) => (
            <div
              key={item.name}
              className={`relative bg-cyan-950 p-4 rounded-lg ${
                item.status === 'Habis' ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:scale-105'
              } transition duration-300 ease-in-out ${
                selectedItem && selectedItem.name === item.name ? 'border-4 border-sky-500' : ''
              }`}
              onClick={() => handleSelectItem(item)}
            >
              <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-tr-lg rounded-bl-lg">
                {item.discount} OFF
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-bold">{item.name}</p>
                  <p className="line-through">{item.price}</p>
                  <p>{item.price}</p>
                  <p className={`text-sm ${item.status === 'Habis' ? 'text-red-500' : 'text-green-500'}`}>
                    Status: {item.status}
                  </p>
                </div>
                <img
                  alt="UC icon"
                  height={50}
                  src="/img/uc.png"
                  width={50}
                />
              </div>
              {selectedItem && selectedItem.name === item.name && (
                <div className="absolute top-2 right-2 text-green-500 text-2xl animate-bounce">
                  <i className="fas fa-check-circle"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Pass selectedItem to Footer */}
      <Payment_P selectedItem={selectedItem} />
    </>
  );
}
