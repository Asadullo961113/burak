function highestIndex(arr: number[]): number {
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
console.log(highestIndex([45, 3, 5, 7, 32])); // 0
