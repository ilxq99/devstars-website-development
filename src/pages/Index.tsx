import React from "react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="font-montserrat font-bold text-xl text-black">
                DevStars
              </span>
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
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-inter font-medium">
              Связаться
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6">
              Разработка ПО для
              <span className="text-gradient block">B2B бизнеса</span>
            </h1>
            <p className="font-inter text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Создаем масштабируемые решения для автоматизации бизнес-процессов,
              CRM-системы и корпоративные платформы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-inter font-semibold text-lg">
                Обсудить проект
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-colors font-inter font-semibold text-lg">
                Портфолио
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-montserrat font-bold text-4xl text-center mb-12 text-black">
              О компании DevStars
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-montserrat font-semibold text-2xl mb-6 text-black">
                  Экспертиза в B2B разработке
                </h3>
                <p className="font-inter text-gray-700 mb-6 leading-relaxed">
                  Специализируемся на создании комплексных программных решений
                  для корпоративного сектора. Наша команда имеет опыт работы с
                  крупными B2B проектами в различных отраслях.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="font-inter text-gray-700">
                      CRM и ERP системы
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="font-inter text-gray-700">
                      Корпоративные порталы
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="font-inter text-gray-700">
                      Системы автоматизации
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="font-montserrat font-semibold text-xl mb-6 text-black">
                  Наши технологии
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-2">⚛️</div>
                    <span className="font-inter text-sm text-gray-700">
                      React
                    </span>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-2">🚀</div>
                    <span className="font-inter text-sm text-gray-700">
                      Node.js
                    </span>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-2">🐍</div>
                    <span className="font-inter text-sm text-gray-700">
                      Python
                    </span>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-2">☁️</div>
                    <span className="font-inter text-sm text-gray-700">
                      Cloud
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-montserrat font-bold text-4xl text-center mb-12 text-black">
            Портфолио проектов
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <div className="text-white text-6xl">📊</div>
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-semibold text-xl mb-3 text-black">
                  CRM-система для ритейла
                </h3>
                <p className="font-inter text-gray-600 mb-4">
                  Комплексная система управления продажами с интеграцией
                  складского учета
                </p>
                <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-inter">
                  B2B Retail
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                <div className="text-white text-6xl">🏭</div>
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-semibold text-xl mb-3 text-black">
                  ERP для производства
                </h3>
                <p className="font-inter text-gray-600 mb-4">
                  Автоматизация производственных процессов и планирование
                  ресурсов
                </p>
                <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-inter">
                  Manufacturing
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-600 to-black flex items-center justify-center">
                <div className="text-white text-6xl">💼</div>
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-semibold text-xl mb-3 text-black">
                  Корпоративный портал
                </h3>
                <p className="font-inter text-gray-600 mb-4">
                  Единая платформа для управления сотрудниками и
                  документооборотом
                </p>
                <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-inter">
                  Enterprise
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <h2 className="font-montserrat font-bold text-4xl text-center mb-12">
            Начнем сотрудничество
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-montserrat font-semibold text-2xl mb-6">
                Свяжитесь с нами
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <p className="font-inter text-gray-300">Email</p>
                    <p className="font-inter font-semibold">
                      hello@devstars.ru
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <p className="font-inter text-gray-300">Телефон</p>
                    <p className="font-inter font-semibold">
                      +7 (495) 123-45-67
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="font-inter text-gray-300">Адрес</p>
                    <p className="font-inter font-semibold">
                      Москва, ул. Тверская, 15
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="font-montserrat font-semibold text-xl mb-6">
                Обсудить проект
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                />
                <textarea
                  placeholder="Расскажите о проекте"
                  rows={4}
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600 resize-none"
                ></textarea>
                <button className="w-full bg-red-600 text-white p-4 rounded-lg hover:bg-red-700 transition-colors font-inter font-semibold">
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="font-montserrat font-bold text-xl">
                DevStars
              </span>
            </div>
            <p className="font-inter text-gray-400">
              © 2024 DevStars. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
