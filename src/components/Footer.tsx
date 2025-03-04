
import { Car, Facebook, Twitter, Instagram, Linkedin, Youtube, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

// AutoGPT and Insurance GPT URLs
const AUTO_GPT_URL = "https://chatgpt.com/g/g-iZOG15keP-automobile-gpt";
const INSURANCE_GPT_URL = "https://chatgpt.com/g/g-ols85Scif-insurance-claims-gpt";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/95 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="flex items-center space-x-2 mb-5">
              <Car className="h-7 w-7 text-automotive-blue" />
              <span className="font-semibold text-xl tracking-tight text-foreground">Automobile GPT</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Your AI-powered automotive expert for finding car deals, parts, and repair estimates tailored to your location.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Facebook className="h-5 w-5" />} href="#" label="Facebook" />
              <SocialLink icon={<Twitter className="h-5 w-5" />} href="#" label="Twitter" />
              <SocialLink icon={<Instagram className="h-5 w-5" />} href="#" label="Instagram" />
              <SocialLink icon={<Linkedin className="h-5 w-5" />} href="#" label="LinkedIn" />
              <SocialLink icon={<Youtube className="h-5 w-5" />} href="#" label="YouTube" />
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-5 text-foreground">Services</h3>
            <ul className="space-y-3">
              <FooterLink text="Car Buying Assistance" href={AUTO_GPT_URL} external={true} />
              <FooterLink text="Auto Parts Finder" href={AUTO_GPT_URL} external={true} />
              <FooterLink text="Repair Estimates" href={AUTO_GPT_URL} external={true} />
              <FooterLink text="Car Value Assessment" href={AUTO_GPT_URL} external={true} />
              <FooterLink text="Insurance Claims" href={INSURANCE_GPT_URL} external={true} icon={<Shield className="h-4 w-4 mr-1 inline" />} />
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-5 text-foreground">Company</h3>
            <ul className="space-y-3">
              <FooterLink text="About Us" href="#" />
              <FooterLink text="How It Works" href="#how-it-works" />
              <FooterLink text="Testimonials" href="#" />
              <FooterLink text="Blog" href="#" />
              <FooterLink text="Careers" href="#" />
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-5 text-foreground">Support</h3>
            <ul className="space-y-3">
              <FooterLink text="Contact Us" href="#contact" />
              <FooterLink text="FAQ" href="#how-it-works" />
              <FooterLink text="Privacy Policy" href="https://openai.com/policies/privacy-policy/" external={true} />
              <FooterLink text="Terms of Service" href="https://aiwebtools.ai/terms-of-services" external={true} />
              <FooterLink text="Customer Support" href="#" />
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} AI Web Tools LLC. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a 
              href="https://openai.com/policies/privacy-policy/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-automotive-blue transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="https://aiwebtools.ai/terms-of-services" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-automotive-blue transition-colors"
            >
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-automotive-blue transition-colors">
              Sitemap
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
      className="text-muted-foreground hover:text-automotive-blue transition-colors flex items-center"
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
    aria-label={label}
    className="bg-black/40 border border-white/5 p-2 rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all text-muted-foreground hover:text-automotive-blue"
  >
    {icon}
  </a>
);

export default Footer;
