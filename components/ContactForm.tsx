
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const DENTIST_PHONE = "5215551234567";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `HORIZON DENTAL - NUEVA CITA:%0A` +
      `--------------------------%0A` +
      `PACIENTE: ${formData.name}%0A` +
      `TEL: ${formData.phone}%0A` +
      `INTERÉS: ${formData.service || 'Chequeo General'}%0A` +
      `NOTAS: ${formData.message || 'N/A'}`;

    const whatsappUrl = `https://wa.me/${DENTIST_PHONE}?text=${whatsappMessage}`;
    setIsSubmitted(true);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-sky-500 font-extrabold tracking-[0.3em] uppercase text-[11px] mb-4">Comenzamos Juntos</h2>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-8 tracking-tight">Tu nueva sonrisa <br/> a un clic.</h2>
          <p className="text-slate-400 mb-12 text-lg font-medium leading-relaxed max-w-md opacity-90">
            Estamos aquí para escucharte. Resolvemos tus dudas de forma personalizada y sin presiones. Conéctate con nosotros.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-400 shadow-sm transition-all group-hover:bg-sky-100">
                <i className="fas fa-map-marker-alt text-lg"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-700 text-sm mb-0.5">Centro de Bienestar</h4>
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Edificio Skyline, Suite 402</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-400 shadow-sm transition-all group-hover:bg-emerald-100">
                <i className="fab fa-whatsapp text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-700 text-sm mb-0.5">Respuesta Instantánea</h4>
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Atención Premium vía WhatsApp</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-bright p-8 md:p-12 rounded-[3.5rem] shadow-2xl shadow-sky-900/5 relative border-white">
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="w-20 h-20 bg-sky-50 text-sky-500 rounded-full flex items-center justify-center mb-8 text-3xl shadow-inner animate-bounce">
                <i className="fas fa-paper-plane"></i>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-800 mb-2">¡Enviando datos!</h3>
              <p className="text-slate-400 font-medium">Conectando con nuestro equipo...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-50/50 border border-slate-100 px-6 py-4 rounded-2xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/10 focus:border-sky-300 transition-all font-medium placeholder:text-slate-300 shadow-inner"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-slate-50/50 border border-slate-100 px-6 py-4 rounded-2xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/10 focus:border-sky-300 transition-all font-medium placeholder:text-slate-300 shadow-inner"
                    placeholder="Tu móvil"
                  />
                </div>
              </div>
              
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-slate-50/50 border border-slate-100 px-6 py-4 rounded-2xl text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/10 focus:border-sky-300 transition-all font-medium shadow-inner appearance-none"
              >
                <option value="">¿En qué módulo te interesa?</option>
                <option value="Armonía">Estética Dental</option>
                <option value="Higiene">Limpieza Avanzada</option>
                <option value="Ortodoncia">Invisalign Soft</option>
                <option value="Checkup">Consulta General</option>
              </select>

              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-slate-50/50 border border-slate-100 px-6 py-4 rounded-2xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/10 focus:border-sky-300 transition-all font-medium placeholder:text-slate-300 shadow-inner"
                placeholder="Alguna nota adicional"
              ></textarea>

              <button
                type="submit"
                className="w-full py-5 btn-gradient text-white rounded-2xl font-black text-sm uppercase tracking-[0.25em] shadow-lg flex items-center justify-center gap-3 mt-4"
              >
                Solicitar Reserva <i className="fab fa-whatsapp text-lg opacity-90"></i>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
