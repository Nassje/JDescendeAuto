import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

// DEZE VRAGEN ZIJN EXACT HETZELFDE ALS IN JE SCHEMA!
const faqData: FAQItem[] = [
  {
    question: "Is Autobedrijf Descende een erkende autosloperij in Kampen?",
    answer: "Ja, Autobedrijf Descende is een van de weinige erkende autosloperijen in Kampen. Wij zijn gespecialiseerd in milieuvriendelijke autodemontage en zijn volledig gecertificeerd."
  },
  {
    question: "Doen jullie ook autoreparatie en APK keuringen?",
    answer: "Jazeker! Wij hebben een complete werkplaats voor alle autoreparaties, onderhoud en APK keuringen. Onze monteurs hebben ervaring met alle automerken. Bel 038-3377638 voor een afspraak."
  },
  {
    question: "Kopen jullie ook schadeauto's in?",
    answer: "Jazeker! Wij kopen alle soorten auto's in, ook schadeauto's. Neem contact op voor een vrijblijvende taxatie via 038-3377638."
  },
  {
    question: "Waar vind ik Autobedrijf Descende in Kampen?",
    answer: "U vindt ons aan de Betonstraat 17, 8263 BL in Kampen. Wij zijn makkelijk bereikbaar en hebben ruime parkeergelegenheid."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-montserrat">
            Veelgestelde Vragen
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Heeft u vragen? Hier vindt u antwoorden op de meest gestelde vragen over onze diensten.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-primary/10 p-3 rounded-full">
                <FaQuestionCircle className="h-8 w-8 text-primary" />
              </div>
            </div>

            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
                  itemScope 
                  itemProp="mainEntity" 
                  itemType="https://schema.org/Question"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-150"
                    onClick={() => toggleQuestion(index)}
                    aria-expanded={openIndex === index}
                  >
                    <h3 className="font-semibold text-gray-800 pr-4" itemProp="name">
                      {item.question}
                    </h3>
                    <div className="text-primary flex-shrink-0 ml-2">
                      {openIndex === index ? (
                        <FaChevronUp className="h-5 w-5" />
                      ) : (
                        <FaChevronDown className="h-5 w-5" />
                      )}
                    </div>
                  </button>
                  
                  {openIndex === index && (
                    <div 
                      className="px-6 pb-4 pt-0"
                      itemScope 
                      itemProp="acceptedAnswer" 
                      itemType="https://schema.org/Answer"
                    >
                      <p className="text-gray-600 leading-relaxed" itemProp="text">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Heeft u een andere vraag? Neem gerust contact met ons op!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:0383377638" 
                  className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-md flex items-center justify-center transition-colors duration-200"
                >
                  <span className="mr-2">📞</span> Bel ons: 038 337 7638
                </a>
                <a 
                  href="#contact" 
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 px-6 rounded-md flex items-center justify-center transition-colors duration-200"
                >
                  <span className="mr-2">✉️</span> Stuur een bericht
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;