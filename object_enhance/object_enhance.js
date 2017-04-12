/**
 * Created by thedevsaddam on 4/12/17.
 */

const name = "Saddam H";
const age = 26;
const occupation = "Software Engineer";

const oldWayObject = {
    name: name,
    age: age,
    occupation: occupation
};

console.log(oldWayObject);

const enhanceObject = {name, age, occupation}; // we can omit if variable name is similar to key

console.log(enhanceObject);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals