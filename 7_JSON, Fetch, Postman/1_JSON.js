
// JSON

/**
 * # JSON là gì ?

 1. Là một định dạng dữ liệu (chuỗi)
 2. JavaScript Object Notation
 3. JSON thể hiện được các kiểu dữ liệu: String, Number, Boolearn, Null, Array, Object

 Mã hoá / Giải mã 
 Encode / deCode 
 Stringify: Từ Javascript types --> JSON
 Parse: Từ JSON --> Javascript types
 */

 var json = '1';
 var json1 = '"Do Van Tuan"';
 var json2 = '[1, 2, 3]';
 var json3 = '{"name":"Son Dang", "age": 18}';

 console.log(JSON.parse(json));
 // --> 1   typeof: Number

 console.log(JSON.parse(json1));
 // --> Do Van Tuan     typeof: String

 console.log(JSON.parse(json2));
 // --> [1, 2, 3]       typeof: Object

 console.log(JSON.parse(json3));
 // --> {name: 'Son Dang', age: 18}     typeof: Object

 console.log(JSON.stringify(true));
 // --> true    typeof: String

 console.log(JSON.stringify(["Javascript", "PHP"]));
 // --> ["Javascript", "PHP"]   typeof: String





