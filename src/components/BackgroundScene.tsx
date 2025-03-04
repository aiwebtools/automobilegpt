
import { useEffect, useRef } from "react";
import { Car, Cog, Wrench, Bike, Sparkles, Fuel, Heart, Star } from "lucide-react";

const BackgroundScene = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sceneRef.current) return;
    
    // Create floating objects randomly positioned
    const createFloatingObjects = () => {
      const scene = sceneRef.current;
      if (!scene) return;
      
      // Clear existing objects
      scene.innerHTML = '';
      
      // Define objects to float
      const objectTypes = [
        { component: Car, size: 'w-24 h-24', color: 'text-automotive-blue' },
        { component: Cog, size: 'w-16 h-16', color: 'text-automotive-silver' },
        { component: Wrench, size: 'w-20 h-20', color: 'text-automotive-silver' },
        { component: Bike, size: 'w-16 h-16', color: 'text-automotive-neon' },
        { component: Sparkles, size: 'w-10 h-10', color: 'text-automotive-purple' },
        { component: Fuel, size: 'w-12 h-12', color: 'text-automotive-red' },
        { component: Heart, size: 'w-8 h-8', color: 'text-automotive-red' },
        { component: Star, size: 'w-6 h-6', color: 'text-amber-400' },
      ];
      
      // Create and position objects
      const objectCount = Math.max(5, Math.floor(window.innerWidth / 200));
      
      for (let i = 0; i < objectCount; i++) {
        const objectType = objectTypes[Math.floor(Math.random() * objectTypes.length)];
        const ObjectComponent = objectType.component;
        
        // Create wrapper div
        const wrapper = document.createElement('div');
        wrapper.className = `floating-object ${objectType.size} ${objectType.color}`;
        
        // Position randomly
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;
        const zIndex = Math.floor(Math.random() * 10) - 20;
        const rotateAmount = Math.random() * 360;
        const animationDelay = Math.random() * 10;
        
        wrapper.style.left = `${xPos}vw`;
        wrapper.style.top = `${yPos}vh`;
        wrapper.style.zIndex = `${zIndex}`;
        wrapper.style.transform = `rotate(${rotateAmount}deg)`;
        wrapper.style.animationDelay = `${animationDelay}s`;
        wrapper.style.animationDuration = `${10 + Math.random() * 20}s`;
        
        // Add animation class
        wrapper.classList.add('animate-float-car');
        
        // Render the icon
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("fill", "none");
        svg.setAttribute("stroke", "currentColor");
        svg.setAttribute("stroke-width", "2");
        svg.setAttribute("stroke-linecap", "round");
        svg.setAttribute("stroke-linejoin", "round");
        
        // Use a basic path for each icon type (simplification)
        if (ObjectComponent === Car) {
          const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
          path.setAttribute("d", "M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2m10 5h2v-5m-6 5h2v-5M6 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm12 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z");
          svg.appendChild(path);
        } else {
          // Create a default rect as placeholder
          const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          rect.setAttribute("x", "2");
          rect.setAttribute("y", "2");
          rect.setAttribute("width", "20");
          rect.setAttribute("height", "20");
          rect.setAttribute("rx", "5");
          svg.appendChild(rect);
        }
        
        wrapper.appendChild(svg);
        scene.appendChild(wrapper);
      }
    };
    
    createFloatingObjects();
    
    // Recreate on resize
    const handleResize = () => {
      createFloatingObjects();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <div ref={sceneRef} className="scene-bg" />;
};

export default BackgroundScene;
