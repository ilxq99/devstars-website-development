import React from "react";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="font-montserrat font-bold text-4xl text-center mb-12 text-black">
          Портфолио проектов
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <div className="text-white text-6xl">✈️</div>
            </div>
            <div className="p-6">
              <h3 className="font-montserrat font-semibold text-xl mb-3 text-black">
                TourAgent.club
              </h3>
              <p className="font-inter text-gray-600 mb-4">
                B2B CRM система для турагентств России. Управление клиентами,
                бронирование туров и аналитика продаж
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-inter">
                  Next.js
                </span>
                <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-inter">
                  PostgreSQL
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-inter font-semibold">
                  B2B Travel
                </span>
                <a
                  href="https://touragent.club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-inter text-sm font-semibold"
                >
                  Подробнее →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-br from-yellow-500 to-red-500 flex items-center justify-center">
              <div className="text-white text-6xl">🚀</div>
            </div>
            <div className="p-6">
              <h3 className="font-montserrat font-semibold text-xl mb-3 text-black">
                Астромак для McDonald's
              </h3>
              <p className="font-inter text-gray-600 mb-4">
                Realtime VK mini app игра. Получил две золотые награды Effie
                Awards Russia 2020
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-inter">
                  VK Mini App
                </span>
                <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-inter">
                  Realtime
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="inline-block bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-sm font-inter font-semibold">
                  🏆 Effie Awards
                </span>
                <a
                  href="https://www.youtube.com/watch?v=Zx9ni3lX5Bk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 font-inter text-sm font-semibold"
                >
                  Подробнее →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <div className="text-white text-6xl">📺</div>
            </div>
            <div className="p-6">
              <h3 className="font-montserrat font-semibold text-xl mb-3 text-black">
                VK app для телеканала Пятница
              </h3>
              <p className="font-inter text-gray-600 mb-4">
                Промо-приложение для популярного телеканала с интерактивным
                контентом
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-inter">
                  VK Mini App
                </span>
                <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-inter">
                  Promo
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="inline-block bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-inter font-semibold">
                  Entertainment
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
