let studentName = " ";
let studentCourse = " ";
let studentAddress = " ";
let studentGrade = " ";

var realOutput = [];


function AddStudent() {
    var htmlOutput = "";
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
var output = "";

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
    output += "<br>";
});
realOutput.push(output);
console.log(realOutput);

if(realOutput.length == 1) {
    for(let i = 0; i <= realOutput.length; i++) {
        htmlOutput += realOutput[i];
    }
}
else {
    for(let i = 0; i < realOutput.length; i++) {
        htmlOutput += realOutput[i];
    }
}

container.innerHTML = htmlOutput;
}
