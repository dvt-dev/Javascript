// includes methods

/**
 * Tồn tại sẵn trong prototype của array và string
 * Kiểm tra trong chuỗi có chứa 1 từ nào đó hay không
 * Kiểm tra trong mảng chứa 1 phần tử nào đó hay không
 * Tìm thấy --> trả về true, không tìm thấy --> trả về false
 */

/**
 * Cú pháp
    <string/array>.includes(<tham_số_1>, <tham_số_2>)
    - tham số 1: Giá trị cần tìm kiếm
    - tham số 2: vị trí bắt đầu tìm kiếm, mặc địch là 0
 */

var tilte = "Responsive web design";
console.log(tilte.includes('Responsive', 1));

var courses = ['Java', 'JavaScript', 'PHP'];
console.log(courses.includes('JavaScript', 2));
