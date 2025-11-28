import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple auth simulation - in real app, this would be actual authentication
    if (email && password) {
      localStorage.setItem('isAuthenticated', 'true');
      // Store minimal user info for profile
      const existingProfile = localStorage.getItem('userProfile');
      if (!existingProfile) {
        localStorage.setItem('userProfile', JSON.stringify({
          email: email,
          name: email.split('@')[0],
          joinDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
        }));
      }
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-light flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">TIME PIECE</h1>
          <h2 className="text-xl font-semibold text-foreground">Welcome Back</h2>
          <p className="text-muted mt-2">Please sign in to your account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-neutral-border rounded-md focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-neutral-border rounded-md focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-3">
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-muted">
            Don't have an account?{' '}
            <Link to="/register" className="text-coral hover:underline font-medium">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;