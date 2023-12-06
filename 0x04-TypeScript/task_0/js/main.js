var student1 = {
    firstName: '',
    lastName: '',
    age: 1,
    location: ''
};
var student2 = {
    firstName: '',
    lastName: '',
    age: 1,
    location: ''
};
var studentsList = [student1, student2];
var tableRows = studentsList.map(function (student) {
    return "\n    <tr>\n        <td>".concat(student.firstName, "</td>\n        <td>").concat(student.lastName, "</td>\n        <td>").concat(student.age, "</td>\n        <td>").concat(student.location, "</td>\n    </tr>");
}).join('');
var table = "\n<table>\n  <thead>\n    <tr>\n      <th>Column 1 Heading</th>\n      <th>Column 2 Heading</th>\n      <th>Column 3 Heading</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n    ".concat(tableRows, "\n    </tr>\n  </tbody>\n</table>");
document.body.innerHTML += table;
