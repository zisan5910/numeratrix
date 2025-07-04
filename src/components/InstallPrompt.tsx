
import { X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface InstallPromptProps {
  onInstall: () => void;
  onDismiss: () => void;
}

const InstallPrompt = ({ onInstall, onDismiss }: InstallPromptProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 mx-4 max-w-sm w-full shadow-xl border border-gray-100">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-3">
            <img 
              src="https://i.postimg.cc/xdPHXsTR/Picsart-25-07-03-17-55-04-190.png" 
              alt="Theta Code" 
              className="w-12 h-12 rounded-xl"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-900">Theta Code</h3>
              <p className="text-sm text-gray-600">HSC Programming App</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onDismiss}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        <p className="text-gray-700 mb-6 text-center">
          আপনার হোম স্ক্রিনে Theta Code ইনস্টল করুন এবং অফলাইনে ব্যবহার করুন
        </p>
        
        <Button
          onClick={onInstall}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 rounded-xl"
        >
          <Download className="w-4 h-4 mr-2" />
          Install করুন
        </Button>
      </div>
    </div>
  );
};

export default InstallPrompt;
