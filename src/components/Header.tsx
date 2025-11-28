import { useState, useEffect } from 'react';
import { User, ShoppingBag, LogOut, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOtherDropdownOpen, setIsOtherDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem('isAuthenticated') === 'true';
      setIsAuthenticated(authStatus);
    };
    checkAuth();
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
      const count = cartItems.reduce((total: number, item: any) => total + item.quantity, 0);
      setCartCount(count);
    };
    
    updateCartCount();
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('cartUpdated', updateCartCount);
    
    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userProfile');
    setIsAuthenticated(false);
    window.location.href = '/login';
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <header className="bg-background border-b border-neutral-border sticky top-0 z-50">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold text-primary tracking-wide cursor-pointer" onClick={() => navigate('/home')}>
          TIMEPIECE
        </div>

        {/* Navigation - hidden on small screens */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-primary hover:text-coral transition-colors cursor-pointer" onClick={() => navigate('/home')}>Home</a>
          <a href="#" className="text-primary hover:text-coral transition-colors cursor-pointer" onClick={() => scrollToSection('shop')}>Shop</a>
          <a href="#" className="text-primary hover:text-coral transition-colors cursor-pointer" onClick={() => scrollToSection('watchblog')}>Blog</a>
          <div className="relative">
            <button 
              onClick={() => setIsOtherDropdownOpen(!isOtherDropdownOpen)}
              className="flex items-center text-primary hover:text-coral transition-colors"
            >
              Other
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {isOtherDropdownOpen && (
              <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md py-2 w-40 border border-neutral-border">
                <a 
                  href="#" 
                  className="block px-4 py-2 text-primary hover:text-coral hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    handleNavigation('/about');
                    setIsOtherDropdownOpen(false);
                  }}
                >
                  About
                </a>
                <a 
                  href="#" 
                  className="block px-4 py-2 text-primary hover:text-coral hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    handleNavigation('/contact');
                    setIsOtherDropdownOpen(false);
                  }}
                >
                  Contact Us
                </a>
              </div>
            )}
          </div>
          {isAuthenticated && (
            <a href="#" className="text-primary hover:text-coral transition-colors cursor-pointer" onClick={handleSignOut}>Sign Out</a>
          )}
        </nav>

        <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6">
          {isAuthenticated && (
            <>
              <LogOut 
                className="w-5 h-5 sm:w-6 sm:h-6 text-muted cursor-pointer hover:text-coral transition-colors" 
                onClick={handleSignOut}
              />
              <div className="relative cursor-pointer" onClick={() => navigate('/cart')}>
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-muted hover:text-coral transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 bg-coral text-white text-[10px] sm:text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <User 
                className="w-5 h-5 sm:w-6 sm:h-6 text-muted cursor-pointer hover:text-coral transition-colors" 
                onClick={() => navigate('/profile')}
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;