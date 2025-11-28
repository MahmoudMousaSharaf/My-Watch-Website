import watchHeroImage from '@/assets/watch-hero-3.jpg';
import watchProductImage from '@/assets/watch-product-4.jpg';

const BeautyLookbook = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Beauty Lookbook */}
          <div className="relative aspect-[4/3] overflow-hidden cursor-pointer group">
              <img
                src={watchHeroImage}
                alt="Watch Collection"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-light tracking-[4px] mb-2">Premium</h3>
                <h4 className="text-3xl font-light tracking-[4px] mb-4">Timepieces</h4>
                <button className="text-sm tracking-[2px] uppercase border-b border-white pb-1 hover:text-coral transition-colors">
                  View Collection
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Product */}
          <div className="flex flex-col justify-center">
            <div className="aspect-[3/4] overflow-hidden mb-6 cursor-pointer group">
              <img
                src={watchProductImage}
                alt="Luxury Watch"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg text-muted mb-2">Chronograph Sport Watch</h3>
              <div className="flex items-center justify-center gap-3">
                <span className="text-sm text-muted line-through">$799.00</span>
                <span className="text-lg font-medium text-coral">$599.99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeautyLookbook;