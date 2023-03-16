
// Let & Const

/**
 * 1 Var / Let, Const:
 *  -- Scope (phạm vi truy cập): 
 *      + Var: trong function hoặc ngoài function, toàn cục
 *      + Let, Const: bên trong code block {} 
 *  -- Hosting (đưa lên trên đầu)
 *      + Var: được hỗ trợ
 *      + Let, Const: không được hỗ trợ
 *  2. Const / Let, Var:
 *  -- Assignment (gán lại)
 *      + Const: không thể gán lại lần thứ 2
 *      + Var, Let: có thể gán lại nhiều lần
 *  3. Note
 *  -- Code thuần: var
 *  -- Babel: let, const
 *      + Khi định nghĩa biến và không gán lại biến đó: Const
 *      + Khi cần gán lại giá trị cho biến: Let
 */

var a = 2;

a = 100;

console.log(a);

if(true) {
    // var test = 'Hello world'; --> OK
    let test = 'Hello world'; // Lỗi

}

console.log(test);