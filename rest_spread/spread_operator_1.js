/**
 * Created by thedevsaddam on 4/12/17.
 */

let nums = [8, 5, 4, 6, 9];

let sum = (...nums) => { //... is rest operator here as it receives any number of arguments// rest should the last argument
    return nums.reduce((i, j) => i + j);
};

console.log(sum(...nums)); // spread all the elements of array as arguments

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters