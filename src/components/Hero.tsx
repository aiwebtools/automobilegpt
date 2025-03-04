import { useState, useEffect, useRef } from "react";
import { ArrowRight, Car, Wrench, MapPin, Search, Sparkles, RotateCw, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const AUTO_GPT_URL = "https://chatgpt.com/g/g-iZOG15keP-automobile-gpt";

  const calcTransform = (factor = 15) => {
    const x = (mousePosition.x - 0.5) * factor;
    const y = (mousePosition.y - 0.5) * factor;
    return `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-4 md:px-0"
    >
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-automotive-blue/10 rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="absolute top-40 right-10 md:right-40 opacity-20 animate-float-car">
        <Car className="w-40 h-40 text-automotive-neon" />
      </div>
      <div className="absolute bottom-40 left-10 md:left-40 opacity-20 animate-float-car" style={{ animationDelay: "2s" }}>
        <Wrench className="w-32 h-32 text-automotive-purple" />
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-20">
        <div className={cn(
          "w-full lg:w-1/2 space-y-6 transition-all duration-1000 transform",
          isLoaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
        )}>
          <div className="space-y-1">
            <div className="inline-block bg-automotive-blue/20 px-3 py-1 rounded-full mb-2">
              <p className="text-automotive-blue text-sm font-medium flex items-center">
                <Sparkles className="w-4 h-4 mr-1 animate-pulse" />
                Your AI-Powered Automotive Expert
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-balance">
              <span className="text-automotive-blue neon-text">Automobile GPT</span>
            </h1>
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-foreground text-balance text-glow">
              Smarter Car Decisions
            </h2>
          </div>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl text-balance">
            Find the best car deals, auto parts, and repair estimates—all in one place,
            powered by advanced AI technology tailored to your location.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href={AUTO_GPT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-btn bg-automotive-blue hover:bg-automotive-blue/90 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all group inline-flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <Button 
              variant="outline" 
              className="rounded-full px-8 py-6 text-lg border-automotive-neon/20 text-foreground hover:bg-automotive-neon/5 neon-border animate-pulse-neon"
            >
              <RotateCw className="w-5 h-5 mr-2 animate-spin" style={{ animationDuration: '8s' }} />
              Learn More
            </Button>
          </div>
        </div>
        
        <div className={cn(
          "w-full lg:w-1/2 transition-all duration-1000 delay-300 transform",
          isLoaded ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
        )}>
          <div 
            className="glass-dark relative rounded-2xl overflow-hidden shadow-2xl card-3d"
            style={{ transform: calcTransform(5) }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-automotive-blue/20 to-transparent z-0" />
            
            <div className="relative p-6 md:p-8 z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-foreground text-xl font-semibold">Find What You Need</h3>
                <Search className="w-5 h-5 text-automotive-neon animate-pulse" />
              </div>
              
              <div className="space-y-5">
                <FeatureCard 
                  icon={<Car className="w-5 h-5 text-automotive-neon" />}
                  title="Affordable Cars"
                  description="Find the cheapest cars near your location with detailed pricing."
                  delay={150}
                />
                
                <FeatureCard 
                  icon={<ShoppingCart className="w-5 h-5 text-automotive-blue" />}
                  title="Find Car Parts"
                  description="Search for high-quality parts at the best prices across multiple vendors."
                  delay={300}
                />
                
                <FeatureCard 
                  icon={<Wrench className="w-5 h-5 text-automotive-purple" />}
                  title="DIY Repairs Guidance"
                  description="Access step-by-step guides and video tutorials for car maintenance."
                  delay={450}
                />
                
                <FeatureCard 
                  icon={<MapPin className="w-5 h-5 text-automotive-red" />}
                  title="Local Dealerships"
                  description="Discover trusted dealerships in your area with the best deals."
                  delay={600}
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
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100 + delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={cn(
        "bg-black/30 backdrop-blur-md rounded-xl p-4 shadow-sm transition-all duration-500 transform border border-white/5",
        isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        isHovered ? "scale-105 shadow-lg border-automotive-blue/30" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-3">
        <div className={cn(
          "flex-shrink-0 mt-1 transition-all duration-300",
          isHovered ? "text-automotive-neon animate-pulse" : ""
        )}>
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
