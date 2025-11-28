import { User, Mail, Phone, MapPin, Calendar, Edit, Save } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  
  const getInitialProfile = () => {
    const storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
      return JSON.parse(storedProfile);
    }
    return {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      address: '123 Main Street, New York, NY 10001',
      joinDate: 'January 2024'
    };
  };

  const [profile, setProfile] = useState(getInitialProfile());
  const [editedProfile, setEditedProfile] = useState(profile);

  useEffect(() => {
    // Check authentication
    if (localStorage.getItem('isAuthenticated') !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  const handleSave = () => {
    setProfile(editedProfile);
    // Save to localStorage
    localStorage.setItem('userProfile', JSON.stringify(editedProfile));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <div className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-[2px] sm:tracking-[3px] text-primary mb-8 sm:mb-12">
          My Profile
        </h1>

        <div className="max-w-3xl mx-auto">
          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow-sm border border-neutral-border p-6 sm:p-8 mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-medium text-primary">{profile.name}</h2>
                  <p className="text-sm sm:text-base text-muted">Customer since {profile.joinDate}</p>
                </div>
              </div>
              
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 px-4 py-2 text-sm sm:text-base border border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded"
                >
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-4 py-2 text-sm sm:text-base bg-primary text-white hover:bg-coral transition-colors rounded"
                  >
                    <Save className="w-4 h-4" />
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 text-sm sm:text-base border border-neutral-border text-muted hover:bg-gray-50 transition-colors rounded"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-4 sm:space-y-6">
              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4">
                <Mail className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" />
                <div className="flex-grow">
                  <label className="text-xs sm:text-sm text-muted block mb-1">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editedProfile.email}
                      onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                      className="w-full text-sm sm:text-base text-primary border border-neutral-border rounded px-3 py-2 focus:outline-none focus:border-coral"
                    />
                  ) : (
                    <p className="text-sm sm:text-base text-primary">{profile.email}</p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 sm:gap-4">
                <Phone className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" />
                <div className="flex-grow">
                  <label className="text-xs sm:text-sm text-muted block mb-1">Phone</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editedProfile.phone}
                      onChange={(e) => setEditedProfile({ ...editedProfile, phone: e.target.value })}
                      className="w-full text-sm sm:text-base text-primary border border-neutral-border rounded px-3 py-2 focus:outline-none focus:border-coral"
                    />
                  ) : (
                    <p className="text-sm sm:text-base text-primary">{profile.phone}</p>
                  )}
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 sm:gap-4">
                <MapPin className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" />
                <div className="flex-grow">
                  <label className="text-xs sm:text-sm text-muted block mb-1">Address</label>
                  {isEditing ? (
                    <textarea
                      value={editedProfile.address}
                      onChange={(e) => setEditedProfile({ ...editedProfile, address: e.target.value })}
                      className="w-full text-sm sm:text-base text-primary border border-neutral-border rounded px-3 py-2 focus:outline-none focus:border-coral"
                      rows={2}
                    />
                  ) : (
                    <p className="text-sm sm:text-base text-primary">{profile.address}</p>
                  )}
                </div>
              </div>

              {/* Join Date */}
              <div className="flex items-start gap-3 sm:gap-4">
                <Calendar className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" />
                <div className="flex-grow">
                  <label className="text-xs sm:text-sm text-muted block mb-1">Member Since</label>
                  <p className="text-sm sm:text-base text-primary">{profile.joinDate}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order History */}
          <div className="bg-white rounded-lg shadow-sm border border-neutral-border p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-medium text-primary mb-4 sm:mb-6">Recent Orders</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 pb-3 sm:pb-4 border-b border-neutral-border">
                <div>
                  <p className="text-sm sm:text-base font-medium text-primary">Order #12345</p>
                  <p className="text-xs sm:text-sm text-muted">November 20, 2024</p>
                </div>
                <p className="text-sm sm:text-base text-primary font-medium">$1,299.99</p>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 pb-3 sm:pb-4 border-b border-neutral-border">
                <div>
                  <p className="text-sm sm:text-base font-medium text-primary">Order #12344</p>
                  <p className="text-xs sm:text-sm text-muted">November 15, 2024</p>
                </div>
                <p className="text-sm sm:text-base text-primary font-medium">$899.99</p>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
                <div>
                  <p className="text-sm sm:text-base font-medium text-primary">Order #12343</p>
                  <p className="text-xs sm:text-sm text-muted">November 10, 2024</p>
                </div>
                <p className="text-sm sm:text-base text-primary font-medium">$399.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
