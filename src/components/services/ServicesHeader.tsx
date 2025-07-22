
import { AnimateOnScroll } from "@/components/ui/motion";

export const ServicesHeader = () => {
  return (
    <AnimateOnScroll animation="slide-up">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block bg-automotive-blue/20 px-3 py-1 rounded-full mb-3">
          <p className="text-automotive-blue font-medium">Automobile GPT Capabilities</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 text-glow">
          Expert Automotive Guidance Powered by AI
        </h2>
        <p className="text-muted-foreground text-lg">
          From finding the perfect vehicle to getting precise repair estimates, <strong>Automobile GPT</strong> 
          covers all your automotive needs. Experience AI-powered automotive expertise that delivers 
          personalized insights for your specific vehicle questions.
        </p>
      </div>
    </AnimateOnScroll>
  );
};
