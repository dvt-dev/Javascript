/**
 * Object trong Javascript
    Function --> Phương thức / methods
    Others   --> Thuộc thích / property
 */

var gmailKey ='gmail';

var myInfo = {
    name: 'Do Tuan',
    age: 22,
    address: 'Ha Noi',
    [gmailKey]: 'dvtuan.dev@gmail.com',
    getName: function() {
        return this.name;
    }
}

var myKey = 'address';

// Thêm key và value vào object
myInfo.email = 'fullstack.edu.vn';
myInfo['my-love'] = 'Do Thi Duyen';

console.log(myInfo.name);
console.log(myInfo['age']);

console.log(myInfo[myKey]);

// Xoá 
delete myInfo.address;

console.log(myInfo.getName());

console.log(myInfo);