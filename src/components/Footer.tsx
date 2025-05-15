import { Mail, MapPin, Phone, TreePine } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link for proper routing

const Footer = () => {
  return (
    <footer className="bg-forest-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <TreePine className="h-8 w-8" />
              <span className="font-playfair text-2xl font-semibold">North Tree Felling</span>
            </div>
            <p className="text-gray-300 max-w-xs">
              Professional tree services with over 20 years of experience in the industry.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-forest-400" />
                <span className="text-gray-300">+27 73 546 7858</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-forest-400" />
                <span className="text-gray-300">northtreefelling01@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-forest-400" />
                <span className="text-gray-300">13th Avenue, Sydenham, JHB North, 2192</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/services" className="block text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">About Us</Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">Contact</Link>
              <Link to="/get-quote" className="block text-gray-300 hover:text-white transition-colors">Get a Quote</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-forest-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} North Tree Felling. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
