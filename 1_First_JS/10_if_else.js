/**
 * Câu lệnh rẽ nhánh - If else
 */

// Bài tập: Viết hàm với điều kiện cho trước. Nếu chia hết cho 3 thì return 1,
//          Chia hết cho 5 thì return 2,
//          Chia hết cho 15 thì return 3


function run(a) {
    if (a%15 ==0) {
        return 3;
    }
    else if(a%5 == 0) {
        return 2;
    }
    else if(a%3 == 0) {
        return 1;
    }
}


console.log(run(3));        // 1
console.log(run(5));        // 2
console.log(run(30));       // 3