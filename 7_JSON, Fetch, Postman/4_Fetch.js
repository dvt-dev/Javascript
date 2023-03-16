
// Fetch

/**
 * 1. API (URL) --> Application programing interface
 * -- Backend --> API(URL) --> Fetch --> JSON/XML --> JSON.parse --> Javascript types
 * --> Render ra giao diện HTML
 * 
 * 2. Fetch()
 *  -- Phương thức dùng để lấy dữ liệu, là một Promise
 *  -- Truyền vào API (url)
 *  -- VD:
 *          fetch('https://jsonplaceholder.typicode.com/comments') 
                .then(response => response.json())     // .json() trả về Promise, trong Promise đó đã resolve JSON.parse
                .then(json => console.log(json))       // nhận được dữ liệu kiểu JavaScript
 * 3. JSON server: API server
 * 4. CRUD
 *      + Create: tạo mới   --> POST
 *      + Read: lấy dữ liệu --> GET
 *      + Update: chỉnh sửa --> PUT / PATCH
 *      + Delete: xoá       --> DELETE
 * 5. Postman
 */

var postApi = 'https://jsonplaceholder.typicode.com/posts';

fetch(postApi) 
    .then(function(response) {
        return response.json();
    })
    .then(function(posts) {
        var htmls = posts.map(function(posts) {
            return `<li>
                <h2>${posts.title}</h2>
                <p>${posts.body}</p>
            </li>`
        });

        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    });

var courseApi = 'http://localhost:3000/courses';

fetch(courseApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(courses) {
        console.log(courses);
    });

