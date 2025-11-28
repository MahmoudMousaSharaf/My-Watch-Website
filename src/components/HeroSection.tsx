import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import watchHeroImage from '@/assets/watch-hero.jpg';
import watchHeroImage2 from '@/assets/watch-hero-2.jpg';
import watchHeroImage3 from '@/assets/watch-hero-3.jpg';
import watchHeroImage4 from '@/assets/watch-hero-4.jpg';

const heroImages = [
  { src: watchHeroImage, title: "LUXURY WATCHES" },
  { src: watchHeroImage2, title: "SWISS CRAFTED" },
  { src: watchHeroImage3, title: "MODERN DESIGN" },
  { src: watchHeroImage4, title: "PREMIUM COLLECTION" }
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="relative h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <div className="hero-overlay absolute inset-0"></div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <p className="text-sm font-light tracking-[3px] uppercase mb-4">
            Premium Collection 2025
          </p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-[8px] mb-8">
            {heroImages[currentSlide].title}
          </h1>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('shop')}
              className="bg-white text-primary px-10 py-4 text-sm font-medium tracking-[2px] uppercase hover:bg-coral hover:text-white transition-colors duration-300 rounded-full"
            >
              Shop Now
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-transparent border-2 border-white text-white px-10 py-4 text-sm font-medium tracking-[2px] uppercase hover:bg-white hover:text-primary transition-colors duration-300 rounded-full"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;