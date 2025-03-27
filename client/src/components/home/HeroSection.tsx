import { FaCar, FaArrowRight } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-primary min-h-[650px] md:min-h-[700px] flex items-center">
      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')" }}
      ></div>
      
      <div className="container relative z-20">
        <div className="max-w-3xl">
          {/* Badge - alleen zichtbaar op desktop */}
          <div className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="text-white/90 text-sm font-medium">Specialist in tweedehands auto's</span>
          </div>
          
          {/* Hero Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 font-montserrat">
            Uw betrouwbare<br /> partner in auto's
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-white/90 mb-12">
            Al uw autogerelateerde wensen onder één dak in Kampen. Meer dan 5 jaar ervaring in aan- en verkoop, onderhoud en reparatie.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="default" asChild className="rounded-md">
              <a href="#diensten" className="gap-2 flex items-center">
                <FaCar className="h-5 w-5" />
                <span>Ontdek onze diensten</span>
              </a>
            </Button>
            
            <Button size="lg" variant="secondary" asChild className="rounded-md">
              <a href="#contact" className="gap-2 flex items-center">
                <span>Neem contact op</span>
                <FaArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
          
          {/* Stats info at bottom of hero (optional) */}
          <div className="mt-16 flex">
            <div className="px-5 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 inline-flex items-center">
              <div className="mr-8 pr-8 border-r border-white/20">
                <div className="text-white/90 text-xs uppercase font-semibold tracking-wider">Ervaring</div>
                <div className="text-white text-2xl font-bold">5+ jaar</div>
              </div>
              <div>
                <div className="text-white/90 text-xs uppercase font-semibold tracking-wider">Auto's verkocht</div>
                <div className="text-white text-2xl font-bold">600+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
