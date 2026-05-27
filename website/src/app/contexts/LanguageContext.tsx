import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'ca' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const defaultContextValue: LanguageContextType = {
  language: 'es',
  setLanguage: () => {},
  t: (key: string) => key,
};

const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

const translations = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.gallery': 'Galería',
    'nav.call': 'Llamar',

    // Hero
    'hero.title': 'Transformamos y Protegemos Su Terreno',
    'hero.subtitle': 'Expertos en Tala, Desbroce, Vallado y Colocación de Césped Artificial.',
    'hero.badge1': 'Equipos Profesionales',
    'hero.badge2': 'Seguros Completos',
    'hero.badge3': 'Presupuesto Sin Compromiso',

    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones profesionales para el cuidado y mantenimiento de sus terrenos',
    'services.tree.title': 'Tala de Árboles',
    'services.tree.desc': 'Tala profesional y segura de árboles de cualquier tamaño',
    'services.tree.feat1': 'Tala controlada',
    'services.tree.feat2': 'Retirada de residuos',
    'services.tree.feat3': 'Equipos especializados',
    'services.clearing.title': 'Desbroce de Parcelas',
    'services.clearing.desc': 'Limpieza y preparación de terrenos',
    'services.clearing.feat1': 'Desbroce mecanizado',
    'services.clearing.feat2': 'Eliminación de maleza',
    'services.clearing.feat3': 'Preparación del terreno',
    'services.fencing.title': 'Vallado de Terrenos',
    'services.fencing.desc': 'Instalación de cercas y vallados perimetrales',
    'services.fencing.feat1': 'Vallado metálico',
    'services.fencing.feat2': 'Cercas de madera',
    'services.fencing.feat3': 'Instalación profesional',
    'services.turf.title': 'Césped Artificial',
    'services.turf.desc': 'Instalación de césped artificial de alta calidad',
    'services.turf.feat1': 'Césped de calidad',
    'services.turf.feat2': 'Instalación experta',
    'services.turf.feat3': 'Mantenimiento mínimo',

    // Why Choose Us
    'why.title': '¿Por Qué Elegirnos?',
    'why.subtitle': 'Compromiso, profesionalidad y resultados garantizados',
    'why.feat1.title': 'Equipos Profesionales',
    'why.feat1.desc': 'Motosierras y herramientas especializadas de última generación para garantizar trabajos eficientes y profesionales.',
    'why.feat2.title': 'Seguro RC Integrado',
    'why.feat2.desc': 'Todos nuestros servicios incluyen seguro de responsabilidad civil completo para su tranquilidad.',
    'why.feat3.title': 'Gestión de Residuos',
    'why.feat3.desc': 'Nos encargamos de la recogida y gestión legal de todos los residuos generados en el trabajo.',
    'why.feat4.title': 'Personal Certificado',
    'why.feat4.desc': 'Equipo profesional con formación continua y certificaciones en trabajos forestales y de altura.',
    'why.feat5.title': 'Rapidez y Eficiencia',
    'why.feat5.desc': 'Cumplimos con los plazos acordados sin comprometer la calidad del servicio prestado.',
    'why.feat6.title': '+15 Años Experiencia',
    'why.feat6.desc': 'Amplia trayectoria en el sector con cientos de proyectos completados satisfactoriamente.',

    // Gallery
    'gallery.title': 'Galería de Trabajos',
    'gallery.subtitle': 'Ejemplos de nuestros proyectos realizados',

    // CTA
    'cta.title': '¿Necesitas un Presupuesto?',
    'cta.subtitle': 'Contáctanos ahora y recibe una valoración gratuita sin compromiso',

    // Footer
    'footer.description': 'Expertos en servicios forestales y de mantenimiento de terrenos con más de 15 años de experiencia.',
    'footer.services': 'Servicios',
    'footer.quicklinks': 'Enlaces Rápidos',
    'footer.contact': 'Contacto',
    'footer.privacy': 'Política de Privacidad',
    'footer.copyright': '© 2026 AgroForestal Pro. Todos los derechos reservados.',
  },
  ca: {
    // Navigation
    'nav.home': 'Inici',
    'nav.services': 'Serveis',
    'nav.gallery': 'Galeria',
    'nav.call': 'Trucar',

    // Hero
    'hero.title': 'Transformem i Protegim el Vostre Terreny',
    'hero.subtitle': 'Experts en Tala, Desbrossament, Tancat i Col·locació de Gespa Artificial.',
    'hero.badge1': 'Equips Professionals',
    'hero.badge2': 'Assegurances Completes',
    'hero.badge3': 'Pressupost Sense Compromís',

    // Services
    'services.title': 'Els Nostres Serveis',
    'services.subtitle': 'Solucions professionals per a la cura i manteniment dels vostres terrenys',
    'services.tree.title': 'Tala d\'Arbres',
    'services.tree.desc': 'Tala professional i segura d\'arbres de qualsevol mida',
    'services.tree.feat1': 'Tala controlada',
    'services.tree.feat2': 'Retirada de residus',
    'services.tree.feat3': 'Equips especialitzats',
    'services.clearing.title': 'Desbrossament de Parcel·les',
    'services.clearing.desc': 'Neteja i preparació de terrenys',
    'services.clearing.feat1': 'Desbrossament mecanitzat',
    'services.clearing.feat2': 'Eliminació de males herbes',
    'services.clearing.feat3': 'Preparació del terreny',
    'services.fencing.title': 'Tancat de Terrenys',
    'services.fencing.desc': 'Instal·lació de tanques i tancats perimetrals',
    'services.fencing.feat1': 'Tancat metàl·lic',
    'services.fencing.feat2': 'Tanques de fusta',
    'services.fencing.feat3': 'Instal·lació professional',
    'services.turf.title': 'Gespa Artificial',
    'services.turf.desc': 'Instal·lació de gespa artificial d\'alta qualitat',
    'services.turf.feat1': 'Gespa de qualitat',
    'services.turf.feat2': 'Instal·lació experta',
    'services.turf.feat3': 'Manteniment mínim',

    // Why Choose Us
    'why.title': 'Per Què Triar-nos?',
    'why.subtitle': 'Compromís, professionalitat i resultats garantits',
    'why.feat1.title': 'Equips Professionals',
    'why.feat1.desc': 'Motosserres i eines especialitzades d\'última generació per garantir treballs eficients i professionals.',
    'why.feat2.title': 'Assegurança RC Integrada',
    'why.feat2.desc': 'Tots els nostres serveis inclouen assegurança de responsabilitat civil completa per a la vostra tranquil·litat.',
    'why.feat3.title': 'Gestió de Residus',
    'why.feat3.desc': 'Ens encarreguem de la recollida i gestió legal de tots els residus generats en el treball.',
    'why.feat4.title': 'Personal Certificat',
    'why.feat4.desc': 'Equip professional amb formació contínua i certificacions en treballs forestals i d\'altura.',
    'why.feat5.title': 'Rapidesa i Eficiència',
    'why.feat5.desc': 'Complim amb els terminis acordats sense comprometre la qualitat del servei prestat.',
    'why.feat6.title': '+15 Anys Experiència',
    'why.feat6.desc': 'Àmplia trajectòria en el sector amb centenars de projectes completats satisfactòriament.',

    // Gallery
    'gallery.title': 'Galeria de Treballs',
    'gallery.subtitle': 'Exemples dels nostres projectes realitzats',

    // CTA
    'cta.title': 'Necessites un Pressupost?',
    'cta.subtitle': 'Contacta\'ns ara i rep una valoració gratuïta sense compromís',

    // Footer
    'footer.description': 'Experts en serveis forestals i de manteniment de terrenys amb més de 15 anys d\'experiència.',
    'footer.services': 'Serveis',
    'footer.quicklinks': 'Enllaços Ràpids',
    'footer.contact': 'Contacte',
    'footer.privacy': 'Política de Privacitat',
    'footer.copyright': '© 2026 AgroForestal Pro. Tots els drets reservats.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.call': 'Call',

    // Hero
    'hero.title': 'We Transform and Protect Your Land',
    'hero.subtitle': 'Experts in Tree Felling, Land Clearing, Fencing and Artificial Turf Installation.',
    'hero.badge1': 'Professional Equipment',
    'hero.badge2': 'Full Insurance',
    'hero.badge3': 'Free Quote',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Professional solutions for the care and maintenance of your land',
    'services.tree.title': 'Tree Felling',
    'services.tree.desc': 'Professional and safe tree felling of any size',
    'services.tree.feat1': 'Controlled felling',
    'services.tree.feat2': 'Waste removal',
    'services.tree.feat3': 'Specialized equipment',
    'services.clearing.title': 'Land Clearing',
    'services.clearing.desc': 'Land cleaning and preparation',
    'services.clearing.feat1': 'Mechanized clearing',
    'services.clearing.feat2': 'Weed removal',
    'services.clearing.feat3': 'Land preparation',
    'services.fencing.title': 'Land Fencing',
    'services.fencing.desc': 'Installation of fences and perimeter fencing',
    'services.fencing.feat1': 'Metal fencing',
    'services.fencing.feat2': 'Wooden fences',
    'services.fencing.feat3': 'Professional installation',
    'services.turf.title': 'Artificial Turf',
    'services.turf.desc': 'High-quality artificial turf installation',
    'services.turf.feat1': 'Quality turf',
    'services.turf.feat2': 'Expert installation',
    'services.turf.feat3': 'Minimal maintenance',

    // Why Choose Us
    'why.title': 'Why Choose Us?',
    'why.subtitle': 'Commitment, professionalism and guaranteed results',
    'why.feat1.title': 'Professional Equipment',
    'why.feat1.desc': 'State-of-the-art chainsaws and specialized tools to ensure efficient and professional work.',
    'why.feat2.title': 'Integrated Liability Insurance',
    'why.feat2.desc': 'All our services include comprehensive liability insurance for your peace of mind.',
    'why.feat3.title': 'Waste Management',
    'why.feat3.desc': 'We take care of the legal collection and management of all waste generated during the work.',
    'why.feat4.title': 'Certified Personnel',
    'why.feat4.desc': 'Professional team with continuous training and certifications in forestry and height work.',
    'why.feat5.title': 'Speed and Efficiency',
    'why.feat5.desc': 'We meet agreed deadlines without compromising the quality of the service provided.',
    'why.feat6.title': '+15 Years Experience',
    'why.feat6.desc': 'Extensive track record in the sector with hundreds of successfully completed projects.',

    // Gallery
    'gallery.title': 'Work Gallery',
    'gallery.subtitle': 'Examples of our completed projects',

    // CTA
    'cta.title': 'Need a Quote?',
    'cta.subtitle': 'Contact us now and receive a free valuation with no obligation',

    // Footer
    'footer.description': 'Experts in forestry and land maintenance services with over 15 years of experience.',
    'footer.services': 'Services',
    'footer.quicklinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': '© 2026 AgroForestal Pro. All rights reserved.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
