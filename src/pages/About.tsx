import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl text-center text-primary mb-8">About Our Watch Store</h1>
          
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-muted mb-6">
              Hi! Welcome to our watch website. We sell really nice watches.
            </p>
            
            <p className="text-muted mb-4">
              We have been selling watches for a while now. Our watches are good quality and not too expensive.
            </p>
            
            <p className="text-muted mb-4">
              You can buy watches here and we will ship them to you. We have many different types of watches.
            </p>
            
            <p className="text-muted">
              Thank you for visiting our website!
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;