
import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, RotateCw, CheckCircle } from "lucide-react";
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
            #1 Free AI Tools Platform
          </p>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-balance">
          <span className="text-automotive-blue neon-text">AI Web Tools</span>
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-foreground text-balance text-glow">
          Free AI Tools for Everyone
        </h2>
      </div>
      
      <p className="text-base sm:text-lg md:text-xl max-w-xl text-balance text-muted-foreground">
        Discover powerful free AI tools including <strong>Automobile GPT</strong> for car deals, auto parts, and repair estimates. 
        Advanced artificial intelligence solutions designed for professionals and everyday users.
      </p>

      {/* Enhanced SEO-focused benefits */}
      <div className="space-y-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <CheckCircle className="w-4 h-4 text-automotive-blue mr-2" />
          <span><strong>100% Free AI Tools</strong> - No hidden costs or subscriptions</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <CheckCircle className="w-4 h-4 text-automotive-blue mr-2" />
          <span><strong>Instant AI Results</strong> - Get automotive insights in seconds</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <CheckCircle className="w-4 h-4 text-automotive-blue mr-2" />
          <span><strong>Professional Grade</strong> - Industry-standard AI solutions</span>
        </div>
      </div>

      {/* Free Pricing Banner */}
      <div className="glass-dark rounded-xl p-4 border border-automotive-blue/30 bg-gradient-to-r from-automotive-blue/10 to-automotive-purple/10">
        <div className="flex items-center space-x-2 mb-2">
          <CheckCircle className="w-5 h-5 text-automotive-blue" />
          <span className="text-automotive-blue font-semibold">100% FREE AI Tools Platform</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Free with ChatGPT membership • Leading AI web tools provider • Trusted by thousands
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <a 
          href={AUTO_GPT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="interactive-btn bg-automotive-blue hover:bg-automotive-blue/90 text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all group inline-flex items-center justify-center"
          aria-label="Try Automobile GPT - Free AI tool for car deals and auto repair estimates"
        >
          Try Free AI Tools
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
        <a 
          href="#features"
          className="rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg border-automotive-neon/20 text-foreground hover:bg-automotive-neon/5 neon-border animate-pulse-neon inline-flex items-center justify-center"
          aria-label="Learn more about AI Web Tools features and capabilities"
        >
          <RotateCw className="w-5 h-5 mr-2 animate-spin" style={{ animationDuration: '8s' }} />
          Explore AI Tools
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
