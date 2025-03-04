
import { useState, useEffect } from "react";
import { ArrowRight, Car, Wrench, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-4 md:px-0">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-40 right-10 md:right-40 opacity-10 animate-float">
        <Car className="w-40 h-40 text-automotive-blue" />
      </div>
      <div className="absolute bottom-40 left-10 md:left-40 opacity-10 animate-float" style={{ animationDelay: "2s" }}>
        <Wrench className="w-32 h-32 text-automotive-blue" />
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-20">
        {/* Hero Text Content */}
        <div className={cn(
          "w-full lg:w-1/2 space-y-6 transition-all duration-1000 transform",
          isLoaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
        )}>
          <div className="space-y-1">
            <div className="inline-block bg-automotive-blue/10 px-3 py-1 rounded-full mb-2">
              <p className="text-automotive-blue text-sm font-medium">Your AI-Powered Automotive Expert</p>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-balance">
              <span className="text-automotive-blue">Automobile GPT</span>
            </h1>
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-foreground text-balance">
              Smarter Car Decisions
            </h2>
          </div>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl text-balance">
            Find the best car deals, auto parts, and repair estimates—all in one place,
            powered by advanced AI technology tailored to your location.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              className="bg-automotive-blue hover:bg-automotive-blue/90 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full px-8 py-6 text-lg border-automotive-blue/20 text-foreground hover:bg-automotive-blue/5"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Hero Image/Visual */}
        <div className={cn(
          "w-full lg:w-1/2 transition-all duration-1000 delay-300 transform",
          isLoaded ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
        )}>
          <div className="glass relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-automotive-blue/10 to-transparent z-0" />
            
            <div className="relative p-6 md:p-8 z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-foreground text-xl font-semibold">Find What You Need</h3>
                <Search className="w-5 h-5 text-automotive-blue" />
              </div>
              
              <div className="space-y-5">
                <FeatureCard 
                  icon={<Car className="w-5 h-5 text-automotive-blue" />}
                  title="Affordable Cars"
                  description="Find the cheapest cars near your location with detailed pricing."
                  delay={150}
                />
                
                <FeatureCard 
                  icon={<Wrench className="w-5 h-5 text-automotive-blue" />}
                  title="Auto Parts"
                  description="Get direct links to the most affordable car parts online."
                  delay={300}
                />
                
                <FeatureCard 
                  icon={<MapPin className="w-5 h-5 text-automotive-blue" />}
                  title="Local Dealerships"
                  description="Discover trusted dealerships in your area with the best deals."
                  delay={450}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  delay = 0 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100 + delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={cn(
        "bg-white rounded-xl p-4 shadow-sm transition-all duration-500 transform",
        isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      )}
    >
      <div className="flex gap-3">
        <div className="flex-shrink-0 mt-1">
          {icon}
        </div>
        <div>
          <h4 className="font-medium text-foreground">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
