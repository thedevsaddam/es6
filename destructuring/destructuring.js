/**
 * Created by thedevsaddam on 4/12/17.
 */

const action = {
    type: "ADD",
    payload: {a: 10, b: 5}
};

let {type, payload} = action; //destructuring the action object

console.log(type, payload);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment