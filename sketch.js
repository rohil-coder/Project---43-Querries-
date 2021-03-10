//Note :- Ma'am I am not getting anything in this project. I don't know what to do. Please help me in the
//next class. I have just created 3 variables for hour, minute and second. And after this I don't know
//what to do. Ma'am please read my comment line. 
let h = hour();
text('Current hour:\n + h, 5, 50');
let m = minute();
text('Current minute :\n + m, 10, 50');
let s = second();
text('Current second :\n + m, 15, 50');


function setup() 
{
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() 
{
  background(255,255,255);  
  drawSprites();
}