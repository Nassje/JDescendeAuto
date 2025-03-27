import { 
  FaTools, 
  FaWrench, 
  FaCog, 
  FaOilCan, 
  FaCheck, 
  FaCar, 
  FaShieldAlt, 
  FaHeadset 
} from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import AnimatedElement from "@/components/ui/animated-element";

const RepairSection = () => {
  return (
    <section id="reparatie" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fadeInUp" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-montserrat">Reparatie en Onderhoud</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Voor alle reparaties en onderhoud aan uw voertuig bent u bij ons aan het juiste adres. Onze ervaren monteurs staan voor u klaar.
          </p>
        </AnimatedElement>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 h-full">
            
            {/* Linker kolom - Info */}
            <div className="order-2 lg:order-1 h-full">
              <AnimatedElement animation="fadeInLeft" delay={0.2} className="h-full">
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 h-full">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <span className="bg-primary p-2 rounded-lg mr-3 text-white">
                      <FaWrench className="h-5 w-5" />
                    </span>
                    Professionele autoservice
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Bij JDescende beschikken we over moderne apparatuur en ervaren monteurs die uw auto snel en vakkundig weer op de weg helpen. We bieden een uitgebreid pakket aan reparatie- en onderhoudsdiensten aan voor alle automerken en -modellen.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Onze reparatie- en onderhoudsdiensten:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                        <div className="text-primary mr-3">
                          <FaOilCan className="h-5 w-5" />
                        </div>
                        <span className="text-gray-700">Onderhoudsbeurten</span>
                      </div>
                      
                      <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                        <div className="text-primary mr-3">
                          <FaCog className="h-5 w-5" />
                        </div>
                        <span className="text-gray-700">APK-keuringen</span>
                      </div>
                      
                      <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                        <div className="text-primary mr-3">
                          <FaTools className="h-5 w-5" />
                        </div>
                        <span className="text-gray-700">Reparaties</span>
                      </div>
                      
                      <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                        <div className="text-primary mr-3">
                          <FaCar className="h-5 w-5" />
                        </div>
                        <span className="text-gray-700">Storingsdiagnose</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Waarom kiezen voor JDescende?</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="text-primary mr-3 mt-1 flex-shrink-0">
                          <FaCheck className="h-4 w-4" />
                        </div>
                        <span className="text-gray-700">Uitgebreide ervaring met diverse automerken</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-primary mr-3 mt-1 flex-shrink-0">
                          <FaCheck className="h-4 w-4" />
                        </div>
                        <span className="text-gray-700">Gebruik van kwaliteitsonderdelen</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-primary mr-3 mt-1 flex-shrink-0">
                          <FaCheck className="h-4 w-4" />
                        </div>
                        <span className="text-gray-700">Transparante prijzen, geen verborgen kosten</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-primary mr-3 mt-1 flex-shrink-0">
                          <FaCheck className="h-4 w-4" />
                        </div>
                        <span className="text-gray-700">Gratis haal- en brengservice in Kampen en omgeving</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      asChild
                      className="bg-primary hover:bg-primary-dark text-white font-medium py-4 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <a href="#contact">
                        <FaHeadset className="mr-2 h-4 w-4 inline-block" /> 
                        Maak een afspraak
                      </a>
                    </Button>
                  </div>
                </div>
              </AnimatedElement>
            </div>
            
            {/* Rechter kolom - Visual */}
            <div className="order-1 lg:order-2 flex items-center h-full">
              <AnimatedElement animation="fadeInRight" delay={0.2} className="h-full w-full">
                <div className="h-full w-full rounded-xl overflow-hidden shadow-md border border-gray-200 relative">
                  <div className="bg-white h-full w-full p-6 flex flex-col space-y-6">
                    {/* Service highlights */}
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <FaTools className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Moderne werkplaats</h4>
                        <p className="text-gray-600 text-sm">Uitgerust met de nieuwste diagnoseapparatuur</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <FaShieldAlt className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Garantie op reparaties</h4>
                        <p className="text-gray-600 text-sm">3 maanden garantie op al onze werkzaamheden</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <FaHeadset className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Persoonlijk advies</h4>
                        <p className="text-gray-600 text-sm">Altijd eerlijk en begrijpelijk advies</p>
                      </div>
                    </div>
                    
                    {/* Prijsindicaties */}
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 shadow-sm mt-auto">
                      <h4 className="font-semibold text-gray-800 mb-3">Prijsindicaties:</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Kleine onderhoudsbeurt</span>
                          <span className="font-bold text-gray-800">vanaf €149</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Grote onderhoudsbeurt</span>
                          <span className="font-bold text-gray-800">vanaf €249</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">APK-keuring</span>
                          <span className="font-bold text-gray-800">Op aanvraag</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-3">* Prijzen zijn indicatief en kunnen variëren afhankelijk van het voertuig</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairSection;