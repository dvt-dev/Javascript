
// Classes

/**
 * Cách viết khác của constructor function, tường minh hơn
 */

class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

const jsCourse = new Course('Javascript', 1000);
const phpCourse = new Course('PHP', 1000);

console.log(jsCourse);
console.log(phpCourse);

console.log(jsCourse.getName());