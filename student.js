var table = document.getElementById("tab");

function update() {

    var name = document.getElementById("one").value;
    var age = document.getElementById("two").value;
    var gender = document.getElementById("three").value;
    var course = document.getElementById("four").value;
    var email = document.getElementById("five").value;

    // validation
    if(name === "" || age === "" || gender === "" || course === "" || email === ""){
        alert("Please fill all fields");
        return;
    }

    var row = document.createElement("tr");
    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
        <td>${email}</td>
        <td>${gender}</td>
        <td><button onclick="del(this)">Delete</button></td>
    `;

    table.appendChild(row);

    document.querySelector("form").reset();
}

function del(btn){
    btn.parentElement.parentElement.remove();
}
