interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Alice',
  lastName: 'Smith',
  age: 24,
  location: 'California'
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Johnson',
  age: 30,
  location: 'New York'
};

const studentsList: Student[] = [student1, student2];

let tableRows = studentsList.map(student => {
  return `
  <tr>
    <td>${student.firstName}</td>
    <td>${student.lastName}</td>
    <td>${student.age}</td>
    <td>${student.location}</td>
  </tr>`;
}).join('');

const table = `
<table>
  <thead>
    <tr>
      <th>firstName</th>
      <th>lastName</th>
      <th>age</th>
      <th>location</th>
    </tr>
  </thead>
  <tbody>
    ${tableRows}
  </tbody>
</table>`;

document.body.innerHTML += table;
