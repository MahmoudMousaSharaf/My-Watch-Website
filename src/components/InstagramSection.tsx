import { useState } from 'react';
import { Instagram } from 'lucide-react';
import watchInsta1 from '@/assets/watch-insta-1.jpg';
import watchInsta2 from '@/assets/watch-insta-2.jpg';
import watchInsta3 from '@/assets/watch-insta-3.jpg';
import watchNews1 from '@/assets/watch-news-1.jpg';
import watchNews2 from '@/assets/watch-news-2.jpg';

const instagramImages = [
  { id: 1, image: watchInsta1, text: "Luxury Collection" },
  { id: 2, image: watchInsta2, text: "Swiss Timepieces" },
  { id: 3, image: watchInsta3, text: "Premium Watches" },
  { id: 4, image: watchNews1, text: "Sport Collection" },
  { id: 5, image: watchNews2, text: "Classic Designs" }
];

const InstagramSection = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light tracking-[3px] text-primary mb-4">@ Follow Us On Instagram</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {instagramImages.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredImage(item.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={item.image}
                alt={item.text}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Dark overlay with text */}
              <div className={`absolute inset-0 bg-black transition-all duration-300 flex items-center justify-center ${
                hoveredImage === item.id ? 'bg-opacity-50' : 'bg-opacity-0'
              }`}>
                <div className={`text-white text-center transition-all duration-300 ${
                  hoveredImage === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <Instagram className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm tracking-wide">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;