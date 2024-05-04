/**
 * Olivia Croteau
 * IGME-102: P1 Menagarie, 02/29/24
 * UI management class
 */

"use strict"; //catch some common coding errors

class UImanagement {
    /**
     * constructor:
     */
    constructor() {
        createElement("br")

        this.menu = createRadio();
        this.menu.option("Extend Wings");
        this.menu.option("Black Barred Horns");
        this.menu.option("Generate Creature");
        this.menu.option("Replace Creature");

        createElement("br")

        let randomFillButton = createButton("Refill with Random Owls");
        randomFillButton.mouseClicked(fillRandom);
        createSpan("&nbsp; &nbsp;");

        let orderedFillButton = createButton("Refill with Ordered Owls");
        orderedFillButton.mouseClicked(fillOrdered)
        createSpan("&nbsp; &nbsp;");

        let chosenFillButton = createButton("Refill with Rows of Owls");
        chosenFillButton.mouseClicked(fillRows);
    }

    getMenu() {
        //console.log(this.menu.value());
        return this.menu.value();
    }
}