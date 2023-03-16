
// ... Spread

/**
 * Toán tử rải
 * Khi để ... trước arr hoặc obj sẽ bỏ đi [], {}
 */

// Sử dụng nối 2 mảng

var arr1 = ['Javascript', 'PHP', 'Ruby'];
var arr2 = ['ReactJS', 'NodeJS'];
var arr3 = [...arr2, ...arr1];

console.log(arr3);

// Sử dụng nối 2 object

var obj1 = {
    name: 'Javascript'
}

var obj2 = {
    price: 1000
}

var obj3 = {
    ...obj1, ...obj2
}

console.log(obj3);

// Sử dụng với function

var arr = ['Javascript', 'PHP', 'Ruby'];

function logger(...rest) {
    for(var i=0; i<rest.length; i++) {
        console.log(rest[i]);
    }
}

logger(...arr);




