/**
 * // Hàm (function) trong Javascript
 
1. Hàm ?
    - Một khối mã
    - Làm 1 việc cụ thể

2. Loại hàm
    - Built-in
    - Hàm tự định nghĩa

3. Tính chất
    - Không thực thi khi  định nghĩa
    - Sẽ thực thi khi được gọi
    - Có thể nhận tham số
    - Có thể trả về 1 giá trị

4. Tạo hàm đầu tiên

 * // Tham số hàm

1. Tham số ?
    - Định nghĩa?
    - Kiểu dữ liệu?
    - Tính private?
    - 1 tham số
    - Nhiều tham số

2. Truyền tham số
    - 1 tham số
    - Nhiều tham số

3. Arguments?
    - Đối tượng arguments 
    - Giới thiệu vòng for of

 * // Return trong hàm
    - Trả về

 * // Một số điều cần biết về function
1. Khi function đặt trùng tên?
    - function định nghĩa sau sẽ ghi đè function định nghĩa trước
2. Khai báo biến trong hàm?
    - Phạm vi sử dụng chỉ trong hàm 
3. Định nghĩa hàm trong hàm?
    - 

 * // Các loại function
1. Declaration function
2. Expression function
3. Arrow function
 */

function showDialog() {
    alert('Xin chao cac ban !');
}

showDialog();

//

function writeLog(message) { // tham số
    console.log(message);
}

writeLog('Test message');   // đối số

function writeLog2() {
    var myString = '';
    for (var param of arguments) {
        myString += `${param} - `
    }
    console.log(myString);
}

writeLog2('Log 1', 'Log 2', 'Log 3');

// Return

function sum(a, b) {
    return a + b;
}

var result = sum(2, 3);

console.log(result);

//
function showMessage() {
    console.log('Message 1');
}

function showMessage() {
    console.log('Message 2');
}

showMessage();

function showMessage2() {
    function showMessage3() {
        console.log('Message 3');
    }

    showMessage3();
}

showMessage2();

//
// Declaration function
function showMessage() {
    
}

// Expression function
var showMessage2 = function() {

}

setTimeout(function() {

});

var myObject = {
    myFunction: function() {

    }
}


