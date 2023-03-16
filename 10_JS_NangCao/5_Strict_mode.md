
# Strict mode - Nghiêm ngặt

- Báo lỗi hoặc ngăn chặn khi sử dụng những đoạn mã không an toàn hay dễ gây nhầm lẫn

##  Cách sử dụng

1. Thêm **"use strict";** vào đầu file.js
2. Thêm **"use strict";** vào ngay sau thẻ mở <'script'>
3. Thêm **"use strict";** vào đầu phạm vi hàm

Đặc trưng

- Không thể khai báo biến mà không sử dụng **var**, **let**, **const**

```js
    fullName = 'Do Tuan'; // Tạo ra biến fullName ở phạm vi global

    function myFunc() {
        age = 20;           // Tạo ra biến age ở phạm vi global
    }

    myFunc();
```

```js
    'use strict';
    fullName = 'Do Tuan'; // Lỗi Uncaught ReferenceError: fullName is not defined

    function myFunc() {
        age = 20;           // Lỗi Uncaught ReferenceError: age is not defined
    }

    myFunc();
```

- Báo lỗi khi gán lại giá trị cho thuộc tính có writable: false
- Báo lỗi khi hàm có tham số trùng tên
- Khai báo hàm trong **code block** thì hàm sẽ thuộc phạm vi **code block**
- Không đặt tên biến, tên hàm bằng một số từ khoá "nhạy cảm" của ngôn ngữ


## Công dụng

1. Tránh "từ khoá" khi khai báo biến
2. Tránh trùng tên biến dẫn tới lỗi logic
3. Sử dụng bộ nhớ hiệu quả vì tránh tạo biến global

