import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="https://cdn.poehali.dev/files/81eebc1d-3a6a-49d6-8837-c595cc39b001.jpg"
              alt="DevStars Logo"
              className="h-20 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-red-600 transition-colors font-inter font-medium"
            >
              О нас
            </a>
            <a
              href="#portfolio"
              className="text-gray-700 hover:text-red-600 transition-colors font-inter font-medium"
            >
              Портфолио
            </a>
            <a
              href="#contacts"
              className="text-gray-700 hover:text-red-600 transition-colors font-inter font-medium"
            >
              Контакты
            </a>
          </nav>
          <a
            href="mailto:ilxq@devstars.team"
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-inter font-medium"
          >
            Связаться
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
