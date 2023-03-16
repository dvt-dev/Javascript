# Closure
- Là một hàm có thể ghi nhớ nơi nó được tạo và truy cập được biến ở bên ngoài phạm vi của nó
- Biến được tham chiếu (refer) trong clouser sẽ không được xoá khỏi bộ nhớ khỏi vị trí khi hàm cha thực thi xong

``` js

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

  > Giải thích
  - ở dòng 19 gọi hàm makeCouter 1 lần --> tạo ra một phạm vi là bên trong dấu {} của makeCouter
  - ở dòng 19 increase1 <=> increase nên khi gọi increase1 chính là gọi increase
  
  - khi gọi increase1 vì nhớ đc phạm vi nó được tạo là bên trong dấu {} của makeCouter
    và truy cập được biến ở bên ngoài phạm vi nên truy cập vào biến couter và lấy giá trị

  - vì hàm increase được gán vào biến increase1 ở phạm vi toàn cục --> increase ở phạm vi toàn cục
    mà hàm increase có sử dụng biến couter nên biến couter không bị xóa khi makeCouter chạy xong

## Ứng dụng
- Viết code ngắn gọn hơn
- Biểu diễn, ứng dụng tính Private trong OOP

VD1: Viết code ngắn gọn hơn
```js
    function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {}

    const save = () => {
        localStorage.setItem(key, JSON.stringify(store));
    }

    const storage = {
        get(key) {
            return store[key];
        },
        set(key, value) {
            store[key] = value;
            save();
        },
        remove(key) {
            delete store[key];
            save();
        }
    }

    return storage;
}

    const profileSetting = createStorage('profile_setting');
    console.log(profileSetting.get('fullName'));
    profileSetting.set('fullName', 'Tuan Do');
    profileSetting.set('adress', 'Ha Noi');
    profileSetting.set('age', 20);
```