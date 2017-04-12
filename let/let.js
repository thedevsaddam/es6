/**
 * Created by thedevsaddam on 4/12/17.
 */

let name = "John  Doe";
let anotherName = "Saddam H";

function YourName() {
    console.log(anotherName); //the anotherName  variable will be accessible from top scope
    let name = "Jane Doe"; //name variable is only available in this  block
    return name;            //top name variable will be shadowed here as name variable is declared in top scope
}

console.log(name);
console.log(YourName());

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let