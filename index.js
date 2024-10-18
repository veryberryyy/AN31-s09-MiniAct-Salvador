console.log(`Student's Grade`)

// Step 1
let studentGrades = [
    ['Bianca', [98, 99, 97], 'pass'],
    ['Jane', [90, 95, 92], 'pass'],
    ['Nico', [82, 85, 84], 'pass'],
    ['Jewel', [79, 80, 77], 'pass'],
    ['Faith', [90, 91, 89], 'pass'],
    ['Ian', [70, 68, 67], 'pass'],
];

// Step 2
studentGrades.push(['Bean', [100, 98, 99], 'pass']);

// Step 3
studentGrades.forEach(student => {
    let grades = student[1];

    let ave = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

    if (ave < 70) {
        student[2] = 'fail';
    } else if (ave > 85) {
        student[2] = 'honor pass';
    } else {
        student[2] = 'pass';
    }
});

// Step 4
let updatedGrades = studentGrades.map(student => {
    let [name, grades] = student;

    let ave = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

    let status;
    if (ave < 70) {
        status = 'fail';
    } else if (ave > 85) {
        status = 'honor pass';
    } else {
        status = 'pass';
    }

    return [name, grades, ave, status];  
});

console.log('')
updatedGrades.forEach(student => {
    console.log(`${student[0]}'s average grade: ${student[2]} (${student[3]})`);
});

// Step 5 
let classAverage = updatedGrades
    .map(student => student[2]) 
    .reduce((sum, ave) => sum + ave, 0) / updatedGrades.length;

console.log('')
console.log(`Class average: ${classAverage}`);