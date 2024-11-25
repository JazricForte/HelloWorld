const submit = document.getElementById("submit");
var people = [];

function loadData(){
    if(localStorage.getItem('people') != null){
        people = JSON.parse(localStorage.getItem('people'));
    }

    var output = "";

    people.map((person)=>{
        output += `<tr>
            <td style = "width: 20%;">${person.id}</td>
            <td style = "width: 20%;">${person.firstname}</td>
            <td style = "width: 20%;">${person.lastname}</td>
            <td style = "width: 20%;">${person.age}</td>
            <td style = "width: 20%;">Action</td>
        </tr>`;
    })

    var data = document.getElementById("data");
    data.innerHTML = output;

    console.log(output);
}

function addData(){
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const age = document.getElementById("age").value;

    const person = {
        "id":"1",
        "lastname":lastname,
        "firstname":firstname,
        "age":age
    }    

    people.push(person);
    localStorage.setItem('people',JSON.stringify(people));
    //console.log("local storage",JSON.parse(localStorage.getItem('people')));

    loadData();
}

submit.addEventListener('click',function(){
    addData();
})