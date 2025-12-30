
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Limpieza Dental',
      description: 'Eliminación profunda de placa y sarro para prevenir caries y enfermedades periodontales.',
      icon: 'fa-tooth',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Blanqueamiento',
      description: 'Devuelve el brillo a tu sonrisa con nuestros tratamientos de blanqueamiento profesional.',
      icon: 'fa-sparkles',
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      title: 'Ortodoncia',
      description: 'Brackets tradicionales e Invisalign para alinear tus dientes de forma efectiva.',
      icon: 'fa-grimace',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      title: 'Implantes',
      description: 'Soluciones permanentes para recuperar piezas perdidas con la máxima estética.',
      icon: 'fa-tools',
      color: 'bg-teal-100 text-teal-600',
    },
    {
      title: 'Endodoncia',
      description: 'Salvamos tus dientes naturales mediante el tratamiento de conductos avanzado.',
      icon: 'fa-vial',
      color: 'bg-red-100 text-red-600',
    },
    {
      title: 'Odontopediatría',
      description: 'Cuidado especializado para los más pequeños de la casa en un ambiente divertido.',
      icon: 'fa-child',
      color: 'bg-green-100 text-green-600',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Nuestra Especialidad</h2>
        <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Servicios Integrales de Salud</p>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-2xl hover:border-blue-100 transition-all duration-300"
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl transition-transform group-hover:scale-110 ${service.color}`}>
              <i className={`fas ${service.icon}`}></i>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
              {service.title}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {service.description}
            </p>
            <div className="mt-6 flex items-center text-blue-600 font-semibold text-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
              Saber más <i className="fas fa-arrow-right ml-2 text-xs"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
