interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: '',
    lastName: '',
    age: 1,
    location: ''
};

const student2: Student = {
    firstName: '',
    lastName: '',
    age: 1,
    location: ''
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
      <th>Column 1 Heading</th>
      <th>Column 2 Heading</th>
      <th>Column 3 Heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    ${tableRows}
    </tr>
  </tbody>
</table>`;

document.body.innerHTML += table;
