
// DOM CSS

/**
 * Cú pháp:
 * -- <DOM_element>.style.<tên_thuộc_tính> = '<giá_trị_thuộc_tính>';
 * -- Object.assign(<DOM_element>, {
        <tên_thuộc_tính>: '<giá_trị_thuộc_tính>';
     });

 Note: chỉ có thể set CCS inline
 */

var boxElement = document.querySelector('.box');

// boxElement.style.width = '200px';
// boxElement.style.height = '200px';
// boxElement.style.backgroundColor = 'red';

Object.assign(boxElement.style, {
    width: '200px',
    height: '200px',
    backgroundColor: 'pink' 
});



