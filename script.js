//complete this code
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    setWidth(width) {
        this.width = width;
    }
    setHeight(height) { 
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    getArea() {
        return this.width * this.height;
    }
}

class Square extends Rectangle {

    constructor(side) {
        super(side,side);
    }
    setSide(side) {
        super.setSide(side);
        super.setSide(side);
    }
    getSide() {
        return super.setSide();
    }
    getPerimeter() {
        return 4 * this.side;
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
