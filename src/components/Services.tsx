
import { AnimateOnScroll } from "@/components/ui/motion";
import { servicesData, AUTO_GPT_URL } from "./services/servicesData";
import { ServiceCard } from "./services/ServiceCard";
import { ServicesHeader } from "./services/ServicesHeader";
import { ServicesCTA } from "./services/ServicesCTA";

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <ServicesHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <AnimateOnScroll 
              key={index}
              animation="fade-in"
              delay={index * 100}
            >
              <ServiceCard service={service} />
            </AnimateOnScroll>
          ))}
        </div>
        
        <ServicesCTA url={AUTO_GPT_URL} />
      </div>
    </section>
  );
};

export default Services;
