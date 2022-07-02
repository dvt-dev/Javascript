/**
 * Kiểu dữ liệu trong Javascript
 
 1. Dữ liệu nguyên thuỷ - Primitive Data
    - Number
    - String
    - Boolean
    - Underfined
    - Null
    - Symbol

 2. Dữ liệu phức tạp - Complex Data
    - Function
    - Object
 */

// Number type
var a = 1;
var b = 1.5;

console.log(typeof a);

// String type
var  fullName = 'Do Tuan';

var name = 'Do \' Tuan';

// Boolean type
var isSuccess = true;

// Undefined type - Khai bao 1 biến mà k gán giá trị
var age;

// Null type - Nothing, không có gì
var isNull = null;

// Symbol type
var id = Symbol('id'); // unique

// Function
var myFunction = function() {
    alert ('Hi. Xin chao cac ban !');
}

myFunction();

// Object types

var myObject = {
    name : 'Do Tuan',
    age: 20,
    adress: 'Ha Noi',
    myFunction: function() {

    }
};

var myArray = [
    'Javascript',
    'PHP',
    'Java',
    'C++'
];

// Cách kiểm tra kiểu dữ liệu --> typeof
console.log(typeof myArray)




