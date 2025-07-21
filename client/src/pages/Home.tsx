import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import CarsSection from "@/components/home/CarsSection";
import PartsSection from "@/components/home/PartsSection";
import RepairSection from "@/components/home/RepairSection";
import ConsignmentSection from "@/components/home/ConsignmentSection";
import WarrantySection from "@/components/home/WarrantySection";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import FAQSection from "@/components/home/FAQSection";

const Home = () => {
  // Implement smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId as string);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="bg-gray-50 text-neutral-900 min-h-screen flex flex-col">
      <Header />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <PartsSection />
        <RepairSection />
        <ConsignmentSection />
        <WarrantySection />
        <AboutSection />
        <FAQSection />    
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
