/**
 * Olivia Croteau
 * IGME-102: P1 Menagarie, 02/29/24
 * Spotted subclass of the Owl superclass
 */

//Display: brown oval body, brown circle head, black circle eyes, light grey spots

"use strict"; //catch some common coding errors

class Spotted extends Owl {
    /**
     * constructor: sets coordinates, color
     * @param {number} x 
     * @param {number} y 
     * @param {color} color
     */
    constructor(x, y, color) {
        super(x, y, color);
    }

    //display: draw spotted owl on top of base class
    display() {
        super.display();
        fill("lightgrey");
        rect(this.x, this.y+20, 15, 10, 20);
        rect(this.x-10, this.y-20, 15, 10, 20);
        rect(this.x-40, this.y, 15, 10, 20);
        rect(this.x-55, this.y-30, 15, 10, 20);
        rect(this.x+20, this.y+50, 15, 10, 20);
        rect(this.x+45, this.y, 15, 10, 20);
        rect(this.x-35, this.y+55, 15, 10, 20);
        rect(this.x+20, this.y-35, 15, 10, 20);
    }
}