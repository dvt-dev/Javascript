
# Scope - Phạm vi

#1. Các loại phạm vi
- Global (toàn cục) : có thể truy cập từ bất cứ đâu
- Code block (khối mã): chỉ truy cập được bên trong dấu {}
    VD: let, const
- Local scope (hàm): chỉ truy cập được bên trong hàm chưa có
    VD: var, function

#2. Phạm vi hàm
- Khi gọi hàm sẽ tạo ra một phạm vi mới riêng biệt
- Các hàm có thể truy cập các biến trong phạm vi bên trong nó và bên ngoài nó

#3. Cách một biến được truy cập
- Lấy biến gần nhất

```js
{
    {
        const age = 18;
        {
            {
                const age = 16;
                consle.log(age);
            }
        }
    }
}

-> 16
```

#4. Khi nào một biến bị xoá khỏi bộ nhớ
> Biến Global (toàn cục) ?
- Khi thoát chương trình hoặc khi reload lại trang

> Biến trong code block & trong hàm ?
- Khi chạy xong

> Biến trong hàm được tham chiếu bởi một hàm
```js
    function makeCouter(){
      let couter = 0

      function increase(){
          return ++couter
      }

      return increase
    }

    const increase1 = makeCouter()

    console.log(increase1())   //1
    console.log(increase1())   //2
    console.log(increase1())   //3
```

- Biến couter chưa được xoá vì
  - increase1 là biến toàn cục và increase1 <=> increase
    mà: 
    increase không trực tiếp tạo ra biến couter, đang sử dụng biến couter ở phạm vi bên ngoài (trong makeCouter)
    nên: 
    biến ở bên trong makeCouter vẫn được sử dụng ở một hàm khác đã được ở bên ngoài 

