
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CheatCodeSelectorProps {
  language: 'html' | 'c';
  onSelect: (code: string) => void;
}

const htmlCheats = {
  'text-formatting': {
    name: 'টেক্সট ফরম্যাটিং',
    code: `<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <title>টেক্সট ফরম্যাটিং</title>
</head>
<body>
    <p>সাধারণ প্যারাগ্রাফ</p>
    <b>বোল্ড টেক্সট</b><br>
    <i>ইটালিক টেক্সট</i><br>
    <del>ডিলিট টেক্সট</del><br>
    <big>বড় টেক্সট</big><br>
    <small>ছোট টেক্সট</small><br>
    <sub>সাবস্ক্রিপ্ট</sub><br>
    <sup>সুপারস্ক্রিপ্ট</sup><br>
    <font color="red" size="5">রঙিন টেক্সট</font>
</body>
</html>`
  },
  'headings': {
    name: 'সকল হেডিং ট্যাগ',
    code: `<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <title>হেডিং ট্যাগসমূহ</title>
</head>
<body>
    <h1>প্রধান শিরোনাম (H1)</h1>
    <h2>উপশিরোনাম (H2)</h2>
    <h3>ছোট শিরোনাম (H3)</h3>
    <h4>আরও ছোট শিরোনাম (H4)</h4>
    <h5>খুব ছোট শিরোনাম (H5)</h5>
    <h6>সবচেয়ে ছোট শিরোনাম (H6)</h6>
</body>
</html>`
  },
  'links': {
    name: 'সকল ধরনের লিংক',
    code: `<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <title>লিংকসমূহ</title>
</head>
<body>
    <h2>হাইপারলিংক:</h2>
    <a href="https://google.com">গুগলে যান</a><br>
    <a href="https://facebook.com" target="_blank">নতুন ট্যাবে ফেসবুক</a>
    
    <h2>ইমেইল লিংক:</h2>
    <a href="mailto:example@email.com">ইমেইল পাঠান</a><br>
    <a href="mailto:test@gmail.com?subject=বিষয়&body=বার্তা">বিস্তারিত ইমেইল</a>
</body>
</html>`
  },
  'lists': {
    name: 'সকল ধরনের তালিকা',
    code: `<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <title>তালিকাসমূহ</title>
</head>
<body>
    <h2>অসংখ্যাযুক্ত তালিকা:</h2>
    <ul>
        <li>প্রথম আইটেম</li>
        <li>দ্বিতীয় আইটেম</li>
        <li>তৃতীয় আইটেম</li>
    </ul>
    
    <h2>সংখ্যাযুক্ত তালিকা:</h2>
    <ol>
        <li>প্রথম ধাপ</li>
        <li>দ্বিতীয় ধাপ</li>
        <li>তৃতীয় ধাপ</li>
    </ol>
    
    <h2>নেস্টেড তালিকা:</h2>
    <ul>
        <li>মূল আইটেম
            <ol>
                <li>উপ-আইটেম ১</li>
                <li>উপ-আইটেম ২</li>
            </ol>
        </li>
    </ul>
</body>
</html>`
  },
  'media': {
    name: 'মিডিয়া (ছবি, অডিও, ভিডিও)',
    code: `<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <title>মিডিয়া এলিমেন্ট</title>
</head>
<body>
    <h2>ছবি:</h2>
    <img src="image.jpg" alt="নমুনা ছবি" width="300" height="200">
    
    <h2>অডিও:</h2>
    <audio controls>
        <source src="audio.mp3" type="audio/mpeg">
        আপনার ব্রাউজার অডিও সাপোর্ট করে না।
    </audio>
    
    <h2>ভিডিও:</h2>
    <video width="400" height="300" controls>
        <source src="video.mp4" type="video/mp4">
        আপনার ব্রাউজার ভিডিও সাপোর্ট করে না।
    </video>
    
    <h2>অ্যানিমেশন (GIF):</h2>
    <img src="animation.gif" alt="অ্যানিমেশন" width="200">
</body>
</html>`
  },
  'advanced-table': {
    name: 'উন্নত টেবিল',
    code: `<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <title>উন্নত টেবিল</title>
    <style>
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid black; padding: 8px; text-align: center; }
        th { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <table>
        <caption>শিক্ষার্থীদের তথ্য</caption>
        <thead>
            <tr>
                <th>ছবি</th>
                <th>নাম</th>
                <th>রোল</th>
                <th>নম্বর</th>
                <th>ইমেইল</th>
                <th>ওয়েবসাইট</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="student1.jpg" width="50" alt="ছাত্র"></td>
                <td>আহমেদ আলী</td>
                <td>101</td>
                <td>৮৫</td>
                <td><a href="mailto:ahmed@email.com">ahmed@email.com</a></td>
                <td><a href="https://ahmed.com">ahmed.com</a></td>
            </tr>
            <tr>
                <td><img src="student2.jpg" width="50" alt="ছাত্রী"></td>
                <td>ফাতিমা খান</td>
                <td>102</td>
                <td>৯২</td>
                <td><a href="mailto:fatima@email.com">fatima@email.com</a></td>
                <td><a href="https://fatima.com">fatima.com</a></td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3"><b>মোট শিক্ষার্থী: ২</b></td>
                <td><b>গড়: ৮৮.৫</b></td>
                <td colspan="2"><b>সর্বোচ্চ: ৯২</b></td>
            </tr>
        </tfoot>
    </table>
</body>
</html>`
  },
  'advanced-form': {
    name: 'উন্নত ফর্ম',
    code: `<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <title>উন্নত ফর্ম</title>
</head>
<body>
    <form action="#" method="post" enctype="multipart/form-data">
        <fieldset>
            <legend>ব্যক্তিগত তথ্য</legend>
            
            <label for="name">নাম:</label>
            <input type="text" id="name" name="name" required><br><br>
            
            <label for="email">ইমেইল:</label>
            <input type="email" id="email" name="email" required><br><br>
            
            <label for="phone">ফোন:</label>
            <input type="tel" id="phone" name="phone"><br><br>
            
            <label for="dob">জন্ম তারিখ:</label>
            <input type="date" id="dob" name="dob"><br><br>
            
            <label>লিঙ্গ:</label>
            <input type="radio" id="male" name="gender" value="male">
            <label for="male">পুরুষ</label>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">মহিলা</label><br><br>
            
            <label for="city">শহর:</label>
            <select id="city" name="city">
                <option value="">নির্বাচন করুন</option>
                <option value="dhaka">ঢাকা</option>
                <option value="chittagong">চট্টগ্রাম</option>
                <option value="sylhet">সিলেট</option>
            </select><br><br>
            
            <label for="photo">ছবি:</label>
            <input type="file" id="photo" name="photo" accept="image/*"><br><br>
            
            <label for="message">বার্তা:</label><br>
            <textarea id="message" name="message" rows="4" cols="50"></textarea><br><br>
            
            <input type="checkbox" id="agree" name="agree" required>
            <label for="agree">আমি শর্তাবলীতে সম্মত</label><br><br>
            
            <input type="submit" value="জমা দিন">
            <input type="reset" value="রিসেট">
        </fieldset>
    </form>
</body>
</html>`
  }
} as const;

