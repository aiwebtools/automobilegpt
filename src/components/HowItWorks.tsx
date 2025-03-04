
import { useState, useEffect } from "react";
import { MessageSquare, Search, FileText, ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  // Auto-cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const steps = [
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Tell Us Your Car Needs",
      description: "Share what you're looking for - whether it's buying a car, finding parts, or getting repair estimates."
    },
    {
      icon: <Search className="h-5 w-5" />,
      title: "AI-Powered Analysis",
      description: "Our AI searches for the best deals in your area, comparing prices and options across multiple sources."
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Get Your Complete Report",
      description: "Receive a detailed breakdown with direct purchase links, cost comparisons, and recommended next steps."
    }
  ];
  
  return (
    <section id="how-it-works" className="section-padding bg-black/50">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll animation="slide-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-automotive-blue/20 px-3 py-1 rounded-full mb-3">
              <p className="text-automotive-blue font-medium">Simple Process</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 text-glow">
              How Automobile GPT Works
            </h2>
            <p className="text-muted-foreground text-lg">
              Get the information you need in three simple steps, powered by advanced AI technology.
            </p>
          </div>
        </AnimateOnScroll>
        
        {/* Step Indicators - Desktop */}
        <div className="hidden md:flex justify-between max-w-4xl mx-auto mb-12 relative">
          {/* Progress bar */}
          <div className="absolute top-5 left-0 h-0.5 bg-gray-800 w-full -z-10"></div>
          <div 
            className="absolute top-5 left-0 h-0.5 bg-automotive-blue transition-all duration-500 -z-10"
            style={{ width: `${(activeStep + 1) * 50}%` }}
          ></div>
          
          {steps.map((step, index) => (
            <button
              key={index}
              className="flex flex-col items-center space-y-2 relative"
              onClick={() => setActiveStep(index)}
            >
              <div 
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                  index <= activeStep 
                    ? "bg-automotive-blue text-white" 
                    : "bg-muted text-muted-foreground border border-border"
                )}
              >
                {index + 1}
              </div>
              <span 
                className={cn(
                  "font-medium text-sm transition-colors",
                  index <= activeStep ? "text-automotive-blue" : "text-muted-foreground"
                )}
              >
                {step.title}
              </span>
            </button>
          ))}
        </div>
        
        {/* Steps Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <AnimateOnScroll 
              key={index}
              animation="fade-in"
              delay={index * 100}
              className="relative"
            >
              <div 
                className={cn(
                  "glass p-6 rounded-xl h-full transition-all duration-500",
                  index === activeStep 
                    ? "border-automotive-blue shadow-lg shadow-automotive-blue/10 scale-105 z-10" 
                    : "border-white/5 opacity-80"
                )}
              >
                <div className="md:hidden flex items-center mb-4">
                  <div 
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center mr-3",
                      index <= activeStep 
                        ? "bg-automotive-blue text-white" 
                        : "bg-muted text-muted-foreground border border-border"
                    )}
                  >
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                </div>
                
                <div className="hidden md:block mb-6">
                  <div className="bg-automotive-blue/10 w-12 h-12 rounded-full flex items-center justify-center shadow-sm">
                    <div className={cn(
                      index <= activeStep ? "text-automotive-blue" : "text-muted-foreground"
                    )}>
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mt-4 md:hidden">{step.title}</h3>
                </div>
                
                <h3 className="font-semibold text-lg mt-4 hidden md:block">{step.title}</h3>
                <p className="text-muted-foreground mt-2">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 z-20">
                    <div className={cn(
                      "bg-muted rounded-full p-1 shadow-md transition-colors",
                      index < activeStep ? "text-automotive-blue" : "text-muted-foreground"
                    )}>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
