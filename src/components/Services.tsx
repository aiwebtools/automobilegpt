
import { Car, Wrench, FileText, BarChart, AlertTriangle } from "lucide-react";
import { AnimateOnScroll, HoverEffect } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Services = () => {
  const services = [
    {
      icon: <Car />,
      title: "Car Buying Assistance",
      description: "Find the best car deals in your area with detailed pricing and dealership information.",
      features: [
        "Local dealership searches",
        "Price comparisons",
        "Real URLs and addresses",
        "Feature-based recommendations"
      ],
      color: "blue"
    },
    {
      icon: <Wrench />,
      title: "Auto Parts Finder",
      description: "Locate the most affordable auto parts with direct links to purchase them online.",
      features: [
        "Real-time price searches",
        "Direct purchase links",
        "Part compatibility checks",
        "Lowest price guarantee"
      ],
      color: "teal"
    },
    {
      icon: <FileText />,
      title: "Repair Estimates",
      description: "Get detailed breakdowns of repair costs including parts, labor, and total estimates.",
      features: [
        "Parts & labor breakdown",
        "DIY vs professional comparison",
        "Step-by-step repair guides",
        "Total cost calculations"
      ],
      color: "purple"
    },
    {
      icon: <BarChart />,
      title: "Car Value Assessment",
      description: "Determine if your car is worth repairing or if it should be considered totaled.",
      features: [
        "Current market valuations",
        "Repair cost analysis",
        "Value-to-repair ratio",
        "Professional recommendations"
      ],
      color: "amber"
    },
    {
      icon: <AlertTriangle />,
      title: "Accident Assistance",
      description: "Get guidance on what to do after an accident and estimate repair costs.",
      features: [
        "Damage assessment guidance",
        "Repair cost estimates",
        "Insurance claim assistance",
        "Step-by-step instructions"
      ],
      color: "red"
    }
  ];
  
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll animation="slide-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-automotive-blue/10 px-3 py-1 rounded-full mb-3">
              <p className="text-automotive-blue text-sm font-medium">Our Services</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Expert Auto Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              From finding the perfect car to getting precise repair estimates, our AI-powered 
              services cover all your automotive needs.
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimateOnScroll 
              key={index}
              animation="fade-in"
              delay={index * 100}
            >
              <ServiceCard service={service} />
            </AnimateOnScroll>
          ))}
        </div>
        
        <AnimateOnScroll animation="fade-in" delay={500}>
          <div className="glass mt-16 p-8 md:p-10 rounded-2xl max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="inline-block bg-automotive-blue/10 px-3 py-1 rounded-full mb-3">
                  <p className="text-automotive-blue text-sm font-medium">Get Started Today</p>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to find your car solution?</h3>
                <p className="text-muted-foreground mb-6">
                  Try Automobile GPT now and experience the future of automotive assistance. Our AI will help you 
                  make smarter car decisions with accurate information and personalized recommendations.
                </p>
                <Button className="bg-automotive-blue hover:bg-automotive-blue/90 text-white rounded-full px-8 py-6">
                  Start Your Assessment
                </Button>
              </div>
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-blue-100 blur-xl opacity-30 animate-pulse" />
                  <div className="relative bg-automotive-blue/10 w-full aspect-square rounded-full flex items-center justify-center">
                    <Car className="w-20 h-20 text-automotive-blue" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }: { service: any }) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          iconBg: 'bg-blue-50',
          iconColor: 'text-automotive-blue',
          borderHover: 'hover:border-automotive-blue/30'
        };
      case 'teal':
        return {
          iconBg: 'bg-teal-50',
          iconColor: 'text-teal-600',
          borderHover: 'hover:border-teal-300'
        };
      case 'purple':
        return {
          iconBg: 'bg-purple-50',
          iconColor: 'text-purple-600',
          borderHover: 'hover:border-purple-300'
        };
      case 'amber':
        return {
          iconBg: 'bg-amber-50',
          iconColor: 'text-amber-600',
          borderHover: 'hover:border-amber-300'
        };
      case 'red':
        return {
          iconBg: 'bg-red-50',
          iconColor: 'text-red-500',
          borderHover: 'hover:border-red-300'
        };
      default:
        return {
          iconBg: 'bg-gray-50',
          iconColor: 'text-gray-600',
          borderHover: 'hover:border-gray-300'
        };
    }
  };
  
  const colorClasses = getColorClasses(service.color);
  
  return (
    <HoverEffect>
      <div className={cn(
        "bg-white border border-border rounded-xl p-6 h-full transition-all",
        colorClasses.borderHover
      )}>
        <div className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center mb-4",
          colorClasses.iconBg
        )}>
          <div className={colorClasses.iconColor}>
            {service.icon}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-muted-foreground mb-4">{service.description}</p>
        
        <ul className="space-y-2 mt-4">
          {service.features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-start">
              <svg className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </HoverEffect>
  );
};

export default Services;
