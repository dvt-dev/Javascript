
// ClassList Property

/** 
 *
 * Cú pháp:
 *  + <DOM_elemnt>.classList.<phương_thức>
 * 
 * Các phương thức:
 * -- add: thêm class vào element
 *          <DOM_elemnt>.classList.add('<tên_class>');
 * -- contains: kiểm tra có class trong element hay không
 *          <DOM_elemnt>.classList.contains('<tên_class>');
 * -- remove: xoá bỏ class khỏi element
 *          <DOM_elemnt>.classList.remove('<tên_class>');
 * -- toggle: + nếu có class --> xoá
 *            + nếu không có class --> thêm
 *          <DOM_elemnt>.classList.toggle('<tên_class>');
 */

var boxElement = document.querySelector('.box');

boxElement.classList.add('red', 'bgc');

console.log(boxElement.classList.contains('bgc'));

boxElement.classList.remove('red');

boxElement.classList.toggle('box-2');
boxElement.classList.toggle('textcolor');