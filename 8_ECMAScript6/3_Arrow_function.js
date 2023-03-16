
// Arrow function

/**
 * Cách viết ngắn gọn hơn
 * Không có context, không nên dùng từ khoá this bên trong
 * Không thể làm constructor function
 */

const sum = (a, b) => a + b;
console.log(sum(1, 2));

// 

const result = (a, b) => ({a: a, b: b});
console.log(result(2, 3));

//

const course = {
    name: 'Javascript Basic',
    getName: () => {
        return this;
    }
}

console.log(course.getName());

//

const Course = (name, price) => {
    this.name = name;
    this.price = price;
}

const jsCourse = new Course('Javascript', 1000);
console.log(jsCourse);