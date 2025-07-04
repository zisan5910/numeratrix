
import { useState } from 'react';
import { Menu, X, Code, Lightbulb, Cpu } from 'lucide-react';
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
          <div className="flex-1 py-6">
            <Button
              variant="ghost"
              className="w-full justify-start mb-4 text-blue-600 hover:bg-blue-50/70"
              onClick={() => window.open('https://ridoan-zisan.netlify.app', '_blank')}
            >
              <Code className="w-5 h-5 mr-3" />
              Developer Portfolio
            </Button>

            {/* Features */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
                  HTML Features
                </h3>
                <ul className="space-y-2 ml-7 text-sm text-gray-700">
                  <li>• রিয়েল টাইম আউটপুট</li>
                  <li>• চিট কোড ব্যবহারে দ্রুত কোড লেখা</li>
                  <li>• এইচএসসি পরীক্ষার উপযোগী HTML কনটেন্ট</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Cpu className="w-5 h-5 mr-2 text-green-500" />
                  C Programming Features
                </h3>
                <ul className="space-y-2 ml-7 text-sm text-gray-700">
                  <li>• রিয়েল টাইম আউটপুট</li>
                  <li>• অ্যালগরিদম ব্যাখ্যা</li>
                  <li>• ফ্লোচার্ট ভিজুয়ালাইজেশন</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 pt-4">
            <p className="text-sm text-center text-gray-600 leading-relaxed">
              এইচএসসি সিলেবাসের অন্তর্ভুক্ত প্রায় সকল HTML ও C প্রোগ্রাম
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HamburgerMenu;
