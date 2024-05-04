/**
 * Olivia Croteau
 * IGME-102: P1 Menagarie, 02/29/24
 * Description and interaction instructions
 */

"use strict"; //catch some common coding errors

/* Global variables */
let OWLARRAY = [];
let COLORS = ["maroon", "black", "saddlebrown"];
let UIMANG;


/**
 * setup :
 */
function setup() {
   let canvas = createCanvas(800, 800);
   UIMANG = new UImanagement();
}

/**
 * draw :
 */
function draw() {
   background("darkgreen");

   for (let owl of OWLARRAY) {
      owl.display();
      owl.update();
   }

}

/**
 * randInstance: creates an instance of the Owl class
 * @param {num} coorX 
 * @param {num} coorY 
 * @returns owl instance
 */
function randInstance(coorX, coorY) {
   let thisOwl = null;
   let colorChoice = random(COLORS);
   let randNum = random(0,12);

   if (randNum <= 3) {
       thisOwl = new Owl(coorX, coorY, colorChoice);
   }else if (3 < randNum && randNum <= 6){
       thisOwl = new Tawny(coorX, coorY, colorChoice);
   }else if (6 < randNum && randNum <= 9) {
       thisOwl = new Spotted(coorX, coorY, colorChoice);
   }else if (9 < randNum && randNum <= 12) {
       thisOwl = new BlackBarred(coorX, coorY, colorChoice);
   }

   return thisOwl;
}

/**
 * mouseClicked: 4 functions, controlled by radiobuttons in UImanagement.js
 * 1. generate new random owl instance at mouse coords
 * 2. call to extend wings if mouse clicked within owl
 * 3. call to display horns is mouse clicked within black barred owl
 * 4. replace owl with new random owl if mouse clicked within owl
 */
function mouseClicked() {
   let radioValue = UIMANG.getMenu();
   let clickedCreature = false;

   //add new random owl to array
   if (radioValue == "Generate Creature") {
      let newOwl = randInstance(mouseX, mouseY);
      OWLARRAY.push(newOwl);
   }else {
      for (let i=0; i<OWLARRAY.length && !clickedCreature; i++) { //iterate through owlarray
         let currentOwl = OWLARRAY[i]; //get current creature instance
         if (currentOwl.within()) { //check if mouse within current creature instance
            clickedCreature = true;
            
            //general mouseClicked function
            if (radioValue == "Extend Wings") {
               currentOwl.extendWings();
            
            //unique mouseClicked function
            } else if (radioValue == "Black Barred Horns" && currentOwl instanceof BlackBarred){
               currentOwl.horns();

            //creature replacement mouseClicked function
            } else if (radioValue == "Replace Creature") {
               //log current coords
               let currentX = currentOwl.x;
               let currentY = currentOwl.y;
               //create new owl instance at current coords and place it at current array index
               let replacementOwl = randInstance(currentX, currentY); 
               OWLARRAY[i] = replacementOwl;
            }
         } 
      }
   }
}

/**
 * fillRandom: fill a creature array with randomly-chosen-class instances
 */
function fillRandom() {
   //empty OWLARRAY
   OWLARRAY.splice(0);

   //fill OWLARRAY with grid of random owl instances (16 for a 800x800 canavs)
   for (let x = 100; x <= 780; x += 200) { //loop through rows
      for (let y = 160; y <= 780; y += 200) { //loop through columns
          OWLARRAY.push(randInstance(x, y));
      }
  }
  console.log(OWLARRAY);
}

/**
 * fillOrdered: fill a creature array with class-chosen-in-order instances
 */
function fillOrdered() {
   //empty OWLARRAY
   OWLARRAY.splice(0);
   let newbie;
   let i = 5;

   for (let x = 100; x <= 780; x += 200) { //loop through rows
      for (let y = 160; y <= 780; y += 200) { //loop through columns
            let colorChoice = random(COLORS);
            //assign appropriate constructor
            //in cycling order for each class:
            if (i % 5 === 0) { //column 0
               newbie = new Owl(x, y, colorChoice);
            } else if (i % 5 === 1) { //column 1
               newbie = new Spotted(x, y, colorChoice);
            }  else if (i % 5 === 2) { //column 2
               newbie = new Tawny(x, y, colorChoice);
            } else if (i % 5 === 3) { //column 3
               newbie = new BlackBarred(x, y, colorChoice);
            }
            
            OWLARRAY.push(newbie);
      }
      i += 1;
   }
   console.log(OWLARRAY);
}

/**
 * fillRows: fill a creature array with rows of color-accurate owls
 */
function fillRows() {
   OWLARRAY.splice(0);
   let newbie;

   for (let x = 100; x <= 780; x += 200) { //loop through rows
      for (let y = 160; y <= 780; y += 200) { //loop through columns
         if (y === 160) { //row 1
            newbie = new Owl(x, y, "gray");
         } else if (y === 360) { //row 2
            newbie = new Spotted(x, y, COLORS[2]);
         } else if (y === 560) { //row 3
            newbie = new Tawny(x, y, COLORS[0]);
         } else if (y === 760) { //row 4
            newbie = new BlackBarred(x, y, COLORS[1]);
         }

         OWLARRAY.push(newbie);
      }
   }
   console.log(OWLARRAY);
}

/**
 * newRandom: return a new random-class creature
 */
function newRandom() {

}
