interface TeacherInterface {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: boolean | number | string | undefined;
}

interface DirectorsInterface extends TeacherInterface {
  numberOfReports:  number;
}

class Teacher implements TeacherInterface {
  // Private Properties
  public readonly firstName: string;
  public readonly lastName: string;

  // Public Properties
  public fullTimeEmployee: boolean;
  public location: string;
  public yearsOfExperience: number;
  [key: string]: boolean | number | string | undefined;

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

class Directors implements DirectorsInterface {
  public readonly firstName: string;
  public readonly lastName: string;

  // Public Properties
  public fullTimeEmployee: boolean;
  public location: string;
  public yearsOfExperience: number;
  [key: string]: boolean | number | string | undefined;
  public numberOfReports:  number;

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, numberOfReports: number, yearsOfExperience?: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    this.numberOfReports = numberOfReports;
    this.yearsOfExperience = yearsOfExperience;
  }
}

const director1: Directors = {
  firstName: 'Nirmaba',
  lastName: 'Kugali',
  fullTimeEmployee: false,
  location: 'Nairobi',
  numberOfReports: 2,
  yearsOfExperience: 2,
};

console.log(typeof(teacher1), teacher1);
console.log(typeof(director1), director1);