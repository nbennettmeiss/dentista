
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-500 text-[11px] font-bold tracking-widest mb-8 uppercase">
              <span className="w-1.5 h-1.5 bg-sky-400 rounded-full mr-3 animate-pulse"></span>
              Experiencia Dental de Próxima Generación
            </div>
            <h1 className="text-5xl md:text-[5rem] font-extrabold text-slate-800 leading-[1.1] mb-8 tracking-tighter">
              El futuro de <br /> 
              <span className="text-soft-gradient">tu bienestar.</span>
            </h1>
            <p className="text-xl text-slate-500 mb-10 max-w-lg leading-relaxed font-medium opacity-90">
              Descubre una forma más ligera y humana de cuidar tu salud. Tecnología que abraza tu comodidad en cada detalle.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="#contact"
                className="btn-gradient inline-flex items-center justify-center px-10 py-4 text-white rounded-[1.2rem] font-bold text-lg"
              >
                Comenzar ahora <i className="fas fa-chevron-right ml-3 text-xs opacity-70"></i>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-10 py-4 glass-bright border border-white/80 text-slate-600 rounded-[1.2rem] font-bold text-lg hover:bg-white/90 transition-all"
              >
                Ver servicios
              </a>
            </div>
            
            <div className="mt-16 flex items-center gap-8">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <img key={i} className="w-11 h-11 rounded-full border-4 border-white object-cover shadow-sm ring-1 ring-slate-100" src={`https://i.pravatar.cc/150?u=clean${i}`} alt="Paciente" />
                ))}
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                <span className="text-sky-500 block">Confianza Verificada</span>
                <div className="flex text-sky-200 text-[9px] mt-1 gap-0.5">
                  <i className="fas fa-star text-sky-400"></i>
                  <i className="fas fa-star text-sky-400"></i>
                  <i className="fas fa-star text-sky-400"></i>
                  <i className="fas fa-star text-sky-400"></i>
                  <i className="fas fa-star text-sky-400"></i>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:block">
            {/* Soft decorative glow behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sky-200/20 blur-[120px] rounded-full -z-10"></div>
            
            <div className="relative p-4 glass-bright rounded-[3.5rem] animate-float-soft">
              <div className="rounded-[2.8rem] overflow-hidden relative shadow-2xl shadow-sky-900/5">
                <img
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1200"
                  alt="Consultorio dental luminoso y acogedor"
                  className="w-full h-full object-cover grayscale-[0.2] brightness-105"
                />
                
                {/* Floating Soft Notification */}
                <div className="absolute top-8 right-8 glass-bright px-5 py-2.5 rounded-full flex items-center gap-2 border border-white shadow-sm">
                  <span className="w-2 h-2 bg-sky-400 rounded-full animate-ping"></span>
                  <span className="text-[11px] font-bold text-slate-600 uppercase tracking-[0.1em]">Citas Abiertas</span>
                </div>

                <div className="absolute bottom-8 left-8 right-8 glass-bright p-7 rounded-[2.2rem] border border-white shadow-lg">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-400">
                      <i className="fas fa-heart text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-700 uppercase tracking-tight">Experiencia SoftCare</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Tratamientos indoloros garantizados</p>
                    </div>
                  </div>
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
