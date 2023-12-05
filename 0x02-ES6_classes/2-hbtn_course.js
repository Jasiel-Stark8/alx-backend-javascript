class HolbertonCourse {
  constructor(name, length, students){
    this.validateName(name);
    this.validateLength(length);
    this.validateStudents(students);

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this.validateName(newName);
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this.validateLength(newLength);
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudent) {
    this.validateStudents(newStudent)
    this._students = newStudent;
  }

  validateName(name) {
    if (typeof name !== 'string') {
        throw new Error('Name must be a string');
    }
  }

  validateLength(length) {
    if (typeof length !== 'number') {
        throw new Error('Length must be a number');
    }
  }

  validateStudents(students) {
    if (typeof students !== 'string') {
        throw new Error('Student must be a string');
    }
  }

}

export default HolbertonCourse
