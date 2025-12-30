
import React, { useState } from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', id: 'home' },
    { name: 'Tecnología', id: 'services' },
    { name: 'Experiencia', id: 'about' },
    { name: 'Sonrisas', id: 'testimonials' },
    { name: 'Citas', id: 'contact' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="glass-bright rounded-[1.5rem] px-6 h-16 flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
            <div className="w-9 h-9 btn-gradient rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <i className="fas fa-feather text-white text-base"></i>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-800">
              Dental<span className="text-sky-500 font-medium">Horizon</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm font-semibold transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-sky-500'
                      : 'text-slate-400 hover:text-sky-500'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-gradient text-white px-7 py-2.5 rounded-xl text-sm font-bold shadow-sm"
              >
                Reservar Cita
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-sky-500 focus:outline-none transition-colors"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pt-2">
          <div className="glass-bright rounded-2xl mt-2 p-6 space-y-4 shadow-xl border-white">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`block text-base font-bold ${
                  activeSection === item.id ? 'text-sky-500' : 'text-slate-400'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
