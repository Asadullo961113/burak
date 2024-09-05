/*
MIT 18 H-TASK: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"

*/ 

function musbatSon(arr:number[]) : string {
    const a = arr.filter(function (i) {
        return i > 0;
    })
    return a.join('');
};    

// Misol uchun:
console.log(musbatSon([-45, -3, -5, 7, -32])); // javob : 7




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
