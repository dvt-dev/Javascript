/**
 * Toán tử logic
 * 1. && - And
 * 2. || - Or
 * 3. !  - Not
 */

var a = 1;
var b = 2;
var c = 3;

if (a > 0 && b > 0 && c > 0) {
    console.log('DIEU KIEN DUNG !');
} else {
    console.log('DIEU KIEN SAI !');
}

if (a < 0 || b < 0) {
    console.log('DIEU KIEN DUNG !');
} else {
    console.log('DIEU KIEN SAI !');
}

if (!(a < 0)) {
    console.log('DIEU KIEN DUNG');
}



// Hiểu hơn về câu lệnh điều kiện và phép so sánh

// && - And     --> Đọc từ vế trái sang vế phải (không thuộc 6 giá trị falsy), lấy kết quả cuối cùng bên vế phải
//                  Nếu gặp 1 giá trị falsy thì lấy giá trị đó luôn 

var result = 'A' && 'B' && 'C';

console.log(result); // C

// || - Or      --> Đọc từ trái quả phải, gặp gi

var result2 = 'A' || 'B' || 'C';
var result3 = 'A' || 'B' || undefined || 'D';

console.log(result2);
console.log(result3)