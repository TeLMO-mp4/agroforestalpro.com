import { X } from 'lucide-react';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
        <div className="sticky top-0 bg-[#2f4f2f] text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Política de Privacidad</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 pb-8 overflow-y-auto max-h-[calc(90vh-160px)]">
          <div className="prose prose-sm max-w-none">
            <section className="mb-6">
              <h3 className="text-xl font-semibold text-[#2f4f2f] mb-3">1. Responsable del Tratamiento</h3>
              <ul className="list-none space-y-2 text-gray-700">
                <li><strong>Identidad:</strong> CB ENTERPRISES BUSSINESS SL</li>
                <li><strong>NIF/CIF:</strong> B23881717</li>
                <li><strong>Dirección:</strong> C/ PROLONGACION FALGUERA 9, 5, 2 - 08980 - SANT FELIU DE LLOBREGAT</li>
                <li><strong>Email:</strong> <a href="mailto:reformacardozo84@gmail.com" className="text-[#ff6b35] hover:underline">reformacardozo84@gmail.com</a></li>
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold text-[#2f4f2f] mb-3">2. Finalidad del Tratamiento de Datos</h3>
              <p className="text-gray-700 mb-3">En este sitio web, tratamos la información que nos facilitan las personas interesadas con las siguientes finalidades:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Gestionar el envío de información y prospección comercial (Newsletter).</li>
                <li>Responder a las consultas realizadas a través de los formularios de contacto.</li>
                <li>Gestionar la relación comercial o profesional en caso de contratación de servicios.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold text-[#2f4f2f] mb-3">3. Legitimación</h3>
              <p className="text-gray-700">
                La base legal para el tratamiento de sus datos es el consentimiento del interesado. Al marcar la casilla de aceptación en nuestros formularios, usted otorga su consentimiento libre, específico, informado e inequívoco para que tratemos sus datos según estas finalidades.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold text-[#2f4f2f] mb-3">4. Plazo de Conservación de los Datos</h3>
              <p className="text-gray-700">
                Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o no se solicite su supresión por el interesado, con un máximo de 5 años tras la última interacción.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold text-[#2f4f2f] mb-3">5. Destinatarios y Cesión a Terceros</h3>
              <p className="text-gray-700">
                No se cederán datos a terceros ajenos a CB ENTERPRISES BUSSINESS SL, salvo obligación legal o para la prestación de servicios técnicos necesarios (como hosting o plataformas de email marketing que cumplen con el RGPD). No se realizan transferencias internacionales de datos fuera del Espacio Económico Europeo (o en su defecto, bajo marcos de seguridad certificados).
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold text-[#2f4f2f] mb-3">6. Derechos de los Usuarios</h3>
              <p className="text-gray-700 mb-3">Usted tiene derecho a obtener confirmación sobre si estamos tratando sus datos personales. Sus derechos incluyen:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Acceso:</strong> Saber qué datos tenemos de usted.</li>
                <li><strong>Rectificación:</strong> Corregir datos inexactos.</li>
                <li><strong>Supresión (Derecho al olvido):</strong> Solicitar que borremos sus datos.</li>
                <li><strong>Limitación y Oposición:</strong> Pedir que no se utilicen para fines específicos.</li>
                <li><strong>Portabilidad:</strong> Recibir sus datos en un formato electrónico estructurado.</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Para ejercer estos derechos, puede enviar un correo electrónico a <a href="mailto:reformacardozo84@gmail.com" className="text-[#ff6b35] hover:underline">reformacardozo84@gmail.com</a> adjuntando una copia de su DNI o documento equivalente para verificar su identidad.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold text-[#2f4f2f] mb-3">7. Procedencia de los Datos</h3>
              <p className="text-gray-700 mb-3">Los datos personales que tratamos proceden directamente del interesado a través de:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Formularios de contacto.</li>
                <li>Suscripciones al blog/newsletter.</li>
                <li>Cookies de navegación (ver nuestra Política de Cookies).</li>
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold text-[#2f4f2f] mb-3">8. Autoridad de Control</h3>
              <p className="text-gray-700">
                Si considera que sus derechos no han sido debidamente atendidos, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[#ff6b35] hover:underline">www.aepd.es</a>.
              </p>
            </section>

            <div className="mb-6"></div>
            <div className="mb-6"></div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-gray-100 p-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full bg-[#2f4f2f] hover:bg-[#3f6f3f] text-white py-3 rounded-lg transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
