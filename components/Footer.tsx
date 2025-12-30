
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-tooth text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold tracking-tight">DentalCare<span className="text-blue-500">Plus</span></span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Dedicados a brindar la mejor experiencia dental para ti y tu familia desde 2008. Excelencia técnica y calidez humana.
            </p>
            <div className="flex space-x-4">
              {['facebook-f', 'instagram', 'twitter', 'linkedin-in'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                >
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-slate-800 pb-2 inline-block">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              {['Inicio', 'Nuestros Servicios', 'Sobre Nosotros', 'Blog de Salud', 'Contacto'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-slate-800 pb-2 inline-block">Servicios</h4>
            <ul className="space-y-4">
              {['Profilaxis', 'Carillas Dentales', 'Diseño de Sonrisa', 'Ortodoncia Invisible', 'Prótesis Fija'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-slate-800 pb-2 inline-block">Newsletter</h4>
            <p className="text-slate-400 mb-4 text-sm">Recibe consejos de salud bucal y promociones exclusivas.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Tu email"
                className="bg-slate-800 border-none rounded-l-lg px-4 py-3 focus:ring-1 focus:ring-blue-500 w-full text-sm"
              />
              <button className="bg-blue-600 px-4 py-3 rounded-r-lg hover:bg-blue-700 transition-colors">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <p className="mt-4 text-[10px] text-slate-500">
              *Respetamos tu privacidad. No enviamos spam.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} DentalCare Plus. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-blue-500 underline underline-offset-4">Política de Privacidad</a>
            <a href="#" className="hover:text-blue-500 underline underline-offset-4">Términos de Servicio</a>
            <a href="#" className="hover:text-blue-500 underline underline-offset-4">Aviso Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
