const students = [
    'Achraf',
    'Alessandro',
    'Angelo',
    'Barbara',
    'Basilia',
    'Carla',
    'Carmelo',
    'Chiara',
    'Daniele',
    'Edoardo',
    'Esperanza',
    'Federico',
    'Flavia',
    'Florencia',
    'Gabriele',
    'Gerta',
    'Gessica B.',
    'Giacomo',
    'Gioele',
    'Giusy',
    'Jessica C.',
    'Linda',
    'Livia',
    'Lorenzo',
    'Ludovica',
    'Marco',
    'Marta',
    'Martina',
    'Matteo',
    'Michele',
    'Milena',
    'Nicole',
    'Paola',
    'Ritanna',
    'Roberta',
    'Stefania',
    'Thomas',
    'Tommaso',
    'Tudor',
    'Valentina'
]


function extractStudents() {
    console.log('Il fortunato sara\'..')
    console.log('-------------------------');
    setTimeout(() => {
        console.log(students[Math.floor(Math.random() * students.length)]);
    }, 1500)
}

extractStudents();
