import { useState, useEffect } from 'react';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import watchProduct1 from '@/assets/watch-product-1.jpg';
import watchProduct2 from '@/assets/watch-product-2.jpg';
import watchProduct3 from '@/assets/watch-product-3.jpg';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(items);
  }, []);

  const updateQuantity = (id: number, change: number) => {
    const updated = cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    );
    setCartItems(updated);
    localStorage.setItem('cartItems', JSON.stringify(updated));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const removeItem = (id: number) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    localStorage.setItem('cartItems', JSON.stringify(updated));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const shipping = 15;
  const total = subtotal + tax + shipping;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <div className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <button
          onClick={() => navigate('/home')}
          className="flex items-center gap-2 text-primary hover:text-coral transition-colors mb-6 sm:mb-8"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">Continue Shopping</span>
        </button>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-[2px] sm:tracking-[3px] text-primary mb-8 sm:mb-12">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12 sm:py-16">
            <ShoppingBag className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 text-muted" />
            <p className="text-lg sm:text-xl text-muted mb-6">Your cart is empty</p>
            <button
              onClick={() => navigate('/home')}
              className="bg-primary text-white px-6 sm:px-8 py-3 text-sm sm:text-base hover:bg-coral transition-colors"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-sm border border-neutral-border flex flex-col sm:flex-row gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full sm:w-24 md:w-32 h-48 sm:h-24 md:h-32 object-cover rounded"
                  />
                  
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3 sm:mb-4">
                      <div>
                        <h3 className="text-base sm:text-lg font-medium text-primary">{item.name}</h3>
                        <p className="text-sm sm:text-base text-muted mt-1">${item.price.toFixed(2)}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-muted hover:text-coral transition-colors self-start sm:self-auto"
                      >
                        <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between sm:justify-start gap-4">
                      <div className="flex items-center gap-2 sm:gap-3 border border-neutral-border rounded">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1.5 sm:p-2 hover:bg-gray-50 transition-colors"
                        >
                          <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                        <span className="text-sm sm:text-base px-2 sm:px-3">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1.5 sm:p-2 hover:bg-gray-50 transition-colors"
                        >
                          <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                      
                      <div className="text-base sm:text-lg font-medium text-primary">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-neutral-border sticky top-24">
                <h2 className="text-lg sm:text-xl font-medium text-primary mb-4 sm:mb-6">Order Summary</h2>
                
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-muted">Subtotal</span>
                    <span className="text-primary">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-muted">Shipping</span>
                    <span className="text-primary">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-muted">Tax</span>
                    <span className="text-primary">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-neutral-border pt-3 sm:pt-4">
                    <div className="flex justify-between text-base sm:text-lg font-medium">
                      <span className="text-primary">Total</span>
                      <span className="text-primary">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => navigate('/home')}
                  className="w-full bg-primary text-white py-3 text-sm sm:text-base font-medium tracking-wide hover:bg-coral transition-colors"
                >
                  Proceed to Checkout
                </button>
                
                <p className="text-xs sm:text-sm text-muted text-center mt-3 sm:mt-4">
                  Secure checkout with SSL encryption
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
