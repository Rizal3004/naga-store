// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

export default function PaymentSucces() {
  return (
    <div
      className="bg-cover bg-center flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: "url('/img/checkoutbg.jpg')",
      }}
    >
      <div className=" bg-gray-800/50 shadow-md rounded-xl p-6 md:p-10 max-w-md mx-4 animate-fade-down">
        {/* Replace the SVG checkmark with the Lottie animation */}
        <dotlottie-player
          src="https://lottie.host/5bda1945-bcf1-4678-889b-db8695640ecb/zDTkVDVQfo.json"
          background="transparent"
          speed="1"
          style={{ width: '100%', height: '150px', display: 'block', margin: 'auto' }}
          loop
          autoplay
        ></dotlottie-player>
        <div className="text-center">
          <h3 className="text-xl md:text-2xl text-white font-semibold">
            Payment Done!
          </h3>
          <p className="text-white my-2">
            Terimakasih Telah Berbelanja di Naga Store Pesanan Anda Akan Segera Kami Proses.
          </p>
          <p>Have a great day!</p>
          <div className="mt-6 flex justify-center space-x-4">
            <Link
              to="/" 
              className="text-white bg-sky-600 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2 transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              Ok
            </Link>
            <Link
              to="/track" 
              className="text-white bg-green-600 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2 transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              Cek Pesanan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
