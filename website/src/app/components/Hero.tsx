import { FileText, Shield, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  return (
    <section id="inicio" className="relative h-[600px] md:h-[700px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1754527914275-dd96e98a65b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjaGFpbnNhdyUyMGN1dHRpbmclMjB0cmVlJTIwZm9yZXN0cnklMjB3b3JrZXJ8ZW58MXx8fHwxNzc1NTYyNzE1fDA&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Profesional talando árbol con motosierra"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            {t('hero.subtitle')}
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
              <CheckCircle className="w-5 h-5 text-[#2f4f2f]" />
              <span className="text-[#2f4f2f]">{t('hero.badge1')}</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Shield className="w-5 h-5 text-[#2f4f2f]" />
              <span className="text-[#2f4f2f]">{t('hero.badge2')}</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
              <FileText className="w-5 h-5 text-[#2f4f2f]" />
              <span className="text-[#2f4f2f]">{t('hero.badge3')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
