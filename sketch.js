//Andrea não consegui utilizar o firebase, usei o codigo que me pediram no index, mas mesmo assim ela ainda pedia para adicionar o firebase.









var balloon,balloonImage1,balloonImage2;
// create database and position variable here
var bancodedados
var posicao

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  posicao =database.ref('ballon/height');
  posicao.on("value",readPosition,showError)

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
    updateHeight(-10,0);
    balloon.scale = balloon.scale - 0.01
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
    updateHeight(10,0);
    balloon.scale = balloon.scale - 0.01
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in up direction
    updateHeight(0,10);
    balloon.scale = balloon.scale + 0.5
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in down direction
    updateHeight(0,-10);
    balloon.scale = balloon.scale - 0.5
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
function updateHeight(x,y){
  database.ref('ballon/height').set({
    'x' : height.x +  x,
    'y' : height.y + y
  })
}
function readerHeight(data){
  height =data.val;
  ballon.x = height.x
  ballon.y = height.y   
  
}
function showError(){
  console.log("Erro na base de dados");
}