
import { useState, useEffect } from "react";
import { Car, Menu, X, Sparkles, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // AutoGPT and Insurance GPT URLs
  const AUTO_GPT_URL = "https://chatgpt.com/g/g-iZOG15keP-automobile-gpt";
  const INSURANCE_GPT_URL = "https://insuranceclaimsgpt.lovable.app/";
  const AIWEBTOOLS_URL = "https://aiwebtools.ai";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Close mobile menu on scroll
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      
      if (mobileMenuOpen && 
          mobileMenu && 
          !mobileMenu.contains(target) && 
          mobileMenuButton && 
          !mobileMenuButton.contains(target)) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { text: "More AI Tools", href: AIWEBTOOLS_URL, external: true },
    { text: "How It Works", href: "#how-it-works" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-3",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-md border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex flex-col items-start">
          <a 
            href="#" 
            className="flex items-center space-x-2 transition-opacity hover:opacity-80"
          >
            <Car 
              className={cn(
                "h-8 w-8 transition-colors", 
                isScrolled ? "text-automotive-neon animate-pulse" : "text-automotive-blue"
              )} 
            />
            <span className={cn(
              "font-semibold text-xl tracking-tight transition-colors",
              isScrolled ? "text-foreground neon-text" : "text-foreground"
            )}>
              Automobile GPT
            </span>
          </a>
          <a 
            href={AIWEBTOOLS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-automotive-neon transition-colors ml-10 -mt-1"
          >
            Presented by AiWebTools.Ai
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                target={link.external ? "_blank" : ""}
                rel={link.external ? "noopener noreferrer" : ""}
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:text-automotive-neon relative group",
                  isScrolled ? "text-foreground" : "text-foreground"
                )}
              >
                {link.text}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-automotive-neon transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a 
              href={INSURANCE_GPT_URL}
              target="_blank"
              rel="noopener noreferrer" 
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-automotive-neon relative group flex items-center",
                isScrolled ? "text-foreground" : "text-foreground"
              )}
            >
              <Shield className="w-4 h-4 mr-1" />
              Try Insurance Claims GPT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-automotive-neon transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
          <a 
            href={AUTO_GPT_URL} 
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-btn bg-gradient-to-r from-automotive-blue to-automotive-purple text-white rounded-full px-6 py-3 font-medium shadow-[0_0_15px_rgba(0,255,187,0.5)] hover:shadow-[0_0_25px_rgba(0,255,187,0.7)] transition-all duration-300 border border-automotive-neon/30 group flex items-center justify-center"
            aria-label="Access Automobile GPT now"
            onClick={(e) => {
              // Add a ripple effect
              const button = e.currentTarget;
              const ripple = document.createElement('span');
              const rect = button.getBoundingClientRect();
              const size = Math.max(rect.width, rect.height);
              const x = e.clientX - rect.left - size / 2;
              const y = e.clientY - rect.top - size / 2;
              
              ripple.style.width = ripple.style.height = `${size}px`;
              ripple.style.left = `${x}px`;
              ripple.style.top = `${y}px`;
              ripple.classList.add('ripple');
              
              button.appendChild(ripple);
              setTimeout(() => ripple.remove(), 600);
            }}
          >
            <Sparkles className="w-5 h-5 mr-2 opacity-80 animate-pulse" />
            <span className="tracking-wide">ACCESS AUTOMOBILE GPT</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          id="mobile-menu-button"
          className="md:hidden focus:outline-none w-10 h-10 rounded-lg glass-dark hover:glass flex items-center justify-center transition-all duration-300 active:scale-95"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5 text-foreground" />
          ) : (
            <Menu className="h-5 w-5 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
  <div 
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-[65px] z-50 bg-background/95 backdrop-blur-lg shadow-lg md:hidden transition-all duration-300 ease-in-out border-b border-white/5",
          mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-4 p-6 max-h-[80vh] overflow-y-auto">
          <a 
            href={AIWEBTOOLS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-automotive-neon transition-colors text-center pb-2 border-b border-white/10"
          >
            Presented by AiWebTools.Ai
          </a>
          {navLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              target={link.external ? "_blank" : ""}
              rel={link.external ? "noopener noreferrer" : ""}
              className="glass-dark hover:glass p-3 rounded-lg text-foreground hover:text-automotive-neon text-center font-medium transition-all duration-300 active:scale-95"
              onClick={() => {
                setMobileMenuOpen(false);
                if (!link.external) {
                  document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {link.text}
            </a>
          ))}
          <a
            href={INSURANCE_GPT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-dark hover:glass p-3 rounded-lg text-foreground hover:text-automotive-neon text-center font-medium transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Shield className="w-5 h-5" />
            Try Insurance Claims GPT
          </a>
          <a
            href={AUTO_GPT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-automotive-blue to-automotive-purple text-white rounded-lg transition-all duration-300 p-4 text-center font-medium active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,255,187,0.5)] hover:shadow-[0_0_25px_rgba(0,255,187,0.7)] border border-automotive-neon/30 relative overflow-hidden"
            onClick={(e) => {
              // Add a touch ripple effect
              const button = e.currentTarget;
              const ripple = document.createElement('span');
              const rect = button.getBoundingClientRect();
              
              // For mobile, center the ripple
              const size = Math.max(rect.width, rect.height) * 1.5;
              ripple.style.width = ripple.style.height = `${size}px`;
              ripple.style.left = `calc(50% - ${size/2}px)`;
              ripple.style.top = `calc(50% - ${size/2}px)`;
              ripple.classList.add('ripple');
              
              button.appendChild(ripple);
              setTimeout(() => ripple.remove(), 600);
            }}
          >
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="tracking-wide">ACCESS AUTOMOBILE GPT</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
