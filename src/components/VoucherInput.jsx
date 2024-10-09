// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const VoucherForm = () => {
  const [voucherCode, setVoucherCode] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(null); 

  const handleInputChange = (e) => {
    setVoucherCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (voucherCode.trim() === '') {
      setMessage('Voucher code cannot be empty.');
      setIsValid(false);
      return;
    }

    const validVouchers = [
      { code: 'SAVE10', isExpired: false },
      { code: 'SUMMER20', isExpired: true },
    ];

    const foundVoucher = validVouchers.find((voucher) => voucher.code === voucherCode);

    if (!foundVoucher) {
      setMessage('Voucher not found.');
      setIsValid(false); 
    } else if (foundVoucher.isExpired) {
      setMessage('Voucher has expired.');
      setIsValid(false);
    } else {
      setMessage(`Voucher code "${voucherCode}" applied successfully!`);
      setIsValid(true);
      setVoucherCode('');
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      <div className="bg-cyan-950 p-2 rounded-lg shadow-lg w-full max-w-2xl mx-auto my-3 flex flex-col items-center animate-fade-in">
        <h2 className="text-white text-clip mb-1">Kode Voucher</h2>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex items-center bg-gray-200 rounded-lg overflow-hidden">
            <div className="px-2">
              <i className="fas fa-search text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Ketik Kode Promo (Opsional)"
              className={`flex-grow p-2 bg-gray-200 text-gray-500 focus:outline-none ${isValid === true ? 'border-green-500' : isValid === false ? 'border-red-500' : ''}`}
              value={voucherCode}
              onChange={handleInputChange}
              required
            />
            <button className="bg-sky-600 hover:bg-blue-700 text-white px-4 py-2" type="submit">Gunakan</button>
          </div>
          {message && (
            <p className={`mt-2 text-sm text-center ${isValid === true ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default VoucherForm;
