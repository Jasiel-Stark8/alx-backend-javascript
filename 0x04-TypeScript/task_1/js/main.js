var Teacher = /** @class */ (function () {
    // Constructor
    function Teacher(firstName, lastName, fullTimeEmployee, location, yearsOfExperience) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        this.yearsOfExperience = yearsOfExperience;
    }
    return Teacher;
}());
// Example usage
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false
};
console.log(teacher3);
