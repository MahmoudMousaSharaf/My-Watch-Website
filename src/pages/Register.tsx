import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Validation checks
    if (!formData.email || !formData.password) {
      console.log('Missing email or password');
      alert('Please fill in all required fields');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      console.log('Passwords do not match');
      alert('Passwords do not match');
      return;
    }
    
    console.log('Registration successful, navigating to home');
    localStorage.setItem('isAuthenticated', 'true');
    // Store user profile data
    localStorage.setItem('userProfile', JSON.stringify({
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: '',
      address: '',
      joinDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    }));
    navigate('/home');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-neutral-light flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">TIME PIECE</h1>
          <h2 className="text-xl font-semibold text-foreground">Create Account</h2>
          <p className="text-muted mt-2">Please fill in your information</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-neutral-border rounded-md focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                placeholder="First name"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-neutral-border rounded-md focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                placeholder="Last name"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
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
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-neutral-border rounded-md focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
              placeholder="Create password"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-neutral-border rounded-md focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
              placeholder="Confirm password"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-3">
            Create Account
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-muted">
            Already have an account?{' '}
            <Link to="/login" className="text-coral hover:underline font-medium">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;