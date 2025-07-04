
import { useMemo } from 'react';

interface PreviewSectionProps {
  language: 'html' | 'c';
  code: string;
}

const PreviewSection = ({ language, code }: PreviewSectionProps) => {
  const renderHTMLPreview = () => {
    if (!code.trim()) {
      return (
        <div className="flex items-center justify-center h-full text-gray-500">
          HTML কোড লিখুন প্রিভিউ দেখতে
        </div>
      );
    }

    return (
      <iframe
        srcDoc={code}
        className="w-full h-full border-0"
        title="HTML Preview"
        sandbox="allow-scripts allow-same-origin"
      />
    );
  };

  const getCAlgorithm = (code: string) => {
    const lowerCode = code.toLowerCase();
    
    // Hello World program
    if (lowerCode.includes('printf') && (lowerCode.includes('hello') || lowerCode.includes('world'))) {
      return {
        algorithm: [
          '১. প্রোগ্রাম শুরু করুন',
          '২. printf() ফাংশন দিয়ে "Hello, World!" প্রিন্ট করুন',
          '৩. প্রোগ্রাম শেষ করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-3 p-2">
            <div className="bg-green-100 rounded-full px-4 py-2 border-2 border-green-500 text-green-800 font-semibold text-xs">
              শুরু
            </div>
            <div className="text-lg text-gray-600">↓</div>
            <div className="bg-blue-100 border-2 border-blue-500 px-4 py-2 text-blue-800 font-semibold text-xs transform skew-x-6">
              "Hello, World!" প্রিন্ট করুন
            </div>
            <div className="text-lg text-gray-600">↓</div>
            <div className="bg-red-100 rounded-full px-4 py-2 border-2 border-red-500 text-red-800 font-semibold text-xs">
              শেষ
            </div>
          </div>
        ),
        output: `আউটপুট:
Hello, World!`
      };
    }

    // Rectangle area calculation
    if (lowerCode.includes('rectangle') || (lowerCode.includes('length') && lowerCode.includes('width'))) {
      return {
        algorithm: [
          '১. দৈর্ঘ্য (length) ইনপুট নিন',
          '২. প্রস্থ (width) ইনপুট নিন', 
          '৩. ক্ষেত্রফল = দৈর্ঘ্য × প্রস্থ',
          '৪. ফলাফল প্রিন্ট করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-2 p-2">
            <div className="bg-green-100 rounded-full px-3 py-2 border-2 border-green-500 text-green-800 font-semibold text-xs">
              শুরু
            </div>
            <div className="text-sm text-gray-600">↓</div>
            <div className="bg-blue-100 border-2 border-blue-500 px-3 py-2 text-blue-800 font-semibold text-xs transform skew-x-6">
              দৈর্ঘ্য ইনপুট
            </div>
            <div className="text-sm text-gray-600">↓</div>
            <div className="bg-blue-100 border-2 border-blue-500 px-3 py-2 text-blue-800 font-semibold text-xs transform skew-x-6">
              প্রস্থ ইনপুট
            </div>
            <div className="text-sm text-gray-600">↓</div>
            <div className="bg-yellow-100 border-2 border-yellow-500 px-3 py-2 text-yellow-800 font-semibold text-xs">
              ক্ষেত্রফল = দৈর্ঘ্য × প্রস্থ
            </div>
            <div className="text-sm text-gray-600">↓</div>
            <div className="bg-purple-100 border-2 border-purple-500 px-3 py-2 text-purple-800 font-semibold text-xs transform skew-x-6">
              ফলাফল প্রিন্ট
            </div>
            <div className="text-sm text-gray-600">↓</div>
            <div className="bg-red-100 rounded-full px-3 py-2 border-2 border-red-500 text-red-800 font-semibold text-xs">
              শেষ
            </div>
          </div>
        ),
        output: `আউটপুট:
দৈর্ঘ্য: 10
প্রস্থ: 5
ক্ষেত্রফল = 50.00 বর্গ একক`
      };
    }

    // Circle area calculation
    if (lowerCode.includes('circle') || lowerCode.includes('radius')) {
      return {
        algorithm: [
          '১. বৃত্তের ব্যাসার্ধ (radius) ইনপুট নিন',
          '২. π = 3.14159 নির্ধারণ করুন',
          '৩. ক্ষেত্রফল = π × r²',
          '৪. ফলাফল প্রিন্ট করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-2 p-2">
            <div className="bg-green-100 rounded-full px-3 py-2 border-2 border-green-500 text-green-800 font-semibold text-xs">
              শুরু
            </div>
            <div className="text-sm text-gray-600">↓</div>
            <div className="bg-blue-100 border-2 border-blue-500 px-3 py-2 text-blue-800 font-semibold text-xs transform skew-x-6">
              ব্যাসার্ধ ইনপুট
            </div>
            <div className="text-sm text-gray-600">↓</div>
            <div className="bg-yellow-100 border-2 border-yellow-500 px-3 py-2 text-yellow-800 font-semibold text-xs">
              ক্ষেত্রফল = π × r²
            </div>
            <div className="text-sm text-gray-600">↓</div>
            <div className="bg-purple-100 border-2 border-purple-500 px-3 py-2 text-purple-800 font-semibold text-xs transform skew-x-6">
              ফলাফল প্রিন্ট
            </div>
            <div className="text-sm text-gray-600">↓</div>
            <div className="bg-red-100 rounded-full px-3 py-2 border-2 border-red-500 text-red-800 font-semibold text-xs">
              শেষ
            </div>
          </div>
        ),
        output: `আউটপুট:
ব্যাসার্ধ: 7
ক্ষেত্রফল = 153.94 বর্গ একক`
      };
    }

    // Even/Odd check
    if (lowerCode.includes('even') || lowerCode.includes('odd') || lowerCode.includes('%')) {
      return {
        algorithm: [
          '১. একটি সংখ্যা ইনপুট নিন',
          '২. সংখ্যাটিকে ২ দিয়ে ভাগ করুন',
          '৩. ভাগশেষ ০ হলে জোড়, অন্যথায় বিজোড়',
          '৪. ফলাফল প্রিন্ট করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-2 p-1">
            <div className="bg-green-100 rounded-full px-2 py-1 border-2 border-green-500 text-green-800 font-semibold text-xs">
              শুরু
            </div>
            <div className="text-sm">↓</div>
            <div className="bg-blue-100 border-2 border-blue-500 px-2 py-1 text-blue-800 font-semibold text-xs transform skew-x-6">
              সংখ্যা ইনপুট
            </div>
            <div className="text-sm">↓</div>
            <div className="bg-orange-100 border-2 border-orange-500 text-orange-800 font-semibold text-xs w-16 h-16 flex items-center justify-center transform rotate-45">
              <div className="transform -rotate-45 text-xs">num%2==0?</div>
            </div>
            <div className="flex justify-between w-full text-xs">
              <div className="flex flex-col items-center space-y-1">
                <span className="text-gray-700 font-bold">হ্যাঁ</span>
                <div className="bg-purple-100 border-2 border-purple-500 px-2 py-1 text-purple-800 font-semibold transform skew-x-6">
                  "জোড়"
                </div>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <span className="text-gray-700 font-bold">না</span>
                <div className="bg-purple-100 border-2 border-purple-500 px-2 py-1 text-purple-800 font-semibold transform skew-x-6">
                  "বিজোড়"
                </div>
              </div>
            </div>
            <div className="text-sm">↓</div>
            <div className="bg-red-100 rounded-full px-2 py-1 border-2 border-red-500 text-red-800 font-semibold text-xs">
              শেষ
            </div>
          </div>
        ),
        output: `আউটপুট:
সংখ্যা: 24
24 একটি জোড় সংখ্যা`
      };
    }

    // Sum calculation with loop
    if (lowerCode.includes('sum') && lowerCode.includes('for')) {
      return {
        algorithm: [
          '১. n এর মান ইনপুট নিন',
          '২. sum = 0 নির্ধারণ করুন',
          '৩. i = 1 থেকে n পর্যন্ত লুপ চালান',
          '৪. প্রতিটি সংখ্যা sum এ যোগ করুন',
          '৫. সর্বমোট যোগফল প্রিন্ট করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-2 p-1">
            <div className="bg-green-100 rounded-full px-2 py-1 border-2 border-green-500 text-green-800 font-semibold text-xs">
              শুরু
            </div>
            <div className="text-sm">↓</div>
            <div className="bg-blue-100 border-2 border-blue-500 px-2 py-1 text-blue-800 font-semibold text-xs transform skew-x-6">
              n ইনপুট
            </div>
            <div className="text-sm">↓</div>
            <div className="bg-yellow-100 border-2 border-yellow-500 px-2 py-1 text-yellow-800 font-semibold text-xs">
              sum=0, i=1
            </div>
            <div className="text-sm">↓</div>
            <div className="bg-orange-100 border-2 border-orange-500 text-orange-800 font-semibold text-xs w-16 h-16 flex items-center justify-center transform rotate-45">
              <div className="transform -rotate-45 text-xs">i≤n?</div>
            </div>
            <div className="flex justify-between w-full text-xs">
              <div className="flex flex-col items-center space-y-1">
                <span className="text-gray-700">না</span>
                <div className="bg-purple-100 border-2 border-purple-500 px-2 py-1 text-purple-800 font-semibold transform skew-x-6">
                  যোগফল প্রিন্ট
                </div>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <span className="text-gray-700">হ্যাঁ</span>
                <div className="bg-yellow-100 border-2 border-yellow-500 px-2 py-1 text-yellow-800 font-semibold">
                  sum += i, i++
                </div>
              </div>
            </div>
            <div className="text-sm">↓</div>
            <div className="bg-red-100 rounded-full px-2 py-1 border-2 border-red-500 text-red-800 font-semibold text-xs">
              শেষ
            </div>
          </div>
        ),
        output: `আউটপুট:
n = 5
যোগফল = 15`
      };
    }

    // Factorial
    if (lowerCode.includes('factorial')) {
      return {
        algorithm: [
          '১. একটি সংখ্যা n ইনপুট নিন',
          '২. factorial = 1 নির্ধারণ করুন',
          '৩. i = 1 থেকে n পর্যন্ত লুপ চালান',
          '৪. factorial = factorial * i',
          '৫. ফ্যাক্টোরিয়াল প্রিন্ট করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-2 p-1">
            <div className="bg-green-100 rounded-full px-2 py-1 border-2 border-green-500 text-green-800 font-semibold text-xs">
              শুরু
            </div>
            <div className="text-sm">↓</div>
            <div className="bg-blue-100 border-2 border-blue-500 px-2 py-1 text-blue-800 font-semibold text-xs transform skew-x-6">
              n ইনপুট
            </div>
            <div className="text-sm">↓</div>
            <div className="bg-yellow-100 border-2 border-yellow-500 px-2 py-1 text-yellow-800 font-semibold text-xs">
              fact=1, i=1
            </div>
            <div className="text-sm">↓</div>
            <div className="bg-orange-100 border-2 border-orange-500 text-orange-800 font-semibold text-xs w-16 h-16 flex items-center justify-center transform rotate-45">
              <div className="transform -rotate-45 text-xs">i≤n?</div>
            </div>
            <div className="flex justify-between w-full text-xs">
              <div className="flex flex-col items-center space-y-1">
                <span className="text-gray-700">না</span>
                <div className="bg-purple-100 border-2 border-purple-500 px-2 py-1 text-purple-800 font-semibold transform skew-x-6">
                  ফলাফল প্রিন্ট
                </div>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <span className="text-gray-700">হ্যাঁ</span>
                <div className="bg-yellow-100 border-2 border-yellow-500 px-2 py-1 text-yellow-800 font-semibold">
                  fact *= i, i++
                </div>
              </div>
            </div>
            <div className="text-sm">↓</div>
            <div className="bg-red-100 rounded-full px-2 py-1 border-2 border-red-500 text-red-800 font-semibold text-xs">
              শেষ
            </div>
          </div>
        ),
        output: `আউটপুট:
সংখ্যা: 5
5! = 120`
      };
    }

    // Temperature conversion
    if (lowerCode.includes('celsius') || lowerCode.includes('fahrenheit')) {
      return {
        algorithm: [
          '১. সেলসিয়াস তাপমাত্রা ইনপুট নিন',
          '২. ফারেনহাইট = (সেলসিয়াস × 9/5) + 32',
          '৩. ফলাফল প্রিন্ট করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-2 p-2">
            <div className="bg-green-100 rounded-full px-3 py-2 border-2 border-green-500 text-green-800 font-semibold text-xs">
              শুরু
            </div>
            <div className="text-sm">↓</div>
            <div className="bg-blue-100 border-2 border-blue-500 px-3 py-2 text-blue-800 font-semibold text-xs transform skew-x-6">
              সেলসিয়াস ইনপুট
            </div>
            <div className="text-sm">↓</div>
            <div className="bg-yellow-100 border-2 border-yellow-500 px-3 py-2 text-yellow-800 font-semibold text-xs">
              F = (C × 9/5) + 32
            </div>
            <div className="text-sm">↓</div>
            <div className="bg-purple-100 border-2 border-purple-500 px-3 py-2 text-purple-800 font-semibold text-xs transform skew-x-6">
              ফলাফল প্রিন্ট
            </div>
            <div className="text-sm">↓</div>
            <div className="bg-red-100 rounded-full px-3 py-2 border-2 border-red-500 text-red-800 font-semibold text-xs">
              শেষ
            </div>
          </div>
        ),
        output: `আউটপুট:
সেলসিয়াস: 37
ফারেনহাইট: 98.60°F`
      };
    }

    // Default case
    return {
      algorithm: ['C কোড বিশ্লেষণ করা হচ্ছে...'],
      flowchart: (
        <div className="text-center text-gray-500 p-4">
          📝 C কোড লিখুন বিশ্লেষণের জন্য
        </div>
      ),
      output: '> C কোড রান করুন আউটপুট দেখতে'
    };
  };

  const renderCPreview = () => {
    if (!code.trim()) {
      return (
        <div className="flex items-center justify-center h-full text-gray-500">
          C কোড লিখুন বিশ্লেষণ দেখতে
        </div>
      );
    }

    const { algorithm, flowchart, output } = getCAlgorithm(code);

    return (
      <div className="h-full overflow-y-auto space-y-3 text-sm">
        {/* Output Section */}
        <div className="bg-gray-900 text-green-400 p-3 rounded-lg font-mono text-xs">
          <h4 className="text-white font-semibold mb-2 flex items-center text-sm">
            💻 আউটপুট:
          </h4>
          <div className="whitespace-pre-wrap text-green-300 leading-relaxed">
            {output}
          </div>
        </div>

        {/* Algorithm Section */}
        <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
          <h4 className="text-blue-900 font-semibold mb-2 flex items-center text-sm">
            🧠 অ্যালগরিদম:
          </h4>
          <ol className="space-y-1 text-blue-800">
            {algorithm.map((step, index) => (
              <li key={index} className="text-xs leading-relaxed">
                <span className="font-medium">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Flowchart Section */}
        <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-400">
          <h4 className="text-purple-900 font-semibold mb-2 flex items-center text-sm">
            📊 ফ্লোচার্ট:
          </h4>
          <div className="text-purple-800 text-xs leading-relaxed">
            {flowchart}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200/50 h-full flex flex-col">
      <div className="flex-shrink-0 p-3 border-b border-gray-200/50 bg-white/70">
        <h3 className="font-semibold text-gray-900 text-sm">
          {language === 'html' ? 'HTML প্রিভিউ' : 'C প্রোগ্রাম বিশ্লেষণ'}
        </h3>
      </div>
      <div className="flex-1 p-3 overflow-hidden">
        {language === 'html' ? renderHTMLPreview() : renderCPreview()}
      </div>
    </div>
  );
};

export default PreviewSection;
