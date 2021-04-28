var dog, dogi ;
var happyDog, happyDogi;
var database;
var foodS;
var foodStock;
function preload()
{
  dogi = loadImage("images/Dog.png");
  // happyDogi = loadImage("images/happydog")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250);
  dog.addImage(dogi);
  dog.scale = 1;

  // happyDog = createSprite()
  // happyDog = addImage(happyDogi);
  // happyDogi.scale = 1

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
  background(46,139,87);

  if(keyDown(LEFT_ARROW)){
    writeStock(-1,0);
  }

  if(keyDown(RIGHT_ARROW)){
    writeStock(1,0);
  } 
  
  if(keyDown(UP_ARROW)){
    writeStock(0,-1);
  } 
  
  if(keyDown(DOWN_ARROW)){
    writeStock(0,1);
  }

  drawSprites();
}

function writeStock(x,y){
  database.ref('dog/position').set({
    x: dog.x + x,
    y: dog.y + y
  })
}

function readStock (data){
  var dogPosition = data.val();
  dog.x = dogPosition.x
  dog.y = dogPosition.y;
}

