const getStudentInfo = () => {
  try {
    const studentId = parseInt(document.getElementById('studentId').value)
    const name = document.getElementById('studentName').value
    const email = document.getElementById('studentEmail').value
    const math = parseFloat(document.getElementById('mathGrade').value)
    const physics = parseFloat(document.getElementById('physicsGrade').value)
    const chemistry = parseFloat(
      document.getElementById('chemistryGrade').value
    )
    const english = parseFloat(document.getElementById('englishGrade').value)

    if (
      studentId === '' ||
      name === '' ||
      email === '' ||
      math === '' ||
      physics === '' ||
      chemistry === '' ||
      english === ''
    ) {
      alert('Please enter all required fields')
      return undefined
    }

    if (
      isNaN(studentId) ||
      isNaN(math) ||
      isNaN(physics) ||
      isNaN(chemistry) ||
      isNaN(english)
    ) {
      alert(
        'Please enter a valid number for Student Id, Math, Physics, Chemistry and/or English grades'
      )
      return false
    }

    if (math < 0 || math > 10) {
      alert('Math grade must be between 0 and 10.')
      return false
    }

    if (physics < 0 || physics > 10) {
      alert('Physics grade must be between 0 and 10.')
      return false
    }

    if (chemistry < 0 || chemistry > 10) {
      alert('Chemistry grade must be between 0 and 10.')
      return false
    }

    if (english < 0 || english > 10) {
      alert('English grade must be between 0 and 10.')
      return false
    }

    const newStudent = new Student(
      studentId,
      name,
      email,
      math,
      physics,
      chemistry,
      english
    )

    renderStudents(newStudent)

    return newStudent
  } catch (error) {
    console.log('Error', error)
  }
}

const renderStudents = (students) => {
  let contentHTML = ''
  const table = document.getElementById('student-table-body')

  for (let i = 0; i < students.length; i++) {
    const currentStudent = students[i]
    const averageGrade = (
      (Number(currentStudent.math) +
        Number(currentStudent.physics) +
        Number(currentStudent.chemistry) +
        Number(currentStudent.english)) /
      (4 !== 0 ? 4 : 1)
    ).toFixed(2)

    const contentTr = `
    <tr>
      <td>${currentStudent.id}</td>
      <td>${currentStudent.name}</td>
      <td>${currentStudent.email}</td>
      <td>${Math.round(averageGrade * 2) / 2}</td>
      <td>
        <button id="edit-button" class="edit-button" type="button" onclick="editStudent()">Edit</button>
        <button id="delete-student" class="delete-student" type="button" onclick="deleteStudent()">Delete</button>
      </td>
    </tr>
    `
    contentHTML += contentTr
  }

  table.innerHTML = contentHTML
}
