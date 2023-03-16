/**
 * Làm việc với Array
 * 
 1.     toString
    - Chuyển kiểu dữ liệu từ Array sang chuỗi
 2.     Join
    - Biến Array thành chuỗi
 3.     Pop
    - Xoá phần tử ở cuối mảng và trả lại chính phần tử đã xoá
    - Khi mảng rỗng thì trả về undefined
 4.     Push
    - Thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng
 5.     Shirft
    - Xoá phần tử ở đầu mảng và trả về phần tử đã xoá
    - Khi mảng rỗng -> trả về undefined
 6.     Unshift
    - Thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng
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
      + i: vị trí đặt con trỏ
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


/**
 * Array methods  -  P2
 * # 1. Call back ?
      - Là hàm
      - Truyền qua đối số
      - Được gọi lại (trong hàm nhận đối số)

   # 2. forEach()
      // cú pháp
      <tên mảng>.forEach(function(<tham_số_1>, <tham_số_2>) {
            -- code --
      });

      // cách sử dụng
         - dùng để duyệt qua từng phần tử của mảng
         - truyển vào 1 call back
         - mỗi lần duyệt qua từng phần tử của mảng sẽ gọi callback
         - ý nghĩa các tham số của callback
            + tham số 1: phần tử hiện tại
            + tham số 2: vị trí của phần từ hiện tại 
   
   # 3. every()
      // cú pháp
      <tên mảng>.every(function(<tham_số_1>, <tham_số_2>) {
            -- code --
      });

      // cách sử dụng
         - dùng để kiểm tra [tất_cả] các phần tử trong mảng phải thoả mãn 1 điều kiện nào đó
         - trả về kiểu boolean
         - nếu gặp 1 phần tử không thoả mãn điều kiện thì sẽ dừng và trả về false
         - nếu tất cả cách phần tử đều thoả mãn thì sẽ trả về true

   # 4. some()
      // cú pháp
      <tên mảng>.some(function(<tham_số_1>, <tham_số_2>) {
            -- code --
      });

      // cách sử dụng
         - dùng để kiểm tra chỉ 1 phần tử thoả mãn điều kiện
         - trả về kiểu boolean
         - nếu gặp 1 phần tử thoả mãn điều kiện thì sẽ dừng và trả về true
         - nếu tất cả các phần tử đều không thoả mãn điều kiện thì sẽ trả về false

   # 5. find()
      // cú pháp
      <tên mảng>.find(function(<tham_số_1>, <tham_số_2>) {
            -- code --
      });

      // cách sử dụng
         - dùng để tìm 1 phần tử thoả mãn 1 điều kiện nào đó
         - trả về phần tử
         - nếu gặp phần tử thoả mãn điều kiện thì sẽ dừng và trả về phần tử đó
         - nếu tất cả p
         
   # 6. filter()
      // cú pháp
      <tên mảng>.filter(function(<tham_số_1>, <tham_số_2>) {
            -- code --
      });

      // cách sử dụng
         - dùng để tìm tất cả các phần tử thoả mãn điều kiện
         - trả về mảng chứa các phần tử thoả mãn điều kiện
         - không có phần tử thoả mãn điều kiện thì sẽ trả về mảng rỗng []

   # 7. map()
      // cú pháp
      <tên_mảng>.map(function(<tham_số_1>, <tham_số_2>){
      -- làm gì đó với tham số 1 và 2 --
      return <thứ_gì_đó>
      });

      // cách sử dụng
         - dùng khi muốn sử dụng lại dữ liệu của 1 mảng và trả vể mảng mới
         có số phần tử bằng mảng cũ
         
 */   

// VD
var courses = [
   {
      id: 1,
      name: 'Javascript',
      coin: 250
   },
   {
      id: 2,
      name: 'HTML, CSS',
      coin: 0
   },
   {
      id: 3,
      name: 'NodeJS',
      coin: 100
   },
   {
      id: 4,
      name: 'PHP',
      coin: 0
   },
   {
      id: 5,
      name: 'Ruby',
      coin: 150
   },
   {
      id: 6,
      name: 'ReactJS',
      coin: 300
   },
   {
      id: 7,
      name: 'Ruby',
      coin: 150
   }
]


// forEach()
courses.forEach(function(course, index) {
   console.log(index, course);
});

// every()
var isFree = courses.every(function(course, index) {
   return course.coin === 0;
});

console.log(isFree);

// some()
var isFree2 = courses.some(function(course, index) {
   return course.coin === 0;
});

console.log(isFree2);

// find()
var course = courses.find(function(course, index) {
   return course.name === 'PHP';
});

console.log(course);

// filter()
var listCourse = courses.filter(function(course, index) {
   return course.name === 'Ruby';
});

console.log(listCourse);

// map()
console.log('Map()')
function coursesHandler(course, index, originArray) {
   // console.log(courses);
   return {
      id: course.id,
      name: `Khoa hoc: ${course.name}`,
      coin: course.coin,
      coinText: `Gia: ${course.coin}`,
      index: index,
      originArray: originArray
   }
}

var newCourses = courses.map(coursesHandler);

console.log(newCourses)












