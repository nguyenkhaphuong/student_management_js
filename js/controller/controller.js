const getStudentInfo = () => {
  let studentId = document.getElementById("student-id").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let math = document.getElementById("math").value;
  let physic = document.getElementById("physic").value;
  let chemical = document.getElementById("chemical").value;
  let newStudent = new Student(studentId, name, email, math, physic, chemical)

  return newStudent;
}

const renderStudents = (students) => {
  let contentHTML = "";
  for (let i = 0; i < students.length; i++) {
    let currentStudent = students[i];
    let contentTr = `
      <tr>
        <td>${currentStudent.id}</td>
        <td>${currentStudent.name}</td>
        <td>${currentStudent.email}</td>
        <td>${(currentStudent.math * 1 + currentStudent.physic * 1 + currentStudent.chemical * 1) / 3}</td>
        <td>
          <button id="edit-btn">Edit</button>
          <button id="delete-btn">Delete</button>
        </td>
      </tr>
    `;
    contentHTML += contentTr
  }
  document.getElementById("table-body").innerHTML = contentHTML;
}

const setLocalStudents = (students) => {
  let jsonStudents = JSON.stringify(students);
  localStorage.setItem(STUDENT_LOCAL_STORAGE, jsonStudents)
}

let getLocalStudents = () => {
  let jsonStudents = localStorage.getItem(STUDENT_LOCAL_STORAGE);
  return JSON.parse(jsonStudents)
}