
import { useState, useEffect } from "react";
import { Car, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { text: "Features", href: "#features" },
    { text: "How It Works", href: "#how-it-works" },
    { text: "Services", href: "#services" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4",
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center space-x-2 transition-opacity hover:opacity-80"
        >
          <Car 
            className={cn(
              "h-8 w-8 transition-colors", 
              isScrolled ? "text-automotive-blue" : "text-automotive-blue"
            )} 
          />
          <span className={cn(
            "font-semibold text-xl tracking-tight transition-colors",
            isScrolled ? "text-foreground" : "text-foreground"
          )}>
            Automobile GPT
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-automotive-blue",
                  isScrolled ? "text-foreground" : "text-foreground"
                )}
              >
                {link.text}
              </a>
            ))}
          </div>
          <Button 
            className="bg-automotive-blue hover:bg-automotive-blue/90 text-white rounded-full px-6"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-x-0 top-[65px] bg-white/95 backdrop-blur-lg shadow-lg md:hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-4 p-6">
          {navLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              className="text-foreground hover:text-automotive-blue py-2 text-center font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.text}
            </a>
          ))}
          <Button 
            className="mt-2 bg-automotive-blue hover:bg-automotive-blue/90 text-white rounded-full"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
