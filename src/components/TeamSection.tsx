import React from "react";
import Icon from "@/components/ui/icon";

const TeamSection = () => {
  const team = [
    {
      name: "Дмитрий Соколов",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      skills: ["Стратегия", "Управление"],
      experience: "12 лет",
    },
    {
      name: "Анна Волкова",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=400&h=400&fit=crop&crop=face",
      skills: ["Backend", "DevOps"],
      experience: "8 лет",
    },
    {
      name: "Максим Петров",
      role: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      skills: ["React", "Node.js"],
      experience: "6 лет",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl mb-4 text-black">
              Наша команда
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
              Профессионалы с многолетним опытом в области B2B разработки
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-red-100 group-hover:border-red-300 transition-colors"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-red-600 rounded-full p-2">
                      <Icon name="Code" size={16} className="text-white" />
                    </div>
                  </div>

                  <h3 className="font-montserrat font-semibold text-xl mb-2 text-black">
                    {member.name}
                  </h3>
                  <p className="font-inter text-red-600 font-medium mb-4">
                    {member.role}
                  </p>

                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-inter"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-center text-gray-600 font-inter text-sm">
                    <Icon name="Clock" size={16} className="mr-2" />
                    Опыт: {member.experience}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
