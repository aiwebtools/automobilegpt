
import { useState, useEffect } from 'react';
import { Info, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen and accepted the disclaimer
    const hasAccepted = localStorage.getItem('disclaimerAccepted');
    
    if (!hasAccepted) {
      // Only show popup if user hasn't accepted yet
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    // Save to localStorage to prevent showing again
    localStorage.setItem('disclaimerAccepted', 'true');
    setIsOpen(false);
    
    // Show a toast notification
    toast({
      title: "Welcome!",
      description: "Thank you for accepting our terms.",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in">
      <div className="relative w-full max-w-md p-6 bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg shadow-lg border border-white/10 mx-4 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-automotive-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-automotive-purple/20 rounded-full blur-3xl"></div>
        
        <div className="absolute top-4 right-4">
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex items-start gap-3 mb-4 relative z-10">
          <div className="p-2 bg-automotive-blue/10 rounded-full flex-shrink-0">
            <Info className="w-6 h-6 text-automotive-blue" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight bg-gradient-to-r from-automotive-blue via-white to-automotive-purple bg-clip-text text-transparent">
              Important Notice
            </h3>
            <p className="text-sm text-gray-300 mb-3 leading-relaxed font-medium">
              Welcome to <span className="font-bold text-automotive-blue">Automobile GPT</span>. By using this service, you acknowledge and agree to our Terms of Service and Privacy Policy. All information provided is for general guidance only.
            </p>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed font-medium">
              We are not responsible for decisions made based on recommendations from this tool. Always consult with automotive professionals for critical decisions.
            </p>
          </div>
        </div>
        
        <div className="flex justify-end relative z-10">
          <Button 
            onClick={handleAccept}
            className="bg-gradient-to-r from-automotive-blue to-automotive-purple hover:opacity-90 font-bold tracking-wide px-6 py-2"
          >
            I AGREE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
