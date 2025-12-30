
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 btn-gradient rounded-xl flex items-center justify-center">
                <i className="fas fa-feather text-white text-base"></i>
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-slate-800">Dental<span className="text-sky-500 font-medium">Horizon</span></span>
            </div>
            <p className="text-slate-400 font-medium leading-relaxed text-sm">
              Redefiniendo el cuidado dental con una visión ligera, moderna y centrada en tu bienestar absoluto.
            </p>
            <div className="flex space-x-3">
              {['facebook-f', 'instagram', 'twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-sky-500 transition-all hover:scale-110 border border-slate-100 shadow-sm"
                >
                  <i className={`fab fa-${social} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-800 mb-8">Navegación</h4>
            <ul className="space-y-4">
              {['Tecnología', 'Especialistas', 'Casos de Éxito', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-sky-500 font-bold text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-800 mb-8">Soporte</h4>
            <ul className="space-y-4">
              {['Citas', 'FAQ', 'Garantía', 'Contacto'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-sky-500 font-bold text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-800 mb-8">Newsletter</h4>
            <p className="text-slate-400 mb-6 text-xs font-bold uppercase tracking-widest opacity-70">Consejos de salud sutiles.</p>
            <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-100 shadow-inner">
              <input
                type="email"
                placeholder="Tu email"
                className="bg-transparent border-none px-4 py-2 focus:ring-0 w-full text-xs font-bold text-slate-500"
              />
              <button className="btn-gradient w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm">
                <i className="fas fa-paper-plane text-[10px]"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-300 text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} HORIZON DENTAL. BIENESTAR INTEGRAL.
          </p>
          <div className="flex gap-8 text-[9px] font-black text-slate-300 uppercase tracking-widest">
            <a href="#" className="hover:text-sky-400">Privacidad</a>
            <a href="#" className="hover:text-sky-400">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
