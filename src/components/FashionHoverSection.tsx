import { useState } from 'react';
import { Heart } from 'lucide-react';
import watchImage1 from '@/assets/watch-blog-1.jpg';
import watchImage2 from '@/assets/watch-blog-2.jpg';
import watchImage3 from '@/assets/watch-blog-3.jpg';
import watchImage4 from '@/assets/watch-blog-4.jpg';

const fashionImages = [
  { id: 1, image: watchImage1, text: "luxury timepieces" },
  { id: 2, image: watchImage2, text: "swiss crafted" },
  { id: 3, image: watchImage3, text: "premium quality" },
  { id: 4, image: watchImage4, text: "modern design" }
];

const FashionHoverSection = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {fashionImages.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredImage(item.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={item.image}
                alt={`Watch item ${item.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Black overlay with text and heart */}
              <div className={`absolute inset-0 bg-black transition-all duration-300 ${
                hoveredImage === item.id ? 'bg-opacity-70' : 'bg-opacity-0'
              }`}>
                {/* Heart icon positioned at top-right */}
                <Heart className={`absolute top-4 right-4 w-6 h-6 fill-red-500 text-red-500 transition-all duration-300 ${
                  hoveredImage === item.id ? 'opacity-100' : 'opacity-0'
                }`} />
                
                {/* Text centered */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  hoveredImage === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <p className="text-white text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FashionHoverSection;