interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1;
let student2;
const studentsList = [student1, student2]

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
      <td>Data for Column 1</td>
      <td>Data for Column 2</td>
      <td>Data for Column 3</td>
    </tr>
  </tbody>
</table>`;

studentsList.forEach(student => {
    // 
});