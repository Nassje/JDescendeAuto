import { FaHome, FaCar, FaCogs, FaWrench, FaHandshake, FaInfoCircle, FaEnvelope, FaShieldAlt, FaPhone, FaTimes, FaTools } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { href: "#home", label: "Home", icon: <FaHome /> },
  { href: "#diensten", label: "Diensten", icon: <FaCogs /> },
  { href: "#autos", label: "Auto's", icon: <FaCar /> },
  { href: "#onderdelen", label: "Onderdelen", icon: <FaWrench /> },
  { href: "#reparatie", label: "Reparatie", icon: <FaTools /> },
  { href: "#garantie", label: "Garantie", icon: <FaShieldAlt /> },
  { href: "#consignatie", label: "Consignatie", icon: <FaHandshake /> },
  { href: "#over-ons", label: "Over Ons", icon: <FaInfoCircle /> }
];

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex flex-col">
      <div className="bg-white h-full max-w-xs w-full ml-auto overflow-y-auto shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-semibold text-lg">Menu</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
          >
            <FaTimes size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-2">
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 border-l-2 border-transparent hover:border-primary"
              onClick={handleLinkClick}
            >
              <span className="text-primary mr-3 flex-shrink-0">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </div>
        
        <div className="p-4 border-t mt-auto">
          <Button className="w-full" asChild>
            <a href="#contact" onClick={handleLinkClick} className="flex items-center justify-center gap-2">
              <FaPhone size={14} />
              <span>Contact</span>
            </a>
          </Button>
          
          <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
            <a href="#" className="hover:text-primary">Algemene voorwaarden</a>
            <a href="#" className="hover:text-primary">Privacy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
