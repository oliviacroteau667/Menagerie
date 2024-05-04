/**
 * Olivia Croteau
 * IGME-102: P1 Menagarie, 02/29/24
 * Owl superclass
 */

"use strict"; //catch some common coding errors

class Owl {
    /**
     * constructor: set coordinates, color, and size
     * @param {number} x 
     * @param {number} y 
     * @param {color} color 
     */
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = 100;
        this.speed = 20;
        this.variation = random(-0.3, -0.1)
        this.wingSize = 100
        this.rotateDeg = 0; 
    }

    /**
     * display: draw owls
     */
    display() {
        //update x and y with random variation
        this.x += sin((millis()+200) * this.variation);
        this.y += sin((millis()+400) * this.variation);


        //head and body
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.size*1.3, this.size*2);
        ellipse(this.x, this.y-100, this.size * 0.95, this.size);

        //wings
        angleMode(DEGREES);

        //left
        translate(this.x-30, this.y); //find axis
        rotate(this.rotateDeg); //rotate canvas
        ellipse(-30, 0, this.wingSize/2, this.wingSize); //draw wing and new angle and increased size
        resetMatrix();

        //right
        translate(this.x+30, this.y); //find axis
        rotate(360-this.rotateDeg);
        ellipse(30, 0, this.wingSize/2, this.wingSize);
        resetMatrix();

        //eyes
        fill("black");
        stroke("yellow");
        ellipse(this.x-20, this.y-110, this.size*0.2, this.size*0.2);
        ellipse(this.x+20, this.y-110, this.size*0.2, this.size*0.2);

        //beak
        fill("yellow");
        noStroke();
        triangle(this.x-10, this.y-90, this.x+10, this.y-90, this.x, this.y-70);
    }


    /**
     * within: return whether mouse is within creature
     * @returns {boolean}
     */
    within() {
        //left && right && bottom && top
        return (mouseX >= this.x-(this.size*1.3/2)) && (mouseX <= this.x+(this.size*1.3/2))
            && (mouseY <= this.y+(this.size)) && (mouseY >= this.y-(this.size*1.5));
    }

    /**
     * extendWings: extend wings on click
     */
    extendWings() {
        //update rotate degree and increase wingspan if not yet raised
        if (this.rotateDeg <= 30) {
            this.rotateDeg += 30;
            this.wingSize = this.wingSize * 1.2;

            console.log(this.variation);
        }
    }

    /**
     * update: update a variation property value so that .display() can visibly animate some
     * characteristic/s of creatures
     */
    update() {

    }
}

