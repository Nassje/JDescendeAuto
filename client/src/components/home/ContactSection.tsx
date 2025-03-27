import { MessageSquare, Phone, Clock, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-gray-50 to-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-montserrat">Contact</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Heeft u vragen of wilt u een afspraak maken? Neem direct contact met ons op!
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Linker kolom - Contact opties */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-500"></div>
                <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                  <span className="bg-primary text-white p-2 rounded-lg mr-3">
                    <MessageSquare className="h-5 w-5" />
                  </span>
                  Neem contact met ons op
                </h3>

                {/* Contact kaarten */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Telefoon */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 transition-all hover:shadow-md">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Bel ons</h4>
                    <p className="text-gray-600 mb-4">Voor directe service kunt u ons telefonisch bereiken.</p>
                    <a 
                      href="tel:+31383377638"
                      className="text-primary font-medium text-lg hover:underline"
                    >
                      038 337 7638
                    </a>
                  </div>
                  
                  {/* WhatsApp */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 transition-all hover:shadow-md">
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4">
                      <MessageSquare className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">WhatsApp</h4>
                    <p className="text-gray-600 mb-4">Stuur ons een bericht via WhatsApp voor een snelle reactie.</p>
                    <a 
                      href="https://wa.me/31641941976"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-medium text-lg hover:underline"
                    >
                      06 4194 1976
                    </a>
                  </div>
                </div>

                {/* Openingstijden en adres */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Openingstijden */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mb-4">
                      <Clock className="h-6 w-6 text-amber-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-3">Openingstijden</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex justify-between">
                        <span>Maandag - Vrijdag:</span>
                        <span className="font-medium">9:00 - 17:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Zaterdag:</span>
                        <span className="font-medium">9:00 - 16:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Zondag:</span>
                        <span className="font-medium">Gesloten</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Adres */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
                      <MapPin className="h-6 w-6 text-indigo-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-3">Bezoekadres</h4>
                    <address className="not-italic text-gray-600 leading-relaxed">
                      <p>JDescende Handelsonderneming</p>
                      <p>Betonstraat 17</p>
                      <p>8263 BL Kampen</p>
                    </address>
                  </div>
                </div>
                
                {/* Grote WhatsApp knop */}
                <div className="mt-8">
                  <a 
                    href="https://wa.me/31641941976"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white border-green-500 transition-all duration-200 rounded-lg shadow-md hover:shadow-lg py-4 px-6 font-medium text-lg"
                  >
                    <MessageSquare className="h-6 w-6 mr-3" />
                    Direct contact via WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            {/* Rechter kolom - Google Maps */}
            <div className="h-full">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                <div className="p-5 bg-gradient-to-r from-blue-900 to-primary text-white">
                  <h3 className="text-xl font-bold">Onze locatie</h3>
                  <p className="text-white/80 text-sm">Betonstraat 17, 8263 BL Kampen</p>
                </div>
                <div className="h-[400px] lg:h-[calc(100%-96px)]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2425.042654554471!2d5.910192776978066!3d52.558283272998225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7df2b0b144735%3A0xf967de86dd5b6555!2sBetonstraat%2017%2C%208263%20BL%20Kampen!5e0!3m2!1snl!2snl!4v1649345789012!5m2!1snl!2snl" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="JDescende Handelsonderneming locatie"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;