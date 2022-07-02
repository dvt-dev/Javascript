/**
 * Số trong Javascript
1. Khai báo số?
2. Đối tượng Number
    -   Number.isFinite()           - Xác định xem giá trị đã cho có phải số hữu hạn hay không. Trả về boolean
    -   Number.isInteger()          - Xác định xem giá tị đã cho có phải số nguyên hay không. Trả về boolean
    -   Number.parseFloat()         - Chuyển đổi chuỗi đã cho thành 1 số dấu phẩy động
    -   Number.parseInt()           - Chuyển đổi chuỗi đã cho thành số nguyên
    -   Number.prototype.toFixed()  - Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có chữ số chính xác sau số thập phân
    -   Number.prototype.toString() - Chuyển đổi và trả về số đã cho dưới dạng chuỗi

 */

var milion = 100000;
var milion2 = 1e6;

console.log(milion2);

var ontherNumber = new Number(88);

//
console.log(Number.isFinite(2/0));      // false
console.log(Number.isFinite(10/2));      // true

// 
console.log(Number.isInteger(2/3));      // false
console.log(Number.isInteger(8888));      // false

//
console.log(Number.parseFloat('10'));   // 10
console.log(Number.parseFloat('Hello World'));   // NaN
console.log(Number.parseFloat('100.01'));   // 100.01
console.log(Number.parseFloat('11,11'));   // 11
console.log(Number.parseFloat('10 68 88'));   // 10

// 
console.log(Number.parseInt('10'));   // 10
console.log(Number.parseInt('10,1234'));   // 10
console.log(Number.parseInt('10.567'));   // 10
console.log(Number.parseInt('20 is my age'));   // 20

//
var numberObject = 1234.56789
console.log(numberObject.toFixed());    // 1235
console.log(numberObject.toFixed(1));    // 1234.6
console.log(numberObject.toFixed(3));    // 1234.568

//
var Number = 10;
console.log(Number.toString());     // '10'














