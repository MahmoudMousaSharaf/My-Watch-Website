import watchProduct1 from '@/assets/watch-product-1.jpg';
import watchProduct2 from '@/assets/watch-product-2.jpg';
import watchProduct3 from '@/assets/watch-product-3.jpg';
import watchProduct4 from '@/assets/watch-product-4.jpg';
import watchHero1 from '@/assets/watch-hero.jpg';
import watchHero2 from '@/assets/watch-hero-2.jpg';

const categories = [
  { name: 'Luxury Watches', image: watchProduct1 },
  { name: 'Sport Watches', image: watchProduct2 },
  { name: 'Classic Watches', image: watchProduct3 },
  { name: 'Smart Watches', image: watchProduct4 },
  { name: 'Premium Collection', image: watchHero1 },
  { name: 'Limited Edition', image: watchHero2 },
];

const CategoryGrid = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="category-card group">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-white text-xl font-medium tracking-wide uppercase">
                    {category.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;