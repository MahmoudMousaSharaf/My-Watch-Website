import { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import watchProduct1 from '@/assets/watch-product-1.jpg';
import watchProduct2 from '@/assets/watch-product-2.jpg';
import watchProduct3 from '@/assets/watch-product-3.jpg';
import watchProduct4 from '@/assets/watch-product-4.jpg';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Luxury Swiss Watch",
    price: "$1,299.99",
    image: watchProduct1
  },
  {
    id: 2,
    name: "Smart Sport Watch",
    price: "$399.99",
    image: watchProduct2
  },
  {
    id: 3,
    name: "Classic Leather Band",
    price: "$899.99",
    image: watchProduct3
  },
  {
    id: 4,
    name: "Chronograph Sport",
    price: "$599.99",
    image: watchProduct4
  }
];

const ProductGrid = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const navigate = useNavigate();
  const { elementRef, isVisible } = useScrollAnimation(0.1);

  const handleAddToCart = (product: Product) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existingItem = cartItems.find((item: any) => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({
        id: product.id,
        name: product.name,
        price: parseFloat(product.price.replace('$', '')),
        quantity: 1,
        image: product.image
      });
    }
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    window.dispatchEvent(new Event('cartUpdated'));
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <section id="shop" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 scroll-fade-in" ref={elementRef} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease-out' }}>
          <h2 className="text-3xl font-light tracking-[3px] text-primary mb-4">Premium Watch Collection</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductItem
              key={product.id}
              product={product}
              hoveredProduct={hoveredProduct}
              setHoveredProduct={setHoveredProduct}
              handleAddToCart={handleAddToCart}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductItem = ({ product, hoveredProduct, setHoveredProduct, handleAddToCart, index }: any) => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={elementRef}
      className={`group cursor-pointer scroll-fade-in ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setHoveredProduct(product.id)}
      onMouseLeave={() => setHoveredProduct(null)}
    >
      <div className="relative overflow-hidden mb-4 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
                
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Heart icon */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 transform transition-all duration-300 group-hover:scale-110">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-coral hover:fill-coral transition-all duration-300 cursor-pointer" />
                </div>

                {/* Text reveal on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                    <p className="text-lg opacity-90">{product.price}</p>
                  </div>
                </div>

                {/* Add to Cart overlay */}
                {hoveredProduct === product.id && (
                  <div className="absolute inset-x-2 sm:inset-x-4 bottom-2 sm:bottom-4">
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-white text-primary px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-medium tracking-wide uppercase hover:bg-coral hover:text-white transition-colors flex items-center justify-center gap-1.5 sm:gap-2"
                    >
                      <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden xs:inline">Add to Cart</span>
                      <span className="xs:hidden">Add</span>
                    </button>
                  </div>
                )}
              </div>

      <div className="text-center">
        <h3 className="text-lg font-medium text-primary mb-2 group-hover:text-coral transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-muted text-lg font-medium">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductGrid;