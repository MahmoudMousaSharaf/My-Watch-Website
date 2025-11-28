import watchProduct1 from '@/assets/watch-product-1.jpg';
import watchProduct2 from '@/assets/watch-product-2.jpg';
import watchProduct3 from '@/assets/watch-product-3.jpg';

const products = [
  {
    id: 1,
    name: 'Swiss Luxury Watch',
    price: '$1,299.99',
    originalPrice: '$1,599.00',
    image: watchProduct1,
    sale: true
  },
  {
    id: 2,
    name: 'Smart Sport Watch',
    price: '$399.99',
    image: watchProduct2,
    sale: false
  },
  {
    id: 3,
    name: 'Classic Leather Watch',
    price: '$899.99',
    originalPrice: '$1,200.00',
    image: watchProduct3,
    sale: true
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-primary tracking-wide uppercase mb-4">
            Featured Products
          </h2>
          <div className="w-20 h-px bg-coral mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.sale && (
                  <div className="absolute top-4 left-4 bg-coral text-white px-3 py-1 text-sm font-medium">
                    SALE
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-medium text-primary mb-2 group-hover:text-coral transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-lg font-medium text-primary">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;