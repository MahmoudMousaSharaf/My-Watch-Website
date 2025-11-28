import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Categories */}
          <div>
            <h3 className="text-lg font-medium mb-6 tracking-wide">WATCH COLLECTIONS</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Luxury Swiss</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Sport Chronograph</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Smart Watches</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Classic Vintage</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-medium mb-6 tracking-wide">CUSTOMER SERVICE</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Watch Care Guide</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Warranty Service</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Authentication</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Repair Services</a></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-medium mb-6 tracking-wide">GET IN TOUCH</h3>
            <div className="text-sm text-gray-300 mb-4">
              <p>Visit our showroom at 123 Luxury Ave, Geneva, Switzerland or contact us at (+41) 22 123 4567 for expert watch consultation</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/mahmoud-mousa2" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              </a>
              <a href="https://linkedin.com/in/mahmoud-mousa2" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              </a>
              <a href="https://linkedin.com/in/mahmoud-mousa2" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              </a>
              <a href="https://linkedin.com/in/mahmoud-mousa2" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-6 tracking-wide">NEWSLETTER</h3>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full px-4 py-3 bg-white text-primary border-none outline-none text-sm"
              />
              <button className="w-full bg-coral text-white px-4 py-3 text-sm font-medium tracking-wide uppercase hover:bg-coral/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-300">
            Mahmoud thanks :)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;