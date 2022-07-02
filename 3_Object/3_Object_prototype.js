/**
 * Object prototype - Basic
 *      - Nguyên mẫu để tạo đối tượng
 * 1. Prototype là gì ?
 *      - Nguyên mẫu
 * 2. Sử dụng khi nào
 *      - Thêm thuộc tính, phương thức bên ngoài hàm tạo
 */

 function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

User.prototype.className = 'F8';
User.prototype.getClassName = function() {
    return this.className;
}

var user1 = new User('Son', 'Dang', 'avatar');
var user2 = new User('Vu', 'Nguyen', 'avatar');

console.log(user1.className);
console.log(user2.getClassName());

console.log(user1);
console.log(user2);