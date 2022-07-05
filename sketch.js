
var zombie;
var police1;
var wall1, wall2, wall3, wall4, wall5 ,wall6, wall7, wall10,
 wall11, wall12, wal13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,
 wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,
 wall31,wall32,wall33,wall34,wall35,wall36,wall37,wall38,wall39,wall40,
 wall41,wall42,wall43,wall44;

function preload(){
  
}
function setup(){
canvas = createCanvas(1200,600);

police1 = createSprite(300,140,10,10);
police2 = createSprite(250,310,10,10);
police3 = createSprite(400,300,10,10);

police1.velocityY=8;
police2.velocityX=-8;
//police3.velocityY=8;

 wall1 = createSprite(0,120,150,10);
 wall2 = createSprite(80,240,10,250);
 wall3 = createSprite(0,320,20,410);
 wall4 = createSprite(540,120,730,10);
 wall5 = createSprite(400,530,1000,10) 
 wall6 = createSprite(170,140,10,50);
 wall7 = createSprite(900,330,10,410);
 wall10 = createSprite(120,230,70,10);
 wall11= createSprite(150,260,10,70);
 wall12= createSprite(250,180,10,120);
 wall13= createSprite(350,260,10,100);
 wall14= createSprite(320,310,70,10);
 wall15= createSprite(390,270,70,10);
 wall16= createSprite(430,290,10,50);
 wall17= createSprite(460,310,50,10);
 wall18= createSprite(480,210,10,190);
 wall19= createSprite(50,360,130,10);
 wall20= createSprite(120,345,10,40);
 wall21= createSprite(140,330,50,10);
 wall22= createSprite(160,350,10,30);
 wall23= createSprite(280,360,250,10);
 wall24= createSprite(400,380,10,45);
 wall25= createSprite(425,400,60,10);
 wall26= createSprite(450,380,10,50);
 wall27= createSprite(50,445,110,10);
 wall28= createSprite(100,425,10,35);
 wall29= createSprite(120,410,50,10);
 wall30= createSprite(140,430,10,40);
 wall31= createSprite(250,385,10,45);
 wall32= createSprite(227.5,410,55,10);
 wall33= createSprite(200,432.5,10,55);
 wall34= createSprite(225,455,60,10);
 wall35= createSprite(30,490,127,10);
 wall36= createSprite(180,490,70,10);
 wall37= createSprite(170,510,10,40);
 wall38= createSprite(330,450,10,50);
 wall39= createSprite(350,430,50,10);
 wall40= createSprite(370,450,10,50);
 wall41= createSprite(405,480,80,10);
 wall42= createSprite(330,450,10,50);
 wall43= createSprite(590,310,220,10);
 wall44= createSprite(830,310,130,10);

}
function draw(){

background(0);

police1.bounceOff(wall4);
police1.bounceOff(wall14);

police2.bounceOff(wall2);
police2.bounceOff(wall14);



drawSprites()

}

