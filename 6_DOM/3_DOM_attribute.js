
// DOM attribute

var headingElement = document.querySelector('h1');

/**
 * Attribute node
 * -- Thêm attribute hợp lệ vào thẻ
 *  + Cú pháp: <DOM_element>.<tên_attribute> = '<giá_trị_attribute>';
 * 
 * -- Lấy ra giá trị của attribute hợp lệ của thẻ
 *  + Cú pháp: <DOM_element>.<tên_attribute>;
 * 
 * -- Thêm attribute bất kì vào thẻ
 *  + Cú pháp: <DOM_element>.setAttribute('<tên_attribute', '<giá_trị_attribute>');
 * 
 * -- Lấy ra giá trị attribute bất kì của thẻ
 *  + Cú pháp:  <DOM_element>.getAttribute('<tên_attribute>');
 */


// VD:

// headingElement.title = 'heading';
headingElement.className = 'heading-2';

console.log(headingElement.className);

headingElement.setAttribute('id', 'heading');
headingElement.setAttribute('data-1', 'testdata');

console.log(headingElement.getAttribute('class'));
console.log(headingElement.getAttribute('data-1'));
