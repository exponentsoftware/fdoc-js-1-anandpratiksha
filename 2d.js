function unique(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                return true;
            }

        }
    }
    return false;
}

console.log(unique([1, 4, 6, 2, 1]));
console.log(unique([1, 4, 6, 2, 3]));