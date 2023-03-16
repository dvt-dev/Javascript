/**
 * Đệ quy 
 * - Hàm tự gọi lại chính nó
 * 1. Xác định điểm dừng
 * 2. Logic handle ==> tạo ra điểm dừng
 */


// Tính giai thừa

function giaiThua(number) {
    if (number > 0) {
        return number * giaiThua(number - 1);
    }
    return 1;
}

console.log(giaiThua(6));

// Tính tổng các số từ 1 đến n

function tinhTong(number) {
    if(number == 0) {
        return 0;
    }
    return number + tinhTong(number - 1);
} 

console.log(tinhTong(10));

// Finonacci

function Fibonacci(n) {
    if (n == 1 || n == 2) {
        return 1;
    }
    return Fibonacci(n-1) + Fibonacci(n-2);
}

console.log(Fibonacci(5));