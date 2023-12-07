interface TeacherInterface {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: boolean | number | string | undefined;
}

class Teacher implements TeacherInterface {
  // Private Properties
  public readonly firstName: string;
  public readonly lastName: string;

  // Public Properties
  public fullTimeEmployee: boolean;
  public location: string;
  public yearsOfExperience: number;

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, yearsOfExperience?: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    this.yearsOfExperience = yearsOfExperience;
  }
}

const teacher1: TeacherInterface = {
  firstName: 'Monaline',
  fullTimeEmployee: false,
  lastName: 'Gonzalez',
  location: 'Kigali',
  contract: false,
};

console.log(teacher1);