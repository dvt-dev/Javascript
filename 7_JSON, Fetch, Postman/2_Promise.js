
// Promise (sync, async)

/**
 * 1. Sync, async
 *  -- Sync: đồng bộ
 *      + code nào viết trước chạy trước, viết sau chạy sau
 *      + nếu code phía trước tốn nhiều thời gian hơn code phía sau thì code phía
 *          sau vẫn chờ code phía trước chạy xong mới chạy
 *  -- Async: bất đồng bộ
 *      + code nào chạy tốn ít thời gian hơn về trước, chạy tốn nhiều thời gian
 *          hơn về sau
 * 
 * 2. Pain (nỗi đau)
 *  -- Callback hell
 *      + làm xong việc 1 có kết quả, lấy kết quả đó làm việc 2
 *          làm xong việc 2 có kết quả, lấy kết quả đó làm việc 3
 *          làm xong việc 3 có kết quả, lấy kết quả đó làm việc 4
 *      --> sẽ sinh ra callback hell: làm cho code nhìn không rõ ràng, khó hiểu
 *  -- Pyramid of doom
 * 
 * 3. Concept
 *  -- Promise được sinh ra để giải quyết các thao tác bất đồng bộ dễ dàng hơn.
 *  -- Có 3 trạng thái
 *      + pendding: đang chờ, thành công hay thất bại
 *      + fulfilled: thành công
 *      + rejected: thất bại
 *  -- Cách tạo ra promise
 *      + Dùng từ khoá new Promise
 *      + Trong constructor function sẽ truyền vàp Excutor function
 *      + Trong Excutor function sẽ nhận được 2 tham số dạng hàm: resolve, reject
 *  VD: 
        var promise = new Promise(
            // Excutor
            function(resolve, reject) {
                // Logic
                // Thành công: resolve()
                // Thất bại: reject()
            }
        );

    -- Cách sử dụng promise
        promise
            .then(function() {
                -- code
                -- khi resolve() sẽ lọt vào đây
            }) 
                
            .catch(function() {
                -- code
                -- khi reject() sẽ lọt vào đây
            })

            .finally(function() {
                -- code
                -- khi gọi resolve() or reject() đều sẽ lọt vào đây
            })

 * 4. Chain
 *  -- Tính chất nối chuỗi giúp giải quyết vấn đề hell
 *  -- Note:
 *      + Nếu k return ra 1 promise thì sẽ chạy .then liền kề sau đó
 *      + Nếu return ra 1 promise thì sẽ phải chờ promise được giải quyết xong mới chạy .then kế tiếp sau đó
 * 
 * 5. Promise methods (resolve, reject, all)
 *  -- Promise.resolve: luôn thành công
 *  -- Promise.reject: luôn thất bại
 *  -- Promise.all: chạy song song các Promise và kết hợp các kết quả lại với nhau
 *          
 *
 *
 * 
 */

// VD:

// -- sync
console.log(1);
console.log(2);

// -- async
setTimeout(function() {
    console.log(3);
}, 1000);

console.log(4);

// callback hell
/*
setTimeout(function() {
    console.log(1);
    setTimeout(function() {
        console.log(2);
        setTimeout(function() {
            console.log(3);
            setTimeout(function() {
                console.log(4);               
            },1000);
        },1000);
    },1000);
},1000);

*/

// Promise
var promise = new Promise(
    // Excutor
    function(resolve, reject) {
        // Fake call API      
        // resolve([
        //     {
        //         id: 1,
        //         name: 'PHP'
        //     }
        // ]);

        resolve();

        // reject('Co loi !');

    }
);

promise
    .then(function() {
        return new Promise(function(resolve){
            setTimeout(resolve([1, 2, 3]), 3000);
        })
    })
    .then(function(data) {
        console.log(data);
    })   

    .catch(function(error) {
        console.log(error);
    })

    .finally(function() {
        console.log('Done!');
    })

// promise chain

function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

sleep(1000)
    .then(function() {
        console.log(1);
        return sleep(1000);
    })
    .then(function() {
        console.log(2);
        return sleep(1000);
    })
    .then(function() {
        console.log(3);
        return sleep(1000);
    })
    .then(function() {
        console.log(4);
        return sleep(1000);
    })


// Bắt lỗi
/*
function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

sleep(1000)
    .then(function() {
        console.log(1);
        return sleep(1000);
    })
    .then(function() {
        console.log(2);
        return new Promise(function(resolve, reject) {
            reject('Co loi!');
        });
    })
    .then(function() {
        console.log(3);
        return sleep(1000);
    })
    .then(function() {
        console.log(4);
        return sleep(1000);
    })

    .catch(function(err){
        console.log(err);
    })
*/

// Promise methods

var promise1 = Promise.resolve('Successfull!');
    promise1
        .then(function(result) {
            console.log('result: ' + result);
        })

var promise2 = Promise.reject('Fail');
    promise2
        .then(function(result) {
            console.log('result: ' + result);
        })
        .catch(function(result) {
            console.log('result: ' + result);
        })

var promise3 = new Promise(function(resolve) {
    setTimeout(function(){
        resolve([1]);
    }, 3000);
});

var promise4 = new Promise(function(resolve) {
    setTimeout(function(){
        resolve([2, 3]);
    }, 5000);
});

Promise.all([promise3, promise4])
    .then(function(result) {
        var result1 = result[0];
        var result2 = result[1];
        console.log(result1.concat(result2));
    })












