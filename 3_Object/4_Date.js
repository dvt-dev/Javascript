/**
 * Đối tượng date
 * - Trả về string, là thời gian hiện tại
 * - 
 */

var date = new Date();   // date -> object
// var date = Date();      // date -> string

var year = date.getFullYear();       // lấy năm
var month = date.getMonth() + 1;        // lấy tháng 
var day = date.getDay();


console.log(date);
console.log(year);
console.log(month);
console.log(day);
console.log(`${day}/${month}/${year}`);
