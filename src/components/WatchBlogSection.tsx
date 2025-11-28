import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import watchBlogImage1 from '@/assets/watch-blog-1.jpg';
import watchBlogImage2 from '@/assets/watch-blog-2.jpg';
import watchBlogImage3 from '@/assets/watch-blog-3.jpg';
import watchBlogImage4 from '@/assets/watch-blog-4.jpg';

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Luxury Timepieces",
    date: "Jan 20, 2025",
    image: watchBlogImage1
  },
  {
    id: 2,
    title: "Building Your Watch Collection: Expert Tips",
    date: "Jan 18, 2025",
    image: watchBlogImage2
  },
  {
    id: 3,
    title: "The Art of Swiss Watchmaking Mastery",
    date: "Jan 16, 2025",
    image: watchBlogImage3
  },
  {
    id: 4,
    title: "Modern Smartwatches vs Traditional Timepieces",
    date: "Jan 14, 2025",
    image: watchBlogImage4
  }
];

const WatchBlogSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % blogPosts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  return (
    <section id="watchblog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm text-coral font-medium tracking-[2px] uppercase mb-2">OUR BLOG</p>
          <h2 className="text-4xl font-bold text-primary tracking-wide">Watch Stories & Insights</h2>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-2 xl:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="overflow-hidden cursor-pointer group">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transition-transform duration-500 group-hover:scale-110">
                  <p className="text-sm text-white/90 mb-2">{post.date}</p>
                  <h3 className="text-lg font-bold text-white mb-3 leading-tight">
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
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transition-transform duration-500 group-hover:scale-110">
                        <p className="text-sm text-white/90 mb-2">{post.date}</p>
                        <h3 className="text-lg font-bold text-white mb-3 leading-tight">
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

export default WatchBlogSection;