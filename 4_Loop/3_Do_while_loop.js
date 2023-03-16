/**
 * Do while loop
 * Luôn thực hiện khối mã 1 lần, trước khi kiểm tra điều kiện có đúng không,
 *  sau đó nó sẽ lặp lại vòng lặp miễn là điều kiên đúng
 * 
 *      do {
            // code block to be executed
        }
        while (condition);
 */

var i = 0;

// do {
//     i++;
//     console.log(i);
// } while (i < 10);

var iSuccess = false;

do {
    i++;
    console.log('Nạp thẻ lần ' + i);

    // Thành công
    if (false) {
        iSuccess = true;
    }

} while (!iSuccess && i <= 3);