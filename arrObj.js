const students = [
    {
        name: 'Uweoma',
        age: 72,
        grade: 'A'
    },
    {
        name: 'Moses',
        age: 32,
        grade: 'C'
    },
    {
        name: 'Ashionye',
        age: 29,
        grade: 'A'
    },
    {
        name: 'Paul',
        age: 20,
        grade: 'B'
    },
    {
        name: 'Akeel',
        age: 25,
        grade: 'B'
    },
    {
        name: 'Temitope',
        age: 24,
        grade: 'A'
    },
    {
        name: 'Ruth',
        age: 33,
        grade: 'C'
    }
];


function filterByGrade(students, grade) {
    return students.filter(student => student.grade === grade);
}


function averageAge(students) {
    if (students.length === 0) return 0;

    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
}


console.log(averageAge(students)); 


const gradeAStudents = filterByGrade(students, 'A');
console.log(gradeAStudents); 

const gradeBStudents = filterByGrade(students, 'B');
console.log(gradeBStudents); 

const gradeCStudents = filterByGrade(students, 'C');
console.log(gradeCStudents); 
