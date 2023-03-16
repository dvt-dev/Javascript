
// Optional chaining (?.)

/**
 * -- Sử dụng khi chúng ta không chắc chắn 1 phần tử có tồn tại hay kh
 *      có thể là key của object, 1 phần tử của mảng or 1 function
 * -- Syntax
 *      obj.val?.prop
        obj.val?.[expr]
        obj.func?.(args)
 */

const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah',
      cat2: {
        name: 'Dinah2',
        cat3: {
            name: 'Dinah3'
          }
      }
    }
};

if(adventurer?.cat?.cat2?.cat3) {
    console.log(adventurer.cat.cat2.cat3.name);
}