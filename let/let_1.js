/**
 * Created by thedevsaddam on 4/12/17.
 */

let name = "John Doe";
let anotherName = "Saddam H";
let YouCanChaneMe = "Hello world";

if (true) {
    let name = "Jane  Doe"; //same as inside function block //name will be shadowed
    console.log(name);
    console.log(anotherName); //anotherName will be accessible
    YouCanChaneMe = "New Hello world!";
}

console.log("name variable outside if block: "+ name);
console.log("Value changed inside if  block: " + YouCanChaneMe);
