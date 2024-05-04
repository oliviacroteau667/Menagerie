/**
 * Olivia Croteau
 * IGME-102: P1 Menagarie, 02/29/24
 * BlackBarred subclass of the Owl superclass
 */

//Display: dark gray oval bod, circle head, light grey bars

"use strict"; //catch some common coding errors

class BlackBarred extends Owl {
    /**
     * constructor: sets coordinates, color
     * hornsVisible updated in horns() set to true with owl mouseClick() in sketch.js
     * @param {number} x 
     * @param {number} y 
     * @param {color} color 
     */
    constructor(x, y, color) {
        super(x, y, color);
        this.hornsVisible = false;
    }

    /**
     * display: draw black barred owl on top of base class
     */
    display() {
        super.display();
        fill("lightgrey");

        //bars
        rect(this.x-50, this.y-40, 100, 10, 20);
        rect(this.x-60, this.y-20, 120, 10, 20);
        rect(this.x-60, this.y, 120, 10, 20);
        rect(this.x-60, this.y+20, 120, 10, 20);
        rect(this.x-50, this.y+40, 100, 10, 20);
        rect(this.x-40, this.y+60, 80, 10, 20);

        if (this.hornsVisible) {
            fill(this.color);
            ellipse(this.x-35, this.y-135, 13, 27); //left horn
            ellipse(this.x+35, this.y-135, 13, 27); //right horn
            
        }
    }

    /**
     * horns: make horns display on black barred onClick()
     */
    horns() {
        this.hornsVisible = true;
    }
}