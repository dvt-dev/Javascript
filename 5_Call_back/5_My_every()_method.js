
Array.prototype.every2 = function(callback) {
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            if(callback(this[index], index, this) == false) {
                return false;
            }
        }
    }
    return true;
}




var courses = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: true,
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

var result = courses.every2(function(course, index, array) {
    return course.isFinish;
});

console.log(result);