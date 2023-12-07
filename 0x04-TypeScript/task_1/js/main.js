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
console.log(typeof (teacher1), teacher1);
console.log(typeof (director1), director1);
