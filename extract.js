const students = [
    'ciccio',
    'pippo',
]

function extractStudents() {
    const num = Math.floor(Math.random() * students.length);
    const student = students[num];
    console.log(student);
}


extractStudents();