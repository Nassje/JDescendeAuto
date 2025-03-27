import { useState, useEffect } from "react";
import { Link } from "wouter";
import MobileMenu from "./MobileMenu";
import { FaBars, FaPhone } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for transparent header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center relative z-10">
            <a href="#home" className="flex flex-col items-center">
              <img
                src="/logojDescende.png"
                alt="JDescende Auto"
                className="h-20 lg:h-24 w-auto"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <a 
              href="#home" 
              className={`px-4 py-2 rounded-md transition-colors duration-200 text-sm font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Home
            </a>
            <a 
              href="#diensten" 
              className={`px-4 py-2 rounded-md transition-colors duration-200 text-sm font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Diensten
            </a>
            <a 
              href="#autos" 
              className={`px-4 py-2 rounded-md transition-colors duration-200 text-sm font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Auto's
            </a>
            <a 
              href="#onderdelen" 
              className={`px-4 py-2 rounded-md transition-colors duration-200 text-sm font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Onderdelen
            </a>
            <a 
              href="#reparatie" 
              className={`px-4 py-2 rounded-md transition-colors duration-200 text-sm font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Reparatie
            </a>
            <a 
              href="#garantie" 
              className={`px-4 py-2 rounded-md transition-colors duration-200 text-sm font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Garantie
            </a>
            <a 
              href="#consignatie" 
              className={`px-4 py-2 rounded-md transition-colors duration-200 text-sm font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Consignatie
            </a>
            <a 
              href="#over-ons" 
              className={`px-4 py-2 rounded-md transition-colors duration-200 text-sm font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Over Ons
            </a>
            
            {/* Contact button */}
            <div className="ml-2">
              <Button 
                variant={isScrolled ? "default" : "secondary"} 
                size="sm" 
                asChild 
                className="rounded-md"
              >
                <a href="#contact" className="flex items-center gap-2">
                  <FaPhone className="h-3 w-3" />
                  <span>Contact</span>
                </a>
              </Button>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              type="button" 
              className={`p-2 rounded-md focus:outline-none ${
                isScrolled 
                  ? 'text-gray-500 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={toggleMobileMenu}
              aria-label="Open menu"
            >
              <FaBars size={20} />
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
