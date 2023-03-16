// filter()

Array.prototype.filter2 = function(callback) {
    var output = [];
    for(var index in courses) {
        if(this.hasOwnProperty(index)) {
            var result = callback(this[index]);
            if(result) {
                output.push(this[index]);
            }
        }
    }
    return output;
}

var courses = [
    {
        name: 'Javascript',
        coin: 1000
    },
    {
        name : 'PHP',
        coin: 900
    },
    {
        name: 'Ruby',
        coin: 700
    }
];

var filterCourse = courses.filter2(function(course, index, array) {
    return course.coin > 800;
}) 

console.log(filterCourse);
