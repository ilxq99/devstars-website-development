import React from "react";

const ContactsSection = () => {
  return (
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
                  <p className="font-inter font-semibold">ilxq@devstars.team</p>
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
  );
};

export default ContactsSection;
