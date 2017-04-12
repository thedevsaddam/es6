/**
 * Created by thedevsaddam on 4/12/17.
 */

var mult = function (x) {
    return x * x;
};

console.log("result from first order mult: " + mult(4));

var mult1 = x => x * x;

console.log("result from fat arrow: " + mult1(5));

//Note: inside fat arrow "this" context will be mean as parent  block

var fArrowWithoutArgument = () => "I am a fat arrow function without any argument!";

console.log(fArrowWithoutArgument());

//https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions

