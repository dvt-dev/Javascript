/**
 * Vòng lặp for
 * Cú pháp:
 *      for (statement 1; statement 2; statement 3) {
            // code block to be executed
        }
        Trong đó:
            - Statement 1 được thực hiện 1 lần trước khi khối mã được thực thi
            - Statement 2 xác định điều kiện để thực thi khối mã
            - Statement 3 được thực hiện sau khi khối mã được thực thi
        Note: Có thể thiếu 1 trong 3 statemnt đều được nhưng có thể sẽ gây ra hiện tượng treo trình duyệt
    
 * For In
        - Lặp qua các thuộc tính của một đối tượng và lấy ra những key của đối tượng
        for (key in object) {
            // code block to be executed
        }
    
 * For Of
        - Lặp qua các giá trị của một đối tượng có thể lặp lại và lấy ra những phần tử của 1 mảng hoặc từng chữ cái của một chuỗi
        for (variable of iterable) {
            // code block to be executed
        }
 */

for (var i = 0; i <= 100; i++) {
    console.log(i);
}

/* For in */

var person = {
    name: 'Do Tuan',
    age: 20,
    address: 'Ha Noi'
};

for (var key in person) {
    console.log(key);
}

var array = [11, 32, 13, 94, 75, 66];

for (var x in array) {
    console.log(x);
    console.log(array[x]);
}

var string = 'Javascript';
for (var z in string) {
    console.log(string[z]);
}

/* For of */

var languages = [
    'Javascript',
    'PHP',
    'Ruby'
];

for (var value of languages) {
    console.log(value);
}

var string = 'Javascript';
for (var value2 of string) {
    console.log(value2);
}

var object = {
    name: 'Tuan Do',
    age: 20
};

for (var value3 of Object.keys(object)) {
    console.log(value3);
}

for (var value4 of Object.values(object)) {
    console.log(value4);
}