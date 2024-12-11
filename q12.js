function processStudents(students) {
    let studentsAbove60 = students.filter(function(student) {
      return student.marks > 60;
    });
  
    let sortedStudents = studentsAbove60.sort(function(student1, student2) {
      return Math.sign(student2.marks - student1.marks);
    });
  
    let studentNames = sortedStudents.map(function(student) {
      return student.name;
    });
  
    return studentNames;
  }
  
  let students = [
    { name: "Alice", marks: 58 },
    { name: "Bob", marks: 85 },
    { name: "Charlie", marks: 92 },
    { name: "David", marks: 45 }
  ];
  
  console.log(processStudents(students)); 
  