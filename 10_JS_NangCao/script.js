

const teacher = {
    firstName: "Minh",
    lastName: "Thu",
}

function greet(greeting, message) {
    return `${greeting} ${this.firstName} ${this.lastName}. ${message}`;
}

let result = greet.call(teacher, 'Em chào cô ', 'Cô xinh quá vậy ạ ?');
console.log(result);

let res = greet.apply(teacher, ['Em chào cô ', 'Co dạy môn gì vậy ạ ?']);
console.log(res);



















