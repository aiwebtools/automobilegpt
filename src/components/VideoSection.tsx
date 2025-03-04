
import { useState, useEffect } from "react";
import { Play, Pause, Youtube } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoId = "2P3-fOXiyAo";
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll animation="slide-up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block bg-automotive-blue/10 px-3 py-1 rounded-full mb-3">
              <p className="text-automotive-blue text-sm font-medium">Watch How It Works</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              See Automobile GPT in Action
            </h2>
            <p className="text-muted-foreground text-lg">
              Watch a brief demonstration of how our AI-powered system helps you find the best car deals and auto solutions.
            </p>
          </div>
        </AnimateOnScroll>
        
        <div 
          className={cn(
            "relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl transition-all duration-1000",
            isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
          )}
        >
          <div className="aspect-video relative group">
            {isPlaying ? (
              <iframe 
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Automobile GPT Demo"
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            ) : (
              <>
                {/* Video Placeholder with thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-900/50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Youtube className="h-12 w-12 mx-auto mb-4 text-red-500" />
                    <h3 className="text-2xl font-bold mb-2">Automobile GPT Demo</h3>
                    <p className="text-gray-300 mb-6 max-w-md mx-auto">
                      See how to use our AI to find the best car deals, parts, and repair estimates
                    </p>
                    
                    <button 
                      className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-full font-medium inline-flex items-center transition-all"
                      onClick={() => setIsPlaying(true)}
                    >
                      <Play className="h-5 w-5 mr-2" />
                      Watch Demo
                    </button>
                  </div>
                </div>
                
                {/* Video thumbnail */}
                <div className="absolute inset-0 bg-gray-800">
                  <img 
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
                    alt="Video thumbnail" 
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="absolute bottom-8 left-8">
                    <div className="flex items-center space-x-3 text-white">
                      <div className="bg-red-600 p-1 rounded">
                        <Youtube className="h-5 w-5" />
                      </div>
                      <span className="font-medium">AutomobileGPT Official</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button 
                      className="bg-red-600 hover:bg-red-700 w-16 h-16 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                      onClick={() => setIsPlaying(true)}
                    >
                      <Play className="h-6 w-6 text-white ml-1" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
          
          <div className="bg-white p-4 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">How to Use Automobile GPT</h4>
                <p className="text-sm text-muted-foreground">Published: June 10, 2023</p>
              </div>
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
