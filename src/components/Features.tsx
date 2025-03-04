
import { MouseEvent, useRef, useState } from "react";
import { CheckCircle2, Search, ShoppingCart, FileText, Youtube, Car } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

const Features = () => {
  return (
    <section id="features" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll animation="slide-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-automotive-blue/20 px-3 py-1 rounded-full mb-3">
              <p className="text-automotive-blue font-medium">Why Choose Automobile GPT</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 text-glow">
              Powerful Features for Every Car Need
            </h2>
            <p className="text-muted-foreground text-lg">
              We combine advanced AI technology with real-time market data to provide the most accurate and helpful automotive information.
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <FeatureCard
            icon={<Search className="h-6 w-6 text-white" />}
            title="Multi-Source Web Search"
            description="Automatic real-time search across multiple platforms to find the most accurate prices for cars and parts."
            iconBg="bg-automotive-blue"
            delay={100}
          />
          
          <FeatureCard
            icon={<ShoppingCart className="h-6 w-6 text-white" />}
            title="Direct Purchase Links"
            description="Get actual URLs to purchase the parts and cars you need, saving you time and money."
            iconBg="bg-automotive-blue"
            delay={200}
          />
          
          <FeatureCard
            icon={<FileText className="h-6 w-6 text-white" />}
            title="Professional Reports"
            description="Generate industry-standard reports for insurance claims, repairs, or car valuations."
            iconBg="bg-automotive-blue"
            delay={300}
          />
          
          <FeatureCard
            icon={<Youtube className="h-6 w-6 text-white" />}
            title="DIY Repair Videos"
            description="Access embedded YouTube tutorials to guide you through DIY car repairs and maintenance."
            iconBg="bg-automotive-blue"
            delay={400}
          />
          
          <FeatureCard
            icon={<CheckCircle2 className="h-6 w-6 text-white" />}
            title="Accurate Cost Calculations"
            description="Precise breakdown of parts, labor, and total repair costs with professional estimation."
            iconBg="bg-automotive-blue"
            delay={500}
          />
          
          <PremiumFeatureCard delay={600} />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  iconBg,
  delay = 0
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  iconBg: string;
  delay?: number;
}) => {
  return (
    <AnimateOnScroll animation="fade-in" delay={delay}>
      <div className="glass p-6 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300 h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] card-3d">
        <div className="flex flex-col h-full">
          <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-4", iconBg)}>
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground flex-grow">{description}</p>
        </div>
      </div>
    </AnimateOnScroll>
  );
};

const PremiumFeatureCard = ({ delay = 0 }: { delay?: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const middleX = rect.width / 2;
    const middleY = rect.height / 2;
    
    const offsetX = ((x - middleX) / middleX) * 5;
    const offsetY = ((y - middleY) / middleY) * 5;
    
    setRotateX(-offsetY);
    setRotateY(offsetX);
  };
  
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };
  
  return (
    <AnimateOnScroll animation="fade-in" delay={delay}>
      <div 
        ref={cardRef}
        className="relative bg-gradient-to-br from-automotive-purple to-automotive-blue p-6 rounded-xl shadow-lg h-full text-white overflow-hidden neon-border"
        style={{ 
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.2s ease-out'
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none" />
        
        <div className="flex flex-col h-full relative z-10">
          <div className="flex justify-between items-center mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Car className="h-6 w-6 text-white" />
            </div>
            <div className="bg-black/30 backdrop-blur-sm px-3 py-0.5 rounded-full border border-white/20">
              <span className="text-sm font-medium">Premium</span>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-2">Complete Car Assessment</h3>
          <p className="text-white/80 flex-grow">
            Get comprehensive analysis of whether your car is worth repairing or if it's considered totaled.
          </p>
          
          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2 text-white" />
              <span className="text-sm">Parts & labor breakdown</span>
            </div>
            <div className="flex items-center mt-1">
              <CheckCircle2 className="h-4 w-4 mr-2 text-white" />
              <span className="text-sm">Market value comparison</span>
            </div>
            <div className="flex items-center mt-1">
              <CheckCircle2 className="h-4 w-4 mr-2 text-white" />
              <span className="text-sm">Detailed report included</span>
            </div>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
};

export default Features;
