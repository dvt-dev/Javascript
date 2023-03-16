/**
 * While loop
 * - Lặp qua một khối mã miễn là mọt điều kiện được chỉ định là đúng
         while (condition) {
            // code block to be executed
        }
 */

var i = 0;

while (i < 1000) {
    i++;
    console.log(i);
}

var myArray = [1, 3, 5, 7, 9];

var i = 0;
while (i < myArray.length) {
    console.log(myArray[i]);
    i++;
}