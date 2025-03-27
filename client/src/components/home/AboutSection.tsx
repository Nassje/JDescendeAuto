import { FaMapMarkerAlt, FaPhone, FaCarAlt, FaUsers, FaCheckCircle, FaStar, FaQuoteLeft } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section id="over-ons" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-montserrat">Over JDescende Handelsonderneming</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Al meer dan 5 jaar uw betrouwbare partner in auto's, onderdelen en service
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Linker kolom */}
          <div className="flex flex-col h-full">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm mb-8">
              <p className="text-neutral-700 mb-4 leading-relaxed">
                Als jong autobedrijf in Kampen onderscheiden wij ons door onze passie voor auto's en alles wat daarmee te maken heeft. 
                Ons enthousiaste team bestaat uit vakkundige professionals die elke dag weer met plezier klanten van dienst zijn.
              </p>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                Bij JDescende Handelsonderneming kunt u terecht voor zowel de aankoop van een betrouwbare tweedehands auto als voor 
                onderhoud, reparaties en autoonderdelen. Wij bieden een volledig pakket aan diensten onder één dak.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Persoonlijke aandacht, eerlijk advies en transparantie staan bij ons centraal. Of u nu op zoek bent naar een nieuwe 
                auto, uw huidige auto wilt inruilen of een onderdeel nodig heeft - wij denken graag met u mee om tot de beste oplossing 
                te komen.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-primary/5 p-5 rounded-xl border border-primary/10 flex flex-col justify-between h-full">
                <div className="flex items-center mb-3">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <FaCarAlt className="text-primary h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-gray-800">600+ Auto's</h3>
                </div>
                <p className="text-sm text-gray-600">Verkocht aan tevreden klanten door heel Nederland</p>
              </div>
              
              <div className="bg-primary/5 p-5 rounded-xl border border-primary/10 flex flex-col justify-between h-full">
                <div className="flex items-center mb-3">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <FaUsers className="text-primary h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-gray-800">5+ Jaar</h3>
                </div>
                <p className="text-sm text-gray-600">Ervaring in de autobranche met een gepassioneerd team</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <FaMapMarkerAlt className="text-primary h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Onze locatie</div>
                  <div className="font-medium">Betonstraat 17, Kampen</div>
                </div>
              </div>
              
              <div className="flex items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <FaPhone className="text-primary h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Bel ons</div>
                  <div className="font-medium">038 337 7638</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Rechter kolom */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden h-full">
            <div className="bg-gradient-to-r from-primary to-blue-600 p-5 text-white">
              <h3 className="text-xl font-bold mb-0 flex items-center">
                <FaCheckCircle className="mr-2" />
                Waarom klanten voor ons kiezen
              </h3>
            </div>
            
            <div className="p-6">
              <ul className="space-y-4 mb-6">
                <li className="flex p-3 bg-gray-50 rounded-lg">
                  <div className="text-primary mr-3 mt-1 flex-shrink-0">
                    <FaCheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Eerlijk en transparant</h4>
                    <p className="text-gray-600 text-sm">Altijd duidelijke communicatie en geen verborgen kosten</p>
                  </div>
                </li>
                <li className="flex p-3 bg-gray-50 rounded-lg">
                  <div className="text-primary mr-3 mt-1 flex-shrink-0">
                    <FaCheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Uitgebreide garantiepakketten</h4>
                    <p className="text-gray-600 text-sm">Zorgeloos rijplezier met onze verschillende garantieopties</p>
                  </div>
                </li>
                <li className="flex p-3 bg-gray-50 rounded-lg">
                  <div className="text-primary mr-3 mt-1 flex-shrink-0">
                    <FaCheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Service met een glimlach</h4>
                    <p className="text-gray-600 text-sm">Persoonlijke aandacht voor iedere klant</p>
                  </div>
                </li>
                <li className="flex p-3 bg-gray-50 rounded-lg">
                  <div className="text-primary mr-3 mt-1 flex-shrink-0">
                    <FaCheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Breed netwerk in de autobranche</h4>
                    <p className="text-gray-600 text-sm">We vinden altijd de juiste auto of het juiste onderdeel voor u</p>
                  </div>
                </li>
              </ul>
              
              <div className="bg-gray-50 p-5 rounded-xl relative">
                <FaQuoteLeft className="text-gray-200 absolute top-3 left-3 h-8 w-8" />
                <div className="flex items-center mb-3 pl-6">
                  <div className="text-yellow-400 flex mr-2">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <span className="text-gray-700 font-medium">5.0 / 5.0</span>
                </div>
                <p className="text-gray-700 italic text-sm mb-2 pl-6">"Uitstekende service en een eerlijk advies gekregen. Ik ben zeer tevreden met mijn nieuwe auto!"</p>
                <p className="text-gray-500 text-sm pl-6">- Mark Jansen, tevreden klant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
