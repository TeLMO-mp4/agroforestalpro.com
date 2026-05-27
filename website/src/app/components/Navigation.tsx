import { useState } from 'react';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="bg-white border-b border-[#2f4f2f]/20 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-[#2f4f2f] rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">AF</span>
              </div>
              <div>
                <div className="text-xl font-bold text-[#2f4f2f]">AgroForestal Pro</div>
                <div className="text-xs text-[#6b4423]">Servicios Profesionales</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-[#2f4f2f] hover:text-[#4a7c4a] transition-colors">
              {t('nav.home')}
            </a>
            <a href="#servicios" className="text-[#2f4f2f] hover:text-[#4a7c4a] transition-colors">
              {t('nav.services')}
            </a>
            <a href="#galeria" className="text-[#2f4f2f] hover:text-[#4a7c4a] transition-colors">
              {t('nav.gallery')}
            </a>
            <LanguageSelector />
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:+34664775622"
              className="flex items-center space-x-2 bg-[#ff6b35] hover:bg-[#e65a2d] text-white px-6 py-3 rounded-lg transition-colors shadow-md"
            >
              <Phone className="w-5 h-5" />
              <span>664 775 622</span>
            </a>
            <a
              href="https://wa.me/34664775622?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#25D366] hover:bg-[#1fb855] text-white p-3 rounded-lg transition-colors shadow-md"
              title="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#2f4f2f] hover:text-[#4a7c4a]"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-[#2f4f2f] hover:text-[#4a7c4a]">{t('nav.home')}</a>
              <a href="#servicios" className="text-[#2f4f2f] hover:text-[#4a7c4a]">{t('nav.services')}</a>
              <a href="#galeria" className="text-[#2f4f2f] hover:text-[#4a7c4a]">{t('nav.gallery')}</a>
              <div className="pt-2 border-t border-gray-200">
                <LanguageSelector />
              </div>
              <div className="flex gap-3">
                <a
                  href="tel:+34664775622"
                  className="flex-1 flex items-center justify-center space-x-2 bg-[#ff6b35] text-white px-6 py-3 rounded-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>{t('nav.call')}</span>
                </a>
                <a
                  href="https://wa.me/34664775622?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 bg-[#25D366] text-white px-6 py-3 rounded-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
