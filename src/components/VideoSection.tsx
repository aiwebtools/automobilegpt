import { useState, useEffect } from "react";
import { AnimateOnScroll } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

const VideoSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoId = "2P3-fOXiyAo";
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <section className="section-padding bg-black/80">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll animation="slide-up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block bg-automotive-blue/20 px-3 py-1 rounded-full mb-3">
              <p className="text-automotive-blue text-sm font-medium">Your Automobile Assistant For Life For Free</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 text-glow">
              The Automobile GPT Anthem
            </h2>
          </div>
        </AnimateOnScroll>
        
        <div 
          className={cn(
            "relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 glass-dark",
            isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
          )}
        >
          <div className="aspect-video relative">
            <iframe 
              src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1&mute=0&hd=1&vq=hd1080`}
              title="Automobile GPT Demo"
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="bg-black/80 p-4 border-t border-white/5">
            <div className="flex justify-between items-center">
              <a 
                href="https://aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground hover:text-automotive-blue transition-colors"
              >
                Powered by AiWebTools.Ai
              </a>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-muted-foreground">4:32</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
