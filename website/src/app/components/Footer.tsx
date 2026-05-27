import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { PrivacyPolicy } from './PrivacyPolicy';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#2f4f2f] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AF</span>
              </div>
              <div>
                <div className="text-lg">AgroForestal Pro</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-4 text-[#ff6b35]">{t('footer.services')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#tala" className="text-gray-400 hover:text-white transition-colors">
                  {t('services.tree.title')}
                </a>
              </li>
              <li>
                <a href="#desbroce" className="text-gray-400 hover:text-white transition-colors">
                  {t('services.clearing.title')}
                </a>
              </li>
              <li>
                <a href="#vallado" className="text-gray-400 hover:text-white transition-colors">
                  {t('services.fencing.title')}
                </a>
              </li>
              <li>
                <a href="#cesped" className="text-gray-400 hover:text-white transition-colors">
                  {t('services.turf.title')}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4 text-[#ff6b35]">{t('footer.quicklinks')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.gallery')}
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsPrivacyOpen(true)}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  {t('footer.privacy')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg mb-4 text-[#ff6b35]">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#ff6b35] mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+34664775622" className="text-gray-400 hover:text-white transition-colors">
                    664 775 622
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#ff6b35] mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:reformacardozo84@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                    reformacardozo84@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#ff6b35] mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  Cataluña, España
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
