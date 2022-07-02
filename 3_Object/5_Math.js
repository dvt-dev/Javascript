/**
 *  Math object
 * 1. Math.PI()             -->     Trả về số pi
 * 2. Math.round()          -->     Làm tròn số
 * 3. Math.abs()            -->     Giá trị tuyệt đối
 * 4. Math.ceil()           -->     Làm tròn trên
 * 5. Math.floor()          -->     Làm tròn dưới
 * 6. Math.random()         -->     Trả về 1 số thập phân < 1 ngẫu nhiên
 * 7. Math.min()            -->     Giá trị nhỏ nhất
 * 8. Math.max()            -->     Giá trị lớn nhất
 */

console.log(Math.PI);

console.log(Math.round(2.3453));    // 2

console.log(Math.abs(-5));          // 5

console.log(Math.ceil(3.012));      // 4

console.log(Math.floor(5.8888));    // 5

console.log(Math.random());
console.log(Math.floor(Math.random() * 10));

console.log(Math.min(-100, 0, 10, 1, 5));

console.log(Math.max(-100, 0, 10, 1, 5));

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

console.log(getRandomItem(arr));

