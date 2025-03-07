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
        super(side, side);
    }

    setSide(side) {
        this.setWidth(side);
        this.setHeight(side);
    }

    getSide() {
        return this.width; // Square me width & height same hoti hai
    }

    getPerimeter() {
        return 4 * this.width;
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
