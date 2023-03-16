
// innerHTML vs outerHTML Property

/**
 * innerHTML
 * -- Thay đổi các element con và lấy ra các element con
 * -- Cú pháp:
 *  + <DOM_element>.innerHTML = '<HTML';
 *  + <DOM_element>.innerHTML;
 */

var boxElement = document.querySelector('.box');

boxElement.innerHTML = '<h2 title="heading">Heading - 2</h2>';

console.log(boxElement.innerHTML);

// console.log(document.querySelector('h1').innerText);

/**
 * outerHTML
 * -- Thay đổi chính element gọi và xoá luôn element con, lấy ra element gọi và các element con
 * -- Cú pháp:
 *  + <DOM_element>.outerHTML = '<HTML>';
 */

boxElement.outerHTML = '<span>Test</span>';

console.log(boxElement.outerHTML);