
Array.prototype.some2 = function(callback) {
    var ouput = false;
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            if(callback(this[index], index, this)){
                ouput = true;
                break;
            };
        }
    }
    return ouput;
}

var courses = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: false,
    },
    {
        name: 'PHP',
        coin: 800,
        isFinish: false,
    },
    {
        name: 'Ruby',
        coin: 900,
        isFinish: true,
    }
];

var result = courses.some2(function(course, index, array) {
    return course.isFinish;
});

console.log(result);