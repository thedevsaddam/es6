/**
 * Created by thedevsaddam on 4/12/17.
 */

let n = 0;
function* Incrementer(upto) {
    if (n < upto) {
        for (i = 0; i < upto; i++) {
            n++;
            yield n;
        }
    }
}


let incr = Incrementer(5);
console.log(incr.next()); //1 and done is false
console.log(incr.next()); //2 and done is false
console.log(incr.next()); //3 and done is false
console.log(incr.next()); //4 and done is false
console.log(incr.next()); //5 and done is false
console.log(incr.next()); //value: undefined and done is true