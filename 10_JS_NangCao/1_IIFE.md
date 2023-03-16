# IIFE  -   Inmmediately Invoked Function Expression

> Self-Invoking Function

---

## Nội dung

1. IIFE là gì ?
- là một biểu thức tạo ra một hàm và hàm đó được gọi ngay lập tức

2. Cú pháp
```js
(function() {
    -- code
})()
```

> code phía trước IIFE khi kết thúc phải có dấu chấm phẩy ;

```js
console.log(123)
(function() {
    -- code
})()
```

> các cách khác để viết IIFE
- Khi viết toán tử phía trước IIFE thì không cần dấu ; phía trước

```js
<toán tử>function() {
        -- code
    }()

// VD:

!function() {
        -- code
    }()
```

3. IIFE là hàm "private"
- Không thể gọi hàm bên ngoài (), chỉ có thể gọi hàm bên trong ()

-- VD: không thể gọi hàm bên ngoài

```js
;(function Myfunc() {
    console.log(123);
})()

Myfunc() -> Lỗi
```

-- VD: chỉ gọi được bên trong dấu ()

```js
let i=0;
;(function Myfunc() {
    i++;
    console.log(i);

    if(i<10) 
        Myfunc();
})
```

4. Sử dụng IIFE khi nào ?
- Tránh tạo ra quá nhiều biến toàn cục
- Các thư viện dùng IIFE để khi nhúng vào dự án thì các tên hàm, tên biến không ảnh hưởng đến dự án
- Sử dụng khi muốn code chạy ngay, nhưng biến và hàm không ở phạm vi toàn cục

5. Các cách tạo ra một IIFE

```js
;(function(){
    -- code
})()

;(function() {
    -- code
}())
```
6. Ví dụ sử dụng IIFE

```js
const app = (function() {
    // Private
    const cars = []
    return {
        add(car) {
            cars.push(car);
        },
        edit(index, car) {
            cars[index] = car;
        },
        delete(index) {
            cars.splice(index, 1);
        }
    }  
})();
```