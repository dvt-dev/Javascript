

var courseApi = 'http://localhost:3000/courses';

function start() {
    getCourses(renderCourses);
    handleCreateForm();
}

start();

// Function
function getCourses(callback) {
    fetch(courseApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(courseApi, options)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    fetch(courseApi + "/" + id, options)
        .then(function(response) {
            return response.json();
        })
        .then(function() {
            // getCourses(renderCourses);

            courseItem = document.querySelector('.course-item-' + id);
                if(courseItem) {
                    courseItem.remove();
                }           
        });
}

function handleUpdateCourse(id, data, callback) {
    var options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(courseApi + "/" + id, options)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function updateCourse(id , name , description) {
    var createBtn = document.querySelector('#createBtn');
    createBtn.innerText = 'Update';


    // document.querySelector('input[name="name"]').value = document.querySelector(`.course-item-${id} h4`).innerText;
    // document.querySelector('input[name="description"]').value = document.querySelector(`.course-item-${id} p`).innerText;
    var currentName = document.querySelector('input[name="name"]').value = name;
    var currentDescription = document.querySelector('input[name="description"]').value = description;
    
    console.log("dom: ", {currentName, currentDescription});
    
    createBtn.onclick = function() {
        var currentName = document.querySelector('input[name="name"]').value;
        var currentDescription = document.querySelector('input[name="description"]').value;

            console.log("data:", {currentName, currentDescription});

        var formData = {
            name: currentName,
            description: currentDescription
        }
        handleUpdateCourse(id, formData, function() {
            getCourses(renderCourses);
            document.querySelector('input[name="name"]').value = "";
            document.querySelector('input[name="description"]').value = "";
            createBtn.innerText = 'Create';
            handleCreateForm();
        })
    }
}


function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function(course) {
        return `
            <li class="course-item-${course.id}">
                <h2>${course.name}</h2>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">Xoá</button>
                <button onclick="updateCourse(${course.id}, '${course.name}', '${course.description}')">Sửa</button>
            </li>
        `
    });
    listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateForm() {
    var createBtn = document.querySelector('#createBtn');
    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        
        var formData = {
            name: name,
            description: description
        };
        createCourse(formData, function() {
            getCourses(renderCourses);
            // document.querySelector('input[name="name"]').value = "";
            // document.querySelector('input[name="description"]').value = "";
        });
    }
}