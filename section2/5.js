/**
 * Direction
 * Divide students to all of groups & students must sorted by first name
 * 
 * Expected Result
 * [
 *   [
 *     { "firstName": "Belle", "lastName": "Norton" },
 *     { "firstName": "Finnley", "lastName": "Rennie" }
 *   ],
 *   [
 *     { "firstName": "Kai", "lastName": "Lyons" },
 *     { "firstName": "Peyton", "lastName": "Gardner" }
 *   ],
 *   [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
 * ]
 */
 const students = [
    { firstName: 'Kai', lastName: 'Lyons' },
    { firstName: 'Belle', lastName: 'Norton' },
    { firstName: 'Finnley', lastName: 'Rennie' },
    { firstName: 'Tatiana', lastName: 'Dickerson' },
    { firstName: 'Peyton', lastName: 'Gardner' },
  ];
  const groups = 3;
  
  function result(students, groups) {
    // your code here
    
    let results = [];
    students.sort(function(a, b) {
        const nameA = a.firstName.toUpperCase();
        const nameB = b.firstName.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    for (let i = 0; i < groups; i++) {
        for (let j = 0; j < students.length/groups; j++) {
            result[i].push(students[j])
        }
    }
    return students;
  }
  
  console.log(result(students, groups));