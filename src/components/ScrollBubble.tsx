
import { useState, useEffect } from 'react';
import { ArrowUpRight, Car } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScrollBubbleProps {
  threshold?: number;
  url?: string;
  text?: string;
}

const ScrollBubble = ({ 
  threshold = 300, 
  url = "https://chatgpt.com/g/g-iZOG15keP-automobile-gpt",
  text = "TRY AutoMobile GPT"
}: ScrollBubbleProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className={cn(
        "fixed bottom-6 right-6 z-50 transform transition-all duration-300 ease-in-out",
        isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-16 opacity-0 scale-90"
      )}
    >
      <button
        onClick={handleClick}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-automotive-blue to-automotive-purple text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
      >
        <Car className="w-5 h-5" />
        <span>{text}</span>
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </button>
    </div>
  );
};

export default ScrollBubble;
