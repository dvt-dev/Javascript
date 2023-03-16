/**
 * Break 
 *  - Thoát khỏi vòng lặp
 * Continue
 *  - Nhảy qua 1 lần của vòng lặp
 */

for (var i = 0; i < 10; i++) {
    console.log(i);
    if (i == 5) {
        break;
    }
}

console.log('Continue')

for (var i = 0; i < 10; i++) {
    if (i % 2 == 1) {
        continue;
    }

    console.log(i);
}
