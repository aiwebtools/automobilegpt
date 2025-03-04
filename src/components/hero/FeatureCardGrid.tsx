import { Car, ShoppingCart, Wrench, MapPin } from "lucide-react";
import FeatureCard from "./FeatureCard";
interface FeatureCardGridProps {
  mouseMoveTransform: (factor?: number) => string;
}
const FeatureCardGrid = ({
  mouseMoveTransform
}: FeatureCardGridProps) => {
  return <div className="glass-dark relative rounded-2xl overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-tr from-automotive-blue/20 to-transparent z-0" />
      
      <div className="relative p-6 md:p-8 z-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-foreground text-xl font-semibold">Find What You Need When You Need It, 24/7 7 Days a week</h3>
          <div className="w-5 h-5 text-automotive-neon animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
        
        <div className="space-y-5">
          <FeatureCard icon={<Car className="w-5 h-5 text-automotive-neon" />} title="Affordable Cars" description="Find the cheapest cars near your location with detailed pricing." delay={150} />
          
          <FeatureCard icon={<ShoppingCart className="w-5 h-5 text-automotive-blue" />} title="Find Car Parts" description="Search for high-quality parts at the best prices across multiple vendors." delay={300} />
          
          <FeatureCard icon={<Wrench className="w-5 h-5 text-automotive-purple" />} title="DIY Repairs Guidance" description="Access step-by-step guides and video tutorials for car maintenance." delay={450} />
          
          <FeatureCard icon={<MapPin className="w-5 h-5 text-automotive-red" />} title="Local Dealerships" description="Discover trusted dealerships in your area with the best deals." delay={600} />
        </div>
      </div>
    </div>;
};
export default FeatureCardGrid;