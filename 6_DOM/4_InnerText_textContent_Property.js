
// InnerText vs textContent Property
/**
 * Giống nhau:
 * -- Đều có thể lấy ra text và thay đổi nội dung text 
 * Khác nhau:
 * -- innerText: lấy ra chữ hiển thị trên web
 * -- textContent: bỏ qua thẻ tag đầu cuối là lấy ra nội dung trong textnode
 */


var headingElement = document.querySelector('h1');

console.log(headingElement.innerText);
console.log(headingElement.textContent);
// --> Heading Text

headingElement.innerText = 'Hello world!';
headingElement.textContent = 'Hello world!';
// --> Hello world!
