const student = [
    {
        "name":prompt("Please enter name");
        "course":prompt("Please enter course");
        "address":prompt("Please enter name");
        "grade":prompt("Please enter grade");
    }
]

var container = document.getElementById('student');
console.log(container);
var output = "";

student.map((student, index)) => {
    output += "<h1>";
    output += "Name: ";
    output += student.name;
    output += "<h1>";
    output += "<br>";
    output += "Course: ";
    output += student.course;
    output += " Address: ";
    output += student.address;
    output += " Grade: ";
    output += student.grade;
}
console.log(output);
container.innerHTML = output;