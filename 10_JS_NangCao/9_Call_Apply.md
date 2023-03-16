# Fn.call()
  - giúp gọi hàm và bind tới đối tượng khác, mặc định this là window object
  - Trong strict mode vẫn có thể có this nếu được bind
  - Không trả ra hàm mới, luôn gọi hàm sau khi bind this 
  - Dùng để mượn hàm - function borrowing
  - Dùng để kế thừa properties & methods từ 1 Constructor khác

Ví dụ

```js 

// Mượn hàm

const me = {
    firstName: 'Tuan',
    lastName: 'Do'
}

const you = {
    firstName: 'Duyen',
    lastName: 'Do',
    showFullname() {
        console.log(`${this.firstName} ${this.lastName}` );
    }
}

you.showFullname.call(me); // Tuan Do

// Kế thừa

function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
}

function Chicken(name, weight, legs) {
    Animal.call(this, name, weight);
    this.legs = legs;
}

const ga = new Chicken("Ga", 5, 2);
console.log(ga);
```

# Fn.apply
  - Phương thức này cho phép gọi một hàm với một this (bind) và truyền đối số cho hàm gốc dưới dạng mảng
  - giống call
  - khác: đối số thứ 2 truyền vào là một mảng `[arg1, arg2, ...]`

Ví dụ 1 

```js 


```
