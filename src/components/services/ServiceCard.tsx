
import { cn } from "@/lib/utils";
import { HoverEffect } from "@/components/ui/motion";
import { ReactNode } from "react";

export interface ServiceFeature {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  color: "blue" | "teal" | "purple" | "amber" | "red";
  url: string;
}

export const ServiceCard = ({ service }: { service: ServiceFeature }) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          iconBg: 'bg-blue-900/50',
          iconColor: 'text-blue-400',
          borderHover: 'hover:border-blue-500/30',
          glowColor: 'shadow-blue-500/20'
        };
      case 'teal':
        return {
          iconBg: 'bg-teal-900/50',
          iconColor: 'text-teal-400',
          borderHover: 'hover:border-teal-500/30',
          glowColor: 'shadow-teal-500/20'
        };
      case 'purple':
        return {
          iconBg: 'bg-purple-900/50',
          iconColor: 'text-purple-400',
          borderHover: 'hover:border-purple-500/30',
          glowColor: 'shadow-purple-500/20'
        };
      case 'amber':
        return {
          iconBg: 'bg-amber-900/50',
          iconColor: 'text-amber-400',
          borderHover: 'hover:border-amber-500/30',
          glowColor: 'shadow-amber-500/20'
        };
      case 'red':
        return {
          iconBg: 'bg-red-900/50',
          iconColor: 'text-red-400',
          borderHover: 'hover:border-red-500/30',
          glowColor: 'shadow-red-500/20'
        };
      default:
        return {
          iconBg: 'bg-gray-900/50',
          iconColor: 'text-gray-400',
          borderHover: 'hover:border-gray-500/30',
          glowColor: 'shadow-gray-500/20'
        };
    }
  };
  
  const colorClasses = getColorClasses(service.color);
  
  return (
    <HoverEffect>
      <div 
        className={cn(
          "glass border-white/5 rounded-xl p-6 h-full transition-all card-3d cursor-pointer",
          colorClasses.borderHover,
          colorClasses.glowColor
        )}
        onClick={() => window.open(service.url, "_blank")}
      >
        <div className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center mb-4",
          colorClasses.iconBg
        )}>
          <div className={colorClasses.iconColor}>
            {service.icon}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
        <p className="text-muted-foreground mb-4">{service.description}</p>
        
        <ul className="space-y-2 mt-4">
          {service.features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-start">
              <svg className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </HoverEffect>
  );
};
