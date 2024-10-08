// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

export default function Footer() {
  const [showPaymentPopup, setShowPaymentPopup] = useState(false); // State to control payment popup visibility
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(''); // Selected payment method
  // eslint-disable-next-line no-unused-vars
  const ucAmount = 30; // Example UC amount
  const totalPrice = 'Rp 6.747,-'; // Example total price

  // Function to handle payment method change
  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  // Function to handle confirm button click
  const handleConfirmClick = () => {
    setShowPaymentPopup(true); // Show the payment popup
  };

  // Function to close the payment popup
  const closePopup = () => {
    setShowPaymentPopup(false); // Hide the payment popup
  };

  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center items-center bg-cyan-950 p-2 rounded-lg animate-fade-up">
      {/* Payment Info */}
      <div className="flex items-center mx-4">
        <img
          alt="Image of UC currency"
          className="w-8 h-8 mr-4"
          src="src/assets/uc.png"
        />
        <div>
          <div className="text-white">100000 UC</div>
          <div className="text-gray-400 text-xs">Harga: Rp 60.747.000,-</div>
        </div>
      </div>

      <button className="bg-sky-500 text-white px-2 py-2 rounded-md" onClick={handleConfirmClick}>
        Konfirmasi Pesanan
      </button>

      {/* Payment Method Popup */}
      {showPaymentPopup && (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center animate-fade-in">
          <div className="relative bg-cyan-950 p-6 rounded-lg shadow-lg w-full max-w-md mx-4">
            <h2 className="text-xl font-bold mb-4 text-center">Pilih Metode Pembayaran</h2>
            <p className="text-center mb-4">Total Pembayaran: {totalPrice}</p>
            <div className="relative mb-4">
              <select
                value={selectedPaymentMethod}
                onChange={handlePaymentMethodChange}
                className="bg-gray-600 text-white p-2 rounded-md w-full"
              >
                <option value="" disabled>Select Payment Method</option>
                <option value="BRI">Bank BRI</option>
                <option value="DANA">Dana</option>
                <option value="QRIS">QRIS</option>
              </select>
            </div>
            <div className="flex justify-between">
              <button className="bg-red-500 text-white px-2 py-2 rounded-md" onClick={closePopup}>
                Batal
              </button>
              <button className="bg-green-500 text-white px-2 py-2 rounded-md" onClick={closePopup}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
