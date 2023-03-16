
# Hosting
- Kéo lên / đưa lên
- Đưa các khai báo biến với "var" và khai báo các hàm lên đầu phạm vi được khai báo

## 1. Hosting với "var", "fuction declaration"

- VD1: Sử dụng với var

```js
    console.log(age);       // underfine
    console.log(fullName);  // ReferenceError: fullName is not defined
    var age = 16
```

- VD2: Sử dụng với function

```js
    console.log(sum(6, 9));     // 15
    function sum(a, b) {
        return a+b;
    }
```
> Lưu ý: Phần khai báo được đưa lên, phần gán không được đưa lên

## 2. Hosting với "let, const"

- Vẫn được hosted nhưng lại bị đưa vào "Temoral Deal Zone" nên xuất hiên lỗi
- VD:

```js
    {
        console.log(fullName);      // Cannot access 'fullName' before initialization
        let fullName = 'Do Van Tuan';
    }
```