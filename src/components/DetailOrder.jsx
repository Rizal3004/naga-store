// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function DetailOrder() {
  const { id } = useParams(); // Get the order ID from the URL
  const navigate = useNavigate(); // Initialize the navigate function

  // Sample data for demonstration (replace this with your actual data source)
  const orders = [
    {
      id: 1,
      name: 'PUBG Mobile (Indonesia)',
      uc: '30 UC',
      userNick: 'CiiNAGA',
      userId: '584652468',
      snCode: 'PMIX18B9E7C404F2D16AAF5B002D2',
      date: '05/11/2023, 14:56:30',
      method: 'QRIS',
      price: 'Rp 6.882,-',
      status: 'Success',
      orderNumber: 'PMIX18B9E7BB8DD35A76555738D18',
    },
    {
      id: 2,
      name: 'PUBG Mobile (Indonesia)',
      uc: '300 + 25 Bonus UC',
      userNick: 'CiiNAGA',
      userId: '584652468',
      snCode: 'PMIX18B9E7C404F2D16AAF5B002D2',
      date: '05/11/2023, 14:56:30',
      method: 'QRIS',
      price: 'Rp 64.045,-',
      status: 'Failed',
      orderNumber: 'PMIX18B9E7BB8DD35A76555738D18',
    },
    // Add more orders as needed...
  ];

  // Find the order by ID
  const order = orders.find((order) => order.id === parseInt(id));

  // If order not found, you may want to handle this case
  if (!order) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-red-600 p-4">
          <h1 className="text-4xl font-bold mb-4">⚠ Order Not Found ⚠</h1>
        </div>
      </div>
    );
  }

  // Determine status color based on order status
  const statusColor = order.status === 'Success' ? 'bg-green-600' : 'bg-red-600';

  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
      <div className="flex items-center justify-center min-h-screen animate-fade-up">
        <div className="bg-cyan-950 rounded-lg shadow-lg w-full max-w-2xl mx-3">
          <div
            className="bg-cover text-white p-4 rounded-t-lg flex flex-col sm:flex-row justify-between items-start sm:items-center"
            style={{
              backgroundImage: "url('/img/checkoutbg.jpg')",
            }}
          >
            <div className="flex items-center mb-2 sm:mb-0">
              <div className="ml-0">
                <p className="text-sm">Nomor Pesanan</p>
                <p className="font-bold">{order.orderNumber}</p>
              </div>
            </div>
            <div className={`${statusColor} text-white px-4 py-2 rounded-lg`}>
              {order.status}
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center mb-4">
              <img
                alt="logo"
                className="w-16 h-16 rounded-lg"
                src="/img/icon.png"
              />
              <div className="ml-4">
                <p className="font-bold text-lg text-white">{order.name}</p>
              </div>
            </div>
            <hr className="border-dashed border-gray-300 mb-4" />
            <div>
              <p className="font-bold mb-2">Detail</p>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 text-sm">
                <div className="flex justify-between">
                  <span>Item</span>
                  <span>{order.uc}</span>
                </div>
                <div className="flex justify-between">
                  <span>User Nick PUBG</span>
                  <span>{order.userNick}</span>
                </div>
                <div className="flex justify-between">
                  <span>User Id</span>
                  <span>{order.userId}</span>
                </div>
                <div className="flex justify-between">
                  <span>SN Code</span>
                  <span>
                    Ref: {order.snCode} <i className="fas fa-copy" />
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Tanggal Pembelian</span>
                  <span>{order.date}</span>
                </div>
                <div className="flex justify-between">
                  <span>Metode Pembayaran</span>
                  <span>{order.method}</span>
                </div>
              </div>
            </div>

            <hr className="border-dashed border-gray-300 my-4" />
            <div className="flex justify-between items-center">
              <p className="font-bold">Total Pembayaran</p>
              <p className="text-red-600 font-bold">{order.price}</p>
            </div>
          </div>
          {/* Back Button */}
          <div className="p-4">
            <button
              onClick={() => navigate(-1)} // Go back to the previous page
              className="text-white text-xl hover:text-sky-600 rounded-lg transition hover:scale-110 duration-300 ease-in-out"
            >
              <i className="fa-solid fa-circle-arrow-left" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
