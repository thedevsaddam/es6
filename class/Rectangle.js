/**
 * Created by thedevsaddam on 4/12/17.
 */

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width;
    }
}

let r = new Rectangle(4, 5);
console.log(r);
console.log("Area of rect: " + r.area());

class Square extends Rectangle { //square extends the Rectangle class
    constructor(length) {
        super(length, length);
    }
}

let s = new Square(4);
console.log(s.area());

//https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes