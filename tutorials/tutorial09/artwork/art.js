const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const colors = ["#08415c", "#e1f0c4", "#6bab90", "#55917f", "#5e4c5a"];

function randomInt(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(8); // how many redraws per second

    fill("green");
    strokeWeight(4);

    // generate a random x-position, y-position, and size:
   

    // Draw a random circle:
    let counter=0;
    while (counter<40){
        let color= colors[randomInt(0,4)];
        fill(color); //sets new color
        let x = randomInt(0, canvasWidth/2);
        let y = randomInt(0, canvasHeight/2);
        let size = randomInt(25, 120);
    circle(x, y, size);
    counter += 1;
    }
    counter=0;
    fill("orange");
    while (counter<400){
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomInt(25, 12);
    square(x, y, size);
    counter += 1;
    }
}

/***********************************+*
 * ANIMATION LOOP
 * Anything that you want to animate
 * goes in the draw() function
 * *********************************
 */
function draw() {
    clear();
    let counter=0;
    while (counter<40){
        let color= colors[randomInt(0,4)];
        fill(color); //sets new color
        let x = randomInt(0, canvasWidth/2);
        let y = randomInt(0, canvasHeight/2);
        let size = randomInt(25, 120);
    circle(x, y, size);
    counter += 1;
    }
    counter=0;
    fill("orange");
    while (counter<400){
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomInt(25, 12);
    square(x, y, size);
    counter += 1;
    }
    // generate a random x-position, y-position, and size:
    let x = randomInt(0, canvasWidth);
    let y = randomInt(0, canvasHeight);
    // let size = randomFloat(25, 125);

    // draw a random circle each time the program animates:
    // circle(x, y, size);
}
