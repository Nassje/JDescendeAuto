import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Award, Clock, Shield, BadgePercent, Car } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ConsignmentOption {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
}

const consignmentOptions: ConsignmentOption[] = [
  {
    id: 'basis',
    title: '8% Commissie Pakket',
    description: 'Ideaal voor eigenaren die hun auto willen verkopen zonder zorgen.',
    features: [
      'Professionele fotoshoot',
      'Advertentie op Marktplaats',
      'Volledige verkoopondersteuning',
      'Veilige betalingsafhandeling',
      'Overdracht RDW documenten',
      '8% commissie over de verkoopprijs'
    ],
    icon: <Car className="h-6 w-6" />,
  },
  {
    id: 'premium',
    title: '12% Commissie Pakket',
    description: 'Extra ondersteuning om je auto sneller te verkopen voor de beste prijs.',
    features: [
      'Alles van 8% Commissie Pakket',
      'Auto volledig reinigen (interieur/exterieur)',
      'Technische controle op 20+ punten',
      'APK-keuring indien nodig',
      'Vermelding op meerdere verkoopplatformen',
      'Prioriteit bij bezichtigingen',
      '12% commissie over de verkoopprijs'
    ],
    icon: <Award className="h-6 w-6" />,
    popular: true
  }
];

const ConsignmentCard = ({ option }: { option: ConsignmentOption }) => {
  return (
    <div className={`
      relative flex flex-col h-full p-6 bg-white rounded-xl shadow-md overflow-hidden
      ${option.popular ? 'border-2 border-primary' : 'border border-gray-200'}
    `}>
      {option.popular && (
        <div className="absolute top-0 right-0">
          <Badge className="m-2 bg-primary hover:bg-primary/90">Populair</Badge>
        </div>
      )}
      
      <div className={`
        w-12 h-12 rounded-full flex items-center justify-center mb-6
        ${option.popular ? 'bg-primary text-white' : 'bg-gray-100 text-primary'}
      `}>
        {option.icon}
      </div>
      
      <h3 className="text-xl font-bold font-montserrat mb-2">{option.title}</h3>
      <p className="text-gray-600 mb-6">{option.description}</p>
      
      <div className="mt-auto">
        <ul className="space-y-3 mb-8">
          {option.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-3 mt-0.5 text-primary">
                <Check className="h-5 w-5" />
              </div>
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button className="w-full" variant={option.popular ? "default" : "outline"}>
          Meer informatie
        </Button>
      </div>
    </div>
  );
};

const ConsignmentSection = () => {
  return (
    <section id="consignatie" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat tracking-tight mb-4">
            Verkoop uw auto in consignatie
          </h2>
          <p className="text-lg text-gray-600">
            Wij nemen het verkoopproces van begin tot eind voor u uit handen, met flexibele pakketten die passen bij uw wensen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {consignmentOptions.map((option) => (
            <ConsignmentCard key={option.id} option={option} />
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6 p-4 bg-primary/10 rounded-full">
              <Clock className="h-12 w-12 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Snel en zonder zorgen verkopen</h3>
              <p className="text-gray-600 mb-4">
                Door uw auto in consignatie te geven bij JDescende Auto, profiteert u van onze expertise en ons netwerk.
                U hoeft geen tijd te investeren in advertenties, bezichtigingen of onderhandelingen.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button>
                  Neem contact op
                </Button>
                <Button variant="outline">
                  Download brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsignmentSection;