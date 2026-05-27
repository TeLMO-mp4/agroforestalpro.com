import { ServiceCard } from './ServiceCard';
import { useLanguage } from '../contexts/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: 'tala',
      image: 'https://images.unsplash.com/photo-1693863640930-5a240ddaf25c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFpbnNhdyUyMGN1dHRpbmclMjB0cmVlJTIwZm9yZXN0cnklMjB3b3JrZXJ8ZW58MXx8fHwxNzc1NTYyNzE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: t('services.tree.title'),
      description: t('services.tree.desc'),
      features: [
        t('services.tree.feat1'),
        t('services.tree.feat2'),
        t('services.tree.feat3')
      ]
    },
    {
      id: 'desbroce',
      image: 'https://images.unsplash.com/photo-1647353578080-f8ce07adbd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjaGFpbnNhdyUyMGN1dHRpbmclMjB0cmVlJTIwZm9yZXN0cnklMjB3b3JrZXJ8ZW58MXx8fHwxNzc1NTYyNzE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: t('services.clearing.title'),
      description: t('services.clearing.desc'),
      features: [
        t('services.clearing.feat1'),
        t('services.clearing.feat2'),
        t('services.clearing.feat3')
      ]
    },
    {
      id: 'vallado',
      image: 'https://images.unsplash.com/photo-1749218075282-814383469433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: t('services.fencing.title'),
      description: t('services.fencing.desc'),
      features: [
        t('services.fencing.feat1'),
        t('services.fencing.feat2'),
        t('services.fencing.feat3')
      ]
    },
    {
      id: 'cesped',
      image: 'https://images.unsplash.com/photo-1662559459053-a7b84ddf8571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: t('services.turf.title'),
      description: t('services.turf.desc'),
      features: [
        t('services.turf.feat1'),
        t('services.turf.feat2'),
        t('services.turf.feat3')
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-[#f5f5dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#2f4f2f] mb-4">{t('services.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
