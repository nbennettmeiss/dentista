
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-blue-50/50 rounded-bl-[100px] hidden lg:block"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              <span className="mr-2">✨</span> Especialistas en Salud Bucal
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Diseñamos la <span className="text-blue-600">sonrisa</span> que siempre has soñado
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Cuidado dental de vanguardia con un toque humano. En DentalCare Plus, utilizamos la última tecnología para asegurar tu bienestar y el de tu familia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 transform hover:-translate-y-1"
              >
                Agenda tu Cita <i className="fas fa-calendar-alt ml-2"></i>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-full font-bold text-lg hover:bg-slate-50 transition-all"
              >
                Nuestros Servicios
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    src={`https://picsum.photos/seed/${i + 10}/100/100`}
                    alt="Paciente"
                  />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-slate-800">+2,500 Pacientes Felices</p>
                <div className="flex text-yellow-400 text-xs">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <i key={s} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/dental-hero/800/600"
                alt="Clínica Dental"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <i className="fas fa-check-circle text-2xl"></i>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Clínica Certificada</p>
                  <p className="text-xs text-slate-500">Estándares internacionales de higiene</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
