import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FaCar, FaExchangeAlt, FaTools, FaRecycle, FaCogs, FaShieldAlt, FaArrowRight } from 'react-icons/fa';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const serviceData: ServiceCardProps[] = [
  {
    title: "Aan- en verkoop tweedehands auto's",
    description: "Ruim aanbod kwaliteitsvolle tweedehands auto's voor iedere portemonnee, met zorgvuldige inspectie en eerlijke prijzen.",
    icon: <FaCar className="h-10 w-10" />,
    link: "#contact"
  },
  {
    title: "Inruil gebruikte voertuigen",
    description: "Eenvoudig uw huidige auto inruilen? Wij zorgen voor een eerlijke waardering en een soepel inruilproces.",
    icon: <FaExchangeAlt className="h-10 w-10" />,
    link: "#contact"
  },
  {
    title: "Reparatie en onderhoud",
    description: "Professioneel onderhoud en snelle reparaties door ervaren monteurs met passie voor iedere auto.",
    icon: <FaTools className="h-10 w-10" />,
    link: "#contact"
  },
  {
    title: "Demontage afdeling",
    description: "Vakkundige demontage van auto's die niet meer rijklaar zijn, met hergebruik van onderdelen en milieuvriendelijke verwerking.",
    icon: <FaRecycle className="h-10 w-10" />,
    link: "#contact"
  },
  {
    title: "Verkoop tweedehands auto-onderdelen",
    description: "Uitgebreid assortiment kwaliteits-onderdelen voor diverse merken en modellen tegen scherpe prijzen.",
    icon: <FaCogs className="h-10 w-10" />,
    link: "#onderdelen"
  },
  {
    title: "Garantiepakketten",
    description: "Drie uitgebreide garantiepakketten van €250 tot €600 voor extra gemoedsrust bij uw aankoop.",
    icon: <FaShieldAlt className="h-10 w-10" />,
    link: "#garantie"
  }
];

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <Card className="h-full overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white rounded-xl">
      <CardHeader className="pb-2">
        <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold font-montserrat">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" asChild className="pl-0 text-primary hover:text-primary-dark hover:bg-transparent font-medium">
          <a href={link} className="flex items-center gap-2">
            <span>Meer informatie</span>
            <FaArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const ServicesSection = () => {
  return (
    <section id="diensten" className="py-20 bg-gray-50">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat tracking-tight">Onze Diensten</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Een compleet aanbod van autodiensten van een team met passie voor alles wat met auto's te maken heeft.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" asChild className="rounded-full px-8">
            <a href="#contact">Neem contact op voor meer informatie</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
