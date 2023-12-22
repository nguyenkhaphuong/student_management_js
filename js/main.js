let students = []

const addNewStudent = () => {
  const newStudent = getStudentInfo()
  if (newStudent) {
    students.push(newStudent)
    renderStudents(students)
    console.log('New Student Added Successfully')
    document.getElementById('student-form').reset()
  }
}

const deleteList = () => {
  students = []
  renderStudents(students)
  console.log('List Deleted')
}
