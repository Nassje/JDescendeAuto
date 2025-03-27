interface Car {
  title: string;
  subtitle: string;
  price: string;
  image: string;
  features: string[];
}

const carsData: Car[] = [
  {
    title: "Volkswagen Golf 1.4 TSI",
    subtitle: "2018 | 78.450 km | Benzine",
    price: "€12.495",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["Airco", "Navigatie", "Cruise Control"]
  },
  {
    title: "Toyota Yaris 1.5 Hybrid",
    subtitle: "2017 | 65.230 km | Hybride",
    price: "€8.950",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["Achteruitrijcamera", "Bluetooth", "USB"]
  },
  {
    title: "BMW 3 Serie 320i Executive",
    subtitle: "2019 | 92.340 km | Benzine",
    price: "€19.750",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["Lederen bekleding", "Xenon verlichting", "Parkeersensoren"]
  },
  {
    title: "Ford Focus 1.0 EcoBoost",
    subtitle: "2018 | 85.120 km | Benzine",
    price: "€11.495",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["Airco", "Parkeersensoren", "Isofix"]
  }
];

const CarCard = ({ car }: { car: Car }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full">
      <div className="aspect-w-16 aspect-h-9 relative">
        <img src={car.image} alt={car.title} className="w-full h-52 object-cover" />
        <div className="absolute top-2 right-2 bg-red-600 text-white text-sm font-medium py-1 px-2 rounded">
          {car.price}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-neutral-900 mb-1">{car.title}</h3>
          <p className="text-neutral-500 text-sm mb-2">{car.subtitle}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {car.features.map((feature, index) => (
              <span key={index} className="bg-neutral-100 text-neutral-600 text-xs py-1 px-2 rounded-full">
                {feature}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-between space-x-2">
          <a
            href="https://www.marktplaats.nl/u/j-descende-handelsonderneming/43749699/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-dark text-white text-sm font-medium py-2 px-3 rounded flex-1 flex items-center justify-center transition-colors"
          >
            <span>Bekijk op Marktplaats</span>
          </a>
          <a
            href="#contact"
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-900 text-sm font-medium py-2 px-3 rounded flex-1 flex items-center justify-center transition-colors"
          >
            <span>Info aanvragen</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const CarsSection = () => {
  return (
    <section id="autos" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-montserrat">Uitgelichte Auto's</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Ontdek een selectie uit ons aanbod kwaliteitsvolle tweedehands auto's.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {carsData.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="https://www.marktplaats.nl/u/j-descende-handelsonderneming/43749699/" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-md flex items-center justify-center transition-colors duration-200 shadow-md"
          >
            <span className="mr-2">🚗</span> Bekijk alle auto's op Marktplaats
          </a>
          <a 
            href="https://www.yasparts.nl"
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md flex items-center justify-center transition-colors duration-200 shadow-md"
          >
            <span className="mr-2">🔧</span> Onderdelen op YasParts
          </a>
        </div>
      </div>
    </section>
  );
};

export default CarsSection;
