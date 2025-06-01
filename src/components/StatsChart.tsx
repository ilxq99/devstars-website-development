import React from "react";

const StatsChart = () => {
  const stats = [
    { label: "Проектов завершено", value: "150+", color: "bg-red-500" },
    { label: "Лет опыта", value: "7", color: "bg-red-400" },
    { label: "Довольных клиентов", value: "50+", color: "bg-red-600" },
    { label: "Техническая поддержка", value: "24/7", color: "bg-red-700" },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center group">
          <div className="relative mb-6">
            {/* Animated bar */}
            <div className="w-full h-2 bg-red-200 rounded-full overflow-hidden">
              <div
                className={`h-full ${stat.color} rounded-full animate-pulse`}
                style={{
                  width: `${Math.min(100, parseInt(stat.value) * 2)}%`,
                  animationDelay: `${index * 0.2}s`,
                }}
              ></div>
            </div>
          </div>

          <div className="text-4xl font-bold text-white mb-2 font-montserrat group-hover:scale-110 transition-transform">
            {stat.value}
          </div>
          <p className="text-red-100 font-inter">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsChart;
