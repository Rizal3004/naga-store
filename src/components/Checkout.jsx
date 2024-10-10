// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert('Text copied to clipboard!');
      },
      (err) => {
        console.error('Failed to copy text: ', err);
      }
    );
  };

  const handleClose = () => {
    navigate(-1);
  };

  const handleCancel = () => {
    navigate('/Card_P');
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleConfirm = () => {
    if (!file) {
      alert('Please upload a file before confirming.');
      return;
    }
    
    console.log('File uploaded:', file);
    navigate('/payment-succes'); 
  };

  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
      <div className="max-w-2xl mx-auto bg-cyan-950 shadow-md rounded-xl mt-6 my-6 p-10 animate-fade-in relative">
        {/* Close Icon */}
        <i
          className="fas fa-times absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-red-500"
          onClick={handleClose}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b pb-2">
          <div>
            <p className="text-sm text-gray-500">Tanggal Pembelian</p>
            <p className="text-clip font-semibold">08/10/2024, 14:07:25</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Nomor Pesanan</p>
            <p className="text-clip font-semibold flex items-center">
              PMIX1926AF43EF12D80F91BB9440E{' '}
              <i
                className="fas fa-copy ml-2 text-gray-500 cursor-pointer"
                onClick={() => handleCopy('PMIX1926AF43EF12D80F91BB9440E')}
              />
            </p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <img
            alt="icon pubg"
            className="w-20 h-20 rounded-lg"
            src="/img/icon.png"
          />
          <div className="ml-4">
            <p className="text-xl font-semibold text-white">PUBG Mobile (Indonesia)</p>
            <p className="text-gray-500">KRAFTON</p>
          </div>
        </div>
        <div className="border-t border-dashed mt-4 pt-4">
          <p className="text-clip font-semibold">Detail</p>
          <div className="flex justify-between mt-2">
            <p className="text-gray-400">Item</p>
            <p className="text-white">30 UC</p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-gray-400">User Nick</p>
            <p className="text-white">Cii Naga</p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-gray-400">User Id</p>
            <p className="text-white">23098765</p>
          </div>
        </div>
        <div className="border-t border-dashed mt-4 pt-4">
          <div className="flex justify-between items-center">
            <p className="text-clip font-semibold">Metode Pembayaran</p>
            <p className="text-clip flex items-center">Dana</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-clip font-semibold">No Rekening</p>
            <p className="text-clip flex items-center">
              089898989 
              <i
                className="fas fa-copy ml-2 text-gray-500 cursor-pointer"
                onClick={() => handleCopy('089898989')}
              />
            </p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-clip font-semibold">Atas Nama</p>
            <p className="text-clip flex items-center">Radian Arfan Sinaga</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-clip font-semibold">Total Pembayaran</p>
            <p className="text-red-600 text-xl flex items-center">
              Rp 6.882,- 
              <i
                className="fas fa-copy ml-2 text-gray-500 cursor-pointer"
                onClick={() => handleCopy('6.882')}
              />
            </p>
          </div>
        </div>
        <div className="bg-orange-100 text-orange-700 p-4 mt-4 rounded-lg text-center">
          <p className="text-sm font-semibold">
            PENTING! Pastikan nominal transfer{' '}
            <span className="font-bold">TEPAT BERJUMLAH ANGKA DI ATAS</span> (hingga
            3 angka terakhir). Mohon untuk tidak melebihi atau mengurangi nominal
            transfernya.
          </p>
        </div>
        {/* File Upload Section */}
        <div className="mt-6">
          <label className="text-gray-500">Upload Bukti Transfer</label>
          <input
            type="file"
            className="w-full p-1 mt-1 rounded bg-gray-100 text-gray-400 hover:scale-110 duration-300 ease-in-out"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        {/* Additional Sections */}
        <div className="mt-6 flex justify-between">
          <button
            type="button"
            className="text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2 hover:scale-110 duration-300 ease-in-out"
            onClick={handleCancel}
          >
            Batal
          </button>
          <button
            type="button"
            className="text-white bg-sky-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2 hover:scale-110 duration-300 ease-in-out"
            onClick={handleConfirm}
          >
            Konfirmasi
          </button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-white">
            Butuh bantuan?{' '}
            <a className="text-sky-500 font-semibold hover:text-blue-700" href="https://wa.me/+6281362812549">
              <i className="fab fa-whatsapp ml-2 text-green-500 cursor-pointer"></i> Hubungi kami
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
