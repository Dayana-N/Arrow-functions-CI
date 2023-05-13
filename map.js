
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];

  let studentId = students.map(student => [student.name, student.id])
  console.log(studentId)
  let studentIdObj = students.map(student => {
    return {
        id: student.id,
        name: student.name
    }

  })

  console.log(studentIdObj)

// add age to each object
const ageObj = {
    Mark: 32,
    Ariel: 26,
    Jason: 28
}

studentsWithAge = students.map(student => {
    return {
        ...student,
        age: ageObj[student.name]
    }
})

console.log(studentsWithAge)