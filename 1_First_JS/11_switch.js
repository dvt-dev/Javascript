/**
 * Câu lệnh rẽ nhánh - Switch
 * Cách thức hoạt động:
 * - So sánh giá trị của từng case với expression
 * - Nếu đúng thì khối mã sẽ được thực thi và sau đó thoát vòng lặp
 * - Nếu k đúng sẽ bỏ qua và kiểm tra case tiếp theo
 * - Trường hợp cuối cùng sẽ dùng ' default '
 * 
 * Lưu ý 
 * - If else : khi sử dụng toán tử so sánh > < !==
 * - Switch case: khi biết trước giá trị so sánh và > 3 case
 */

/*
switch (expression) {
    case x:
        // code block
        break;
    case y:
        // code blok
        break;
    // Khối mã chung
    case z:
    case t:
        // code block
        break;
    default:
        // code block
}
*/

// Ví dụ: In ra các ngày trong tuần

switch (new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Ưednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
      
}

console.log(day);