const cCheats = {
  'area-calculation': {
    name: 'বিভিন্ন ক্ষেত্রফল নির্ণয়',
    code: `#include <stdio.h>
#define PI 3.14159

int main() {
    int choice;
    float length, width, radius, base, height, area;
    
    printf("ক্ষেত্রফল নির্ণয় প্রোগ্রাম\\n");
    printf("১. আয়তক্ষেত্র\\n২. বর্গক্ষেত্র\\n৩. বৃত্ত\\n৪. ত্রিভুজ\\n");
    printf("আপনার পছন্দ: ");
    scanf("%d", &choice);
    
    switch(choice) {
        case 1:
            printf("দৈর্ঘ্য ও প্রস্থ লিখুন: ");
            scanf("%f %f", &length, &width);
            area = length * width;
            printf("আয়তক্ষেত্রের ক্ষেত্রফল: %.2f\\n", area);
            break;
        case 2:
            printf("বাহুর দৈর্ঘ্য লিখুন: ");
            scanf("%f", &length);
            area = length * length;
            printf("বর্গক্ষেত্রের ক্ষেত্রফল: %.2f\\n", area);
            break;
        case 3:
            printf("ব্যাসার্ধ লিখুন: ");
            scanf("%f", &radius);
            area = PI * radius * radius;
            printf("বৃত্তের ক্ষেত্রফল: %.2f\\n", area);
            break;
        case 4:
            printf("ভূমি ও উচ্চতা লিখুন: ");
            scanf("%f %f", &base, &height);
            area = 0.5 * base * height;
            printf("ত্রিভুজের ক্ষেত্রফল: %.2f\\n", area);
            break;
        default:
            printf("ভুল পছন্দ!\\n");
    }
    
    return 0;
}`
  },
  'temperature-conversion': {
    name: 'তাপমাত্রার পরিবর্তন',
    code: `#include <stdio.h>

int main() {
    int choice;
    float temp, converted;
    
    printf("তাপমাত্রা রূপান্তর প্রোগ্রাম\\n");
    printf("১. সেলসিয়াস থেকে ফারেনহাইট\\n");
    printf("২. ফারেনহাইট থেকে সেলসিয়াস\\n");
    printf("৩. সেলসিয়াস থেকে কেলভিন\\n");
    printf("আপনার পছন্দ: ");
    scanf("%d", &choice);
    
    switch(choice) {
        case 1:
            printf("সেলসিয়াস তাপমাত্রা লিখুন: ");
            scanf("%f", &temp);
            converted = (temp * 9.0/5.0) + 32;
            printf("%.2f°C = %.2f°F\\n", temp, converted);
            break;
        case 2:
            printf("ফারেনহাইট তাপমাত্রা লিখুন: ");
            scanf("%f", &temp);
            converted = (temp - 32) * 5.0/9.0;
            printf("%.2f°F = %.2f°C\\n", temp, converted);
            break;
        case 3:
            printf("সেলসিয়াস তাপমাত্রা লিখুন: ");
            scanf("%f", &temp);
            converted = temp + 273.15;
            printf("%.2f°C = %.2fK\\n", temp, converted);
            break;
        default:
            printf("ভুল পছন্দ!\\n");
    }
    
    return 0;
}`
  },
  'sum-calculation': {
    name: 'সংখ্যার যোগফল নির্ণয়',
    code: `#include <stdio.h>

int main() {
    int n, i, sum = 0, num;
    
    printf("কতটি সংখ্যার যোগফল বের করবেন? ");
    scanf("%d", &n);
    
    printf("%d টি সংখ্যা লিখুন:\\n", n);
    for(i = 1; i <= n; i++) {
        printf("সংখ্যা %d: ", i);
        scanf("%d", &num);
        sum += num;
    }
    
    printf("সকল সংখ্যার যোগফল: %d\\n", sum);
    
    // ১ থেকে n পর্যন্ত যোগফল
    int naturalSum = n * (n + 1) / 2;
    printf("১ থেকে %d পর্যন্ত যোগফল: %d\\n", n, naturalSum);
    
    return 0;
}`
  },
  'average-calculation': {
    name: 'গড় নির্ণয়',
    code: `#include <stdio.h>

int main() {
    int n, i;
    float num, sum = 0, average;
    
    printf("কতটি সংখ্যার গড় বের করবেন? ");
    scanf("%d", &n);
    
    printf("%d টি সংখ্যা লিখুন:\\n", n);
    for(i = 1; i <= n; i++) {
        printf("সংখ্যা %d: ", i);
        scanf("%f", &num);
        sum += num;
    }
    
    average = sum / n;
    
    printf("সকল সংখ্যার যোগফল: %.2f\\n", sum);
    printf("সংখ্যাগুলোর গড়: %.2f\\n", average);
    
    return 0;
}`
  },
  'max-min-finder': {
    name: 'বৃহত্তম ও ক্ষুদ্রতম সংখ্যা',
    code: `#include <stdio.h>

int main() {
    int n, i, num, max, min;
    
    printf("কতটি সংখ্যা তুলনা করবেন? ");
    scanf("%d", &n);
    
    printf("প্রথম সংখ্যা লিখুন: ");
    scanf("%d", &num);
    max = min = num;
    
    for(i = 2; i <= n; i++) {
        printf("সংখ্যা %d: ", i);
        scanf("%d", &num);
        
        if(num > max) {
            max = num;
        }
        if(num < min) {
            min = num;
        }
    }
    
    printf("বৃহত্তম সংখ্যা: %d\\n", max);
    printf("ক্ষুদ্রতম সংখ্যা: %d\\n", min);
    printf("পার্থক্য: %d\\n", max - min);
    
    return 0;
}`
  },
  'series-calculation': {
    name: 'ধারার যোগফল ও গুণফল',
    code: `#include <stdio.h>

int main() {
    int n, i, choice;
    long long sum = 0, product = 1;
    
    printf("ধারা গণনা প্রোগ্রাম\\n");
    printf("১. ১+২+৩+...+n যোগফল\\n");
    printf("২. ১×২×৩×...×n গুণফল (ফ্যাক্টোরিয়াল)\\n");
    printf("৩. ১+৪+৯+...+n² বর্গের যোগফল\\n");
    printf("আপনার পছন্দ: ");
    scanf("%d", &choice);
    
    printf("n এর মান লিখুন: ");
    scanf("%d", &n);
    
    switch(choice) {
        case 1:
            sum = n * (n + 1) / 2;
            printf("১+২+৩+...+%d = %lld\\n", n, sum);
            break;
        case 2:
            for(i = 1; i <= n; i++) {
                product *= i;
            }
            printf("%d! = %lld\\n", n, product);
            break;
        case 3:
            sum = n * (n + 1) * (2 * n + 1) / 6;
            printf("১²+২²+৩²+...+%d² = %lld\\n", n, sum);
            break;
        default:
            printf("ভুল পছন্দ!\\n");
    }
    
    return 0;
}`
  },
  'even-odd-checker': {
    name: 'জোড়-বিজোড় নির্ণয়',
    code: `#include <stdio.h>

int main() {
    int num, choice;
    
    printf("জোড়-বিজোড় নির্ণয় প্রোগ্রাম\\n");
    printf("১. একটি সংখ্যা পরীক্ষা\\n");
    printf("২. একাধিক সংখ্যা পরীক্ষা\\n");
    printf("আপনার পছন্দ: ");
    scanf("%d", &choice);
    
    if(choice == 1) {
        printf("একটি সংখ্যা লিখুন: ");
        scanf("%d", &num);
        
        if(num % 2 == 0) {
            printf("%d একটি জোড় সংখ্যা\\n", num);
        } else {
            printf("%d একটি বিজোড় সংখ্যা\\n", num);
        }
    } 
    else if(choice == 2) {
        int n, i, evenCount = 0, oddCount = 0;
        
        printf("কতটি সংখ্যা পরীক্ষা করবেন? ");
        scanf("%d", &n);
        
        for(i = 1; i <= n; i++) {
            printf("সংখ্যা %d: ", i);
            scanf("%d", &num);
            
            if(num % 2 == 0) {
                printf("%d জোড়\\n", num);
                evenCount++;
            } else {
                printf("%d বিজোড়\\n", num);
                oddCount++;
            }
        }
        
        printf("মোট জোড় সংখ্যা: %d\\n", evenCount);
        printf("মোট বিজোড় সংখ্যা: %d\\n", oddCount);
    }
    
    return 0;
}`
  },
  'lcm-gcd-finder': {
    name: 'লসাগু ও গসাগু নির্ণয়',
    code: `#include <stdio.h>

int gcd(int a, int b) {
    if (b == 0)
        return a;
    return gcd(b, a % b);
}

int lcm(int a, int b) {
    return (a * b) / gcd(a, b);
}

int main() {
    int num1, num2, result_gcd, result_lcm;
    
    printf("দুটি সংখ্যা লিখুন: ");
    scanf("%d %d", &num1, &num2);
    
    result_gcd = gcd(num1, num2);
    result_lcm = lcm(num1, num2);
    
    printf("%d এবং %d এর:\\n", num1, num2);
    printf("গসাগু (GCD): %d\\n", result_gcd);
    printf("লসাগু (LCM): %d\\n", result_lcm);
    
    // যাচাই
    printf("\\nযাচাই: %d × %d = %d\\n", result_gcd, result_lcm, result_gcd * result_lcm);
    printf("গুণফল: %d × %d = %d\\n", num1, num2, num1 * num2);
    
    return 0;
}`
  },
  'leap-year-checker': {
    name: 'অধিবর্ষ নির্ণয়',
    code: `#include <stdio.h>

int isLeapYear(int year) {
    if (year % 400 == 0) {
        return 1;  // অধিবর্ষ
    }
    else if (year % 100 == 0) {
        return 0;  // অধিবর্ষ নয়
    }
    else if (year % 4 == 0) {
        return 1;  // অধিবর্ষ
    }
    else {
        return 0;  // অধিবর্ষ নয়
    }
}

int main() {
    int year, choice;
    
    printf("অধিবর্ষ নির্ণয় প্রোগ্রাম\\n");
    printf("১. একটি বছর পরীক্ষা\\n");
    printf("২. একাধিক বছর পরীক্ষা\\n");
    printf("আপনার পছন্দ: ");
    scanf("%d", &choice);
    
    if(choice == 1) {
        printf("বছর লিখুন: ");
        scanf("%d", &year);
        
        if(isLeapYear(year)) {
            printf("%d একটি অধিবর্ষ\\n", year);
            printf("এই বছরে ফেব্রুয়ারিতে ২৯ দিন আছে\\n");
        } else {
            printf("%d অধিবর্ষ নয়\\n", year);
            printf("এই বছরে ফেব্রুয়ারিতে ২৮ দিন আছে\\n");
        }
    }
    else if(choice == 2) {
        int startYear, endYear, leapCount = 0;
        
        printf("শুরুর বছর: ");
        scanf("%d", &startYear);
        printf("শেষের বছর: ");
        scanf("%d", &endYear);
        
        printf("%d থেকে %d পর্যন্ত অধিবর্ষগুলো:\\n", startYear, endYear);
        
        for(year = startYear; year <= endYear; year++) {
            if(isLeapYear(year)) {
                printf("%d ", year);
                leapCount++;
            }
        }
        
        printf("\\nমোট অধিবর্ষ: %d টি\\n", leapCount);
    }
    
    return 0;
}`
  }
} as const;

const CheatCodeSelector = ({ language, onSelect }: CheatCodeSelectorProps) => {
  const cheats = language === 'html' ? htmlCheats : cCheats;

  return (
    <Select onValueChange={(value) => {
      if (language === 'html') {
        const selectedCheat = htmlCheats[value as keyof typeof htmlCheats];
        if (selectedCheat) {
          onSelect(selectedCheat.code);
        }
      } else {
        const selectedCheat = cCheats[value as keyof typeof cCheats];
        if (selectedCheat) {
          onSelect(selectedCheat.code);
        }
      }
    }}>
      <SelectTrigger className="w-full bg-white border-gray-300">
        <SelectValue placeholder={`${language === 'html' ? 'HTML' : 'C'} চিট কোড নির্বাচন করুন`} />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(cheats).map(([key, cheat]) => (
          <SelectItem key={key} value={key}>
            {cheat.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CheatCodeSelector;
