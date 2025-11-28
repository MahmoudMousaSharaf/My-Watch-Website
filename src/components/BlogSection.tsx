import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import watchNewsImage1 from '@/assets/watch-news-1.jpg';
import watchNewsImage2 from '@/assets/watch-news-2.jpg';
import watchNewsImage3 from '@/assets/watch-news-3.jpg';

const blogPosts = [
  {
    id: 1,
    title: "Latest Watch Trends 2025: What's New in Timepieces",
    author: "Watch Expert",
    date: "Jan 15, 2025",
    image: watchNewsImage1
  },
  {
    id: 2,
    title: "Swiss Craftsmanship: The Art of Watchmaking",
    author: "Timepiece Specialist", 
    date: "Jan 12, 2025",
    image: watchNewsImage2
  },
  {
    id: 3,
    title: "Investment Watches: Building Your Collection",
    author: "Watch Collector",
    date: "Jan 10, 2025", 
    image: watchNewsImage3
  }
];

const BlogSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % blogPosts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  return (
    <section id="blog" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm text-coral font-medium tracking-[2px] uppercase mb-2">LATEST NEWS</p>
          <h2 className="text-4xl font-bold text-primary tracking-wide">Watch New Trends</h2>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="overflow-hidden cursor-pointer group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transition-transform duration-500 group-hover:scale-110">
                  <p className="text-sm text-white/90 mb-2">{post.date}</p>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {post.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Slider View */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {blogPosts.map((post) => (
                <div key={post.id} className="w-full flex-shrink-0 px-4">
                  <div className="overflow-hidden cursor-pointer group">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transition-transform duration-500 group-hover:scale-110">
                        <p className="text-sm text-white/90 mb-2">{post.date}</p>
                        <h3 className="text-lg font-bold text-white mb-3">
                          {post.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {blogPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-coral' : 'bg-neutral-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;