/**
 * Call back ?
 * - Là hàm (function) được truyền qua đối số khi gọi 1 hàm khác
 * 
 * 1. Là hàm (function)
 * 2. Được truyền qua đối số
 * 3. Được gọi lại  (trong hàm nhận đối số)
 *  
  */

// ---- Map2 -----
/*
Array.prototype.map2 = function (callback) {
    var output = [], arrayLenght = this.length;
    for(var i = 0; i < arrayLenght; i++) {
        var result = callback(this[i]);
        output.push(result);
    }

    return output;
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];

var htmls = courses.map2(function(course) {
    return `<h2>${course}<h2>`;
});

console.log(htmls.join("")); 
*/

// --- Find2 ---
/*
Array.prototype.Find2 = function(callback) {
    var arrayLenght = this.length;
    for(var i = 0; i < arrayLenght; i++) {
        if(callback(this[i])) {
            break;
        }
    }
    return this[i];
}

const numbers = [1, 2, 3, 3, 2, 1, '3'];

console.log(numbers.Find2(function(number) {
    return number === 3;
}))
*/

Array.prototype.myMap = function(cb) {
    var output = [], arrayLenght = this.length;
    for(var i = 0; i < arrayLenght; i++) {
        var result = cb(this[i], i);
        output.push(result);
    }
    return output;
}

const numbers = [1, 2, 3];

console.log(numbers.myMap(function(number, index) {
    return number * index;
}))




