
// Destructuring, Rest

/**
 * Destructuring: Phân rã
 *  -- Sử dụng để lấy ra các phần tử từ array, object
 * Rest parameters:
 *  -- Lấy những phần tử còn lại sử dụng destructuring
 */

// * Sử dụng với array

var arr = [1, 2, 3, 4, 5];

// Cách thông thường

// var a = arr[0];
// var b = arr[1];
// var c = arr[2];

// Destructuring
// var [a, b, c] = arr;
// var [a, , ,d] = arr    // Lấy a và d
// console.log(a,d);

// Sử dụng Destructuring mà Rest parameters để lấy những phần tử còn lại
// Rest là tên biến có thể đặt tuỳ ý
var [a, ...Rest] = arr;

console.log(a);
console.log(Rest);

// ---------------------- //

// * Sử dụng với Object
// Lấy ra tên biến phải trùng với tên key

var course = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address'
}

// var {name, price, image} = course;

// Trường hợp chỉ lấy ra 1 hoặc 2 giá trị
// var {name} = course;
// var {price, image} = course;

// Lấy 1 giá trị và lấy các giá trị bằng Rest
// var {name, ...Rest} = course

// console.log(name, Rest);

// Trường hợp object lại có 1 object con
var course1 = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address',
    course2: {
        name: 'ReactJS'
    }
}

// Nếu object con có key trùng với object cha thì key của object cha sẽ bị ghi đè
// var {name, course2: {name}} = course1;

// Có thể đặt lại tên cho key 
// var {name: parentName, course2: {name: childrenName}} = course1;
// console.log(parentName);
// console.log(childrenName);

// Muốn lấy ra 1 key nhưng key đó không tồn tại thì cần gán giá trị mặc định cho key đó
var {name, description = 'default description'} = course1;
console.log(name, description);

// -------------------------- //

// * Sử dụng với function
// ...rest khi truyền vào tham số của hàm thì vẫn là toán tử Rest parameters

function logger(a, b, ...params) {
    console.log(a);
    console.log(b);
    console.log(params);
}

logger(1, 2, 3, 4, 5, 6, 7, 8);
logger(1, 2, 3)
// params (rest parameters) chính là một mảng
// nếu sử dụng arguments thì là 1 đối tượng arguments có tính chất giống mảng

// --------
// Khi tham số truyền vào hàm là object thì cũng có thể sử dụng Destructuring và Rest parameters

function logger2({name, price, ...rest}) {
    console.log(name);
    console.log(price);
    console.log(rest);
}

logger2 ({
    name: 'Javascript',
    price: 1000,
    description: 'Description content'
});






