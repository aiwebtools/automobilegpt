
import { AnimateOnScroll } from "@/components/ui/motion";

export const ServicesHeader = () => {
  return (
    <AnimateOnScroll animation="slide-up">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block bg-automotive-blue/20 px-3 py-1 rounded-full mb-3">
          <p className="text-automotive-blue font-medium">Free AI Tools & Services</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 text-glow">
          Professional AI Solutions for Automotive Needs
        </h2>
        <p className="text-muted-foreground text-lg">
          From finding the perfect car to getting precise repair estimates, our <strong>free AI web tools</strong> 
          cover all your automotive needs. Join thousands who trust <strong>AI Web Tools</strong> for 
          intelligent automotive solutions powered by advanced artificial intelligence.
        </p>
      </div>
    </AnimateOnScroll>
  );
};
