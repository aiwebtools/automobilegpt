
import React from "react";
import { Car, Wrench } from "lucide-react";

const HeroBackground = () => {
  return (
    <>
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
    </>
  );
};

export default HeroBackground;
