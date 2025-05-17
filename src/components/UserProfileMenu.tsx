
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from '@/contexts/GlobalStateContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon, User, LogOut, Heart, ShoppingCart } from 'lucide-react';

const UserProfileMenu = () => {
  const { state, dispatch } = useGlobalState();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    setIsOpen(false);
    navigate('/');
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
          {state.isLoggedIn ? (
            state.user.name?.[0].toUpperCase() || 'U'
          ) : (
            <User size={18} />
          )}
        </div>
        <span className="hidden md:inline-block text-sm font-medium">
          {state.isLoggedIn ? state.user.name : 'Account'}
        </span>
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 animate-fade-in"
          onMouseLeave={() => setIsOpen(false)}
        >
          {state.isLoggedIn ? (
            <>
              <div className="px-4 py-2 text-sm text-gray-700">
                Signed in as <span className="font-semibold">{state.user.email}</span>
              </div>
              <hr className="my-1" />
              
              <button 
                onClick={() => {
                  setIsOpen(false);
                  navigate('/profile');
                }}
                className="w-full flex items-center px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
              >
                <User size={16} className="mr-2" />
                Your Profile
              </button>
              
              <button 
                onClick={() => {
                  setIsOpen(false);
                  navigate('/favorites');
                }}
                className="w-full flex items-center px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
              >
                <Heart size={16} className="mr-2" />
                Favorites
                {state.favorites.length > 0 && (
                  <span className="ml-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {state.favorites.length}
                  </span>
                )}
              </button>
              
              <button 
                onClick={() => {
                  setIsOpen(false);
                  navigate('/cart');
                }}
                className="w-full flex items-center px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
              >
                <ShoppingCart size={16} className="mr-2" />
                Cart
                {(state.cart.hotels.length + state.cart.cars.length + state.cart.activities.length) > 0 && (
                  <span className="ml-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {state.cart.hotels.length + state.cart.cars.length + state.cart.activities.length}
                  </span>
                )}
              </button>
              
              <hr className="my-1" />
              
              <button 
                onClick={toggleTheme}
                className="w-full flex items-center px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
              >
                {theme === 'light' ? (
                  <>
                    <Moon size={16} className="mr-2" />
                    Dark Mode
                  </>
                ) : (
                  <>
                    <Sun size={16} className="mr-2" />
                    Light Mode
                  </>
                )}
              </button>
              
              <hr className="my-1" />
              
              <button 
                onClick={handleLogout}
                className="w-full flex items-center px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
              >
                <LogOut size={16} className="mr-2" />
                Sign out
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  navigate('/login');
                }}
                className="w-full flex items-center px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
              >
                <User size={16} className="mr-2" />
                Sign in
              </button>
              
              <button 
                onClick={() => {
                  setIsOpen(false);
                  navigate('/register');
                }}
                className="w-full flex items-center px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
              >
                <User size={16} className="mr-2" />
                Create account
              </button>
              
              <hr className="my-1" />
              
              <button 
                onClick={toggleTheme}
                className="w-full flex items-center px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
              >
                {theme === 'light' ? (
                  <>
                    <Moon size={16} className="mr-2" />
                    Dark Mode
                  </>
                ) : (
                  <>
                    <Sun size={16} className="mr-2" />
                    Light Mode
                  </>
                )}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfileMenu;
