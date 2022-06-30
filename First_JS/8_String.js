/**
 * Chuỗi trong Javascript

1. Tạo chuỗi
    - Các cách tạo chuỗi (2 cách)
    - Nên dùng cách nào? Lý do? -> C1
    - Kiểm tra data type
2. Một số case sử dụng backslash (\)
3. Xem độ dài chuỗi
4. Chú ý độ dài khi viết code
    - Tối đa là 80 kí tự trên 1 dòng
5. Template string ES6

 * // Làm việc với chuỗi
1. Length
2. Find index
3. Cut string
4. Replace
5. Convert to upper case
6. Convert to lower case
7. Trim
8. Split
9. get a character by index
 */

//
var fullName = 'Do Tuan'; // C1
console.log(typeof fullName); // String

var fullName2 = new String('Do Tuan'); // C2
console.log(typeof fullName2);  // Object

// 
var fullName3 = 'Xin chao \'cac ban\'';
console.log(fullName3);

var fullName4 = 'Day la dau \\';
console.log(fullName4);

//
console.log(fullName4.length)

//
var firstName = 'Do';
var lastName = 'Tuan';

console.log(`Toi la: ${firstName} ${lastName}`);


var myString = 'Hoc JS tai F8!';

// Length   -   Độ dài của chuỗi
console.log(myString.length);

// Find index   -   Tìm vị trí của 1 kí tự trong chuỗi - Vị trí đọc từ 0
console.log(myString.indexOf('JS'));
console.log(myString.search('JS'));

// Cut string   -   Cắt chuỗi
console.log(myString.slice(4, 6));

// Replace  -   Ghi đè
console.log(myString.replace('JS', 'Javascript'));
// console.log(myString.replace(/JS/g, 'Javascript'));

// Convert to upper case    -   Chuyển đổi thành chữ hoa
console.log(myString.toUpperCase());

// Conver to lowe case      -   Chuyển đổi thành chữ thường
console.log(myString.toLowerCase());

// Trim     -   Loại bỏ khoảng trắng thừa ở 2 đầu
console.log(myString.trim());

// Split    -   Cắt 1 chuỗi thành array dựa vào 1 điểm chung
var languages = 'Javascript, PHP, Ruby';
console.log(languages.split(', '));


// Get a character by index     -   lấy 1 kí tự từ index cho trước
var myString2 = 'Do Tuan';
console.log(myString2.charAt(0));   // D
console.log(myString.charAt(10));   // Chuỗi rỗng
console.log(myString2[5]);      // a
console.log(myString2[10]);     // underfine



