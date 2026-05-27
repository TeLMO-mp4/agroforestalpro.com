import { Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-r from-[#2f4f2f] to-[#4a7c4a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl text-white mb-4">
          {t('cta.title')}
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {t('cta.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+34664775622"
            className="flex items-center space-x-3 bg-[#ff6b35] hover:bg-[#e65a2d] text-white px-8 py-4 rounded-lg transition-colors shadow-lg text-lg"
          >
            <Phone className="w-6 h-6" />
            <span>664 775 622</span>
          </a>
          <a
            href="https://wa.me/34664775622?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-[#25D366] hover:bg-[#1fb855] text-white px-8 py-4 rounded-lg transition-colors shadow-lg text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
