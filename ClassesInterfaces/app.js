/** Arrow Function */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var add = function (a, b) { return a + b; };
var printOutput = function (output) { return console.log(output); };
var button = document.querySelector('button');
if (button) {
    button.addEventListener('click', function (event) { return console.log(event); });
}
printOutput(add(5, 2));
/** Spread Operator */
var hobbies = ['Sports', 'Cooking'];
var activeHobbies = ['Hiking'];
activeHobbies.push.apply(activeHobbies, hobbies);
var person = {
    name: 'Max',
    age: 30
};
var copiedPerson = __assign({}, person);
/** Rest Operator */
var hobbies1 = ['Sports', 'Cooking'];
var activeHobbies1 = ['Hiking'];
activeHobbies1.push.apply(activeHobbies1, hobbies1);
var person1 = {
    name: 'Max',
    age: 30
};
var copiedPerson1 = __assign({}, person1);
var add1 = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var addedNumbers = add1(5, 10, 2, 3.7);
console.log(addedNumbers);
/** Object Destructing */
var hobbies2 = ['Sports', 'Cooking'];
var activeHobbies2 = ['Hiking'];
activeHobbies2.push.apply(activeHobbies2, hobbies2);
var person2 = {
    firstName: 'Max',
    age: 30
};
var copiedPerson2 = __assign({}, person2);
var add2 = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var addedNumbers2 = add2(5, 10, 2, 3.7);
console.log(addedNumbers2);
var hobby1 = hobbies2[0], hobby2 = hobbies2[1], remainingHobbies = hobbies2.slice(2);
console.log(hobbies2, hobby1, hobby2);
var userName = person2.firstName, age = person2.age;
console.log(userName, age, person2);
