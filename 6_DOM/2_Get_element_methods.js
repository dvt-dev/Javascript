
// Get element methods

/**
 * GetElementById()
 * -- Truyền vào id của phần tử muốn lấy ra
 * -- Trả về 1 thẻ
 */

var headingNode = document.getElementById('heading');
console.log(headingNode);

/**
 * GetElementsByClassName()
 * -- Truyền vào class của những phần tử muốn lấy ra
 * -- Trả về HTMLColection(giống mảng, nhưng không có các methos như map(), filter(), ...)
 *      chứa các phần tử có cùng class với class truyền vào
 */

var headingNodes = document.getElementsByClassName('heading1');
console.log(headingNodes);

/**
 * GetElementsByTagName()
 * -- Truyền vào tên thẻ của những phần tử muốn lấy ra
 * -- Trả về HTML Colection (giống mảng, không có các methods như map(), filter(), ...)
 *     chứa các phần tử có cùng tên thẻ với tên thẻ truyền vào 
 */

var headingNodes2 = document.getElementsByTagName('h2');
console.log(headingNodes2);

/**
 * querySelector()
 * -- Truyền vào CSS selector
 * -- Trả về 1 phần tử đầu tiền có cùng CSS selector với CSS selector truyền vào
 */

var headingNode3 = document.querySelector('.box .heading-2:nth-child(2)');
console.log(headingNode3);

/**
 * querySelectorAll()
 * -- Truyền vào CSS selector
 * -- Trả về NodeList (giống mảng, không có các methods như map(), ...)
 *      chứa các phần tử có cùng CSS selector với CSS selector truyền vào
 */

 var headingNodes4 = document.querySelectorAll('.box .heading-2');
 console.log(headingNodes4[2]);

 /**
  * HTML colection
  * 
  */

 console.log(document.forms);
 console.log(document.forms['form-1']);

 console.log(document.anchors);

 // Get element methods - 2

 console.log('Get element methods - 2');

 var boxNode = document.querySelector('.box-1');
 console.log(boxNode);

 console.log(boxNode.querySelectorAll('li'));
 console.log(boxNode.getElementsByTagName('p'));


