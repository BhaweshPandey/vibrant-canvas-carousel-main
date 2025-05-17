
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-secondary py-4 sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="https://placehold.co/40x40/DAA520/FFF?text=JS"
            alt="JetSetGo Logo"
            className="h-10"
          />
          <span className="text-primary text-xl font-bold ml-2">JetSetGo Australia</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-primary transition-colors">Home</Link>
          <Link to="/hotels" className="text-white hover:text-primary transition-colors">Hotels</Link>
          <Link to="/flights" className="text-white hover:text-primary transition-colors">Flights</Link>
          <Link to="/cars" className="text-white hover:text-primary transition-colors">Cars</Link>
          <Link to="/activities" className="text-white hover:text-primary transition-colors">Activities</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="text-white hover:text-primary transition-colors px-3 py-1">Log In</Link>
          <Link to="/signup" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors">Sign Up</Link>
        </div>

        {/* Mobile Navigation Icon */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary-dark">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/hotels" 
              className="text-white hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Hotels
            </Link>
            <Link 
              to="/flights" 
              className="text-white hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Flights
            </Link>
            <Link 
              to="/cars" 
              className="text-white hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cars
            </Link>
            <Link 
              to="/activities" 
              className="text-white hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Activities
            </Link>
            <div className="flex space-x-4 pt-2 border-t border-gray-600">
              <Link 
                to="/login" 
                className="text-white hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </Link>
              <Link 
                to="/signup" 
                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
