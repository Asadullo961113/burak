/** 
  project standarts
    - logging standarts
    - naming standarts
          function,method,variable => CAMEL
          class => PSACAL
          folder, file => KEBAB
          css => SNAKE
    - Error Handling      
 **/


/** 
 MIT 18 H2-TASK: 

Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141"
 **/

function getDigits(a: string) {
    let natija = ''; 
    for (let i = 0; i < a.length; i++) {
        const s = a[i];
        if (s >= '0' && s <= '9') {
            natija += s; 
        }
    }
    return natija; 
}

console.log(getDigits("1c2vd3")); // Javob: "123"





/*
MIT 18 H-TASK: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"

*/ 

/*function musbatSon(arr:number[]) : string {
    const a = arr.filter(function (i) {
        return i > 0;
    })
    return a.join('');
};    

// Misol uchun:
console.log(musbatSon([-45, -3, -5, 7, -32])); */ // javob : 7




/*MIT 18 G-TASK: 

Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.*/


/*function highestIndex(arr: number[]): number {
    if (arr.length === 0) {
        return -1;
    }

    let max_index = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[max_index]) {
            max_index = i;
        }
    }

    return max_index;
}

// Misol uchun:
console.log(highestIndex([45, 3, 5, 7, 32])); // 0 */
