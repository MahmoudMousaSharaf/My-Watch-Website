import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import WatchFeaturesSection from '@/components/WatchFeaturesSection';
import BlogSection from '@/components/BlogSection';
import WatchBlogSection from '@/components/WatchBlogSection';
import Footer from '@/components/Footer';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductGrid />
      <WatchFeaturesSection />
      <WatchBlogSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;