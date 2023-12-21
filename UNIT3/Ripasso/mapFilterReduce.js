const students = [
    { name: 'Alice', year: 3 },
    { name: 'Bob', year: 2 },
    { name: 'Charlie', year: 3 },
    { name: 'David', year: 1 },
    { name: 'Eve', year: 2 },
    { name: 'Frank', year: 1 }
  ];
// MAP
// Itera tutto l'array e restituisce un nuovo array con i valori modificati in base alla funzione passata come parametro
const mapStudents = students.map((student, index) => {
     return index + '-' + student.name + ': ' + student.year;
  });

  console.log(mapStudents);

  // FILTER
  // Itera tutto l'array e restituisce un nuovo array con i valori che soddisfano la condizione passata come parametro
  const filterStudents = students.filter((student) => {
    return student.year === 1;
  });

  // REDUCE
  // Itera tutto l'array e restituisce un unico valore in base alla funzione passata come parametro
  // Utilizziamo reduce() per raggruppare gli studenti per anno di corso
  const groupedStudents = students.reduce((accumulator, student) => {
    const { year } = student;
    // Se l'anno di corso non è presente nell'accumulatore, lo aggiungiamo come chiave con un array iniziale
    if (!accumulator[student.year]) {
      accumulator[year] = [];
    }
  
    // Aggiungiamo lo studente all'array corrispondente all'anno di corso
    accumulator[year].push(student);
  
    return accumulator;
  }, {});
  
  console.log(groupedStudents);
  