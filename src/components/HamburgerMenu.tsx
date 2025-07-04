
import { useState } from 'react';
import { Menu, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="text-gray-700 hover:bg-gray-100/70">
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 bg-white/95 backdrop-blur-md border-r border-gray-100">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center space-x-3 py-6 border-b border-gray-100">
            <img 
              src="https://i.postimg.cc/xdPHXsTR/Picsart-25-07-03-17-55-04-190.png" 
              alt="Theta Code" 
              className="w-12 h-12 rounded-xl"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-900">Theta Code</h2>
              <p className="text-sm text-gray-600">HSC Programming App</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 py-6 flex items-center justify-center">
            <Button
              variant="ghost"
              size="lg"
              className="text-blue-600 hover:bg-blue-50/70 p-8"
              onClick={() => window.open('https://ridoan-zisan.netlify.app', '_blank')}
            >
              <Code className="w-12 h-12" />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HamburgerMenu;
