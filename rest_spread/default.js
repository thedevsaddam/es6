/**
 * Created by thedevsaddam on 4/12/17.
 */

var sum = (a, b = 19) => a + b;

console.log(sum(2)); //it will not throw exception as the "b" has default argument

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters