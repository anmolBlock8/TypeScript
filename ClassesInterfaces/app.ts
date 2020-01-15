/** Arrow Function */

const add = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', event => console.log(event));
}

printOutput(add(5, 2));






/** Spread Operator */

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
  name: 'Max',
  age: 30
};

const copiedPerson = { ...person };




/** Rest Operator */

const hobbies1 = ['Sports', 'Cooking'];
const activeHobbies1 = ['Hiking'];

activeHobbies1.push(...hobbies1);

const person1 = {
  name: 'Max',
  age: 30
};

const copiedPerson1 = { ...person1 };

const add1 = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add1(5, 10, 2, 3.7);
console.log(addedNumbers);




/** Object Destructing */

const hobbies2 = ['Sports', 'Cooking'];
const activeHobbies2 = ['Hiking'];

activeHobbies2.push(...hobbies2);

const person2 = {
  firstName: 'Max',
  age: 30
};

const copiedPerson2 = { ...person2 };

const add2 = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers2 = add2(5, 10, 2, 3.7);
console.log(addedNumbers2);

const [hobby1, hobby2, ...remainingHobbies] = hobbies2;

console.log(hobbies2, hobby1, hobby2);

const { firstName: userName, age } = person2;

console.log(userName, age, person2);