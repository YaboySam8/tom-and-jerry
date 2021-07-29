var bgImg;
var cat;
function preload() {
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bgImg = loadImage("cat1.png");
    catImg = loadAnimation("images/cat1.png")
    mouseImg = loadAnimation("images/mouse1.png")

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
}


}
