/**
 * // Mảng trong Javascript
 
1. Tạo mảng
    - Cách tạo  - 2 cách
    - Sử dụng cách nào? Tại sao? - C1
    - Kiểm tra data type?

2. Truy xuất mảng
    - Độ dài mảng
    - Lấy phần tử theo index
 */

    // C1
var languages = [
    'Javascript',
    'PHP',
    'C++',
    null,
    undefined,
    function() {

    }
];

console.log(languages);

    // C2
var languages2 = new Array(
    'Javascript',
    'PHP',
    'C++',
    null,
    undefined,
    function() {

    }
);

console.log(languages2);

//
console.log(typeof languages);  // object
console.log(Array.isArray(languages));  // kiểm tra có phải array hay không ?
console.log(languages.length);      // kiểm tra độ dài mảng
console.log(languages[3]);
