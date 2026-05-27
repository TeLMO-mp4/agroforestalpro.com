import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useLanguage } from '../contexts/LanguageContext';
import img1 from '../../imports/WhatsApp_Image_2026-04-12_at_17.07.18_(2)-1.jpeg';
import img2 from '../../imports/WhatsApp_Image_2026-04-12_at_17.10.15_(1)-1.jpeg';
import img3 from '../../imports/WhatsApp_Image_2026-04-12_at_17.10.16-1.jpeg';
import img4 from '../../imports/WhatsApp_Image_2026-04-12_at_17.11.01-1.jpeg';
import img5 from '../../imports/WhatsApp_Image_2026-04-12_at_17.12.19-1.jpeg';
import img6 from '../../imports/WhatsApp_Image_2026-04-12_at_17.15.57_(1)-1.jpeg';
import img7 from '../../imports/WhatsApp_Image_2026-04-12_at_17.15.57-1.jpeg';
import img8 from '../../imports/WhatsApp_Image_2026-04-12_at_17.18.52_(1)-1.jpeg';
import img9 from '../../imports/WhatsApp_Image_2026-04-12_at_17.49.51-1.jpeg';
import img10 from '../../imports/WhatsApp_Image_2026-04-12_at_17.52.51-1.jpeg';

export function Gallery() {
  const { t } = useLanguage();
  const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section id="galeria" className="py-20 bg-[#f5f5dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#2f4f2f] mb-4">{t('gallery.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="gallery-carousel">
          <Slider {...settings}>
            {galleryImages.map((img, index) => (
              <div key={index} className="px-3">
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={img}
                    alt={`Trabajo ${index + 1}`}
                    className="w-full h-80 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
