function removeDuplicate(arr) {
    const seen = new Set();
    const duplicate = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            duplicate.add(arr[i]);
        };
        seen.add(arr[i])
    };
    return Array.from(duplicate)
}
console.log(removeDuplicate([1, 1, 1, 2, 2, 4, 5, 5, 6]));
