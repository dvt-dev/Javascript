/**
 * Toán tử 3 ngôi - Teenary operator
 * variable_name = (codition) ? value1 : value2
 */

var course = {
    name: 'Javascript',
    coin: 250
}

var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí';
console.log(result);

function getCanVoteMessage(age) {
    return age = age >= 18 ? 'Bạn có thể bỏ phiếu' : 'Bạn chưa thể bỏ phiếu';
}



// Kỳ vọng
console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'