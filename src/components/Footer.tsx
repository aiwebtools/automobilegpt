
import { Car, Heart, Instagram, Youtube, Shield, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// AutoGPT and Insurance GPT URLs
const AUTO_GPT_URL = "https://chatgpt.com/g/g-iZOG15keP-automobile-gpt";
const INSURANCE_GPT_URL = "https://insuranceclaimsgpt.lovable.app/";
const AIWEBTOOLS_URL = "https://www.aiwebtools.ai";

// Create a custom TikTok icon component
const TikTokIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    strokeWidth="1.5"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 9.5v-5h-5M19 4.5l-8.5 8.5" />
    <path d="M13.5 7.5v7a4 4 0 1 1-4-4" />
    <path d="M16 12.5a5 5 0 1 1-5-5" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/95 pt-12 pb-8 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced SEO Disclaimer Notice */}
        <div className="bg-automotive-blue/10 border border-automotive-blue/20 rounded-lg p-4 mb-8">
          <p className="text-sm text-muted-foreground text-center">
            <span className="font-medium text-automotive-blue">Important Disclaimer:</span> AI Web Tools and our AI-powered solutions including Automobile GPT are provided for informational, educational, and research purposes only. 
            Always consult with qualified automotive professionals for specific car decisions and verify all AI-generated information independently. Our free AI tools are designed to assist but not replace professional automotive expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Enhanced Company column with SEO keywords */}
          <div>
            <a href={AIWEBTOOLS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 mb-5 hover:opacity-90 transition-opacity">
              <Car className="h-7 w-7 text-automotive-blue" />
              <span className="font-semibold text-xl tracking-tight text-foreground">AI Web Tools</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-xs text-sm">
              Leading provider of <strong>free AI tools</strong> including Automobile GPT - your AI-powered automotive expert for finding car deals, auto parts, and repair estimates tailored to your location. Trusted by automotive professionals worldwide.
            </p>
            <div className="flex space-x-3 mb-6">
              <SocialLink 
                icon={<Instagram className="h-5 w-5" />} 
                href="https://www.instagram.com/aiwebtools.ai" 
                label="AI Web Tools Instagram - Follow for free AI tools updates" 
              />
              <SocialLink 
                icon={<Youtube className="h-5 w-5" />} 
                href="https://www.youtube.com/@AIToolsUniversity" 
                label="AI Tools University YouTube - Learn about AI web tools" 
              />
              <SocialLink 
                icon={<TikTokIcon />} 
                href="https://www.tiktok.com/@aiwebtools/" 
                label="AI Web Tools TikTok - Quick AI tools tips and demos" 
              />
            </div>
            <a 
              href={AIWEBTOOLS_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center space-x-2 bg-automotive-blue/90 hover:bg-automotive-blue text-white font-semibold py-2.5 px-4 rounded-md transition-colors"
              aria-label="Explore more free AI tools at AI Web Tools"
            >
              <span>More Free AI Tools</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          
          {/* Enhanced Services column */}
          <div>
            <h3 className="font-medium text-lg mb-4 text-foreground">Free AI Tools & Services</h3>
            <ul className="space-y-3.5">
              <li>
                <a 
                  href={AUTO_GPT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-automotive-blue/90 hover:bg-automotive-blue text-white font-semibold py-2.5 px-4 rounded-md transition-colors"
                  aria-label="Try Automobile GPT - Free AI tool for automotive solutions"
                >
                  <Car className="h-4 w-4" />
                  <span>Automobile GPT (Free)</span>
                </a>
              </li>
              <FooterLink text="Insurance Claims AI GPT" href={INSURANCE_GPT_URL} external={true} icon={<Shield className="h-4 w-4 mr-1.5 inline" />} />
              <li className="text-sm text-muted-foreground">
                <strong>Keywords:</strong> AI tools, free AI tools, automotive AI, car deals AI, auto repair estimates, artificial intelligence solutions
              </li>
            </ul>
          </div>
          
          {/* Enhanced Company column with SEO focus */}
          <div>
            <h3 className="font-medium text-lg mb-4 text-foreground">About AI Web Tools</h3>
            <ul className="space-y-3.5">
              <FooterLink text="About Our AI Tools Platform" href={AIWEBTOOLS_URL} external={true} />
              <FooterLink text="Contact AI Web Tools Team" href="#contact" />
              <li className="mt-6 text-sm text-muted-foreground flex items-center">
                <span>Proudly made with</span>
                <Heart className="h-4 w-4 mx-1 text-automotive-red fill-automotive-red" />
                <span>by</span>
                <a 
                  href={AIWEBTOOLS_URL}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="ml-1 text-automotive-blue hover:underline"
                  aria-label="Visit AI Web Tools - Free AI Tools Platform"
                >
                  AI Web Tools Team
                </a>
              </li>
              <li className="text-xs text-muted-foreground">
                🏆 #1 Free AI Tools Platform for Automotive Solutions
              </li>
            </ul>
          </div>
        </div>
        
        {/* Enhanced Footer bottom with SEO keywords */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-muted-foreground mb-4 md:mb-0">
            © {currentYear} AI Web Tools LLC. All rights reserved. Leading provider of free AI tools and automotive AI solutions.
          </p>
          <div className="flex space-x-5">
            <a 
              href="https://openai.com/policies/privacy-policy/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-automotive-blue transition-colors font-medium"
              aria-label="Privacy Policy for AI Web Tools users"
            >
              Privacy Policy
            </a>
            <a 
              href="https://aiwebtools.lovable.app/disclaimers" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-automotive-blue transition-colors font-medium"
              aria-label="Terms of Service and Disclaimers for AI Web Tools"
            >
              Terms & Disclaimers
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ 
  text, 
  href, 
  external = false,
  icon
}: { 
  text: string; 
  href: string; 
  external?: boolean;
  icon?: React.ReactNode;
}) => (
  <li>
    <a 
      href={href} 
      className="text-muted-foreground hover:text-automotive-blue transition-colors flex items-center text-sm font-semibold"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {icon && icon}
      {text}
    </a>
  </li>
);

const SocialLink = ({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="bg-black/40 border border-white/5 p-2 rounded-full hover:bg-black/60 hover:border-white/10 transition-all text-muted-foreground hover:text-automotive-blue"
  >
    {icon}
  </a>
);

export default Footer;
