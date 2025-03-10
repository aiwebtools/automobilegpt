
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
      <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 mx-4">
        <div className="absolute top-4 right-4">
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex items-start gap-3 mb-4">
          <Info className="w-6 h-6 text-automotive-blue mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Important Notice
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Welcome to Automobile GPT. By using this service, you acknowledge and agree to our Terms of Service and Privacy Policy. All information provided is for general guidance only.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              We are not responsible for decisions made based on recommendations from this tool. Always consult with automotive professionals for critical decisions.
            </p>
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button 
            onClick={handleAccept}
            className="bg-gradient-to-r from-automotive-blue to-automotive-purple hover:opacity-90"
          >
            I AGREE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
