
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Armonía Dental',
      description: 'Diseño de sonrisa natural que respeta tu esencia y simetría única.',
      icon: 'fa-sparkles',
      color: 'bg-blue-50/50',
      iconColor: 'text-sky-400',
    },
    {
      title: 'Pureza & Frescor',
      description: 'Limpiezas suaves con tecnología de microburbujas para una salud radiante.',
      icon: 'fa-wind',
      color: 'bg-cyan-50/50',
      iconColor: 'text-cyan-400',
    },
    {
      title: 'Alineación Soft',
      description: 'Ortodoncia invisible ultra-ligera diseñada para tu ritmo de vida actual.',
      icon: 'fa-smile-beam',
      color: 'bg-sky-50/50',
      iconColor: 'text-sky-400',
    },
    {
      title: 'Bio-Restauración',
      description: 'Materiales inteligentes que se integran perfectamente con tu cuerpo.',
      icon: 'fa-leaf',
      color: 'bg-emerald-50/50',
      iconColor: 'text-emerald-400',
    },
    {
      title: 'Claridad 3D',
      description: 'Diagnósticos visuales de alta precisión sin ningún tipo de molestia.',
      icon: 'fa-lightbulb',
      color: 'bg-amber-50/50',
      iconColor: 'text-amber-400',
    },
    {
      title: 'Relax Inmersivo',
      description: 'Un entorno diseñado para que olvides que estás en el dentista.',
      icon: 'fa-cloud',
      color: 'bg-indigo-50/50',
      iconColor: 'text-indigo-400',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-24">
        <h2 className="text-sky-500 font-extrabold tracking-[0.3em] uppercase text-[11px] mb-4">Módulos de Salud</h2>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">Innovación para tu Sonrisa</h2>
        <p className="text-slate-400 max-w-xl mx-auto text-lg font-medium opacity-80">Un enfoque minimalista y tecnológico para el cuidado bucal.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative p-10 glass-bright rounded-[2.8rem] transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-sky-100 border-white"
          >
            <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 shadow-inner`}>
              <i className={`fas ${service.icon} ${service.iconColor} text-2xl`}></i>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-700 mb-4 group-hover:text-sky-500 transition-colors">
              {service.title}
            </h3>
            <p className="text-slate-400 leading-relaxed font-medium text-sm">
              {service.description}
            </p>
            
            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center text-sky-400 text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all">
              Explorar módulo <i className="fas fa-arrow-right ml-2 text-[8px]"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
