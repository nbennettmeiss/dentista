
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://picsum.photos/seed/dentist1/400/500" alt="Doctor" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
              <img src="https://picsum.photos/seed/dentaloffice/400/300" alt="Consultorio" className="rounded-2xl shadow-lg w-full h-40 object-cover" />
            </div>
            <div className="space-y-4 pt-8">
              <img src="https://picsum.photos/seed/equipment/400/300" alt="Equipo" className="rounded-2xl shadow-lg w-full h-40 object-cover" />
              <img src="https://picsum.photos/seed/dentist2/400/500" alt="Equipo dental" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white p-8 rounded-full shadow-2xl border-8 border-white text-center w-32 h-32 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">15+</span>
            <span className="text-[10px] uppercase font-bold tracking-widest">Años de Exp.</span>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Conoce Nuestra Clínica</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Comprometidos con tu Salud y Comodidad
          </h2>
          <p className="text-slate-600 mb-6 text-lg leading-relaxed">
            Nuestra misión es proporcionar una atención odontológica de alta calidad, personalizada y accesible. Entendemos que visitar al dentista puede generar ansiedad, por eso hemos diseñado un espacio relajante y acogedor.
          </p>
          
          <ul className="space-y-4 mb-8">
            {[
              'Tecnología digital de última generación',
              'Equipo de especialistas altamente capacitados',
              'Tratamientos indoloros y mínimamente invasivos',
              'Planes de financiamiento personalizados',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <i className="fas fa-check text-blue-600 text-xs"></i>
                </div>
                <span className="text-slate-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-6">
            <img
              src="https://picsum.photos/seed/director/100/100"
              alt="Director"
              className="w-16 h-16 rounded-full object-cover border-2 border-blue-50"
            />
            <div>
              <p className="font-bold text-slate-900 italic">"Nuestra mayor satisfacción es ver a nuestros pacientes sonreír con total seguridad."</p>
              <p className="text-sm text-blue-600 font-semibold mt-1">— Dr. Ricardo Mendoza, Director Clínico</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
