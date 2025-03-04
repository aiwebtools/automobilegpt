
import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, RotateCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroContentProps {
  isLoaded: boolean;
}

const HeroContent = ({ isLoaded }: HeroContentProps) => {
  const AUTO_GPT_URL = "https://chatgpt.com/g/g-iZOG15keP-automobile-gpt";
  
  return (
    <div className={cn(
      "w-full lg:w-1/2 space-y-4 md:space-y-6 px-4 sm:px-6 lg:px-0",
      isLoaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
    )}>
      <div className="space-y-1 md:space-y-2">
        <div className="inline-block bg-automotive-blue/20 px-3 py-1 rounded-full mb-2 md:mb-3">
          <p className="text-automotive-blue text-sm font-medium flex items-center">
            <Sparkles className="w-4 h-4 mr-1 animate-pulse" />
            Your AI-Powered Automotive Expert
          </p>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-balance">
          <span className="text-automotive-blue neon-text">Automobile GPT</span>
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-foreground text-balance text-glow">
          Smarter Car Decisions
        </h2>
      </div>
      
      <p className="text-base sm:text-lg md:text-xl max-w-xl text-balance text-muted-foreground">
        Find the best car deals, auto parts, and repair estimates—all in one place,
        powered by advanced AI technology tailored to your location.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <a 
          href={AUTO_GPT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="interactive-btn bg-automotive-blue hover:bg-automotive-blue/90 text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all group inline-flex items-center justify-center"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
        <a 
          href="#features"
          className="rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg border-automotive-neon/20 text-foreground hover:bg-automotive-neon/5 neon-border animate-pulse-neon inline-flex items-center justify-center"
        >
          <RotateCw className="w-5 h-5 mr-2 animate-spin" style={{ animationDuration: '8s' }} />
          Learn More
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
