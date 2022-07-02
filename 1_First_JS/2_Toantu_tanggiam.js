 
 /**
  * Toán tử ++ và --
  * Toán tử ++
    - Giúp tăng giá trị của 1 biến mang giá trị số lên 1
    - Có 2 cách để sử dụng toán tử ++ là:
        + Dùng làm hậu tố: variable++ (toán thử nằm sau biến)
        + Dùng làm tiền tố: ++variable (toán tử nằm trước biến)     
  * Toán tử --
    - Cách hoạt động tương tự như toán tử ++, điểm khác biệt là thay vì cộng thêm 1, thì toán tử -- sẽ trừ đi 1 

  * Tổng kết
    .   x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
    .   ++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
    .   x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
    .   --x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảmm
  */

// 1.  Sử dụng ++ làm hậu tố - Postfix
//      - Toán tử ++ khi dùng làm hậu tố sẽ tăng giá trị của biến lên 1 và trả về giá trị trước khi tăng

console.log('Hậu tố: ');
var number1 = 1;

number1++;   // dùng làm hậu tố, ++ ở sau biến
console.log(number1); // 2
console.log(number1++); // 2
console.log(number1); // 3


// 2.   Sử dụng ++ làm tiền tố - Prefix
//      - Toán tử ++ khi dùng làm tiền tố sẽ tăng giá trị của biến lên 1 và trả về giá trị sau tăng

console.log('Tiền tố: ');

var number2 = 2;
++number2;     // dùng làm tiền tố, ++ ở phía trước
console.log(number2); // 3

console.log(++number2);  // 4
console.log(number2) // 4

var a = 2;
var b = a++ * 2 - --a * 2;
// b = 2 * 2 - 2 * 2 

console.log(b);




