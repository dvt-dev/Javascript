/**
 * Toán tử so sánh
    ==          -->     Bằng
    !=          -->     Khác
    >           -->     Lớn hơn
    <           -->     Nhỏ hơn
    >=          -->     Lớn hơn hoặc bằng
    <=          -->     Nhỏ hơn hoặc bằng

 */

/** Các giá trị khi covert sang Boolean thành false (Falsy)
 * 0
 * false
 * '' - ""
 * underfine
 * NaN
 * null
 * Còn lại đều thành true (Truthy)
 */

var a = 1;
var b = 2;

if (a == b) {
    console.log('Dieu kien dung !');
} else {
    console.log('Dieu kien sai !');
}

/**
 * Toán tử so sánh - P2
 * ===      --> Kiểm tra cả value và data type
 * !==
 */

var c = 8;
var d = '8';

console.log(c === d);
console.log(c !== d);

