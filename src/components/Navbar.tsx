
import { useState, useEffect } from "react";
import { Menu, TreePine, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md ${isScrolled ? "shadow-sm" : ""}`}>
      <div className="max

-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <TreePine className="h-8 w-8 text-forest-600" />
              <span className="font-playfair text-2xl font-semibold text-gray-900">North Tree Felling</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/services" 
              className={`text-gray-700 hover:text-forest-600 transition-colors ${isActive('/services') ? 'text-forest-600 font-medium' : ''}`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-700 hover:text-forest-600 transition-colors ${isActive('/about') ? 'text-forest-600 font-medium' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-700 hover:text-forest-600 transition-colors ${isActive('/contact') ? 'text-forest-600 font-medium' : ''}`}
            >
              Contact
            </Link>
            <Link to="/get-quote">
              <Button className="bg-forest-600 hover:bg-forest-700 text-white">Get Quote</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-forest-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md absolute top-20 left-0 w-full border-b border-gray-200 animate-fadeIn">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/services" 
                className={`block px-3 py-2 text-gray-700 hover:text-forest-600 transition-colors ${isActive('/services') ? 'text-forest-600 font-medium' : ''}`}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className={`block px-3 py-2 text-gray-700 hover:text-forest-600 transition-colors ${isActive('/about') ? 'text-forest-600 font-medium' : ''}`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`block px-3 py-2 text-gray-700 hover:text-forest-600 transition-colors ${isActive('/contact') ? 'text-forest-600 font-medium' : ''}`}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Link to="/get-quote">
                  <Button className="w-full bg-forest-600 hover:bg-forest-700 text-white">Get Quote</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
