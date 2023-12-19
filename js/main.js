const STUDENT_LOCAL_STORAGE = "STUDENT_LOCAL_STORAGE"
let students = getLocalStudents() || [];
if (students) {
  renderStudents(students)
}

const addNewStudent = () => {
  let newStudent = getStudentInfo();
  students.push(newStudent);
  setLocalStudents(students);
  renderStudents(students);
  document.getElementById("form-control-student").reset();
}

const resetStudents = () => {
  student = [];
  renderStudents(students);
  localStorage.removeItem(STUDENT_LOCAL_STORAGE)
}
