
import { useState, useEffect } from 'react';
import { Copy, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface CodeEditorProps {
  language: 'html' | 'c';
  code: string;
  onChange: (code: string) => void;
}

const CodeEditor = ({ language, code, onChange }: CodeEditorProps) => {
  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast({
        title: "কপি সফল!",
        description: "কোড ক্লিপবোর্ডে কপি হয়েছে",
      });
    } catch (err) {
      toast({
        title: "কপি ব্যর্থ!",
        description: "কোড কপি করতে সমস্যা হয়েছে",
        variant: "destructive",
      });
    }
  };

  const clearCode = () => {
    onChange('');
    toast({
      title: "কোড মুছে ফেলা হয়েছে",
      description: "এডিটর খালি করা হয়েছে",
    });
  };

  return (
    <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200/50 flex flex-col min-h-[500px] h-auto">
      <div className="flex-shrink-0 flex items-center justify-between p-3 border-b border-gray-200/50 bg-white/70">
        <h3 className="font-semibold text-gray-900 text-sm">
          {language === 'html' ? 'HTML' : 'C'} কোড এডিটর
        </h3>
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={copyCode}
            disabled={!code}
            className="text-blue-600 hover:bg-blue-50/70 h-8 px-2 text-xs"
          >
            <Copy className="w-3 h-3 mr-1" />
            Copy
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={clearCode}
            disabled={!code}
            className="text-red-600 hover:bg-red-50/70 h-8 px-2 text-xs"
          >
            <Trash2 className="w-3 h-3 mr-1" />
            Clear
          </Button>
        </div>
      </div>
      <div className="flex-1 relative">
        <textarea
          value={code}
          onChange={(e) => onChange(e.target.value)}
          placeholder={
            language === 'html'
              ? 'এখানে HTML কোড লিখুন...'
              : 'এখানে C কোড লিখুন...'
          }
          className="w-full h-full min-h-[450px] p-3 font-mono text-sm bg-transparent border-0 outline-none resize-y text-gray-800 placeholder-gray-400 leading-relaxed"
          style={{ 
            fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
            fontSize: '13px',
            lineHeight: '1.5',
            tabSize: 4
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
