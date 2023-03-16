# Fn.bind()
  - cho phép ràng buộc this cho một phương thức (function)
  - trả về một hàm mới với context được bind
  - hàm được trả về từ bind() vẫn có thể nhận các đối số từ hàm gốc

VD
```js 


/*
    <input type="text" placeholder="Nhập vào dây..." id="input">
    <button id="submit">Add</button>
    <ul id="root"></ul>
*/
    
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const app = (() => {
    const cars = ['BMW'];

    const input = $('#input');
    const submit = $('#submit');
    const root = $('#root');

    return {
        add(car) {
            cars.push(car);
        },
        delete(index) {
            cars.splice(index, 1);
        },
        render() {
            const htmls = cars.map((car, index) => 
               `
               <li>
               ${car}
               <span class = "delete" data-index=${index}>&times</span>
               </li>             
               ` 
            ).join('');

            root.innerHTML = htmls;
        },
        handleDelete(e) {
            const deleteBtn = e.target.closest('.delete');
            if(deleteBtn) {
                const index = deleteBtn.dataset.index;
                this.delete(index);
                this.render();
            }
        },
        init() {
            // Handle DOM events

            submit.onclick = () => {
                const car = input.value;
                this.add(car);
                this.render();

                input.value = '';
                input.focus();
            }

            root.onclick = this.handleDelete.bind(this);

            this.render();
        }
    }
})();

app.init();
```