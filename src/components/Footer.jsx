// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Footer({ selectedItem }) {
  const navigate = useNavigate(); // Initialize useNavigate
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const ucAmount = selectedItem ? selectedItem.name : '0 UC';
  const totalPrice = selectedItem ? selectedItem.price : 'Rp 0,-';

  // Log untuk melihat selectedItem
  useEffect(() => {
    console.log('Selected Item in Footer:', selectedItem);
  }, [selectedItem]);

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  const handleConfirmClick = () => {
    setShowPaymentPopup(true);
  };

  const closePopup = () => {
    setShowPaymentPopup(false);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    const whatsappInput = e.target.elements.floating_nohp.value; // Get Whatsapp input value
    const pubgIdInput = e.target.elements.floating_idpubg.value; // Get PUBG ID input value

    // Check for empty fields
    if (!whatsappInput || !pubgIdInput || !selectedPaymentMethod) {
      alert('Harap isi semua field sebelum melanjutkan.'); // Show alert if fields are empty
      return; // Prevent form submission
    }

    // Proceed to navigate to Checkout page if all fields are filled
    navigate('/checkout'); // Redirect to Checkout page
  };

  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center items-center bg-cyan-950 p-2 rounded-lg animate-fade-up">
      <div className="flex items-center mx-4">
        <img
          alt="UC Image"
          className="w-8 h-8 mr-4"
          src="/img/uc.png"
        />
        <div>
          <div className="text-white">{ucAmount}</div>
          <div className="text-gray-400 text-xs">Harga: {totalPrice}</div>
        </div>
      </div>

      <button className="bg-sky-500 text-white px-2 py-2 rounded-md" onClick={handleConfirmClick}>
        Konfirmasi Pesanan
      </button>

      {showPaymentPopup && (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center animate-fade-up">
          <div className="relative bg-cyan-950 p-6 rounded-lg shadow-lg w-full max-w-md mx-4">
            <h2 className="text-xl font-bold mb-4 text-center">Isi Data dan Metode Pembayaran</h2>
            <div className="items-center mx-36 animate-bounce">
              <img
                alt="UC Image"
                className="h-20"
                src="/img/ucicon.png"
              />
            </div>
            <p className="text-center text-red-700 text-xl">0 UC</p>
            <p className="text-center">Total Pembayaran: {totalPrice}</p>

            {/* Form Start */}
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_nohp"
                  id="floating_nohp"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_nohp"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  No. Whatsapp
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_idpubg"
                  id="floating_idpubg"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_idpubg"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  ID PUBG
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <div className="relative z-0 w-full mb-5 group">
                  <select
                    value={selectedPaymentMethod}
                    onChange={handlePaymentMethodChange}
                    className="block py-2.5 px-0 w-full text-sm bg-cyan-950 border-0 border-b-2 border-sky-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    required=""
                  >
                    <option value="" disabled hidden>Pilih Metode Pembayaran</option>
                    <option value="bank_transfer">Transfer Bank</option>
                    <option value="e_wallet_dana">Dana</option>
                    <option value="e_wallet_gopay">GoPay</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full text-white bg-sky-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Kirim
              </button>
            </form>
            {/* Form End */}
            <button className="absolute top-1 right-4 text-gray-500 text-2xl hover:text-red-700" onClick={closePopup}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

Footer.propTypes = {
  selectedItem: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
  }),
};
