const studentForm = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

studentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value;
    const gender = document.querySelector(
        'input[name="gender"]:checked'
    ).value;
    const course = document.getElementById("course").value;
    const email = document.getElementById("email").value.trim();

    const row = document.createElement("tr");

    const details = [name, age, course, gender, email];

    details.forEach(function(detail) {
        const cell = document.createElement("td");
        cell.textContent = detail;
        row.appendChild(cell);
    });

    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";
    deleteButton.type = "button";
    deleteButton.className = "deleteBtn";

    deleteButton.addEventListener("click", function() {
        row.remove();
    });

    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);

    studentList.appendChild(row);

    studentForm.reset();
});