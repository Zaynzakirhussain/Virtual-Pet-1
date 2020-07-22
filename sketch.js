//Create variables here
var dog, happydog, database, foodS, foodStock;

function preload() {
  //load images here
  hdogimg = loadImage("dogImg.png")
  dogimg = loadImage("dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on('value', readStock);

  dog = createSprite(250, 350, 30, 10);
  dog.addImage(dogimg);
  dog.scale = 0.3;
}


function draw() {
  background(46, 139, 87);

  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(hdogimg);
  }

  if (keyWentUp(UP_ARROW)) {
    dog.addImage(dogimg);
  }

  fill("black");
  stroke("black");
  textSize(35);
  text("Press UP arrow to feed Drago milk", 20, 100);
  text("Milk Bottles left: " + foodS, 70, 150);

  drawSprites();
  //add styles here
}
function readStock(data) {
  foodS = data.val();
}
function writeStock(x) {
  database.ref('/').update({
    Food: x - 1
  })
}

