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
        sandbox="allow-scripts"
      />
    );
  };

  const getCAlgorithm = (code: string) => {
    // Area calculations
    if (code.includes('rectangle') || (code.includes('length') && code.includes('width'))) {
      return {
        algorithm: [
          '১. দৈর্ঘ্য (length) ইনপুট নিন',
          '২. প্রস্থ (width) ইনপুট নিন', 
          '৩. ক্ষেত্রফল = দৈর্ঘ্য × প্রস্থ',
          '৪. ফলাফল প্রিন্ট করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-4 text-sm">
            {/* শুরু - Terminal (oval) */}
            <div className="bg-green-100 rounded-full px-8 py-4 border-2 border-green-600 text-green-800 font-bold shadow-md">
              শুরু
            </div>
            {/* প্রবাহের দিক */}
            <div className="text-3xl text-gray-700">↓</div>
            
            {/* ইনপুট - Parallelogram */}
            <div className="bg-blue-100 border-2 border-blue-600 px-8 py-4 text-blue-800 font-semibold shadow-md transform skew-x-12" 
                 style={{ clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' }}>
              দৈর্ঘ্য ইনপুট নিন
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            
            {/* ইনপুট - Parallelogram */}
            <div className="bg-blue-100 border-2 border-blue-600 px-8 py-4 text-blue-800 font-semibold shadow-md transform skew-x-12"
                 style={{ clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' }}>
              প্রস্থ ইনপুট নিন
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            
            {/* প্রক্রিয়াকরণ - Rectangle */}
            <div className="bg-yellow-100 border-2 border-yellow-600 px-8 py-4 text-yellow-800 font-semibold shadow-md">
              ক্ষেত্রফল = দৈর্ঘ্য × প্রস্থ
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            
            {/* আউটপুট - Parallelogram */}
            <div className="bg-purple-100 border-2 border-purple-600 px-8 py-4 text-purple-800 font-semibold shadow-md transform skew-x-12"
                 style={{ clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' }}>
              ফলাফল প্রিন্ট করুন
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            
            {/* শেষ - Terminal (oval) */}
            <div className="bg-red-100 rounded-full px-8 py-4 border-2 border-red-600 text-red-800 font-bold shadow-md">
              শেষ
            </div>
          </div>
        ),
        output: `প্রোগ্রাম চালনা:
আয়তক্ষেত্রের দৈর্ঘ্য লিখুন: 10
আয়তক্ষেত্রের প্রস্থ লিখুন: 5
আয়তক্ষেত্রের ক্ষেত্রফল = 50.00 বর্গ একক`
      };
    }
    
    if (code.includes('circle') || code.includes('radius')) {
      return {
        algorithm: [
          '১. বৃত্তের ব্যাসার্ধ (radius) ইনপুট নিন',
          '২. π = 3.14159 নির্ধারণ করুন',
          '৩. ক্ষেত্রফল = π × r²',
          '৪. ফলাফল প্রিন্ট করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-4 text-sm">
            <div className="bg-green-100 rounded-full px-8 py-4 border-2 border-green-600 text-green-800 font-bold shadow-md">
              শুরু
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            <div className="bg-blue-100 border-2 border-blue-600 px-8 py-4 text-blue-800 font-semibold shadow-md transform skew-x-12"
                 style={{ clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' }}>
              ব্যাসার্ধ ইনপুট নিন
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            <div className="bg-yellow-100 border-2 border-yellow-600 px-8 py-4 text-yellow-800 font-semibold shadow-md">
              ক্ষেত্রফল = π × r²
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            <div className="bg-purple-100 border-2 border-purple-600 px-8 py-4 text-purple-800 font-semibold shadow-md transform skew-x-12"
                 style={{ clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' }}>
              ফলাফল প্রিন্ট করুন
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            <div className="bg-red-100 rounded-full px-8 py-4 border-2 border-red-600 text-red-800 font-bold shadow-md">
              শেষ
            </div>
          </div>
        ),
        output: `প্রোগ্রাম চালনা:
বৃত্তের ব্যাসার্ধ লিখুন: 7
বৃত্তের ক্ষেত্রফল = 153.94 বর্গ একক`
      };
    }

    // Even/Odd check
    if (code.includes('even') || code.includes('odd') || code.includes('%')) {
      return {
        algorithm: [
          '১. একটি সংখ্যা ইনপুট নিন',
          '২. সংখ্যাটিকে ২ দিয়ে ভাগ করুন',
          '৩. ভাগশেষ ০ হলে জোড়, অন্যথায় বিজোড়',
          '৪. ফলাফল প্রিন্ট করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-4 text-sm">
            <div className="bg-green-100 rounded-full px-8 py-4 border-2 border-green-600 text-green-800 font-bold shadow-md">
              শুরু
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            <div className="bg-blue-100 border-2 border-blue-600 px-8 py-4 text-blue-800 font-semibold shadow-md transform skew-x-12"
                 style={{ clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' }}>
              সংখ্যা ইনপুট নিন
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            
            {/* সিদ্ধান্ত - Diamond */}
            <div className="bg-orange-100 border-2 border-orange-600 text-orange-800 font-semibold shadow-md w-32 h-32 flex items-center justify-center transform rotate-45">
              <div className="transform -rotate-45 text-center text-xs">
                num % 2<br/>== 0?
              </div>
            </div>
            
            <div className="flex justify-between items-start w-80">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-gray-700 font-bold">হ্যাঁ</span>
                <div className="text-2xl text-gray-700">↓</div>
                <div className="bg-purple-100 border-2 border-purple-600 px-6 py-3 text-purple-800 font-semibold shadow-md transform skew-x-12"
                     style={{ clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' }}>
                  "জোড়" প্রিন্ট
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <span className="text-gray-700 font-bold">না</span>
                <div className="text-2xl text-gray-700">↓</div>
                <div className="bg-purple-100 border-2 border-purple-600 px-6 py-3 text-purple-800 font-semibold shadow-md transform skew-x-12"
                     style={{ clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' }}>
                  "বিজোড়" প্রিন্ট
                </div>
              </div>
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            <div className="bg-red-100 rounded-full px-8 py-4 border-2 border-red-600 text-red-800 font-bold shadow-md">
              শেষ
            </div>
          </div>
        ),
        output: `প্রোগ্রাম চালনা:
একটি সংখ্যা লিখুন: 24
24 একটি জোড় সংখ্যা

একটি সংখ্যা লিখুন: 17  
17 একটি বিজোড় সংখ্যা`
      };
    }

    // Sum calculation with loop
    if (code.includes('sum') && code.includes('for')) {
      return {
        algorithm: [
          '১. n এর মান ইনপুট নিন',
          '২. sum = 0 নির্ধারণ করুন',
          '৩. i = 1 থেকে n পর্যন্ত লুপ চালান',
          '৪. প্রতিটি সংখ্যা ইনপুট নিয়ে sum এ যোগ করুন',
          '৫. সর্বমোট যোগফল প্রিন্ট করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-4 text-sm">
            <div className="bg-green-100 rounded-full px-8 py-4 border-2 border-green-600 text-green-800 font-bold shadow-md">
              শুরু
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            <div className="bg-blue-100 border-2 border-blue-600 px-8 py-4 text-blue-800 font-semibold shadow-md transform skew-x-12"
                 style={{ clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' }}>
              n ইনপুট নিন
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            <div className="bg-yellow-100 border-2 border-yellow-600 px-8 py-4 text-yellow-800 font-semibold shadow-md">
              sum=0, i=1
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            
            {/* সিদ্ধান্ত - Diamond */}
            <div className="bg-orange-100 border-2 border-orange-600 text-orange-800 font-semibold shadow-md w-32 h-32 flex items-center justify-center transform rotate-45">
              <div className="transform -rotate-45 text-center text-xs">
                i ≤ n?
              </div>
            </div>
            
            <div className="flex justify-between items-start w-96">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-gray-700 font-bold">না</span>
                <div className="text-2xl text-gray-700">↓</div>
                <div className="bg-purple-100 border-2 border-purple-600 px-6 py-3 text-purple-800 font-semibold shadow-md transform skew-x-12"
                     style={{ clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' }}>
                  যোগফল প্রিন্ট
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <span className="text-gray-700 font-bold">হ্যাঁ</span>
                <div className="text-2xl text-gray-700">↓</div>
                <div className="bg-blue-100 border-2 border-blue-600 px-6 py-3 text-blue-800 font-semibold shadow-md transform skew-x-12"
                     style={{ clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' }}>
                  সংখ্যা ইনপুট
                </div>
                <div className="text-2xl text-gray-700">↓</div>
                <div className="bg-yellow-100 border-2 border-yellow-600 px-6 py-3 text-yellow-800 font-semibold shadow-md">
                  sum += num, i++
                </div>
                <div className="text-2xl text-gray-700">↑</div>
              </div>
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            <div className="bg-red-100 rounded-full px-8 py-4 border-2 border-red-600 text-red-800 font-bold shadow-md">
              শেষ
            </div>
          </div>
        ),
        output: `প্রোগ্রাম চালনা:
কতটি সংখ্যার যোগফল বের করবেন? 5
১ম সংখ্যা: 10
২য় সংখ্যা: 20  
৩য় সংখ্যা: 15
৪র্থ সংখ্যা: 25
৫ম সংখ্যা: 30
সর্বমোট যোগফল = 100`
      };
    }

    // Average calculation
    if (code.includes('average') || (code.includes('sum') && code.includes('/'))) {
      return {
        algorithm: [
          '১. n এর মান ইনপুট নিন',
          '২. sum = 0 নির্ধারণ করুন', 
          '৩. n টি সংখ্যা ইনপুট নিয়ে যোগ করুন',
          '৪. গড় = sum / n',
          '৫. গড় প্রিন্ট করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-4 text-sm">
            <div className="bg-green-100 rounded-full px-8 py-4 border-2 border-green-600 text-green-800 font-bold shadow-md">
              শুরু
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            <div className="bg-blue-100 border-2 border-blue-600 px-8 py-4 text-blue-800 font-semibold shadow-md transform skew-x-12"
                 style={{ clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' }}>
              n ইনপুট নিন
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            <div className="bg-yellow-100 border-2 border-yellow-600 px-8 py-4 text-yellow-800 font-semibold shadow-md">
              sum=0
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            <div className="bg-blue-100 border-2 border-blue-600 px-8 py-4 text-blue-800 font-semibold shadow-md transform skew-x-12"
                 style={{ clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' }}>
              n টি সংখ্যা ইনপুট নিন
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            <div className="bg-yellow-100 border-2 border-yellow-600 px-8 py-4 text-yellow-800 font-semibold shadow-md">
              গড় = sum / n
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            <div className="bg-blue-100 border-2 border-blue-600 px-8 py-4 text-blue-800 font-semibold shadow-md transform skew-x-12">
              গড় প্রিন্ট করুন
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            <div className="bg-red-100 rounded-full px-8 py-4 border-2 border-red-600 text-red-800 font-bold shadow-md">
              শেষ
            </div>
          </div>
        ),
        output: `প্রোগ্রাম চালনা:
কতটি সংখ্যার গড় বের করবেন? 4
১ম সংখ্যা: 80
২য় সংখ্যা: 75
৩য় সংখ্যা: 90
৪র্থ সংখ্যা: 85
গড় = 82.50`
      };
    }

    // Max/Min finding
    if (code.includes('max') || code.includes('min') || code.includes('largest') || code.includes('smallest')) {
      return {
        algorithm: [
          '১. n এর মান ইনপুট নিন',
          '২. প্রথম সংখ্যা ইনপুট নিয়ে max ও min এ রাখুন',
          '৩. বাকি সংখ্যাগুলো একে একে ইনপুট নিন',
          '৪. প্রতিটি সংখ্যা max ও min এর সাথে তুলনা করুন',
          '৫. বৃহত্তম ও ক্ষুদ্রতম সংখ্যা প্রিন্ট করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-4 text-sm">
            <div className="bg-green-100 rounded-full px-8 py-4 border-2 border-green-600 text-green-800 font-bold shadow-md">
              শুরু
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            <div className="bg-blue-100 border-2 border-blue-600 px-8 py-4 text-blue-800 font-semibold shadow-md transform skew-x-12">
              n ইনপুট নিন
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            <div className="bg-yellow-100 border-2 border-yellow-600 px-8 py-4 text-yellow-800 font-semibold shadow-md">
              max=min=প্রথম সংখ্যা
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            
            {/* সিদ্ধান্ত - Diamond for max */}
            <div className="bg-orange-100 border-2 border-orange-600 text-orange-800 font-semibold shadow-md w-32 h-32 flex items-center justify-center transform rotate-45">
              <div className="transform -rotate-45 text-center text-xs">
                সংখ্যা &gt; max?
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-gray-700 font-bold">হ্যাঁ</span>
              <div className="text-3xl text-gray-700">↓</div>
              <div className="bg-yellow-100 border-2 border-yellow-600 px-8 py-4 text-yellow-800 font-semibold shadow-md">
                max = সংখ্যা
              </div>
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            
            {/* সিদ্ধান্ত - Diamond for min */}
            <div className="bg-orange-100 border-2 border-orange-600 text-orange-800 font-semibold shadow-md w-32 h-32 flex items-center justify-center transform rotate-45">
              <div className="transform -rotate-45 text-center text-xs">
                সংখ্যা &lt; min?
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-gray-700 font-bold">হ্যাঁ</span>
              <div className="text-3xl text-gray-700">↓</div>
              <div className="bg-yellow-100 border-2 border-yellow-600 px-8 py-4 text-yellow-800 font-semibold shadow-md">
                min = সংখ্যা
              </div>
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            <div className="bg-blue-100 border-2 border-blue-600 px-8 py-4 text-blue-800 font-semibold shadow-md transform skew-x-12">
              ফলাফল প্রিন্ট করুন
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            <div className="bg-red-100 rounded-full px-8 py-4 border-2 border-red-600 text-red-800 font-bold shadow-md">
              শেষ
            </div>
          </div>
        ),
        output: `প্রোগ্রাম চালনা:
কতটি সংখ্যা? 5
১ম সংখ্যা: 25
২য় সংখ্যা: 10
৩য় সংখ্যা: 45
৪র্থ সংখ্যা: 5
৫ম সংখ্যা: 30
বৃহত্তম সংখ্যা = 45
ক্ষুদ্রতম সংখ্যা = 5`
      };
    }

    // Temperature conversion
    if (code.includes('celsius') || code.includes('fahrenheit')) {
      return {
        algorithm: [
          '১. সেলসিয়াস তাপমাত্রা ইনপুট নিন',
          '২. ফারেনহাইট = (সেলসিয়াস × 9/5) + 32',
          '৩. ফলাফল প্রিন্ট করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-4 text-sm">
            <div className="bg-green-100 rounded-full px-8 py-4 border-2 border-green-600 text-green-800 font-bold shadow-md">
              শুরু
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            <div className="bg-blue-100 border-2 border-blue-600 px-8 py-4 text-blue-800 font-semibold shadow-md transform skew-x-12">
              সেলসিয়াস ইনপুট নিন
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            <div className="bg-yellow-100 border-2 border-yellow-600 px-8 py-4 text-yellow-800 font-semibold shadow-md">
              F = (C × 9/5) + 32
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            <div className="bg-purple-100 border-2 border-purple-600 px-8 py-4 text-purple-800 font-semibold shadow-md transform skew-x-12">
              ফলাফল প্রিন্ট করুন
            </div>
            <div className="text-3xl text-gray-700">↓</div>
            <div className="bg-red-100 rounded-full px-8 py-4 border-2 border-red-600 text-red-800 font-bold shadow-md">
              শেষ
            </div>
          </div>
        ),
        output: `প্রোগ্রাম চালনা:
সেলসিয়াস তাপমাত্রা লিখুন: 37
37°C = 98.60°F`
      };
    }

    // LCM/GCD
    if (code.includes('lcm') || code.includes('gcd') || code.includes('লসাগু') || code.includes('গসাগু')) {
      return {
        algorithm: [
          '১. দুটি সংখ্যা a ও b ইনপুট নিন',
          '২. GCD বের করার জন্য ইউক্লিডীয় অ্যালগরিদম ব্যবহার করুন',
          '৩. যতক্ষণ b ≠ 0: temp = b, b = a%b, a = temp',
          '৪. GCD = a',
          '৫. LCM = (num1 × num2) / GCD',
          '৬. ফলাফল প্রিন্ট করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-2 text-sm">
            <div className="bg-green-200 rounded-full px-4 py-2 border-2 border-green-400">শুরু</div>
            <div className="text-lg">↓</div>
            <div className="bg-blue-200 border-2 border-blue-400 px-4 py-2 transform rotate-12 -rotate-12">a, b ইনপুট</div>
            <div className="text-lg">↓</div>
            <div className="bg-orange-200 border-2 border-orange-400 px-4 py-2 diamond-shape">b ≠ 0?</div>
            <div className="text-lg">↓ হ্যাঁ</div>
            <div className="bg-yellow-200 border-2 border-yellow-400 px-4 py-2">temp=b, b=a%b, a=temp</div>
            <div className="text-lg">↓ না</div>
            <div className="bg-yellow-200 border-2 border-yellow-400 px-4 py-2">GCD=a, LCM=(n1×n2)/GCD</div>
            <div className="text-lg">↓</div>
            <div className="bg-blue-200 border-2 border-blue-400 px-4 py-2 transform rotate-12 -rotate-12">ফলাফল প্রিন্ট</div>
            <div className="text-lg">↓</div>
            <div className="bg-red-200 rounded-full px-4 py-2 border-2 border-red-400">শেষ</div>
          </div>
        ),
        output: `প্রোগ্রাম চালনা:
প্রথম সংখ্যা লিখুন: 12
দ্বিতীয় সংখ্যা লিখুন: 18
12 ও 18 এর গসাগু (GCD) = 6
12 ও 18 এর লসাগু (LCM) = 36`
      };
    }

    // Leap year
    if (code.includes('leap') || code.includes('অধিবর্ষ')) {
      return {
        algorithm: [
          '১. একটি বছর ইনপুট নিন',
          '২. বছরটি ৪ দিয়ে বিভাজ্য কিনা পরীক্ষা করুন',
          '৩. যদি ১০০ দিয়ে বিভাজ্য হয়, ৪০০ দিয়েও বিভাজ্য হতে হবে',
          '৪. শর্ত পূরণ হলে অধিবর্ষ, অন্যথায় সাধারণ বর্ষ',
          '৫. ফলাফল প্রিন্ট করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-2 text-sm">
            <div className="bg-green-200 rounded-full px-4 py-2 border-2 border-green-400">শুরু</div>
            <div className="text-lg">↓</div>
            <div className="bg-blue-200 border-2 border-blue-400 px-4 py-2 transform rotate-12 -rotate-12">বছর ইনপুট</div>
            <div className="text-lg">↓</div>
            <div className="bg-orange-200 border-2 border-orange-400 px-4 py-2 diamond-shape">year % 4 == 0?</div>
            <div className="text-lg">↓ হ্যাঁ</div>
            <div className="bg-orange-200 border-2 border-orange-400 px-4 py-2 diamond-shape">year % 100 == 0?</div>
            <div className="text-lg">↓ হ্যাঁ</div>
            <div className="bg-orange-200 border-2 border-orange-400 px-4 py-2 diamond-shape">year % 400 == 0?</div>
            <div className="flex justify-between w-full">
              <div className="flex flex-col items-center">
                <span>হ্যাঁ →</span>
                <div className="bg-blue-200 border-2 border-blue-400 px-4 py-2 transform rotate-12 -rotate-12">"অধিবর্ষ" প্রিন্ট</div>
              </div>
              <div className="flex flex-col items-center">  
                <span>← না</span>
                <div className="bg-blue-200 border-2 border-blue-400 px-4 py-2 transform rotate-12 -rotate-12">"সাধারণ বর্ষ" প্রিন্ট</div>
              </div>
            </div>
            <div className="text-lg">↓</div>
            <div className="bg-red-200 rounded-full px-4 py-2 border-2 border-red-400">শেষ</div>
          </div>
        ),
        output: `প্রোগ্রাম চালনা:
একটি বছর লিখুন: 2024
2024 একটি অধিবর্ষ

একটি বছর লিখুন: 1900
1900 একটি সাধারণ বর্ষ

একটি বছর লিখুন: 2000  
2000 একটি অধিবর্ষ`
      };
    }

    // Factorial
    if (code.includes('factorial')) {
      return {
        algorithm: [
          '১. একটি সংখ্যা n ইনপুট নিন',
          '২. factorial = 1 নির্ধারণ করুন',
          '৩. i = 1 থেকে n পর্যন্ত লুপ চালান',
          '৪. factorial = factorial * i',
          '৫. ফ্যাক্টোরিয়াল প্রিন্ট করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-2 text-sm">
            <div className="bg-green-200 rounded-full px-4 py-2 border-2 border-green-400">শুরু</div>
            <div className="text-lg">↓</div>
            <div className="bg-blue-200 border-2 border-blue-400 px-4 py-2 transform rotate-12 -rotate-12">n ইনপুট</div>
            <div className="text-lg">↓</div>
            <div className="bg-yellow-200 border-2 border-yellow-400 px-4 py-2">fact=1, i=1</div>
            <div className="text-lg">↓</div>
            <div className="bg-orange-200 border-2 border-orange-400 px-4 py-2 diamond-shape">i ≤ n?</div>
            <div className="flex items-center space-x-4">
              <span>না →</span>
              <div className="bg-blue-200 border-2 border-blue-400 px-4 py-2 transform rotate-12 -rotate-12">ফলাফল প্রিন্ট</div>
            </div>
            <div className="text-lg">↓ হ্যাঁ</div>
            <div className="bg-yellow-200 border-2 border-yellow-400 px-4 py-2">fact = fact * i, i++</div>
            <div className="text-lg">↓</div>
            <div className="bg-red-200 rounded-full px-4 py-2 border-2 border-red-400">শেষ</div>
          </div>
        ),
        output: `প্রোগ্রাম চালনা:
একটি সংখ্যা লিখুন: 5
5 এর ফ্যাক্টোরিয়াল = 120

একটি সংখ্যা লিখুন: 0
0 এর ফ্যাক্টোরিয়াল = 1`
      };
    }

    // Hello World
    if (code.includes('printf') && code.includes('Hello')) {
      return {
        algorithm: [
          '১. প্রোগ্রাম শুরু',
          '২. printf() ফাংশন দিয়ে "Hello, World!" প্রিন্ট করুন',
          '৩. প্রোগ্রাম শেষ'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-2 text-sm">
            <div className="bg-green-200 rounded-full px-4 py-2 border-2 border-green-400">শুরু</div>
            <div className="text-lg">↓</div>
            <div className="bg-blue-200 border-2 border-blue-400 px-4 py-2 transform rotate-12 -rotate-12">"Hello, World!" প্রিন্ট</div>
            <div className="text-lg">↓</div>
            <div className="bg-red-200 rounded-full px-4 py-2 border-2 border-red-400">শেষ</div>
          </div>
        ),
        output: `প্রোগ্রাম চালনা:
Hello, World!`
      };
    }
    
    return {
      algorithm: ['কোড বিশ্লেষণ করা হচ্ছে...'],
      flowchart: (
        <div className="text-center text-gray-500">
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
      <div className="h-full overflow-y-auto space-y-6">
        {/* Output Section */}
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
          <h4 className="text-white font-semibold mb-3 flex items-center">
            💻 আউটপুট:
          </h4>
          <div className="whitespace-pre-wrap text-green-300 leading-relaxed">
            {output}
          </div>
        </div>

        {/* Algorithm Section */}
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
          <h4 className="text-blue-900 font-semibold mb-3 flex items-center">
            🧠 অ্যালগরিদম:
          </h4>
          <ol className="space-y-2 text-blue-800">
            {algorithm.map((step, index) => (
              <li key={index} className="text-sm leading-relaxed">
                <span className="font-medium">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Flowchart Section */}
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
          <h4 className="text-purple-900 font-semibold mb-4 flex items-center">
            📊 ফ্লোচার্ট:
          </h4>
          <div className="text-purple-800 text-sm leading-relaxed">
            {flowchart}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200/50 h-full">
      <div className="p-4 border-b border-gray-200/50 bg-white/70">
        <h3 className="font-semibold text-gray-900">
          {language === 'html' ? 'HTML প্রিভিউ' : 'C প্রোগ্রাম বিশ্লেষণ'}
        </h3>
      </div>
      <div className="p-4 h-[calc(100%-4rem)]">
        {language === 'html' ? renderHTMLPreview() : renderCPreview()}
      </div>
    </div>
  );
};

export default PreviewSection;
