"use strict";
const students = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    gender: "male",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    gender: "male",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    gender: "female",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    gender: "male",
  },
  {
    firstName: "Pansy",
    lastName: "Parkinson",
    house: "Slytherin",
    gender: "female",
  },
  {
    firstName: "Hannah",
    lastName: "Abbott",
    house: "HufflePuff",
    gender: "female",
  },
  {
    firstName: "Justin",
    lastName: "Finch-Fletchley",
    house: "HufflePuff",
    gender: "male",
  },
  {
    firstName: "Michael",
    lastName: "Corner",
    house: "Ravenclaw",
    gender: "male",
  },
  {
    firstName: "Padma",
    lastName: "Patil",
    house: "Ravenclaw",
    gender: "female",
  },
];


// function greeting(firstName) {
//     return `Hello ${firstName}`
// }
// const sayHi = greeting;

// const result = sayHi("Harry");
// console.log(result);

const people = ["Harry", "Ron", "Hermione", "Neville"];

function testParms(a,b,c,d){
    console.log(`a:${a}, b:${b}, c:${c}, d:${d}`);
}
// people.forEach(testParms); 

function myForEach(liste, callback) {
    for (let i = 0; i < liste.length; i++) {
        const currentValue = liste[i];
        callback(currentValue, i, liste);
        
    }
}

function sayHello(name) {
    console.log(`Hello ${name}`);
}

// myForEach(people,testParms);


function checkIfLastNameIsAbbott(currentValue, i, students) {
    if(currentValue.lastName === "Abbott") {
        return true;
    } else {
        return false
    }
}

const hannah = students.find(checkIfLastNameIsAbbott);
console.log(hannah);


function isMale(students){
    if(students.gender === "male") {
        return true
    } else {
        return false
    }
}
function isSlytherin(students){
    if (students.house === "Slytherin") {
        return true
    } else {
        return false
    }
}

function isNotSlytherin(students) {
    if (students.house !== "Slytherin") {
        return true
    } else {
        return false
    }
}

const slytherin = students.filter(isSlytherin);
const notSlytherin = students.filter(isNotSlytherin);
const boys = students.filter(isMale);
console.log(boys);
console.log(slytherin);
console.log(notSlytherin);