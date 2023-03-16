
# This keyword
  > từ khóa this trong javascript đề cập đến đối tượng mà nó thuộc về

# Đặc tính
  > trong một phương thức, this tham chiếu tới đối tượng truy cập phương thức (đối tượng trước dấu .)
  > đứng ngoài phương thức, this tham chiếu tới đối tượng global

# Lưu ý
  > this trong hàm tạo là đại diện cho đối tượng sẽ được tạo
  > this trong một hàm là undefined khi ở strict mode
  > các phương thức bind(), call(), apply() có thể tham chiếu this tới đối tượng khác


# So sánh bind, call, apply
  >> Giống nhau
  - cú pháp truy cập
  - là các methods được kế thừa từ Function.prototype

  >> khác nhau
  function fn(){}

  > Bind method
  - trả ra hàm mới với `this` tham chiếu tới `thisArg`
  - không thực hiện gọi hàm
  - nếu được bind kèm `arg1, arg2, ...` thì các đối số này được ưu tiên hơn

  const newFn = fn.bind(thisArg, arg1 ,arg2, ....)
  newFn(arg1, arg2, ...)

  > Call method
  - Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
  - nhận các đối số cho hàm gốc từ `arg1, arg2, ...`

  fn.call(thisArg, arg1, arg2, ...)

  > Apply method
  - Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
  - Nhận các đối số cho hàm gốc bằng đối số thức 2 dưới dạng mảng `[arg1, arg2, ...]`

  fn.apply(thisArg, [arg1, arg2, ...])