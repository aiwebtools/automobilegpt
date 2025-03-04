
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import HeroBackground from "./hero/HeroBackground";
import HeroContent from "./hero/HeroContent";
import FeatureCardGrid from "./hero/FeatureCardGrid";

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

  const calcTransform = (factor = 15) => {
    const x = (mousePosition.x - 0.5) * factor;
    const y = (mousePosition.y - 0.5) * factor;
    return `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden pt-16 md:pt-20 pb-12 md:pb-16 px-4 md:px-0"
    >
      <HeroBackground />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-20">
        <HeroContent isLoaded={isLoaded} />
        
        <div className={cn(
          "w-full lg:w-1/2 transition-all duration-1000 delay-300 transform",
          isLoaded ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
        )}>
          <FeatureCardGrid mouseMoveTransform={calcTransform} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
