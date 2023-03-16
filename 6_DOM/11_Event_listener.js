
// Event listener

/**
 * DOM event / Event listener
 * 1. DOM event
 *  -- Xử lý nhiều việc trong 1 function
 *  -- Huỷ bỏ lắng nghe --> gán lại 
 *  -- Sử dụng event làm 1 việc đơn giản, không có nhu cầu huỷ bỏ
 * 
 * 2. addEventListener()
 *  -- Sử dụng khi event làm nhiều việc, cần tách nhỏ, cần huỷ bỏ 1 số việc đó trong
 *      trường hợp cụ thể nào đó
 *  -- Cú pháp thêm event
 *      <DOM_event>.addEventListener('<tên_event>', <tên_function>);
 *  -- Cú pháp huỷ bỏ lắng nghe
 *      <DOM_event>.removeEventListener('<tên_event>', <tên_function>);
 * 
 * // 1. Xử lý nhiều việc khi 1 event xảy ra 
 * // 2. Lắng nghe / Huỷ bỏ lắng nghe
 */

var btn = document.querySelector('button');

// DOM event
/*
btn.onclick = function() {
    // công việc 1
    console.log('công việc 1');

    // công việc 2
    console.log('công việc 2');

    // công việc 3
    alert("công việc 3");
}

// Huỷ bỏ event 
setTimeout(function() {
    btn.onclick = function() {
        
    }
}, 6000);

*/

// Event listener

function congviec1() {
    console.log('công việc 1');
}

function congviec2() {
    console.log('công việc 2');
}

function congviec3() {
    console.log('công việc 3');
}

btn.addEventListener('click', congviec1);
btn.addEventListener('click', congviec2);
btn.addEventListener('click', congviec3);

setTimeout(function() {
    btn.removeEventListener('click', congviec2);
}, 3000)

