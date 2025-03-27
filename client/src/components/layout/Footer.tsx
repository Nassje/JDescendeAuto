import { FaCar, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaClock, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex flex-col items-start mb-6">
              <div className="bg-white/5 rounded-lg p-2 mb-4">
                <img 
                  src="/logojDescende.png" 
                  alt="JDescende Auto" 
                  className="h-24 w-auto" 
                />
              </div>
              <div className="mt-2">
                <span className="font-montserrat text-xl font-bold text-white tracking-tight">JDescende</span>
                <span className="font-montserrat text-xl font-bold text-red-500 tracking-tight"> Auto</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Uw betrouwbare partner voor alles wat met auto's te maken heeft in Kampen en omgeving. Kwaliteit en klanttevredenheid staan bij ons voorop.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-primary text-gray-400 hover:text-white transition-colors duration-200">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-primary text-gray-400 hover:text-white transition-colors duration-200">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-primary text-gray-400 hover:text-white transition-colors duration-200">
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 font-montserrat">Diensten</h3>
            <ul className="space-y-4">
              <li><a href="#diensten" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-block">Aan- en verkoop auto's</a></li>
              <li><a href="#diensten" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-block">Inruil gebruikte voertuigen</a></li>
              <li><a href="#diensten" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-block">Reparatie en onderhoud</a></li>
              <li><a href="#consignatie" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-block">Verkoop in consignatie</a></li>
              <li><a href="#onderdelen" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-block">Verkoop auto-onderdelen</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 font-montserrat">Handige links</h3>
            <ul className="space-y-4">
              <li><a href="#over-ons" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-block">Over ons</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-block">Contact</a></li>
              <li><a href="https://www.marktplaats.nl/u/j-descende-handelsonderneming/43749699/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-block">Marktplaats</a></li>
              <li><a href="https://www.yasparts.nl" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-block">YasParts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-block">Algemene voorwaarden</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 font-montserrat">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Betonstraat 17<br/>8263 BL Kampen</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">038 337 7638</span>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="text-red-500 mr-3 flex-shrink-0" />
                <a href="https://wa.me/31641941976" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm">06 4194 1976</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@autodemontagekampen.nl</span>
              </li>
              <li className="flex items-start">
                <FaClock className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <div>Maandag - Vrijdag: 9:00 - 17:00</div>
                  <div>Zaterdag: 9:00 - 16:00</div>
                  <div>Zondag: Gesloten</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} JDescende Auto. Alle rechten voorbehouden.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-500 hover:text-gray-400 text-xs">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-400 text-xs">Algemene Voorwaarden</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-400 text-xs">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
