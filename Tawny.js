/**
 * Olivia Croteau
 * IGME-102: P1 Menagarie, 02/29/24
 * Tawny subclass of the Owl superclass
 */

//Display: redish oval body, redish circle head, black circle eyes, lighter red crown

"use strict"; //catch some common coding errors

class Tawny extends Owl {
    /**
     * constructor: sets coordinates, color
     * @param {number} x 
     * @param {number} y 
     * @param {color} color
     */
    constructor(x, y, color, beak) {
        super(x, y, color, beak);
    }

    //display: draw spotted owl on top of base class
    display() {
        super.display();
        fill("brown");
        ellipse(this.x, this.y-105, 75);
        fill(this.color)
        ellipse(this.x-17, this.y-110, 37);
        ellipse(this.x+17, this.y-110, 37);
        rect(this.x-40, this.y-110, 80, 50);

        //redraw eyes and beak
        fill("black");
        stroke("yellow");
        ellipse(this.x-20, this.y-110, this.size*0.2, this.size*0.2);
        ellipse(this.x+20, this.y-110, this.size*0.2, this.size*0.2);
        fill("yellow");
        triangle(this.x-10, this.y-90, this.x+10, this.y-90, this.x, this.y-70);
    }
}