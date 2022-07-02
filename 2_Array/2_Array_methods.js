/**
 * Làm việc với Array
 * 
 1.     toString
    - Chuyển kiểu dữ liệu từ Array sang chuỗi
 2.     Join
    - Biến Array thành chuỗi
 3.     Pop
    - Xoá phần tử ở cuối mảng và trả lại chính phần tử đã 
    - Khi mảng rỗng thì trả về undefined
 4.     Push
    - Thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về độ 
 5.     Shirft
    - Xoá phần tử ở đầu mảng và trả về phần tử đã xoá
    - Khi mảng rỗng -> trả về undefined
 6.     Unshift
    - Thêm 1 hoặc nhiều phần tử vào đầu mảng và
 7.      Splicing
    - Xoá, cắt, chèn thêm phần tử mới vào mảng
    - splice(i, j, k, ...)
      + i: vị trí đặt con trỏ
      + j: số phần tử muốn xoá
      + k, ...: các elements muốn thêm vào
 8.      Concat
    - Nối 2 Array
 8.      Slicing
    - Cắt 1 hoặc nhiều phần tử của mảng
    - slice(i, j)
      + i: vị trí đặt con trở
      + j: vị trí kết thúc 
 */


var languages = [
    'Javascript',
    'PHP',
    'C++'
];

// 
// console.log(languages.toString());

//
// console.log(languages.join(', '))

// 
console.log(languages.pop());
console.log(languages);

//
console.log(languages.push('C#', 'Java'));
console.log(languages);

//
console.log(languages.shift());
console.log(languages);

//
console.log(languages.unshift('Ruby'));
console.log(languages);

//
languages.splice(1, 2);    // Xoá 2 phần tử từ vị trí index 1 
languages.splice(1, 0, 'Dart');     // Thêm phần tử 'Dart' vào trước vị trí thứ 1
console.log(languages);

// 
var languages2 = [
   '.NET',
   'ReactJS',
   'NodeJS'
];

console.log(languages.concat(languages2));

// 
console.log(languages.slice(1, 3));


