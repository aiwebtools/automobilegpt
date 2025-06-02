
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md animate-in">
      <div className="relative w-full max-w-lg p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-2xl border-2 border-green-400/50 mx-4 overflow-hidden animate-scale-in">
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 opacity-75 blur-sm -z-10"></div>
        <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        
        {/* Animated background elements */}
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="absolute top-4 right-4 z-10">
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-green-500/20 border border-green-400/30 rounded-full flex-shrink-0 shadow-lg">
              <Info className="w-7 h-7 text-green-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent">
                  Important Notice
                </span>
              </h3>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed font-medium">
                Welcome to <span className="font-bold text-green-400">Automobile GPT</span>. By using this service, you acknowledge and agree to our Terms of Service and Privacy Policy. All information provided is for general guidance only.
              </p>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed font-medium">
                We are not responsible for decisions made based on recommendations from this tool. Always consult with automotive professionals for critical decisions.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button 
              onClick={handleAccept}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold tracking-wide px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 border border-green-400/50"
            >
              I AGREE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
