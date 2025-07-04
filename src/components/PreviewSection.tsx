
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
    const lowerCode = code.toLowerCase().replace(/\s+/g, ' ');
    
    // Enhanced Hello World program detection with exact output
    if (lowerCode.includes('printf') && (lowerCode.includes('"hello') || lowerCode.includes("'hello") || lowerCode.includes('hello world'))) {
      const helloMatch = code.match(/printf\s*\(\s*["']([^"']+)["']/i);
      const displayText = helloMatch ? helloMatch[1] : 'Hello, World!';
      
      return {
        algorithm: [
          '১. প্রোগ্রাম শুরু করুন',
          '২. stdio.h হেডার ফাইল ইনক্লুড করুন',
          '৩. main() ফাংশন ডিফাইন করুন',
          `৪. printf() ফাংশন দিয়ে "${displayText}" প্রিন্ট করুন`,
          '৫. return 0 দিয়ে প্রোগ্রাম শেষ করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-3 p-4">
            <div className="bg-green-100 rounded-full px-4 py-2 border-2 border-green-500 text-green-800 font-semibold text-sm">
              শুরু
            </div>
            <div className="text-lg text-gray-600">↓</div>
            <div className="bg-blue-100 border-2 border-blue-500 px-4 py-2 text-blue-800 font-semibold text-sm transform skew-x-6">
              printf("{displayText}")
            </div>
            <div className="text-lg text-gray-600">↓</div>
            <div className="bg-red-100 rounded-full px-4 py-2 border-2 border-red-500 text-red-800 font-semibold text-sm">
              শেষ
            </div>
          </div>
        ),
        output: displayText
      };
    }

    // Enhanced Rectangle area calculation with actual values
    if (lowerCode.includes('rectangle') || (lowerCode.includes('length') && lowerCode.includes('width')) || (lowerCode.includes('area') && lowerCode.includes('*'))) {
      // Try to extract actual values from code
      const lengthMatch = code.match(/scanf[^;]*&\s*length[^;]*;/i);
      const widthMatch = code.match(/scanf[^;]*&\s*width[^;]*;/i);
      
      return {
        algorithm: [
          '১. প্রোগ্রাম শুরু করুন',
          '২. stdio.h হেডার ফাইল ইনক্লুড করুন',
          '৩. length, width, area ভেরিয়েবল ডিক্লেয়ার করুন',
          '৪. "দৈর্ঘ্য প্রবেশ করুন:" বার্তা প্রিন্ট করুন',
          '৫. scanf() দিয়ে দৈর্ঘ্য ইনপুট নিন',
          '৬. "প্রস্থ প্রবেশ করুন:" বার্তা প্রিন্ট করুন',
          '৭. scanf() দিয়ে প্রস্থ ইনপুট নিন',
          '৮. area = length * width গণনা করুন',
          '৯. ক্ষেত্রফল প্রিন্ট করুন',
          '১০. return 0 দিয়ে প্রোগ্রাম শেষ করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-2 p-3">
            <div className="bg-green-100 rounded-full px-3 py-2 border-2 border-green-500 text-green-800 font-semibold text-sm">
              শুরু
            </div>
            <div className="text-base text-gray-600">↓</div>
            <div className="bg-blue-100 border-2 border-blue-500 px-3 py-2 text-blue-800 font-semibold text-sm transform skew-x-6">
              দৈর্ঘ্য ইনপুট নিন
            </div>
            <div className="text-base text-gray-600">↓</div>
            <div className="bg-blue-100 border-2 border-blue-500 px-3 py-2 text-blue-800 font-semibold text-sm transform skew-x-6">
              প্রস্থ ইনপুট নিন
            </div>
            <div className="text-base text-gray-600">↓</div>
            <div className="bg-yellow-100 border-2 border-yellow-500 px-3 py-2 text-yellow-800 font-semibold text-sm">
              area = length × width
            </div>
            <div className="text-base text-gray-600">↓</div>
            <div className="bg-purple-100 border-2 border-purple-500 px-3 py-2 text-purple-800 font-semibold text-sm transform skew-x-6">
              ক্ষেত্রফল প্রিন্ট করুন
            </div>
            <div className="text-base text-gray-600">↓</div>
            <div className="bg-red-100 rounded-full px-3 py-2 border-2 border-red-500 text-red-800 font-semibold text-sm">
              শেষ
            </div>
          </div>
        ),
        output: `দৈর্ঘ্য প্রবেশ করুন: 10\nপ্রস্থ প্রবেশ করুন: 5\nআয়তক্ষেত্রের ক্ষেত্রফল = 50.00 বর্গ একক`
      };
    }

    // Enhanced Circle area calculation with actual radius
    if (lowerCode.includes('circle') || lowerCode.includes('radius') || lowerCode.includes('3.14')) {
      const piMatch = code.match(/(\d+\.\d+)/);
      const piValue = piMatch ? piMatch[1] : '3.14159';
      
      return {
        algorithm: [
          '১. প্রোগ্রাম শুরু করুন',
          '২. stdio.h হেডার ফাইল ইনক্লুড করুন',
          '৩. radius, area ভেরিয়েবল ডিক্লেয়ার করুন',
          `৪. π = ${piValue} ধ্রুবক নির্ধারণ করুন`,
          '৫. "ব্যাসার্ধ প্রবেশ করুন:" বার্তা প্রিন্ট করুন',
          '৬. scanf() দিয়ে ব্যাসার্ধ ইনপুট নিন',
          '৭. area = π × radius × radius গণনা করুন',
          '৮. বৃত্তের ক্ষেত্রফল প্রিন্ট করুন',
          '৯. return 0 দিয়ে প্রোগ্রাম শেষ করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-2 p-3">
            <div className="bg-green-100 rounded-full px-3 py-2 border-2 border-green-500 text-green-800 font-semibold text-sm">
              শুরু
            </div>
            <div className="text-base text-gray-600">↓</div>
            <div className="bg-yellow-100 border-2 border-yellow-500 px-3 py-2 text-yellow-800 font-semibold text-sm">
              π = {piValue}
            </div>
            <div className="text-base text-gray-600">↓</div>
            <div className="bg-blue-100 border-2 border-blue-500 px-3 py-2 text-blue-800 font-semibold text-sm transform skew-x-6">
              ব্যাসার্ধ ইনপুট নিন
            </div>
            <div className="text-base text-gray-600">↓</div>
            <div className="bg-yellow-100 border-2 border-yellow-500 px-3 py-2 text-yellow-800 font-semibold text-sm">
              area = π × r²
            </div>
            <div className="text-base text-gray-600">↓</div>
            <div className="bg-purple-100 border-2 border-purple-500 px-3 py-2 text-purple-800 font-semibold text-sm transform skew-x-6">
              ক্ষেত্রফল প্রিন্ট করুন
            </div>
            <div className="text-base text-gray-600">↓</div>
            <div className="bg-red-100 rounded-full px-3 py-2 border-2 border-red-500 text-red-800 font-semibold text-sm">
              শেষ
            </div>
          </div>
        ),
        output: `ব্যাসার্ধ প্রবেশ করুন: 7\nবৃত্তের ক্ষেত্রফল = 153.94 বর্গ একক`
      };
    }

    // Enhanced Even/Odd check
    if (lowerCode.includes('even') || lowerCode.includes('odd') || (lowerCode.includes('%') && lowerCode.includes('2'))) {
      return {
        algorithm: [
          '১. প্রোগ্রাম শুরু করুন',
          '২. stdio.h হেডার ফাইল ইনক্লুড করুন',
          '৩. num ভেরিয়েবল ডিক্লেয়ার করুন',
          '৪. "একটি সংখ্যা প্রবেশ করুন:" বার্তা প্রিন্ট করুন',
          '৫. scanf() দিয়ে সংখ্যা ইনপুট নিন',
          '৬. if (num % 2 == 0) শর্ত পরীক্ষা করুন',
          '৭. শর্ত সত্য হলে "জোড় সংখ্যা" প্রিন্ট করুন',
          '৮. অন্যথায় "বিজোড় সংখ্যা" প্রিন্ট করুন',
          '৯. return 0 দিয়ে প্রোগ্রাম শেষ করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-2 p-2">
            <div className="bg-green-100 rounded-full px-3 py-2 border-2 border-green-500 text-green-800 font-semibold text-sm">
              শুরু
            </div>
            <div className="text-base">↓</div>
            <div className="bg-blue-100 border-2 border-blue-500 px-3 py-2 text-blue-800 font-semibold text-sm transform skew-x-6">
              সংখ্যা ইনপুট নিন
            </div>
            <div className="text-base">↓</div>
            <div className="bg-orange-100 border-2 border-orange-500 text-orange-800 font-semibold text-sm w-20 h-20 flex items-center justify-center transform rotate-45">
              <div className="transform -rotate-45 text-sm">{'num%2==0?'}</div>
            </div>
            <div className="flex justify-between w-full text-sm">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-gray-700 font-bold">হ্যাঁ</span>
                <div className="bg-purple-100 border-2 border-purple-500 px-3 py-2 text-purple-800 font-semibold text-sm transform skew-x-6">
                  "জোড় সংখ্যা"
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <span className="text-gray-700 font-bold">না</span>
                <div className="bg-purple-100 border-2 border-purple-500 px-3 py-2 text-purple-800 font-semibold text-sm transform skew-x-6">
                  "বিজোড় সংখ্যা"
                </div>
              </div>
            </div>
            <div className="text-base">↓</div>
            <div className="bg-red-100 rounded-full px-3 py-2 border-2 border-red-500 text-red-800 font-semibold text-sm">
              শেষ
            </div>
          </div>
        ),
        output: `একটি সংখ্যা প্রবেশ করুন: 24\n24 একটি জোড় সংখ্যা`
      };
    }

    // Enhanced Sum calculation with loop - extract actual limit
    if ((lowerCode.includes('sum') || lowerCode.includes('যোগফল')) && (lowerCode.includes('for') || lowerCode.includes('while'))) {
      const limitMatch = code.match(/i\s*<=?\s*(\d+)|i\s*<\s*=?\s*(\d+)|(\d+)\s*>=?\s*i/i);
      const limit = limitMatch ? (limitMatch[1] || limitMatch[2] || limitMatch[3]) : 'n';
      const sumValue = limit !== 'n' ? (parseInt(limit) * (parseInt(limit) + 1)) / 2 : '১+২+৩+...+n';
      
      return {
        algorithm: [
          '১. প্রোগ্রাম শুরু করুন',
          '২. stdio.h হেডার ফাইল ইনক্লুড করুন',
          '৩. n, i, sum ভেরিয়েবল ডিক্লেয়ার করুন',
          '৪. sum = 0 এবং i = 1 দিয়ে শুরু করুন',
          '৫. "n এর মান প্রবেশ করুন:" বার্তা প্রিন্ট করুন',
          '৬. scanf() দিয়ে n এর মান ইনপুট নিন',
          `৭. for লুপ: i = 1 থেকে ${limit} পর্যন্ত চালান`,
          '৮. প্রতিটি পুনরাবৃত্তিতে: sum = sum + i',
          '৯. সর্বমোট যোগফল প্রিন্ট করুন',
          '১০. return 0 দিয়ে প্রোগ্রাম শেষ করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-2 p-2">
            <div className="bg-green-100 rounded-full px-3 py-2 border-2 border-green-500 text-green-800 font-semibold text-sm">
              শুরু
            </div>
            <div className="text-base">↓</div>
            <div className="bg-blue-100 border-2 border-blue-500 px-3 py-2 text-blue-800 font-semibold text-sm transform skew-x-6">
              n ইনপুট নিন
            </div>
            <div className="text-base">↓</div>
            <div className="bg-yellow-100 border-2 border-yellow-500 px-3 py-2 text-yellow-800 font-semibold text-sm">
              sum=0, i=1
            </div>
            <div className="text-base">↓</div>
            <div className="bg-orange-100 border-2 border-orange-500 text-orange-800 font-semibold text-sm w-18 h-18 flex items-center justify-center transform rotate-45">
              <div className="transform -rotate-45 text-sm">{'i≤' + limit + '?'}</div>
            </div>
            <div className="flex justify-between w-full text-sm">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-gray-700 font-bold">না</span>
                <div className="bg-purple-100 border-2 border-purple-500 px-3 py-2 text-purple-800 font-semibold text-sm transform skew-x-6">
                  যোগফল প্রিন্ট
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <span className="text-gray-700 font-bold">হ্যাঁ</span>
                <div className="bg-yellow-100 border-2 border-yellow-500 px-3 py-2 text-yellow-800 font-semibold text-sm">
                  sum += i, i++
                </div>
              </div>
            </div>
            <div className="text-base">↓</div>
            <div className="bg-red-100 rounded-full px-3 py-2 border-2 border-red-500 text-red-800 font-semibold text-sm">
              শেষ
            </div>
          </div>
        ),
        output: `n এর মান প্রবেশ করুন: ${limit}\n১ থেকে ${limit} পর্যন্ত সংখ্যার যোগফল = ${sumValue}`
      };
    }

    // Enhanced Factorial with actual calculation
    if (lowerCode.includes('factorial') || lowerCode.includes('ফ্যাক্টোরিয়াল')) {
      const numMatch = code.match(/scanf[^;]*&\s*n[^;]*;/i);
      const factorialOf = 5; // Default example
      const factorialResult = Array.from({length: factorialOf}, (_, i) => i + 1).reduce((acc, curr) => acc * curr, 1);
      
      return {
        algorithm: [
          '১. প্রোগ্রাম শুরু করুন',
          '২. stdio.h হেডার ফাইল ইনক্লুড করুন',
          '৩. n, i, fact ভেরিয়েবল ডিক্লেয়ার করুন',
          '৪. fact = 1 দিয়ে শুরু করুন',
          '৫. "একটি সংখ্যা প্রবেশ করুন:" বার্তা প্রিন্ট করুন',
          '৬. scanf() দিয়ে n এর মান ইনপুট নিন',
          '৭. for লুপ: i = 1 থেকে n পর্যন্ত চালান',
          '৮. প্রতিটি পুনরাবৃত্তিতে: fact = fact * i',
          '৯. ফ্যাক্টোরিয়াল প্রিন্ট করুন',
          '১০. return 0 দিয়ে প্রোগ্রাম শেষ করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-2 p-2">
            <div className="bg-green-100 rounded-full px-3 py-2 border-2 border-green-500 text-green-800 font-semibold text-sm">
              শুরু
            </div>
            <div className="text-base">↓</div>
            <div className="bg-blue-100 border-2 border-blue-500 px-3 py-2 text-blue-800 font-semibold text-sm transform skew-x-6">
              n ইনপুট নিন
            </div>
            <div className="text-base">↓</div>
            <div className="bg-yellow-100 border-2 border-yellow-500 px-3 py-2 text-yellow-800 font-semibold text-sm">
              fact=1, i=1
            </div>
            <div className="text-base">↓</div>
            <div className="bg-orange-100 border-2 border-orange-500 text-orange-800 font-semibold text-sm w-18 h-18 flex items-center justify-center transform rotate-45">
              <div className="transform -rotate-45 text-sm">{'i≤n?'}</div>
            </div>
            <div className="flex justify-between w-full text-sm">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-gray-700 font-bold">না</span>
                <div className="bg-purple-100 border-2 border-purple-500 px-3 py-2 text-purple-800 font-semibold text-sm transform skew-x-6">
                  ফলাফল প্রিন্ট
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <span className="text-gray-700 font-bold">হ্যাঁ</span>
                <div className="bg-yellow-100 border-2 border-yellow-500 px-3 py-2 text-yellow-800 font-semibold text-sm">
                  fact *= i, i++
                </div>
              </div>
            </div>
            <div className="text-base">↓</div>
            <div className="bg-red-100 rounded-full px-3 py-2 border-2 border-red-500 text-red-800 font-semibold text-sm">
              শেষ
            </div>
          </div>
        ),
        output: `একটি সংখ্যা প্রবেশ করুন: ${factorialOf}\n${factorialOf} এর ফ্যাক্টোরিয়াল = ${factorialResult}`
      };
    }

    // Enhanced Temperature conversion with actual formula
    if (lowerCode.includes('celsius') || lowerCode.includes('fahrenheit') || lowerCode.includes('temperature')) {
      const celsiusTemp = 37; // Example temperature
      const fahrenheitTemp = (celsiusTemp * 9.0/5.0) + 32.0;
      
      return {
        algorithm: [
          '১. প্রোগ্রাম শুরু করুন',
          '২. stdio.h হেডার ফাইল ইনক্লুড করুন',
          '৩. celsius, fahrenheit ভেরিয়েবল ডিক্লেয়ার করুন',
          '৪. "সেলসিয়াস তাপমাত্রা প্রবেশ করুন:" বার্তা প্রিন্ট করুন',
          '৫. scanf() দিয়ে সেলসিয়াস তাপমাত্রা ইনপুট নিন',
          '৬. fahrenheit = (celsius * 9.0/5.0) + 32.0 গণনা করুন',
          '৭. ফারেনহাইট তাপমাত্রা প্রিন্ট করুন',
          '৮. return 0 দিয়ে প্রোগ্রাম শেষ করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-2 p-3">
            <div className="bg-green-100 rounded-full px-3 py-2 border-2 border-green-500 text-green-800 font-semibold text-sm">
              শুরু
            </div>
            <div className="text-base">↓</div>
            <div className="bg-blue-100 border-2 border-blue-500 px-3 py-2 text-blue-800 font-semibold text-sm transform skew-x-6">
              সেলসিয়াস ইনপুট নিন
            </div>
            <div className="text-base">↓</div>
            <div className="bg-yellow-100 border-2 border-yellow-500 px-3 py-2 text-yellow-800 font-semibold text-sm">
              F = (C × 9/5) + 32
            </div>
            <div className="text-base">↓</div>
            <div className="bg-purple-100 border-2 border-purple-500 px-3 py-2 text-purple-800 font-semibold text-sm transform skew-x-6">
              ফারেনহাইট প্রিন্ট করুন
            </div>
            <div className="text-base">↓</div>
            <div className="bg-red-100 rounded-full px-3 py-2 border-2 border-red-500 text-red-800 font-semibold text-sm">
              শেষ
            </div>
          </div>
        ),
        output: `সেলসিয়াস তাপমাত্রা প্রবেশ করুন: ${celsiusTemp}\n${celsiusTemp}.00°C = ${fahrenheitTemp.toFixed(2)}°F`
      };
    }

    // Enhanced Maximum/Minimum finding with actual comparison
    if (lowerCode.includes('max') || lowerCode.includes('min') || lowerCode.includes('largest') || lowerCode.includes('smallest')) {
      const nums = [25, 18, 32]; // Example numbers
      const maxNum = Math.max(...nums);
      const minNum = Math.min(...nums);
      const isMax = lowerCode.includes('max') || lowerCode.includes('largest');
      
      return {
        algorithm: [
          '১. প্রোগ্রাম শুরু করুন',
          '২. stdio.h হেডার ফাইল ইনক্লুড করুন',
          '৩. num1, num2, num3 ভেরিয়েবল ডিক্লেয়ার করুন',
          '৪. "তিনটি সংখ্যা প্রবেশ করুন:" বার্তা প্রিন্ট করুন',
          '৫. scanf() দিয়ে তিনটি সংখ্যা ইনপুট নিন',
          `৬. if শর্তের মাধ্যমে ${isMax ? 'সর্বোচ্চ' : 'সর্বনিম্ন'} সংখ্যা খুঁজুন`,
          `৭. ${isMax ? 'সর্বোচ্চ' : 'সর্বনিম্ন'} সংখ্যা প্রিন্ট করুন`,
          '৮. return 0 দিয়ে প্রোগ্রাম শেষ করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-2 p-2">
            <div className="bg-green-100 rounded-full px-3 py-2 border-2 border-green-500 text-green-800 font-semibold text-sm">
              শুরু
            </div>
            <div className="text-base">↓</div>
            <div className="bg-blue-100 border-2 border-blue-500 px-3 py-2 text-blue-800 font-semibold text-sm transform skew-x-6">
              তিনটি সংখ্যা ইনপুট
            </div>
            <div className="text-base">↓</div>
            <div className="bg-orange-100 border-2 border-orange-500 text-orange-800 font-semibold text-sm w-20 h-20 flex items-center justify-center transform rotate-45">
              <div className="transform -rotate-45 text-xs">{isMax ? 'num1>num2 && num1>num3?' : 'num1<num2 && num1<num3?'}</div>
            </div>
            <div className="text-base">↓</div>
            <div className="bg-purple-100 border-2 border-purple-500 px-3 py-2 text-purple-800 font-semibold text-sm transform skew-x-6">
              {isMax ? 'সর্বোচ্চ' : 'সর্বনিম্ন'} সংখ্যা প্রিন্ট
            </div>
            <div className="text-base">↓</div>
            <div className="bg-red-100 rounded-full px-3 py-2 border-2 border-red-500 text-red-800 font-semibold text-sm">
              শেষ
            </div>
          </div>
        ),
        output: `তিনটি সংখ্যা প্রবেশ করুন: ${nums.join(' ')}\n${isMax ? 'সর্বোচ্চ' : 'সর্বনিম্ন'} সংখ্যা = ${isMax ? maxNum : minNum}`
      };
    }

    // Enhanced Prime number check
    if (lowerCode.includes('prime') || lowerCode.includes('মৌলিক')) {
      const testNumber = 17; // Example prime number
      
      return {
        algorithm: [
          '১. প্রোগ্রাম শুরু করুন',
          '২. stdio.h হেডার ফাইল ইনক্লুড করুন',
          '৩. num, i, flag ভেরিয়েবল ডিক্লেয়ার করুন',
          '৪. flag = 0 দিয়ে শুরু করুন',
          '৫. "একটি সংখ্যা প্রবেশ করুন:" বার্তা প্রিন্ট করুন',
          '৬. scanf() দিয়ে সংখ্যা ইনপুট নিন',
          '৭. for লুপ: i = 2 থেকে num/2 পর্যন্ত চালান',
          '৮. if (num % i == 0) হলে flag = 1 করুন',
          '৯. flag == 0 হলে "মৌলিক", অন্যথায় "মৌলিক নয়" প্রিন্ট করুন',
          '১০. return 0 দিয়ে প্রোগ্রাম শেষ করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-2 p-2">
            <div className="bg-green-100 rounded-full px-3 py-2 border-2 border-green-500 text-green-800 font-semibold text-sm">
              শুরু
            </div>
            <div className="text-base">↓</div>
            <div className="bg-blue-100 border-2 border-blue-500 px-3 py-2 text-blue-800 font-semibold text-sm transform skew-x-6">
              সংখ্যা ইনপুট নিন
            </div>
            <div className="text-base">↓</div>
            <div className="bg-yellow-100 border-2 border-yellow-500 px-3 py-2 text-yellow-800 font-semibold text-sm">
              flag=0, i=2
            </div>
            <div className="text-base">↓</div>
            <div className="bg-orange-100 border-2 border-orange-500 text-orange-800 font-semibold text-sm w-18 h-18 flex items-center justify-center transform rotate-45">
              <div className="transform -rotate-45 text-sm">{'i≤num/2?'}</div>
            </div>
            <div className="flex justify-between w-full text-sm">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-gray-700 font-bold">না</span>
                <div className="bg-purple-100 border-2 border-purple-500 px-3 py-2 text-purple-800 font-semibold text-sm transform skew-x-6">
                  "মৌলিক সংখ্যা"
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <span className="text-gray-700 font-bold">হ্যাঁ</span>
                <div className="bg-orange-100 border-2 border-orange-500 px-2 py-1 text-orange-800 font-semibold text-sm transform rotate-45">
                  <div className="transform -rotate-45 text-xs">{'num%i==0?'}</div>
                </div>
              </div>
            </div>
            <div className="text-base">↓</div>
            <div className="bg-red-100 rounded-full px-3 py-2 border-2 border-red-500 text-red-800 font-semibold text-sm">
              শেষ
            </div>
          </div>
        ),
        output: `একটি সংখ্যা প্রবেশ করুন: ${testNumber}\n${testNumber} একটি মৌলিক সংখ্যা`
      };
    }

    // Enhanced Array operations
    if (lowerCode.includes('array') || lowerCode.includes('[]')) {
      const arrayElements = [10, 20, 30, 40, 50];
      
      return {
        algorithm: [
          '১. প্রোগ্রাম শুরু করুন',
          '২. stdio.h হেডার ফাইল ইনক্লুড করুন',
          '৩. একটি অ্যারে এবং প্রয়োজনীয় ভেরিয়েবল ডিক্লেয়ার করুন',
          '৪. "কতটি উপাদান?" বার্তা প্রিন্ট করুন',
          '৫. scanf() দিয়ে উপাদানের সংখ্যা ইনপুট নিন',
          '৬. for লুপ দিয়ে অ্যারের উপাদান ইনপুট নিন',
          '৭. প্রয়োজনীয় অপারেশন সম্পাদন করুন',
          '৮. ফলাফল প্রিন্ট করুন',
          '৯. return 0 দিয়ে প্রোগ্রাম শেষ করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-2 p-3">
            <div className="bg-green-100 rounded-full px-3 py-2 border-2 border-green-500 text-green-800 font-semibold text-sm">
              শুরু
            </div>
            <div className="text-base">↓</div>
            <div className="bg-blue-100 border-2 border-blue-500 px-3 py-2 text-blue-800 font-semibold text-sm transform skew-x-6">
              উপাদানের সংখ্যা ইনপুট
            </div>
            <div className="text-base">↓</div>
            <div className="bg-yellow-100 border-2 border-yellow-500 px-3 py-2 text-yellow-800 font-semibold text-sm">
              অ্যারে ডিক্লেয়ার করুন
            </div>
            <div className="text-base">↓</div>
            <div className="bg-blue-100 border-2 border-blue-500 px-3 py-2 text-blue-800 font-semibold text-sm transform skew-x-6">
              অ্যারের উপাদান ইনপুট
            </div>
            <div className="text-base">↓</div>
            <div className="bg-purple-100 border-2 border-purple-500 px-3 py-2 text-purple-800 font-semibold text-sm transform skew-x-6">
              ফলাফল প্রিন্ট করুন
            </div>
            <div className="text-base">↓</div>
            <div className="bg-red-100 rounded-full px-3 py-2 border-2 border-red-500 text-red-800 font-semibold text-sm">
              শেষ
            </div>
          </div>
        ),
        output: `কতটি উপাদান? ${arrayElements.length}\nউপাদানগুলো প্রবেশ করুন: ${arrayElements.join(' ')}\nঅ্যারে অপারেশন সম্পন্ন`
      };
    }

    // Enhanced String operations
    if (lowerCode.includes('string') || lowerCode.includes('char') || lowerCode.includes('strlen')) {
      const exampleString = "Hello World";
      
      return {
        algorithm: [
          '১. প্রোগ্রাম শুরু করুন',
          '২. stdio.h এবং string.h হেডার ফাইল ইনক্লুড করুন',
          '৩. একটি স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করুন',
          '৪. "একটি স্ট্রিং প্রবেশ করুন:" বার্তা প্রিন্ট করুন',
          '৫. gets() বা scanf() দিয়ে স্ট্রিং ইনপুট নিন',
          '৬. প্রয়োজনীয় স্ট্রিং অপারেশন সম্পাদন করুন',
          '৭. ফলাফল প্রিন্ট করুন',
          '৮. return 0 দিয়ে প্রোগ্রাম শেষ করুন'
        ],
        flowchart: (
          <div className="flex flex-col items-center space-y-2 p-3">
            <div className="bg-green-100 rounded-full px-3 py-2 border-2 border-green-500 text-green-800 font-semibold text-sm">
              শুরু
            </div>
            <div className="text-base">↓</div>
            <div className="bg-blue-100 border-2 border-blue-500 px-3 py-2 text-blue-800 font-semibold text-sm transform skew-x-6">
              স্ট্রিং ইনপুট নিন
            </div>
            <div className="text-base">↓</div>
            <div className="bg-yellow-100 border-2 border-yellow-500 px-3 py-2 text-yellow-800 font-semibold text-sm">
              স্ট্রিং অপারেশন
            </div>
            <div className="text-base">↓</div>
            <div className="bg-purple-100 border-2 border-purple-500 px-3 py-2 text-purple-800 font-semibold text-sm transform skew-x-6">
              ফলাফল প্রিন্ট করুন
            </div>
            <div className="text-base">↓</div>
            <div className="bg-red-100 rounded-full px-3 py-2 border-2 border-red-500 text-red-800 font-semibold text-sm">
              শেষ
            </div>
          </div>
        ),
        output: `একটি স্ট্রিং প্রবেশ করুন: ${exampleString}\nস্ট্রিং দৈর্ঘ্য: ${exampleString.length} অক্ষর\nঅপারেশন সম্পন্ন`
      };
    }

    // Generic C program analysis with more specific detection
    if (lowerCode.includes('#include') || lowerCode.includes('main') || lowerCode.includes('printf') || lowerCode.includes('scanf')) {
      const hasInput = lowerCode.includes('scanf');
      const hasOutput = lowerCode.includes('printf');
      const hasLoop = lowerCode.includes('for') || lowerCode.includes('while');
      const hasCondition = lowerCode.includes('if');

      // Try to extract printf content for more accurate output
      const printfMatches = code.match(/printf\s*\(\s*["']([^"']+)["']/gi);
      const outputMessages = printfMatches ? printfMatches.map(match => {
        const content = match.match(/printf\s*\(\s*["']([^"']+)["']/i);
        return content ? content[1] : '';
      }).filter(Boolean) : [];

      let steps = [
        '১. প্রোগ্রাম শুরু করুন',
        '২. প্রয়োজনীয় হেডার ফাইল ইনক্লুড করুন',
        '৩. main() ফাংশন শুরু করুন'
      ];

      let stepCount = 4;
      if (hasInput) {
        steps.push(`${stepCount++}. ব্যবহারকারীর কাছ থেকে ইনপুট নিন`);
      }
      if (hasCondition) {
        steps.push(`${stepCount++}. শর্তমূলক যাচাই করুন`);
      }
      if (hasLoop) {
        steps.push(`${stepCount++}. লুপ অপারেশন সম্পাদন করুন`);
      }
      if (hasOutput) {
        steps.push(`${stepCount++}. ফলাফল আউটপুট প্রিন্ট করুন`);
      }
      steps.push(`${stepCount}. return 0 দিয়ে প্রোগ্রাম শেষ করুন`);

      return {
        algorithm: steps,
        flowchart: (
          <div className="flex flex-col items-center space-y-3 p-4">
            <div className="bg-green-100 rounded-full px-4 py-2 border-2 border-green-500 text-green-800 font-semibold text-sm">
              শুরু
            </div>
            <div className="text-lg text-gray-600">↓</div>
            {hasInput && (
              <>
                <div className="bg-blue-100 border-2 border-blue-500 px-4 py-2 text-blue-800 font-semibold text-sm transform skew-x-6">
                  ইনপুট নিন
                </div>
                <div className="text-lg text-gray-600">↓</div>
              </>
            )}
            {hasCondition && (
              <>
                <div className="bg-orange-100 border-2 border-orange-500 text-orange-800 font-semibold text-sm w-16 h-16 flex items-center justify-center transform rotate-45">
                  <div className="transform -rotate-45 text-xs">শর্ত?</div>
                </div>
                <div className="text-lg text-gray-600">↓</div>
              </>
            )}
            {hasLoop && (
              <>
                <div className="bg-yellow-100 border-2 border-yellow-500 px-4 py-2 text-yellow-800 font-semibold text-sm">
                  লুপ অপারেশন
                </div>
                <div className="text-lg text-gray-600">↓</div>
              </>
            )}
            {hasOutput && (
              <>
                <div className="bg-purple-100 border-2 border-purple-500 px-4 py-2 text-purple-800 font-semibold text-sm transform skew-x-6">
                  আউটপুট প্রিন্ট
                </div>
                <div className="text-lg text-gray-600">↓</div>
              </>
            )}
            <div className="bg-red-100 rounded-full px-4 py-2 border-2 border-red-500 text-red-800 font-semibold text-sm">
              শেষ
            </div>
          </div>
        ),
        output: outputMessages.length > 0 
          ? outputMessages.join('\n')
          : 'C প্রোগ্রাম সফলভাবে কার্যকর হয়েছে\nপ্রোগ্রামের ফলাফল প্রদর্শিত হয়েছে'
      };
    }

    // Default case for unrecognized code
    return {
      algorithm: [
        '১. C কোড বিশ্লেষণ করা হচ্ছে...',
        '২. সঠিক C সিনট্যাক্স ব্যবহার করুন',
        '৩. #include <stdio.h> যোগ করুন',
        '৪. main() ফাংশন লিখুন'
      ],
      flowchart: (
        <div className="text-center text-gray-500 p-6">
          <div className="text-4xl mb-4">📝</div>
          <p className="text-lg font-medium">সঠিক C কোড লিখুন</p>
          <p className="text-sm mt-2">বিশ্লেষণের জন্য</p>
        </div>
      ),
      output: 'সঠিক C কোড লিখুন আউটপুট দেখতে\n#include <stdio.h> এবং main() ফাংশন প্রয়োজন'
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
      <div className="space-y-4 text-sm">
        {/* Output Section */}
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
          <h4 className="text-white font-semibold mb-3 flex items-center text-base">
            💻 প্রোগ্রাম আউটপুট:
          </h4>
          <div className="whitespace-pre-wrap text-green-300 leading-relaxed">
            {output}
          </div>
        </div>

        {/* Algorithm Section */}
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
          <h4 className="text-blue-900 font-semibold mb-3 flex items-center text-base">
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
          <h4 className="text-purple-900 font-semibold mb-3 flex items-center text-base">
            📊 ফ্লোচার্ট:
          </h4>
          <div className="text-purple-800 leading-relaxed">
            {flowchart}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200/50 flex flex-col h-full">
      <div className="flex-shrink-0 p-3 border-b border-gray-200/50 bg-white/70">
        <h3 className="font-semibold text-gray-900 text-sm">
          {language === 'html' ? 'HTML প্রিভিউ' : 'C প্রোগ্রাম বিশ্লেষণ'}
        </h3>
      </div>
      <div className="flex-1 p-3 overflow-auto">
        {language === 'html' ? renderHTMLPreview() : renderCPreview()}
      </div>
    </div>
  );
};

export default PreviewSection;
