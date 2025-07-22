
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
            Advanced Automotive AI Assistant
          </p>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-balance">
          <span className="text-automotive-blue neon-text">Automobile GPT</span>
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-foreground text-balance text-glow">
          Your AI Car Expert
        </h2>
      </div>
      
      <p className="text-base sm:text-lg md:text-xl max-w-xl text-balance text-muted-foreground">
        Your intelligent automotive assistant for expert car buying advice, maintenance guidance, and repair estimates. 
        Powered by advanced AI to help with all your vehicle needs.
      </p>

      {/* Enhanced SEO-focused benefits */}
      <div className="space-y-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <CheckCircle className="w-4 h-4 text-automotive-blue mr-2" />
          <span><strong>Expert Car Buying Advice</strong> - Find the perfect vehicle at the right price</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <CheckCircle className="w-4 h-4 text-automotive-blue mr-2" />
          <span><strong>Maintenance Guidance</strong> - Get personalized vehicle care recommendations</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <CheckCircle className="w-4 h-4 text-automotive-blue mr-2" />
          <span><strong>Repair Cost Estimates</strong> - Accurate repair pricing based on your location</span>
        </div>
      </div>

      {/* Free Pricing Banner */}
      <div className="glass-dark rounded-xl p-4 border border-automotive-blue/30 bg-gradient-to-r from-automotive-blue/10 to-automotive-purple/10">
        <div className="flex items-center space-x-2 mb-2">
          <CheckCircle className="w-5 h-5 text-automotive-blue" />
          <span className="text-automotive-blue font-semibold">Powered by ChatGPT</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Accessible with ChatGPT membership • Custom-trained automotive expertise • Trusted by thousands
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <a 
          href={AUTO_GPT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="interactive-btn bg-automotive-blue hover:bg-automotive-blue/90 text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all group inline-flex items-center justify-center"
          aria-label="Try Automobile GPT - AI-powered automotive assistant for expert car advice"
        >
          Try Automobile GPT
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
        <a 
          href="#features"
          className="rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg border-automotive-neon/20 text-foreground hover:bg-automotive-neon/5 neon-border animate-pulse-neon inline-flex items-center justify-center"
          aria-label="Learn more about Automobile GPT features and capabilities"
        >
          <RotateCw className="w-5 h-5 mr-2 animate-spin" style={{ animationDuration: '8s' }} />
          Learn More
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
