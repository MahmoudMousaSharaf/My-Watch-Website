import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! We will contact you soon.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-3xl text-center text-primary mb-8">Contact Us</h1>
          
          <div className="text-center mb-8">
            <p className="text-muted mb-4">
              If you have questions about watches, please send us a message!
            </p>
            <p className="text-muted">
              Phone: 123-456-7890<br />
              Email: info@watchstore.com
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-primary mb-2">Your Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            
            <div>
              <label className="block text-primary mb-2">Your Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            
            <div>
              <label className="block text-primary mb-2">Your Message:</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-coral text-white p-3 rounded hover:bg-coral/90"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;