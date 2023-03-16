
// DOM events

/**
 * DOM events - Những hành vi diễn ra của trình duyệt or người dùng
 * 
 * 1. Attributes events
 *      + <h1 onclick="console.log('abc')">DOM event</h1>
 * -- Lấy ra chính element thực hiện event dùng từ khoá this
 *      + <h1 onclick="console.log(this)">...</h1>
 * 
 * 2. Assign event using the element node
 * -- Lấy ra chính element thực hiện event dùng e.target
 * 
 * 3. Example
 *  3.1 Input / select
 *  3.2 Key up / key down
 */

var h1Elements = document.querySelectorAll('h1');

for(var i in h1Elements) {
    h1Elements[i].onclick = function(e) {
        console.log(e.target);
    }
}

// h1Element.onclick = function() {
//     console.log(Math.random());
// }

// example

/* Input */
var inputValue;

var inputElement = document.querySelector('input[type="checkbox"]');

// inputElement.oninput = function(e) {
//     inputValue = e.target.value;
// }

/* CheckBox */

inputElement.onchange = function(e) {
    console.log(e.target.checked);
}

/* Select */
var selectElement = document.querySelector('select');

selectElement.onchange = function(e) {
    console.log(e.target.value);
}

/* Key up / dowm */

document.onkeydown = function(e) {
    console.log(e.which);

    switch(e.which) {
        case 27:
            console.log('Exit');
            break;
        case 13:
            console.log('Send messenger');
            break;
    }
}



