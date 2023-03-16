
// PreventDefault and StopPropagation

/**
 * 1. preventDefault
 * -- Loại bỏ hành vi mặc định của trình duyệt trên thẻ html
 * -- Note: 
 *          + e.target.href.startsWith('...') ---> Kiểm tra xem bắt đầu bằng chuỗi kí tự ...
 * 2. stopPropagation
 * -- Loại bỏ sự kiện nổi bọt
 */

/*
var aElements = document.links;

for(var index in aElements) {
    aElements[index].onclick = function(e) {
        if(!e.target.href.startsWith('https://www.w3schools.com')) {
            e.preventDefault();
        }
    }
}

var ulElement = document.querySelector('ul');

ulElement.onmousedown = function(e) {
    e.preventDefault();
}

ulElement.onclick = function(e) {
    console.log(e.target);
}

*/

// stopPropagation

document.querySelector('div').onclick = function() {
    console.log('div');
}

document.querySelector('button').onclick = function(e) {
    e.stopPropagation();
    console.log('Click me!');
}


