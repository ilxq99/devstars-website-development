import React from "react";
import HeroVisual from "@/components/HeroVisual";
import StatsChart from "@/components/StatsChart";
import TeamSection from "@/components/TeamSection";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
          <HeroVisual />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-montserrat font-bold text-4xl text-center mb-4 text-black">
              Наши услуги
            </h2>
            <p className="font-inter text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Полный цикл разработки от анализа требований до внедрения и
              поддержки
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                  <Icon name="Building2" size={32} className="text-red-600" />
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-4 text-black">
                  CRM системы
                </h3>
                <p className="font-inter text-gray-600 mb-6">
                  Разработка систем управления взаимоотношениями с клиентами для
                  автоматизации продаж и маркетинга
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm font-inter text-gray-700">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                    Управление лидами
                  </li>
                  <li className="flex items-center text-sm font-inter text-gray-700">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                    Аналитика продаж
                  </li>
                  <li className="flex items-center text-sm font-inter text-gray-700">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                    Интеграции с сервисами
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                  <Icon name="Settings" size={32} className="text-red-600" />
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-4 text-black">
                  ERP решения
                </h3>
                <p className="font-inter text-gray-600 mb-6">
                  Комплексная автоматизация бизнес-процессов предприятия для
                  повышения эффективности
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm font-inter text-gray-700">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                    Управление ресурсами
                  </li>
                  <li className="flex items-center text-sm font-inter text-gray-700">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                    Складской учет
                  </li>
                  <li className="flex items-center text-sm font-inter text-gray-700">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                    Финансовая отчетность
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">🌐</span>
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-4 text-black">
                  Веб-платформы
                </h3>
                <p className="font-inter text-gray-600 mb-6">
                  Создание корпоративных порталов и веб-приложений для
                  внутреннего использования
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm font-inter text-gray-700">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                    Корпоративные порталы
                  </li>
                  <li className="flex items-center text-sm font-inter text-gray-700">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                    Документооборот
                  </li>
                  <li className="flex items-center text-sm font-inter text-gray-700">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                    Системы отчетности
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-montserrat font-bold text-4xl text-center mb-4 text-black">
              Технологический стек
            </h2>
            <p className="font-inter text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Используем проверенные технологии для создания надежных и
              масштабируемых решений
            </p>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="bg-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 transition-colors">
                  <span className="text-3xl">⚛️</span>
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-2 text-black">
                  React JS
                </h3>
                <p className="font-inter text-gray-600 text-sm">
                  Современные пользовательские интерфейсы
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group text-center">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-green-200 transition-colors">
                  <Icon name="Server" size={32} className="text-green-600" />
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-2 text-black">
                  Node JS
                </h3>
                <p className="font-inter text-gray-600 text-sm">
                  Серверная разработка
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-indigo-200 transition-colors">
                  <Icon name="Database" size={32} className="text-indigo-600" />
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-2 text-black">
                  PostgreSQL
                </h3>
                <p className="font-inter text-gray-600 text-sm">
                  Надежная база данных
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-200 transition-colors">
                  <Icon name="Code2" size={32} className="text-purple-600" />
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-2 text-black">
                  PHP
                </h3>
                <p className="font-inter text-gray-600 text-sm">
                  Веб-разработка и CMS
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-emerald-200 transition-colors">
                  <Icon name="Zap" size={32} className="text-emerald-600" />
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-2 text-black">
                  Django
                </h3>
                <p className="font-inter text-gray-600 text-sm">
                  Мощный Python фреймворк
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl text-center mb-12 text-white">
              DevStars в цифрах
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2 font-montserrat">
                  150+
                </div>
                <p className="text-red-100 font-inter">Проектов завершено</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2 font-montserrat">
                  7
                </div>
                <p className="text-red-100 font-inter">Лет опыта</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2 font-montserrat">
                  50+
                </div>
                <p className="text-red-100 font-inter">Довольных клиентов</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2 font-montserrat">
                  24/7
                </div>
                <p className="text-red-100 font-inter">Техническая поддержка</p>
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
                  <button className="text-blue-600 hover:text-blue-700 font-inter text-sm font-semibold">
                    Подробнее →
                  </button>
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
                  <button className="text-red-600 hover:text-red-700 font-inter text-sm font-semibold">
                    Подробнее →
                  </button>
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
                  контентом и программой передач
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
                  <button className="text-purple-600 hover:text-purple-700 font-inter text-sm font-semibold">
                    Подробнее →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-black text-white"></section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="font-montserrat font-bold text-4xl text-center mb-16 text-black">
            Отзывы клиентов
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👨‍💼</span>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-lg text-black">
                    Алексей Петров
                  </h4>
                  <p className="font-inter text-gray-600 text-sm">
                    Генеральный директор, ТехноРитейл
                  </p>
                </div>
              </div>
              <p className="font-inter text-gray-700 leading-relaxed mb-4">
                "DevStars создали для нас CRM-систему, которая увеличила
                эффективность отдела продаж на 40%. Профессиональная команда,
                соблюдение сроков, отличная поддержка."
              </p>
              <div className="flex text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👩‍💼</span>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-lg text-black">
                    Мария Козлова
                  </h4>
                  <p className="font-inter text-gray-600 text-sm">
                    IT-директор, МегаПром
                  </p>
                </div>
              </div>
              <p className="font-inter text-gray-700 leading-relaxed mb-4">
                "Внедрение ERP-системы от DevStars полностью автоматизировало
                наши производственные процессы. Рекомендуем как надежного
                партнера в области B2B разработки."
              </p>
              <div className="flex text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
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
                      ilxq@devstars.team
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <p className="font-inter text-gray-300">Телефон</p>
                    <p className="font-inter font-semibold">+7(917)6262626</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="font-inter text-gray-300">Адрес</p>
                    <p className="font-inter font-semibold">
                      Ульяновск, ул. Крымова 63А
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 rounded-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-montserrat font-semibold text-xl mb-4 text-white">
                  Обсудить проект
                </h3>
                <p className="text-red-100 mb-6 font-inter">
                  Готовы начать работу над вашим проектом? Напишите нам в VK!
                </p>
                <a
                  href="https://vk.com/devstars"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-white text-red-600 px-6 py-4 rounded-lg hover:bg-red-50 transition-colors font-inter font-semibold group"
                >
                  <span className="text-2xl">💬</span>
                  <span>Написать в VK</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
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
