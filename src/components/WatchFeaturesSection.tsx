import watchFeatureImage from '@/assets/watch-product-1.jpg';

const WatchFeaturesSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src={watchFeatureImage}
              alt="Premium Watch Collection"
              className="w-full h-[600px] object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="max-w-lg">
              <p className="text-coral text-sm font-medium tracking-[3px] uppercase mb-4">
                Premium Collection
              </p>
              <h2 className="text-4xl font-light tracking-[2px] text-primary mb-6">
                Swiss Precision Meets Modern Design
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Discover our exclusive collection of luxury timepieces, where traditional Swiss craftsmanship meets contemporary design. Each watch is meticulously crafted with precision movements and premium materials.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-coral rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Swiss Movement</h4>
                    <p className="text-muted">Authentic Swiss automatic movements for unparalleled precision</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-coral rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Premium Materials</h4>
                    <p className="text-muted">Sapphire crystal, titanium, and genuine leather construction</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-coral rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Water Resistant</h4>
                    <p className="text-muted">Professional grade water resistance up to 300 meters</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => scrollToSection('shop')}
                className="bg-primary text-white px-8 py-4 text-sm font-medium tracking-[2px] uppercase hover:bg-coral transition-colors duration-300 rounded-full"
              >
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchFeaturesSection;