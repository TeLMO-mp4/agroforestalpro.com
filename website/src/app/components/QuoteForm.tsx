import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    serviceType: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        serviceType: '',
        description: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <section id="presupuesto" className="py-20 bg-gradient-to-br from-[#f5f5dc] to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl text-[#2f4f2f] mb-4">¡Solicitud Enviada!</h3>
            <p className="text-xl text-gray-600">
              Nos pondremos en contacto con usted en menos de 24 horas para evaluar su proyecto.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="presupuesto" className="py-20 bg-gradient-to-br from-[#f5f5dc] to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-[#2f4f2f] mb-4">Solicite su Presupuesto</h2>
          <p className="text-xl text-gray-600">
            Sin compromiso y totalmente gratuito
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-[#2f4f2f]/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-[#2f4f2f] mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#2f4f2f]/20 rounded-lg focus:border-[#ff6b35] focus:outline-none transition-colors"
                  placeholder="Juan García"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#2f4f2f] mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#2f4f2f]/20 rounded-lg focus:border-[#ff6b35] focus:outline-none transition-colors"
                  placeholder="+34 600 000 000"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-[#2f4f2f] mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-[#2f4f2f]/20 rounded-lg focus:border-[#ff6b35] focus:outline-none transition-colors"
                placeholder="correo@ejemplo.com"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-[#2f4f2f] mb-2">
                Ubicación de la Propiedad
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-[#2f4f2f]/20 rounded-lg focus:border-[#ff6b35] focus:outline-none transition-colors"
                placeholder="Ciudad o provincia"
              />
            </div>

            <div>
              <label htmlFor="serviceType" className="block text-[#2f4f2f] mb-2">
                Tipo de Servicio *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                required
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-[#2f4f2f]/20 rounded-lg focus:border-[#ff6b35] focus:outline-none transition-colors"
              >
                <option value="">Seleccione un servicio</option>
                <option value="tala">Tala de Árboles</option>
                <option value="desbroce">Desbroce de Parcelas</option>
                <option value="vallado">Vallado de Terrenos</option>
                <option value="cesped">Césped Artificial</option>
                <option value="multiple">Varios Servicios</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-[#2f4f2f] mb-2">
                Describa su Proyecto *
              </label>
              <textarea
                id="description"
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border-2 border-[#2f4f2f]/20 rounded-lg focus:border-[#ff6b35] focus:outline-none transition-colors resize-none"
                placeholder="Indique el tamaño aproximado del terreno, tipo de vegetación, accesibilidad, y cualquier detalle relevante..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff6b35] hover:bg-[#e65a2d] text-white py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 text-lg"
            >
              <span>Solicitar Mi Presupuesto Gratis</span>
              <Send className="w-5 h-5" />
            </button>

            <p className="text-center text-gray-500 text-sm">
              * Campos obligatorios. Respetamos su privacidad y no compartiremos sus datos.
            </p>
          </form>
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl text-[#ff6b35] mb-2">24h</div>
            <p className="text-[#2f4f2f]">Respuesta Rápida</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl text-[#ff6b35] mb-2">100%</div>
            <p className="text-[#2f4f2f]">Sin Compromiso</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl text-[#ff6b35] mb-2">+500</div>
            <p className="text-[#2f4f2f]">Clientes Satisfechos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
