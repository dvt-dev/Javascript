/**
 * Object constructor
 *      Xây dựng đối tượng
 */

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('Son', 'Dang', 'avatar');
var user = new User('Vu', 'Nguyen', 'avatar');

author.title = 'Chia se tai F8';
user.comment = 'Xin chao cac ban';

console.log(author);
console.log(user);

console.log(author.constructor);        // Xem lại hàm tạo

console.log(author.getName());
console.log(user.getName());