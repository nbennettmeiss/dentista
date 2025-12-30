
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Agenda Ahora</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Tu Sonrisa Comienza Aquí</h2>
          <p className="text-slate-600 mb-10 text-lg">
            Rellena el formulario y nuestro equipo se pondrá en contacto contigo en menos de 24 horas para confirmar tu cita.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 flex-shrink-0">
                <i className="fas fa-map-marker-alt text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Nuestra Ubicación</h4>
                <p className="text-slate-600">Av. de la Libertad 123, Distrito Central, Ciudad Capital</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 flex-shrink-0">
                <i className="fas fa-phone-alt text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Llámanos</h4>
                <p className="text-slate-600">+52 (555) 123-4567</p>
                <p className="text-sm text-blue-600 font-semibold">Urgencias 24/7 disponible</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 flex-shrink-0">
                <i className="fas fa-clock text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Horario de Atención</h4>
                <p className="text-slate-600">Lun - Vie: 9:00 AM - 8:00 PM</p>
                <p className="text-slate-600">Sáb: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 text-4xl animate-bounce">
                <i className="fas fa-check"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Solicitud Enviada!</h3>
              <p className="text-slate-600">Nos pondremos en contacto contigo pronto para confirmar tu horario.</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-blue-600 font-bold hover:underline"
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Nombre Completo</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-slate-50"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-slate-50"
                    placeholder="555-123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-slate-50"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Servicio de Interés</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-slate-50 appearance-none"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="limpieza">Limpieza Dental</option>
                  <option value="blanqueamiento">Blanqueamiento</option>
                  <option value="ortodoncia">Ortodoncia</option>
                  <option value="implante">Implante</option>
                  <option value="otro">Otros</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Mensaje (Opcional)</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-slate-50"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 transform hover:-translate-y-1"
              >
                Enviar Solicitud
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
