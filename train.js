/* MIT 18 G-TASK: 

Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini. */

function highestIndex(arr) {
    if(arr.length === 0){
        return -1;
    }
    let max_index = 0;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > arr[max_index]){
            max_index = i;
        }
    }
    return max_index;
}
console.log(highestIndex([45,3,5,7,32]));    