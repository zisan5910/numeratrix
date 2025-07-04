
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { usePWA } from '@/hooks/usePWA';
import InstallPrompt from '@/components/InstallPrompt';
import HamburgerMenu from '@/components/HamburgerMenu';
import CodeEditor from '@/components/CodeEditor';
import CheatCodeSelector from '@/components/CheatCodeSelector';
import PreviewSection from '@/components/PreviewSection';

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'html' | 'c'>('html');
  const [htmlCode, setHtmlCode] = useState('');
  const [cCode, setCCode] = useState('');
  const { showInstallPrompt, installApp, dismissInstall } = usePWA();

  const currentCode = currentLanguage === 'html' ? htmlCode : cCode;
  const setCurrentCode = currentLanguage === 'html' ? setHtmlCode : setCCode;

  const handleCheatCodeSelect = (code: string) => {
    setCurrentCode(code);
  };

  return (
    <div className="min-h-screen bg-white/95 backdrop-blur-sm flex flex-col">
      {/* Install Prompt */}
      {showInstallPrompt && (
        <InstallPrompt onInstall={installApp} onDismiss={dismissInstall} />
      )}

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40 flex-shrink-0">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center space-x-3">
            <HamburgerMenu />
            <div className="flex items-center space-x-2">
              <img 
                src="https://i.postimg.cc/xdPHXsTR/Picsart-25-07-03-17-55-04-190.png" 
                alt="Theta Code" 
                className="w-8 h-8 rounded-lg"
              />
              <h1 className="text-gray-900 font-semibold text-lg">Theta Code</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-3 space-y-3 max-w-7xl mx-auto w-full">
        {/* Language Toggle */}
        <div className="flex space-x-2 bg-white/60 backdrop-blur-sm p-1 rounded-xl border border-gray-100">
          <Button
            onClick={() => setCurrentLanguage('html')}
            variant={currentLanguage === 'html' ? 'default' : 'ghost'}
            className={`flex-1 rounded-lg transition-all text-sm ${
              currentLanguage === 'html'
                ? 'bg-white text-blue-600 shadow-sm border border-blue-100'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
            }`}
          >
            HTML
          </Button>
          <Button
            onClick={() => setCurrentLanguage('c')}
            variant={currentLanguage === 'c' ? 'default' : 'ghost'}
            className={`flex-1 rounded-lg transition-all text-sm ${
              currentLanguage === 'c'
                ? 'bg-white text-blue-600 shadow-sm border border-blue-100'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
            }`}
          >
            C Programming
          </Button>
        </div>

        {/* Cheat Code Selector */}
        <div className="space-y-2">
          <label className="text-gray-700 text-sm font-medium block px-1">চিট কোড নির্বাচন:</label>
          <CheatCodeSelector
            language={currentLanguage}
            onSelect={handleCheatCodeSelect}
          />
        </div>

        {/* Editor and Preview Grid - Dynamic height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 min-h-[500px]">
          {/* Code Editor */}
          <div className="h-fit min-h-[500px]">
            <CodeEditor
              language={currentLanguage}
              code={currentCode}
              onChange={setCurrentCode}
            />
          </div>

          {/* Preview Section */}
          <div className="h-fit min-h-[500px]">
            <PreviewSection
              language={currentLanguage}
              code={currentCode}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-3 px-3 flex-shrink-0">
        <p className="text-gray-500 text-sm">
          এইচএসসি শিক্ষার্থীদের জন্য HTML ও C প্রোগ্রামিং শিক্ষার সহায়ক
        </p>
      </footer>
    </div>
  );
};

export default Index;
