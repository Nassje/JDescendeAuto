import { FaCar, FaCogs, FaExternalLinkAlt, FaCheck, FaTools, FaShoppingCart } from 'react-icons/fa';
import AnimatedElement from "@/components/ui/animated-element";

const PartsSection = () => {
  return (
    <section id="onderdelen" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fadeInUp" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-montserrat">Ons Aanbod</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Bekijk onze uitgebreide collecties auto's en onderdelen op onze externe platforms
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col h-full">
            {/* Auto's Card */}
            <AnimatedElement animation="fadeInLeft" delay={0.2} className="h-full">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full">
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <FaCar className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">Tweedehands Auto's</h3>
                    </div>
                  </div>
                
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Op zoek naar een betrouwbare tweedehands auto? Bij JDescende vindt u een uitgebreide 
                    collectie kwaliteitsvolle occasions voor ieder budget. Onze auto's worden zorgvuldig 
                    geselecteerd en gecontroleerd.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="bg-primary/10 p-2 rounded-full mr-3 flex-shrink-0">
                          <FaCheck className="h-4 w-4 text-primary" />
                        </div>
                        <h4 className="font-semibold text-gray-800">Kwaliteit gegarandeerd</h4>
                      </div>
                      <p className="text-sm text-gray-600 pl-9">Elke auto ondergaat een strenge inspectie</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="bg-primary/10 p-2 rounded-full mr-3 flex-shrink-0">
                          <FaTools className="h-4 w-4 text-primary" />
                        </div>
                        <h4 className="font-semibold text-gray-800">Uitgebreide service</h4>
                      </div>
                      <p className="text-sm text-gray-600 pl-9">Inclusief onderhoudsbeurt voor levering</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="text-primary mr-3 mt-1">
                        <FaCheck className="h-4 w-4" />
                      </div>
                      <span className="text-gray-700">Uitgebreide garantiepakketten beschikbaar</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-3 mt-1">
                        <FaCheck className="h-4 w-4" />
                      </div>
                      <span className="text-gray-700">Altijd proefrijden mogelijk</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-primary mr-3 mt-1">
                        <FaCheck className="h-4 w-4" />
                      </div>
                      <span className="text-gray-700">Persoonlijk advies op maat</span>
                    </li>
                  </ul>
                  
                  <div className="mt-auto">
                    <a 
                      href="https://www.marktplaats.nl/u/j-descende-handelsonderneming/43749699/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 px-6 rounded-lg inline-flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <FaExternalLinkAlt className="mr-2 h-4 w-4" /> Bekijk ons aanbod op Marktplaats
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
          
          <div className="flex flex-col h-full">
            {/* Onderdelen Card */}
            <AnimatedElement animation="fadeInRight" delay={0.3} className="h-full">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full">
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="bg-blue-600/10 p-3 rounded-full mr-4">
                        <FaCogs className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">Auto-onderdelen</h3>
                    </div>
                  </div>
                
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Wij bieden een compleet assortiment tweedehands auto-onderdelen, van motoronderdelen tot 
                    carrosserie-elementen. Al onze onderdelen worden zorgvuldig gecontroleerd en getest voor 
                    optimale betrouwbaarheid.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="bg-blue-600/10 p-2 rounded-full mr-3 flex-shrink-0">
                          <FaShoppingCart className="h-4 w-4 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800">Groot assortiment</h4>
                      </div>
                      <p className="text-sm text-gray-600 pl-9">Onderdelen voor alle populaire merken</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="bg-blue-600/10 p-2 rounded-full mr-3 flex-shrink-0">
                          <FaCheck className="h-4 w-4 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-800">Betrouwbaarheid</h4>
                      </div>
                      <p className="text-sm text-gray-600 pl-9">Elk onderdeel wordt uitvoerig getest</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="text-blue-600 mr-3 mt-1">
                        <FaCheck className="h-4 w-4" />
                      </div>
                      <span className="text-gray-700">Deskundig advies over compatibiliteit</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-blue-600 mr-3 mt-1">
                        <FaCheck className="h-4 w-4" />
                      </div>
                      <span className="text-gray-700">Scherpe prijzen en snelle levering</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-blue-600 mr-3 mt-1">
                        <FaCheck className="h-4 w-4" />
                      </div>
                      <span className="text-gray-700">Garantie op alle onderdelen</span>
                    </li>
                  </ul>
                  
                  <div className="mt-auto">
                    <a 
                      href="https://www.yasparts.nl" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-lg inline-flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <FaExternalLinkAlt className="mr-2 h-4 w-4" /> Bekijk onderdelen op YasParts.nl
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartsSection;