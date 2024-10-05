// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import IcOutlineAccountCircle from '~icons/ic/outline-account-circle';

export default function Header() {
  const [isOpenDesktop, setIsOpenDesktop] = useState(false); // Dropdown untuk user menu desktop
  const [isOpenMobile, setIsOpenMobile] = useState(false); // Dropdown untuk user menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State untuk mobile menu
  const [voucherCode, setVoucherCode] = useState(''); // State untuk kode voucher
  const [activeMenu, setActiveMenu] = useState(''); // State untuk menu aktif

  const toggleDesktopDropdown = () => {
    setIsOpenDesktop((prev) => !prev);
  };

  const toggleMobileDropdown = () => {
    setIsOpenMobile((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpenDesktop && !event.target.closest('#user-menu-button')) {
        setIsOpenDesktop(false);
      }
      if (isOpenMobile && !event.target.closest('#user-menu-button-mobile')) {
        setIsOpenMobile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpenDesktop, isOpenMobile]);

  return (
    <>
      <div className="min-h-full sticky top-0 z-50">
        <nav className="bg-cyan-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-[65px]"
                    src="src/assets/logo.png"
                    alt="logo"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {['Dashboard', 'Blog'].map((menu) => (
                      <a
                        key={menu}
                        href="#"
                        className={`rounded-md px-3 py-2 text-sm font-medium text-white ${
                          activeMenu === menu ? 'bg-gray-900' : 'text-gray-300 hover:bg-gray-700'
                        }`}
                        onClick={() => handleMenuClick(menu)}
                      >
                        {menu}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Profil dan input untuk desktop */}
              <div className="hidden md:flex items-center space-x-4">
                <div>
                  <p className="text-white text-xs text-opacity-30">Masukkan No. Whatsapp / No Invoice</p>
                  <input
                    type="text"
                    className="w-full md:w-90 h-6 p-2 text-sm rounded-md bg-gray-600 text-white"
                    placeholder="Lacak Pesanan..."
                  />
                </div>
                <div>
                  <p className="text-white text-xs text-opacity-30">Masukkan Kode Voucher</p>
                  <input
                    type="text"
                    className="w-full md:w-90 h-6 p-2 text-sm rounded-md bg-gray-600 text-white"
                    placeholder="Kode Voucher"
                    value={voucherCode}
                    onChange={(e) => setVoucherCode(e.target.value)}
                  />
                </div>
                <div className="relative ml-3">
                  <button
                    type="button"
                    onClick={toggleDesktopDropdown}
                    className="relative flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-slate-300 focus:ring-offset-1"
                    id="user-menu-button"
                    aria-expanded={isOpenDesktop}
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <IcOutlineAccountCircle className="h-8 w-8 text-slate-400" />
                  </button>

                  {/* Dropdown menu untuk desktop */}
                  {isOpenDesktop && (
                    <div
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex={-1}
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        Your Profile
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        Sign out
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Tombol Profil dan menu untuk mobile */}
              <div className="flex md:hidden items-center space-x-4">
                <button
                  type="button"
                  onClick={toggleMobileDropdown}
                  className="relative flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-slate-300 focus:ring-offset-1"
                  id="user-menu-button-mobile"
                  aria-expanded={isOpenMobile}
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <IcOutlineAccountCircle className="h-8 w-8 text-slate-400" />
                </button>

                {/* Mobile menu button */}
                <button
                  type="button"
                  onClick={toggleMobileMenu}
                  className="relative inline-flex max-w-xs items-center justify-center p-1 text-slate-300 focus:outline-none focus:ring-1 focus:ring-offset-1"
                  aria-controls="mobile-menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  <svg
                    className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile dropdown menu */}
          {isOpenMobile && (
            <div
              className="md:hidden block bg-white absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-10"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button-mobile"
            >
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Sign out
              </a>
            </div>
          )}

          {/* Mobile menu, show/hide based on menu state. */}
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {['Dashboard', 'Blog'].map((menu) => (
                <a
                  key={menu}
                  href="#"
                  className={`block rounded-md px-3 py-2 text-base font-medium text-white ${
                    activeMenu === menu ? 'bg-gray-900' : 'text-gray-300 hover:bg-gray-700'
                  }`}
                  onClick={() => handleMenuClick(menu)}
                >
                  {menu}
                </a>
              ))}
              {/* Search bar dan input kode voucher di dalam menu mobile */}
              <div>
                <p className="text-white text-xs text-opacity-40">Masukkan No. Whatsapp / No Invoice</p>
                <input
                  type="text"
                  className="w-full md:w-90 h-6 p-2 text-sm rounded-md bg-gray-600 text-white"
                  placeholder="Lacak Pesanan..."
                />
              </div>
              <div>
                <p className="text-white text-xs text-opacity-40">Masukkan Kode Voucher</p>
                <input
                  type="text"
                  className="w-full md:w-90 h-6 p-2 text-sm rounded-md bg-gray-600 text-white"
                  placeholder="Kode Voucher"
                  value={voucherCode}
                  onChange={(e) => setVoucherCode(e.target.value)}
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
