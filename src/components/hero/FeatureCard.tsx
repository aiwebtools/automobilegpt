
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface FeatureCardProps { 
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  delay = 0 
}: FeatureCardProps) => {
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

export default FeatureCard;
