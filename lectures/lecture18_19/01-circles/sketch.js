function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    // 1. what do you ant to repeat
    // 2. how many time?
    // 3. what do we want to change each time?
    let counter=0;
    let y =0;
    let width= 0;
    while(counter <300){
        circle(200, y, width);
        circle(500, y, width);
        circle(700, y, width);
        y+=3;
        width+=4;
        counter+= 1; //don't forget to increment the counter
    }
  
    
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}
