var student1 = {
    firstName: 'Alice',
    lastName: 'Smith',
    age: 24,
    location: 'California'
};
var student2 = {
    firstName: 'Bob',
    lastName: 'Johnson',
    age: 30,
    location: 'New York'
};
var studentsList = [student1, student2];
var tableRows = studentsList.map(function (student) {
    return "\n  <tr>\n    <td>".concat(student.firstName, "</td>\n    <td>").concat(student.lastName, "</td>\n    <td>").concat(student.age, "</td>\n    <td>").concat(student.location, "</td>\n  </tr>");
}).join('');
var table = "\n<table>\n  <thead>\n    <tr>\n      <th>firstName</th>\n      <th>lastName</th>\n      <th>age</th>\n      <th>location</th>\n    </tr>\n  </thead>\n  <tbody>\n    ".concat(tableRows, "\n  </tbody>\n</table>");
document.body.innerHTML += table;
