import { Truck, Shield, Recycle, Award, Clock, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function WhyChooseUs() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Truck,
      title: t('why.feat1.title'),
      description: t('why.feat1.desc')
    },
    {
      icon: Shield,
      title: t('why.feat2.title'),
      description: t('why.feat2.desc')
    },
    {
      icon: Recycle,
      title: t('why.feat3.title'),
      description: t('why.feat3.desc')
    },
    {
      icon: Award,
      title: t('why.feat4.title'),
      description: t('why.feat4.desc')
    },
    {
      icon: Clock,
      title: t('why.feat5.title'),
      description: t('why.feat5.desc')
    },
    {
      icon: Users,
      title: t('why.feat6.title'),
      description: t('why.feat6.desc')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#2f4f2f] mb-4">{t('why.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('why.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#f5f5dc] to-white p-8 rounded-xl border-2 border-[#2f4f2f]/10 hover:border-[#ff6b35]/50 transition-all hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-[#2f4f2f] rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-[#2f4f2f] mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
