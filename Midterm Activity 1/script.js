let studentName = " ";
let studentCourse = " ";
let studentAddress = " ";
let studentGrade = " ";

function AddStudent() {
    studentName = prompt("Please enter name");
    studentCourse = prompt("Please enter course");
    studentAddress = prompt("Please enter address");
    studentGrade = prompt("Please enter grade");


const student = [
    {
        "name":studentName,
        "course":studentCourse,
        "address":studentAddress,
        "grade":studentGrade
    }
]



console.log(student);

var container = document.getElementById('student');
console.log(container);
var output = output;

student.map((student, index) => {
    output += "<h1>";
    output += "Name: ";
    output += student.name;
    output += "</h1>";
    output += "<br>";
    output += "Course: ";
    output += student.course;
    output += " Address: ";
    output += student.address;
    output += " Grade: ";
    output += student.grade;
});
console.log(output);
container.innerHTML = output;
}