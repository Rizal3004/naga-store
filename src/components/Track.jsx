// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Track() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [showTable, setShowTable] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const itemsPerPage = 5;

// Dummy data for tracking orders
const dummyData = [
  {
    id: 1,
    name: 'PUBG Mobile (Indonesia)',
    date: '05 Oktober 2024, 07:32:52',
    price: 'Rp 6.882,-',
    uc: '30 UC',
    method: 'QRIS',
    status: 'Cancel',
    orderNumber: 'PMIX18B9E7BB8DD35A76555738D18', // Order number
    snCode: 'PMIX18B9E7C404F2D16AAF5B002D2', // SN code
    purchaseDate: '05/10/2024, 07:32:52' // Purchase date
  },
  {
    id: 2,
    name: 'PUBG Mobile (Indonesia)',
    date: '05 November 2023, 14:56:30',
    price: 'Rp 64.045,-',
    uc: '300 + 25 Bonus UC',
    method: 'QRIS',
    status: 'Success',
    orderNumber: 'PMIX18B9E7BB8DD35A76555738D18',
    snCode: 'PMIX18B9E7C404F2D16AAF5B002D2',
    purchaseDate: '05/11/2023, 14:56:30'
  },
  {
    id: 3,
    name: 'PUBG Mobile (Indonesia)',
    date: '28 Oktober 2023, 18:57:08',
    price: 'Rp 64.269,-',
    uc: '300 + 25 Bonus UC',
    method: 'QRIS',
    status: 'Success',
    orderNumber: 'PMIX18B9E7BB8DD35A76555738D18',
    snCode: 'PMIX18B9E7C404F2D16AAF5B002D2',
    purchaseDate: '28/10/2023, 18:57:08'
  },
  {
    id: 4,
    name: 'PUBG Mobile (Indonesia)',
    date: '12 Desember 2023, 10:15:30',
    price: 'Rp 89.123,-',
    uc: '600 UC',
    method: 'OVO',
    status: 'Cancel',
    orderNumber: 'PMIX18B9E7BB8DD35A76555738D18',
    snCode: 'PMIX18B9E7C404F2D16AAF5B002D2',
    purchaseDate: '12/12/2023, 10:15:30'
  },
  {
    id: 5,
    name: 'PUBG Mobile (Indonesia)',
    date: '19 Januari 2024, 08:45:00',
    price: 'Rp 45.000,-',
    uc: '180 UC',
    method: 'Bank Transfer',
    status: 'Success',
    orderNumber: 'PMIX18B9E7BB8DD35A76555738D18',
    snCode: 'PMIX18B9E7C404F2D16AAF5B002D2',
    purchaseDate: '19/01/2024, 08:45:00'
  },
  {
    id: 6,
    name: 'PUBG Mobile (Indonesia)',
    date: '02 Februari 2024, 16:20:45',
    price: 'Rp 120.000,-',
    uc: '900 UC',
    method: 'Dana',
    status: 'Cancel',
    orderNumber: 'PMIX18B9E7BB8DD35A76555738D18',
    snCode: 'PMIX18B9E7C404F2D16AAF5B002D2',
    purchaseDate: '02/02/2024, 16:20:45'
  },
];

  const handleSearch = () => {
    if (searchTerm) {
      setShowMessage(false);
      setShowTable(true);
    } else {
      setShowMessage(true);
      setShowTable(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setSearchTerm(value);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const paginatedData = dummyData.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < dummyData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleBefore = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="backdrop-blur-xl min-h-screen">
      <div className="w-full max-w-3xl mx-auto">
        <div className="p-10 rounded-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-grow w-full md:w-auto relative">
            <input
              className="w-full p-1 pl-2 bg-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition hover:scale-105 duration-300 ease-in-out animate-fade-left"
              placeholder="Ketik No WhatsApp atau No invoice"
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
            />
            <button
              onClick={handleSearch}
              className="bg-sky-500 text-white px-2 py- rounded-lg absolute right-0 top-0 bottom-0 h-full transition-transform transform hover:scale-105 animate-fade-down"
            >
              Cari Pesanan
            </button>
          </div>
        </div>
        {showMessage && (
          <p className="text-yellow-300 mt-2 text-center">
            ⚠ Harap isi nomor WhatsApp atau nomor invoice!
          </p>
        )}
        {showTable ? (
          <div className="max-w-2xl mx-auto p-3 animate-fade-up">
            <h1 className="text-2xl text-slate-950 text-center font-bold mb-4">Riwayat Pesanan</h1>
            {paginatedData.map((order) => (
              <Link to={`/detail-order/${order.id}`} key={order.id}>
                <div className="bg-cyan-950 p-4 rounded-lg mb-4 cursor-pointer hover:bg-cyan-800 transition">
                  <div className="flex items-center mb-2">
                    <img
                      alt={order.name}
                      className="w-12 h-12 rounded-md mr-4"
                      src="/img/icon.png"
                    />
                    <div>
                      <h2 className="text-base font-semibold">{order.name}</h2>
                      <p className="text-xs">{order.uc}</p>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs mobile-flex">
                    <div>
                      <p>Harga</p>
                      <p className="font-semibold">{order.price}</p>
                    </div>
                    <div>
                      <p>Tanggal</p>
                      <p className="font-semibold">{order.date}</p>
                    </div>
                    <div>
                      <p>Metode Pembayaran</p>
                      <p className="font-semibold">{order.method}</p>
                    </div>
                    <div>
                      <span className={`py-0 px-1 rounded-md ${order.status === 'Success' ? 'bg-green-600' : order.status === 'Cancel' ? 'bg-red-600' : 'bg-gray-600'}`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            <div className="flex justify-between mt-4">
              <button
                onClick={handleBefore}
                disabled={currentPage === 0}
                className="text-white text-2xl px-3 py-1 hover:text-sky-600 rounded-lg disabled:opacity-50 transition hover:scale-110 duration-300 ease-in-out"
              >
               <i className="fa-solid fa-circle-arrow-left" />
              </button>
              <button
                onClick={handleNext}
                disabled={(currentPage + 1) * itemsPerPage >= dummyData.length}
                className="text-white text-2xl hover:text-sky-600 px-3 py-1 rounded-lg disabled:opacity-50 transition hover:scale-110 duration-300 ease-in-out"
              >
                <i className="fa-solid fa-circle-arrow-right" />
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center mt-6">
            <h1 className="text-white text-2xl mb-6">Riwayat Pesanan</h1>
            <img
              alt="Nothing here"
              className="mx-auto mb-4"
              height={200}
              src="/img/nothing.png"
              width={200}
            />
            <p className="text-white text-center text-sm md:text-base lg:text-lg px-4">
              Produk belum bisa ditampilkan, silakan isi nomor HP terlebih dahulu
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
