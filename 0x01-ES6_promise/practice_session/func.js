// const uuid = require('uuid');
import uuid from 'uuid';
// const mul = (a, b) => a * b;
// console.log(mul(5,2));

// const createArray = (n1, n2) => [n1, n2];
// console.log(createArray(5,5));

const personObj = (name, age) => ({
    name: name,
    age: age,
    id: uuid.v4()
});

console.log(personObj('Jason', 21));

// IIFE - imidiate Invoked Fiuction Expression
(function myName(name) {
    console.log(name ? name: 'Heisenburg');
})();