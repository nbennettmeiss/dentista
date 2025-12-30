
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Elena Rodríguez',
      role: 'Paciente de Ortodoncia',
      text: 'Excelente trato desde que entras. El tratamiento de Invisalign cambió mi vida y mi confianza. El proceso fue súper sencillo y profesional.',
      image: 'https://picsum.photos/seed/p1/100/100',
    },
    {
      name: 'Carlos Sánchez',
      role: 'Paciente de Implantes',
      text: 'Tenía mucho miedo a la cirugía, pero el equipo me explicó todo con detalle. No sentí nada de dolor y el resultado final es increíble.',
      image: 'https://picsum.photos/seed/p2/100/100',
    },
    {
      name: 'Lucía Méndez',
      role: 'Paciente General',
      text: 'La mejor clínica para llevar a los niños. Mis hijos ahora disfrutan ir al dentista gracias a la paciencia y cariño de los doctores.',
      image: 'https://picsum.photos/seed/p3/100/100',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Testimonios</h2>
        <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Lo que dicen nuestros pacientes</p>
        <div className="flex justify-center text-yellow-400 gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <i key={s} className="fas fa-star"></i>
          ))}
        </div>
        <p className="text-slate-500 italic">Basado en más de 500 reseñas verificadas</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-slate-50 p-8 rounded-3xl relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg">
              <i className="fas fa-quote-left"></i>
            </div>
            <p className="text-slate-700 leading-relaxed mb-8 italic">
              "{t.text}"
            </p>
            <div className="flex items-center gap-4">
              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover shadow-md" />
              <div>
                <p className="font-bold text-slate-900 leading-tight">{t.name}</p>
                <p className="text-sm text-blue-600">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
