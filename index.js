

arr = [29, 16, 25, 28, 17, 7, 24, 18, 10, 15, 30, 26, 19, 20, 3, 9, 6, 8, 14, 4, 21, 5, 11, 1, 22, 27, 13, 12, 2, 23];


const insertionSort = () => {

    if (arr.length === 1) {

        return arr;
    }

    for (i = 1; i < arr.length; i++) {

        for (j = i; j >= 1; j-- ) {

            if (arr[i] < arr[i-j]) {

                arr.splice(i-j, 0, arr[i]);
                arr.splice(i+1, 1);
            };
        };
    };

    return arr;
};

console.log( insertionSort(arr) );