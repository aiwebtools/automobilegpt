
import { AnimateOnScroll } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";

interface ServicesCTAProps {
  url: string;
}

export const ServicesCTA = ({ url }: ServicesCTAProps) => {
  return (
    <AnimateOnScroll animation="fade-in" delay={500}>
      <div className="glass-dark mt-16 p-8 md:p-10 rounded-2xl max-w-5xl mx-auto neon-border">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <div className="inline-block bg-automotive-blue/20 px-3 py-1 rounded-full mb-3">
              <p className="text-automotive-blue font-medium">Get Started Today</p>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-glow">Ready to find your car solution?</h3>
            <p className="text-muted-foreground mb-6">
              Try Automobile GPT now and experience the future of automotive assistance. Our AI will help you 
              make smarter car decisions with accurate information and personalized recommendations.
            </p>
            <Button 
              className="bg-automotive-blue hover:bg-automotive-blue/90 text-white rounded-full px-8 py-6 interactive-btn"
              onClick={() => window.open(url, "_blank")}
            >
              Start Your Assessment
            </Button>
          </div>
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-automotive-blue/20 blur-xl opacity-40 animate-pulse" />
              <div className="relative bg-automotive-blue/20 w-full aspect-square rounded-full flex items-center justify-center">
                <Car className="w-20 h-20 text-automotive-blue" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
};
