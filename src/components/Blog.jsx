// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

export default function Blog() {
  const dummyData = [
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/RTyd4sxbVpp4DZdyc4uevZNBB4CtJ4sQ2fZAAdFmo4PllykTA.jpg',
      altText: 'Image of PUBG MOBILE update announcement',
      title: 'Pemberitahuan Update PUBG MOBILE Versi 3.4',
      date: '2024-09-11',
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/dU5miEhc61q5B9ETp4yhsZYQCavLvN7vUTRZ8UUJ7UzYpM5E.jpg',
      altText: 'Image of official verification and title version 3.4',
      title: 'Penerima Verifikasi Resmi dan Gelar Versi 3.4',
      date: '2024-09-14',
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/xe6osf0ZkKltTEh2DPyZmeLlLHqwLshQLTAai3T3NWvCLlJnA.jpg',
      altText: 'Image of beta 3 version 3.4 update announcement',
      title: 'Pemberitahuan Update Pengujian Beta 3 Versi 3.4',
      date: '2024-08-22',
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/XdiaRR77e1UYB6HLtbgALTJ6Dy4c8Vdp7RM49yfkCFBfKlJnA.jpg',
      altText: 'Image of QR code login announcement',
      title: 'Pengumuman Login Kode QR',
      date: '2024-09-13',
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/EYhxiOMWinLgLhRfXZ2S3TLt34DjruqQBR8PEAx8mVCxSZyJA.jpg',
      altText: 'Image of account protection feature',
      title: 'Fitur Perlindungan Akun',
      date: '2024-08-20',
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/DhqeenQYGltRdUI6HlfEDc8RhF943GHUGF0yImVD9JI9KlJnA.jpg',
      altText: 'Image of beta 2 version 3.4 update announcement',
      title: 'Pemberitahuan Update Pengujian Beta 2 Versi 3.4',
      date: '2024-08-16',
    },
  ];

  const [visibleItems, setVisibleItems] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleItems((prevVisibleItems) => {
        if (prevVisibleItems < dummyData.length) {
          return prevVisibleItems + 1;
        } else {
          clearInterval(intervalId);
          return prevVisibleItems;
        }
      });
    }, 300); // Mengatur jeda waktu animasi item satu per satu

    return () => clearInterval(intervalId);
  }, [dummyData.length]);

  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dummyData.slice(0, visibleItems).map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-cyan-950 p-4 rounded-lg shadow-2xl animate-fade-right transition-opacity duration-500 ease-in-out opacity-0"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <img
                alt={item.altText}
                className="w-1/4 rounded-lg"
                height={120}
                src={item.imgSrc}
                width={200}
              />
              <div className="ml-4 flex-1">
                <h2 className="text-clip font-bold text-gray-300">{item.title}</h2>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-400">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
