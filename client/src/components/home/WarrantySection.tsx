import { FaCheck, FaTimes, FaShieldAlt, FaCarSide, FaTools, FaAward } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface WarrantyPackage {
  title: string;
  price: string;
  icon: React.ReactNode;
  features: string[];
  disclaimer?: string;
  recommended?: boolean;
}

const warrantyPackages: WarrantyPackage[] = [
  {
    title: "Basic",
    price: "€150",
    icon: <FaCarSide className="h-10 w-10" />,
    features: [
      "Auto wordt gereinigd",
      "Technische controle voor perfecte conditie",
      "Nieuwe APK indien nodig",
      "Tenaamstelling van de auto verzorgen wij"
    ]
  },
  {
    title: "Trust",
    price: "€300",
    icon: <FaShieldAlt className="h-10 w-10 text-primary" />,
    recommended: true,
    features: [
      "Alles van het Basic pakket",
      "3 maanden garantie op motor en versnellingsbak",
      "Uitgebreide technische controle",
      "Zorgeloos rijden met extra zekerheid"
    ],
    disclaimer: "Garantie is uitsluitend tot 4000 gereden km's vanaf aanschafdatum. Olieverbruik en elektrische onderdelen vallen hier niet onder!"
  },
  {
    title: "Exclusive",
    price: "€600",
    icon: <FaAward className="h-10 w-10" />,
    features: [
      "Alles van het Trust pakket",
      "6 maanden garantie op motor en versnellingsbak",
      "Professionele reiniging van uw auto",
      "Airco wordt bijgevuld indien nodig"
    ],
    disclaimer: "Garantie is uitsluitend tot 5000 gereden km's vanaf aanschafdatum. Olieverbruik en elektrische onderdelen vallen hier niet onder! Te hoge CO2 uitstoot van dieselauto's valt hier uitdrukkelijk ook niet onder. Uitsluitend voor personenwagens, geen sportauto's of auto's met een aanschafwaarde onder de €4.500."
  }
];

const WarrantyPackageCard = ({ pkg }: { pkg: WarrantyPackage }) => {
  return (
    <div className={`relative h-full overflow-hidden rounded-xl ${
      pkg.recommended 
        ? 'bg-white shadow-xl border-2 border-primary' 
        : 'bg-white/5 backdrop-blur-sm border border-white/20'
    }`}>
      {pkg.recommended && (
        <div className="absolute -top-px right-0 z-10">
          <Badge variant="default" className="rounded-tl-none rounded-tr-none rounded-br-none py-1 px-3">
            Aanbevolen
          </Badge>
        </div>
      )}
      
      <div className="p-6">
        <div className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center ${
          pkg.recommended 
            ? 'bg-primary text-white' 
            : 'bg-white/10 text-white/90'
        }`}>
          {pkg.icon}
        </div>
        
        <h3 className={`text-2xl font-bold mb-3 font-montserrat ${pkg.recommended ? 'text-primary' : 'text-white'}`}>{pkg.title}</h3>
        <div className={`text-3xl font-bold mb-6 ${pkg.recommended ? 'text-primary' : 'text-white'}`}>{pkg.price}</div>
        
        <ul className="space-y-3 mb-8">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className={`mr-3 mt-1.5 flex-shrink-0 ${pkg.recommended ? 'text-primary' : 'text-green-400'}`}>
                <FaCheck className="h-4 w-4" />
              </div>
              <span className={`text-sm ${pkg.recommended ? 'text-gray-800' : 'text-white'}`}>{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-auto">
          <Button 
            className="w-full rounded-lg" 
            variant={pkg.recommended ? "default" : "secondary"}
            asChild
          >
            <a href="#contact">
              Informeer nu
            </a>
          </Button>
        </div>
        
        {pkg.disclaimer && (
          <p className={`mt-4 text-xs leading-tight ${pkg.recommended ? 'text-gray-500' : 'text-white/80'}`}>
            {pkg.disclaimer}
          </p>
        )}
      </div>
    </div>
  );
};

const WarrantySection = () => {
  return (
    <section id="garantie" className="py-20 bg-primary text-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">Garantiepakketten</h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Kies het garantiepakket dat bij u past voor extra zekerheid en zorgeloos rijplezier.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {warrantyPackages.map((pkg, index) => (
            <WarrantyPackageCard key={index} pkg={pkg} />
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <FaTools className="h-6 w-6 mr-3" />
              <h3 className="text-xl font-semibold">Professionele garantie service</h3>
            </div>
            <p className="text-white/80 mb-6">
              Bij JDescende Auto staan we voor kwaliteit. Onze garantiepakketten zijn ontworpen om u de beste bescherming te bieden die past bij uw budget en wensen.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <a href="#contact">Vraag nu advies</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarrantySection;
