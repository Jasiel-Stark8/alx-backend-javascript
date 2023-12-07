var Teacher = /** @class */ (function () {
    function Teacher(firstName, lastName, fullTimeEmployee, location, yearsOfExperience) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        this.yearsOfExperience = yearsOfExperience;
    }
    return Teacher;
}());
var teacher1 = {
    firstName: 'Monaline',
    fullTimeEmployee: false,
    lastName: 'Gonzalez',
    location: 'Kigali',
    contract: false
};
// ======================================================================================================================
var Directors = /** @class */ (function () {
    function Directors(firstName, lastName, fullTimeEmployee, location, numberOfReports, yearsOfExperience) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        this.numberOfReports = numberOfReports;
        this.yearsOfExperience = yearsOfExperience;
    }
    return Directors;
}());
var director1 = {
    firstName: 'Nirmaba',
    lastName: 'Kugali',
    fullTimeEmployee: false,
    location: 'Nairobi',
    numberOfReports: 2,
    yearsOfExperience: 2
};
var printTeacher = function (firstName, lastName) {
    return firstName.charAt(0) + '. ' + lastName;
};
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// Console log for debugging
// const student = new StudentClass('Semblance', 'Murai');
// console.log(student.displayName());
// console.log(student.workOnHomework());
// console.log(typeof(teacher1), teacher1);
// console.log(typeof(director1), director1);
// console.log(printTeacher('Kmbri', 'Talini'));
// Write to document
function appendToDocument(text) {
    var paragraph = document.createElement('p');
    paragraph.textContent = text;
    document.body.appendChild(paragraph);
}
// Usage example for the function
var student = new StudentClass('Semblance', 'Murai');
appendToDocument(student.displayName()); // Outputs: Semblance
appendToDocument(student.workOnHomework()); // Outputs: Currently working
appendToDocument('Teacher: ' + JSON.stringify(teacher1));
appendToDocument('Director: ' + JSON.stringify(director1));
appendToDocument('Printed Teacher: ' + printTeacher('Kmbri', 'Talini'));
