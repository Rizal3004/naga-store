// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function ContactUs() {
  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
      <div className="flex flex-col items-center justify-center h-screen md:h-96 bg-gray-900 px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-5xl w-full px-8 mt-1">
          <img
            alt="logo"
            className="mb-1 md:mb-0 hover:animate-wiggle-more"
            height={250}
            src="src/assets/logo.png"
            width={250}
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <h2 className="font-bold mb-2 text-white">PETA SITUS</h2>
              <div className="border-b-2 border-blue-500 w-8 mb-4 mx-auto md:mx-0"></div>
              <ul>
                <li className="mb-2 text-gray-400">Home</li>
                <li className="mb-2 text-gray-400">Blog</li>
                <li className="mb-2 text-gray-400">Lacak Pesanan</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold mb-2 text-white">KONTAK KAMI</h2>
              <div className="border-b-2 border-blue-500 w-8 mb-4 mx-auto md:mx-0"></div>
              <a className="text-green-600 text-2xl" href="#">
                  <i className="fab fa-whatsapp transition hover:scale-110 duration-300 ease-in-out"></i>
              </a>
            </div>
            <div>
              <h2 className="font-bold mb-2 text-white">IKUTI KAMI</h2>
              <div className="border-b-2 border-blue-500 w-8 mb-4 mx-auto md:mx-0"></div>
              <div className="flex justify-center md:justify-start space-x-6">
                <a className="text-blue-600 text-2xl transition hover:scale-110 duration-300 ease-in-out" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="text-pink-500 text-2xl transition hover:scale-110 duration-300 ease-in-out" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="text-slate-950 text-2xl hover:text-white transition hover:scale-110 duration-300 ease-in-out" href="#">
                  <i className="fab fa-tiktok"></i>
                </a>
                <a className="text-red-600 text-2xl transition hover:scale-110 duration-300 ease-in-out" href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-500 w-full mt-4"></div>
        <p className="text-center mt-4 text-gray-400">
          © 2024 Rdiann Arfan-Naga Store | Rizal Ihsan
        </p>
      </div>
    </>
  );
}
