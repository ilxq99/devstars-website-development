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
                className="h-15 w-auto"
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
          <HeroVisual />
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
              <div className="h-48 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <div className="text-white text-6xl">📊</div>
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-semibold text-xl mb-3 text-black">
                  CRM-система для ритейла
                </h3>
                <p className="font-inter text-gray-600 mb-4">
                  Комплексная система управления продажами с интеграцией
                  складского учета и аналитикой
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-inter">
                    React
                  </span>
                  <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-inter">
                    PostgreSQL
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-inter font-semibold">
                    B2B Retail
                  </span>
                  <button className="text-red-600 hover:text-red-700 font-inter text-sm font-semibold">
                    Подробнее →
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                <div className="text-white text-6xl">🏭</div>
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-semibold text-xl mb-3 text-black">
                  ERP для производства
                </h3>
                <p className="font-inter text-gray-600 mb-4">
                  Автоматизация производственных процессов, планирование
                  ресурсов и контроль качества
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-inter">
                    Node.js
                  </span>
                  <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-inter">
                    MongoDB
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-inter font-semibold">
                    Manufacturing
                  </span>
                  <button className="text-red-600 hover:text-red-700 font-inter text-sm font-semibold">
                    Подробнее →
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-red-600 to-black flex items-center justify-center">
                <div className="text-white text-6xl">💼</div>
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-semibold text-xl mb-3 text-black">
                  Корпоративный портал
                </h3>
                <p className="font-inter text-gray-600 mb-4">
                  Единая платформа для управления сотрудниками,
                  документооборотом и внутренними процессами
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-inter">
                    Vue.js
                  </span>
                  <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-inter">
                    Redis
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-inter font-semibold">
                    Enterprise
                  </span>
                  <button className="text-red-600 hover:text-red-700 font-inter text-sm font-semibold">
                    Подробнее →
                  </button>
                </div>
              </div>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

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
          <HeroVisual />
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
