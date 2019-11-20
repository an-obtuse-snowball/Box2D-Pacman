//Old code, been converted into a function for efficiency and stress-free coding

//Creates the boundary walls
function createMapWalls() {
    createTopLeftCornerWalls();
    createTopRightCornerWalls();
    createBottomLeftCornerWalls();
    createBottomRightCornerWalls();
}
function createTopLeftCornerWalls() {
var TL2 = new b2BodyDef;
    TL2.type = b2Body.b2_staticBody;
    TL2.position.x = (CANVAS_WIDTH/SCALE/100)-0.1;
    TL2.position.y = (CANVAS_HEIGHT/SCALE/2)-8;
var TL2fixDef = new b2FixtureDef;
    TL2fixDef.density = 1.0;
    TL2fixDef.shape = new b2PolygonShape;
    TL2fixDef.shape.SetAsBox(0.1,1.7);
mazeWorld.CreateBody(TL2).
CreateFixture(TL2fixDef);
    
}
function createTopRightCornerWalls() {
//Top Right Corner - Upper Section
var TR1 = new b2BodyDef;
    TR1.type = b2Body.b2_staticBody;
    TR1.position.x = (CANVAS_WIDTH/SCALE/100)+5.5;
    TR1.position.y = (CANVAS_HEIGHT/SCALE/2)-9.8;
var TR1fixDef = new b2FixtureDef;
    TR1fixDef.density = 1.0;
    TR1fixDef.shape = new b2PolygonShape;
    TR1fixDef.shape.SetAsBox(1.7, 0.1);
mazeWorld.CreateBody(TR1).
CreateFixture(TR1fixDef);
//Top Right Corner - Right Section
var TR2 = new b2BodyDef;
    TR2.type = b2Body.b2_staticBody;
    TR2.position.x = (CANVAS_WIDTH/SCALE/100)+7.25;
    TR2.position.y = (CANVAS_HEIGHT/SCALE/2)-8;
var TR2fixDef = new b2FixtureDef;
    TR2fixDef.density = 1.0;
    TR2fixDef.shape = new b2PolygonShape;
    TR2fixDef.shape.SetAsBox(0.1,1.7);
mazeWorld.CreateBody(TR2).
CreateFixture(TR2fixDef);
}
function createBottomLeftCornerWalls() {
//Bottom Left Corner - Bottom Section
var BL1 = new b2BodyDef;
    BL1.type = b2Body.b2_staticBody;
    BL1.position.x = (CANVAS_WIDTH/SCALE/100)+1.65;
    BL1.position.y = (CANVAS_HEIGHT/SCALE/2)-1.6;
var BL1fixDef = new b2FixtureDef;
    BL1fixDef.density = 1.0;
    BL1fixDef.shape = new b2PolygonShape;
    BL1fixDef.shape.SetAsBox(1.65, 0.085);
    mazeWorld.CreateBody(BL1).
CreateFixture(BL1fixDef);

//Bottom Left Corner - Left Section
var BL2 = new b2BodyDef;
    BL2.type = b2Body.b2_staticBody;
    BL2.position.x = (CANVAS_WIDTH/SCALE/100)-0.1;
    BL2.position.y = (CANVAS_HEIGHT/SCALE/2)-3.7;
var BL2fixDef = new b2FixtureDef;
    BL2fixDef.density = 1.0;
    BL2fixDef.shape = new b2PolygonShape;
    BL2fixDef.shape.SetAsBox(0.1,2);
mazeWorld.CreateBody(BL2).
CreateFixture(BL2fixDef);
}
function createBottomRightCornerWalls() {
//Bottom Left Corner - Bottom Section
var BR1 = new b2BodyDef;
    BR1.type = b2Body.b2_staticBody;
    BR1.position.x = (CANVAS_WIDTH/SCALE/100)+5.5;
    BR1.position.y = (CANVAS_HEIGHT/SCALE/2)-1.6;
var BR1fixDef = new b2FixtureDef;
    BR1fixDef.density = 1.0;
    BR1fixDef.shape = new b2PolygonShape;
    BR1fixDef.shape.SetAsBox(1.65, 0.085);
    mazeWorld.CreateBody(BR1).
CreateFixture(BR1fixDef);

//Bottom Left Corner - Left Section
var BR2 = new b2BodyDef;
    BR2.type = b2Body.b2_staticBody;
    BR2.position.x = (CANVAS_WIDTH/SCALE/100)+7.25;
    BR2.position.y = (CANVAS_HEIGHT/SCALE/2)-3.7;
var BR2fixDef = new b2FixtureDef;
    BR2fixDef.density = 1.0;
    BR2fixDef.shape = new b2PolygonShape;
    BR2fixDef.shape.SetAsBox(0.1,2);
mazeWorld.CreateBody(BR2).
CreateFixture(BR2fixDef);
}
function createIslands() {
    createLs();
//Creates Islands - Rectangular
var B1 = new b2BodyDef;
    B1.type = b2Body.b2_staticBody;
    B1.position.x = (CANVAS_WIDTH/SCALE/100)+0.875;
    B1.position.y = (CANVAS_HEIGHT/SCALE/2)-8.95;
var B1fixDef = new b2FixtureDef;
    B1fixDef.density = 1.0;
    B1fixDef.shape = new b2PolygonShape;
    B1fixDef.shape.SetAsBox(0.4,0.28);
    mazeWorld.CreateBody(B1).CreateFixture(B1fixDef);
    
var B2 = new b2BodyDef;
    B2.type = b2Body.b2_staticBody;
    B2.position.x = (CANVAS_WIDTH/SCALE/100)+2.34;
    B2.position.y = (CANVAS_HEIGHT/SCALE/2)-8.95;
var B2fixDef = new b2FixtureDef;
    B2fixDef.density = 1.0;
    B2fixDef.shape = new b2PolygonShape;
    B2fixDef.shape.SetAsBox(0.55,0.28);
    mazeWorld.CreateBody(B2).CreateFixture(B2fixDef);
    
var B3 = new b2BodyDef;
    B3.type = b2Body.b2_staticBody;
    B3.position.x = (CANVAS_WIDTH/SCALE/100)+4.75;
    B3.position.y = (CANVAS_HEIGHT/SCALE/2)-8.95;
var B3fixDef = new b2FixtureDef;
    B3fixDef.density = 1.0;
    B3fixDef.shape = new b2PolygonShape;
    B3fixDef.shape.SetAsBox(0.55,0.28);
    mazeWorld.CreateBody(B3).CreateFixture(B3fixDef);
    
var B4 = new b2BodyDef;
    B4.type = b2Body.b2_staticBody;
    B4.position.x = (CANVAS_WIDTH/SCALE/100)+6.2;
    B4.position.y = (CANVAS_HEIGHT/SCALE/2)-8.95;
var B4fixDef = new b2FixtureDef;
    B4fixDef.density = 1.0;
    B4fixDef.shape = new b2PolygonShape;
    B4fixDef.shape.SetAsBox(0.4,0.28);
    mazeWorld.CreateBody(B4).CreateFixture(B4fixDef);
    
var B5 = new b2BodyDef;
    B5.type = b2Body.b2_staticBody;
    B5.position.x = (CANVAS_WIDTH/SCALE/100)+0.85;
    B5.position.y = (CANVAS_HEIGHT/SCALE/2)-8;
var B5fixDef = new b2FixtureDef;
    B5fixDef.density = 1.0;
    B5fixDef.shape = new b2PolygonShape;
    B5fixDef.shape.SetAsBox(0.4,0.14);
    mazeWorld.CreateBody(B5).CreateFixture(B5fixDef);
    
var B6 = new b2BodyDef;
    B6.type = b2Body.b2_staticBody;
    B6.position.x = (CANVAS_WIDTH/SCALE/100)+6.2;
    B6.position.y = (CANVAS_HEIGHT/SCALE/2)-8;
var B6fixDef = new b2FixtureDef;
    B6fixDef.density = 1.0;
    B6fixDef.shape = new b2PolygonShape;
    B6fixDef.shape.SetAsBox(0.4,0.14);
    mazeWorld.CreateBody(B6).CreateFixture(B6fixDef);

var B7 = new b2BodyDef;
    B7.type = b2Body.b2_staticBody;
    B7.position.x = (CANVAS_WIDTH/SCALE/100)+2.35;
    B7.position.y = (CANVAS_HEIGHT/SCALE/2)-4;
var B7fixDef = new b2FixtureDef;
    B7fixDef.density = 1.0;
    B7fixDef.shape = new b2PolygonShape;
    B7fixDef.shape.SetAsBox(0.55,0.14);
    mazeWorld.CreateBody(B7).CreateFixture(B7fixDef);
    
var B8 = new b2BodyDef;
    B8.type = b2Body.b2_staticBody;
    B8.position.x = (CANVAS_WIDTH/SCALE/100)+4.75;
    B8.position.y = (CANVAS_HEIGHT/SCALE/2)-4;
var B8fixDef = new b2FixtureDef;
    B8fixDef.density = 1.0;
    B8fixDef.shape = new b2PolygonShape;
    B8fixDef.shape.SetAsBox(0.55,0.14);
    mazeWorld.CreateBody(B8).CreateFixture(B8fixDef);
    
var B9 = new b2BodyDef;
    B9.type = b2Body.b2_staticBody;
    B9.position.x = (CANVAS_WIDTH/SCALE/100)+0.85;
    B9.position.y = (CANVAS_HEIGHT/SCALE/2)-2.4;
var B9fixDef = new b2FixtureDef;
    B9fixDef.density = 1.0;
    B9fixDef.shape = new b2PolygonShape;
    B9fixDef.shape.SetAsBox(0.425,0.14);
    mazeWorld.CreateBody(B9).CreateFixture(B9fixDef);
    
var B10 = new b2BodyDef;
    B10.type = b2Body.b2_staticBody;
    B10.position.x = (CANVAS_WIDTH/SCALE/100)+6.2;
    B10.position.y = (CANVAS_HEIGHT/SCALE/2)-2.4;
var B10fixDef = new b2FixtureDef;
    B10fixDef.density = 1.0;
    B10fixDef.shape = new b2PolygonShape;
    B10fixDef.shape.SetAsBox(0.425,0.14);
    mazeWorld.CreateBody(B10).CreateFixture(B10fixDef);

var IslandA = new b2BodyDef;
    IslandA.type = b2Body.b2_staticBody;
    IslandA.position.x = (CANVAS_WIDTH/SCALE/100)+1.95;
    IslandA.position.y = (CANVAS_HEIGHT/SCALE/2)-5.573;
var IslandAfixDef = new b2FixtureDef;
    IslandAfixDef.density = 1.0;
    IslandAfixDef.shape = new b2PolygonShape;
    IslandAfixDef.shape.SetAsBox(0.15,0.95);
    mazeWorld.CreateBody(IslandA).CreateFixture(IslandAfixDef);    

var IslandB = new b2BodyDef;
    IslandB.type = b2Body.b2_staticBody;
    IslandB.position.x = (CANVAS_WIDTH/SCALE/100)+5.14;
    IslandB.position.y = (CANVAS_HEIGHT/SCALE/2)-5.575;
var IslandBfixDef = new b2FixtureDef;
    IslandBfixDef.density = 1.0;
    IslandBfixDef.shape = new b2PolygonShape;
    IslandBfixDef.shape.SetAsBox(0.15,0.95);
    mazeWorld.CreateBody(IslandB).CreateFixture(IslandBfixDef);
    
var IslandC = new b2BodyDef;
    IslandC.type = b2Body.b2_staticBody;
    IslandC.position.x = (CANVAS_WIDTH/SCALE/100)+3.55;
    IslandC.position.y = (CANVAS_HEIGHT/SCALE/2)-4.78;
var IslandCfixDef = new b2FixtureDef;
    IslandCfixDef.density = 1.0;
    IslandCfixDef.shape = new b2PolygonShape;
    IslandCfixDef.shape.SetAsBox(0.95,0.15);
    mazeWorld.CreateBody(IslandC).CreateFixture(IslandCfixDef);

    //Creates the Upper Cross
var Cross1A = new b2BodyDef;
    Cross1A.type = b2Body.b2_staticBody;
    Cross1A.position.x = (CANVAS_WIDTH/SCALE/100)+3.54;
    Cross1A.position.y = (CANVAS_HEIGHT/SCALE/2)-7.85;
var Cross1AfixDef = new b2FixtureDef;
    Cross1AfixDef.density = 1.0;
    Cross1AfixDef.shape = new b2PolygonShape;
    Cross1AfixDef.shape.SetAsBox(0.15,0.8);
    mazeWorld.CreateBody(Cross1A).CreateFixture(Cross1AfixDef);
    
var Cross1B = new b2BodyDef;
    Cross1B.type = b2Body.b2_staticBody;
    Cross1B.position.x = (CANVAS_WIDTH/SCALE/100)+3.54;
    Cross1B.position.y = (CANVAS_HEIGHT/SCALE/2)-7.98;
var Cross1BfixDef = new b2FixtureDef;
    Cross1BfixDef.density = 1.0;
    Cross1BfixDef.shape = new b2PolygonShape;
    Cross1BfixDef.shape.SetAsBox(0.89,0.15);
    mazeWorld.CreateBody(Cross1B).CreateFixture(Cross1BfixDef);  
    
    //Creates the lower cross
var Cross2A = new b2BodyDef;
    Cross2A.type = b2Body.b2_staticBody;
    Cross2A.position.x = (CANVAS_WIDTH/SCALE/100)+3.54;
    Cross2A.position.y = (CANVAS_HEIGHT/SCALE/2)-3.216;
var Cross2AfixDef = new b2FixtureDef;
    Cross2AfixDef.density = 1.0;
    Cross2AfixDef.shape = new b2PolygonShape;
    Cross2AfixDef.shape.SetAsBox(0.15,0.95);
    mazeWorld.CreateBody(Cross2A).CreateFixture(Cross2AfixDef);
    
var Cross2B = new b2BodyDef;
    Cross2B.type = b2Body.b2_staticBody;
    Cross2B.position.x = (CANVAS_WIDTH/SCALE/100)+3.54;
    Cross2B.position.y = (CANVAS_HEIGHT/SCALE/2)-3.216;
var Cross2BfixDef = new b2FixtureDef;
    Cross2BfixDef.density = 1.0;
    Cross2BfixDef.shape = new b2PolygonShape;
    Cross2BfixDef.shape.SetAsBox(0.89,0.15);
    mazeWorld.CreateBody(Cross2B).CreateFixture(Cross2BfixDef); 

}
//Creates protruding boxes on edges of map
function createEdges() {
    //Creates Protruded Edge 1
var E1 = new b2BodyDef;
    E1.type = b2Body.b2_staticBody;
    E1.position.x = (CANVAS_WIDTH/SCALE/100)+0.1;
    E1.position.y = (CANVAS_HEIGHT/SCALE/2)-7.2;
var E1fixDef = new b2FixtureDef;
    E1fixDef.density = 1.0;
    E1fixDef.shape = new b2PolygonShape;
    E1fixDef.shape.SetAsBox(0.4,0.15);
mazeWorld.CreateBody(E1).CreateFixture(E1fixDef);
    
    //Creates Protruded Edge 2
var E2 = new b2BodyDef;
    E2.type = b2Body.b2_staticBody;
    E2.position.x = (CANVAS_WIDTH/SCALE/100)+0.1;
    E2.position.y = (CANVAS_HEIGHT/SCALE/2)-4.8;
var E2fixDef = new b2FixtureDef;
    E2fixDef.density = 1.0;
    E2fixDef.shape = new b2PolygonShape;
    E2fixDef.shape.SetAsBox(0.4,0.15);
mazeWorld.CreateBody(E2).CreateFixture(E2fixDef);
    
    //Creates Protruded Edge 3
var E3 = new b2BodyDef;
    E3.type = b2Body.b2_staticBody;
    E3.position.x = (CANVAS_WIDTH/SCALE/100)+0.1;
    E3.position.y = (CANVAS_HEIGHT/SCALE/2)-3.2;
var E3fixDef = new b2FixtureDef;
    E3fixDef.density = 1.0;
    E3fixDef.shape = new b2PolygonShape;
    E3fixDef.shape.SetAsBox(0.4,0.15);
mazeWorld.CreateBody(E3).CreateFixture(E3fixDef);
    
    //Creates Protruded Edge 4
var E4 = new b2BodyDef;
    E4.type = b2Body.b2_staticBody;
    E4.position.x = (CANVAS_WIDTH/SCALE/100)+7;
    E4.position.y = (CANVAS_HEIGHT/SCALE/2)-7.2;
var E4fixDef = new b2FixtureDef;
    E4fixDef.density = 1.0;
    E4fixDef.shape = new b2PolygonShape;
    E4fixDef.shape.SetAsBox(0.4,0.15);
mazeWorld.CreateBody(E4).CreateFixture(E4fixDef);
    
    //Creates Protruded Edge 5
var E5 = new b2BodyDef;
    E5.type = b2Body.b2_staticBody;
    E5.position.x = (CANVAS_WIDTH/SCALE/100)+7;
    E5.position.y = (CANVAS_HEIGHT/SCALE/2)-4.8;
var E5fixDef = new b2FixtureDef;
    E5fixDef.density = 1.0;
    E5fixDef.shape = new b2PolygonShape;
    E5fixDef.shape.SetAsBox(0.4,0.15);
mazeWorld.CreateBody(E5).CreateFixture(E5fixDef);
    
    //Creates Protruded Edge 6
var E6 = new b2BodyDef;
    E6.type = b2Body.b2_staticBody;
    E6.position.x = (CANVAS_WIDTH/SCALE/100)+7;
    E6.position.y = (CANVAS_HEIGHT/SCALE/2)-3.2;
var E6fixDef = new b2FixtureDef;
    E6fixDef.density = 1.0;
    E6fixDef.shape = new b2PolygonShape;
    E6fixDef.shape.SetAsBox(0.4,0.15);
mazeWorld.CreateBody(E6).CreateFixture(E6fixDef);
}
//creates L islands
function createLs() {
    //Creates Top Left L (L1)
var L1A = new b2BodyDef;
    L1A.type = b2Body.b2_staticBody;
    L1A.position.x = (CANVAS_WIDTH/SCALE/100)+1.93;
    L1A.position.y = (CANVAS_HEIGHT/SCALE/2)-7.75;
var L1AfixDef = new b2FixtureDef;
    L1AfixDef.density = 1.0;
    L1AfixDef.shape = new b2PolygonShape;
    L1AfixDef.shape.SetAsBox(0.15,0.4);
    mazeWorld.CreateBody(L1A).CreateFixture(L1AfixDef);
    var L1B = new b2BodyDef;
    L1B.type = b2Body.b2_staticBody;
    L1B.position.x = (CANVAS_WIDTH/SCALE/100)+2.35;
    L1B.position.y = (CANVAS_HEIGHT/SCALE/2)-7.2;
var L1BfixDef = new b2FixtureDef;
    L1BfixDef.density = 1.0;
    L1BfixDef.shape = new b2PolygonShape;
    L1BfixDef.shape.SetAsBox(0.575,0.14);
    mazeWorld.CreateBody(L1B).CreateFixture(L1BfixDef);
    
    //Creates Top Right L (L2)
var L2A = new b2BodyDef;
    L2A.type = b2Body.b2_staticBody;
    L2A.position.x = (CANVAS_WIDTH/SCALE/100)+5.13;
    L2A.position.y = (CANVAS_HEIGHT/SCALE/2)-7.75;
var L2AfixDef = new b2FixtureDef;
    L2AfixDef.density = 1.0;
    L2AfixDef.shape = new b2PolygonShape;
    L2AfixDef.shape.SetAsBox(0.15,0.4);
    mazeWorld.CreateBody(L2A).CreateFixture(L2AfixDef);
var L2B = new b2BodyDef;
    L2B.type = b2Body.b2_staticBody;
    L2B.position.x = (CANVAS_WIDTH/SCALE/100)+4.74;
    L2B.position.y = (CANVAS_HEIGHT/SCALE/2)-7.2;
var L2BfixDef = new b2FixtureDef;
    L2BfixDef.density = 1.0;
    L2BfixDef.shape = new b2PolygonShape;
    L2BfixDef.shape.SetAsBox(0.565,0.14);
    mazeWorld.CreateBody(L2B).CreateFixture(L2BfixDef);

    //Creates Middle Top Left L (L3)
var L3A = new b2BodyDef;
    L3A.type = b2Body.b2_staticBody;
    L3A.position.x = (CANVAS_WIDTH/SCALE/100)+1.13;
    L3A.position.y = (CANVAS_HEIGHT/SCALE/2)-6.8;
var L3AfixDef = new b2FixtureDef;
    L3AfixDef.density = 1.0;
    L3AfixDef.shape = new b2PolygonShape;
    L3AfixDef.shape.SetAsBox(0.13,0.56);
    mazeWorld.CreateBody(L3A).CreateFixture(L3AfixDef);
var L3B = new b2BodyDef;
    L3B.type = b2Body.b2_staticBody;
    L3B.position.x = (CANVAS_WIDTH/SCALE/100)+0.85;
    L3B.position.y = (CANVAS_HEIGHT/SCALE/2)-6.35;
var L3BfixDef = new b2FixtureDef;
    L3BfixDef.density = 1.0;
    L3BfixDef.shape = new b2PolygonShape;
    L3BfixDef.shape.SetAsBox(0.375,0.14);
    mazeWorld.CreateBody(L3B).CreateFixture(L3BfixDef);
    
    //Creates Middle Top Right L (L4)
    var L4A = new b2BodyDef;
    L4A.type = b2Body.b2_staticBody;
    L4A.position.x = (CANVAS_WIDTH/SCALE/100)+5.95;
    L4A.position.y = (CANVAS_HEIGHT/SCALE/2)-6.8;
var L4AfixDef = new b2FixtureDef;
    L4AfixDef.density = 1.0;
    L4AfixDef.shape = new b2PolygonShape;
    L4AfixDef.shape.SetAsBox(0.13,0.56);
    mazeWorld.CreateBody(L4A).CreateFixture(L4AfixDef);
var L4B = new b2BodyDef;
    L4B.type = b2Body.b2_staticBody;
    L4B.position.x = (CANVAS_WIDTH/SCALE/100)+6.2;
    L4B.position.y = (CANVAS_HEIGHT/SCALE/2)-6.37;
var L4BfixDef = new b2FixtureDef;
    L4BfixDef.density = 1.0;  
    L4BfixDef.shape = new b2PolygonShape;
    L4BfixDef.shape.SetAsBox(0.375,0.14);
mazeWorld.CreateBody(L4B).CreateFixture(L4BfixDef);
    
    //Creates Middle Middle Left L (L5)
var L5A = new b2BodyDef;
    L5A.type = b2Body.b2_staticBody;
    L5A.position.x = (CANVAS_WIDTH/SCALE/100)+1.13;
    L5A.position.y = (CANVAS_HEIGHT/SCALE/2)-5.21;
var L5AfixDef = new b2FixtureDef;
    L5AfixDef.density = 1.0;
    L5AfixDef.shape = new b2PolygonShape;
    L5AfixDef.shape.SetAsBox(0.13,0.55);
    mazeWorld.CreateBody(L5A).CreateFixture(L5AfixDef);
var L5B = new b2BodyDef;
    L5B.type = b2Body.b2_staticBody;
    L5B.position.x = (CANVAS_WIDTH/SCALE/100)+0.85;
    L5B.position.y = (CANVAS_HEIGHT/SCALE/2)-5.6;
var L5BfixDef = new b2FixtureDef;
    L5BfixDef.density = 1.0;
    L5BfixDef.shape = new b2PolygonShape;
    L5BfixDef.shape.SetAsBox(0.375,0.14);
mazeWorld.CreateBody(L5B).CreateFixture(L5BfixDef);
    
    //Creates Middle Middle Right L (L6)
var L6A = new b2BodyDef;
    L6A.type = b2Body.b2_staticBody;
    L6A.position.x = (CANVAS_WIDTH/SCALE/100)+5.95;
    L6A.position.y = (CANVAS_HEIGHT/SCALE/2)-5.2;
var L6AfixDef = new b2FixtureDef;
    L6AfixDef.density = 1.0;
    L6AfixDef.shape = new b2PolygonShape;
    L6AfixDef.shape.SetAsBox(0.13,0.5);
    mazeWorld.CreateBody(L6A).CreateFixture(L6AfixDef);
var L4B = new b2BodyDef;
    L4B.type = b2Body.b2_staticBody;
    L4B.position.x = (CANVAS_WIDTH/SCALE/100)+6.2;
    L4B.position.y = (CANVAS_HEIGHT/SCALE/2)-5.6;
var L4BfixDef = new b2FixtureDef;
    L4BfixDef.density = 1.0;
    L4BfixDef.shape = new b2PolygonShape;
    L4BfixDef.shape.SetAsBox(0.375,0.14);
    mazeWorld.CreateBody(L4B).CreateFixture(L4BfixDef);
    
        //Creates Middle Bottom Left L (L7)
var L7A = new b2BodyDef;
    L7A.type = b2Body.b2_staticBody;
    L7A.position.x = (CANVAS_WIDTH/SCALE/100)+1.13;
    L7A.position.y = (CANVAS_HEIGHT/SCALE/2)-3.6;
var L7AfixDef = new b2FixtureDef;
    L7AfixDef.density = 1.0;
    L7AfixDef.shape = new b2PolygonShape;
    L7AfixDef.shape.SetAsBox(0.13,0.5);
    mazeWorld.CreateBody(L7A).CreateFixture(L7AfixDef);
var L7B = new b2BodyDef;
    L7B.type = b2Body.b2_staticBody;
    L7B.position.x = (CANVAS_WIDTH/SCALE/100)+0.85;
    L7B.position.y = (CANVAS_HEIGHT/SCALE/2)-4;
var L7BfixDef = new b2FixtureDef;
    L7BfixDef.density = 1.0;
    L7BfixDef.shape = new b2PolygonShape;
    L7BfixDef.shape.SetAsBox(0.375,0.14);
    mazeWorld.CreateBody(L7B).CreateFixture(L7BfixDef);
    
    //Creates Middle Bottom Right L (L8)
var L8A = new b2BodyDef;
    L8A.type = b2Body.b2_staticBody;
    L8A.position.x = (CANVAS_WIDTH/SCALE/100)+5.95;
    L8A.position.y = (CANVAS_HEIGHT/SCALE/2)-3.6;
var L8AfixDef = new b2FixtureDef;
    L8AfixDef.density = 1.0;
    L8AfixDef.shape = new b2PolygonShape;
    L8AfixDef.shape.SetAsBox(0.13,0.5);
    mazeWorld.CreateBody(L8A).CreateFixture(L8AfixDef);
var L8B = new b2BodyDef;
    L8B.type = b2Body.b2_staticBody;
    L8B.position.x = (CANVAS_WIDTH/SCALE/100)+6.2;
    L8B.position.y = (CANVAS_HEIGHT/SCALE/2)-4;
var L8BfixDef = new b2FixtureDef;
    L8BfixDef.density = 1.0;
    L8BfixDef.shape = new b2PolygonShape;
    L8BfixDef.shape.SetAsBox(0.375,0.1);
    mazeWorld.CreateBody(L8B).CreateFixture(L8BfixDef);    

    //Creates Bottom Left L (L9)
var L9A = new b2BodyDef;
    L9A.type = b2Body.b2_staticBody;
    L9A.position.x = (CANVAS_WIDTH/SCALE/100)+1.92;
    L9A.position.y = (CANVAS_HEIGHT/SCALE/2)-2.78;
var L9AfixDef = new b2FixtureDef;
    L9AfixDef.density = 1.0;
    L9AfixDef.shape = new b2PolygonShape;
    L9AfixDef.shape.SetAsBox(0.15,0.5);
    mazeWorld.CreateBody(L9A).CreateFixture(L9AfixDef);
var L2B = new b2BodyDef;
    L2B.type = b2Body.b2_staticBody;
    L2B.position.x = (CANVAS_WIDTH/SCALE/100)+2.32;
    L2B.position.y = (CANVAS_HEIGHT/SCALE/2)-2.425;
var L2BfixDef = new b2FixtureDef;
    L2BfixDef.density = 1.0;
    L2BfixDef.shape = new b2PolygonShape;
    L2BfixDef.shape.SetAsBox(0.54,0.14);
    mazeWorld.CreateBody(L2B).CreateFixture(L2BfixDef); 
    
    //Creates Bottom Right L (L10)
var L10A = new b2BodyDef;
    L10A.type = b2Body.b2_staticBody;
    L10A.position.x = (CANVAS_WIDTH/SCALE/100)+5.13;
    L10A.position.y = (CANVAS_HEIGHT/SCALE/2)-2.78;
var L10AfixDef = new b2FixtureDef;
    L10AfixDef.density = 1.0;
    L10AfixDef.shape = new b2PolygonShape;
    L10AfixDef.shape.SetAsBox(0.15,0.5);
    mazeWorld.CreateBody(L10A).CreateFixture(L10AfixDef);
var L2B = new b2BodyDef;
    L2B.type = b2Body.b2_staticBody;
    L2B.position.x = (CANVAS_WIDTH/SCALE/100)+4.74;
    L2B.position.y = (CANVAS_HEIGHT/SCALE/2)-2.425;
var L2BfixDef = new b2FixtureDef;
    L2BfixDef.density = 1.0;
    L2BfixDef.shape = new b2PolygonShape;
    L2BfixDef.shape.SetAsBox(0.565,0.14);
    mazeWorld.CreateBody(L2B).CreateFixture(L2BfixDef); 
}
//Creates Pacman Box
function createBox() {
  
    //Top-Left Frame of Box
var SP1 = new b2BodyDef;
    SP1.type = b2Body.b2_staticBody;
    SP1.position.x = (CANVAS_WIDTH/SCALE/100)+2.85;
    SP1.position.y = (CANVAS_HEIGHT/SCALE/2)-6.45;
var SP1fixDef = new b2FixtureDef;
    SP1fixDef.density = 1.0;
    SP1fixDef.shape = new b2PolygonShape;
    SP1fixDef.shape.SetAsBox(0.25,0.05);
    mazeWorld.CreateBody(SP1).CreateFixture(SP1fixDef);     
    
    //Top-Right Frame of Box
var SP2 = new b2BodyDef;
    SP2.type = b2Body.b2_staticBody;
    SP2.position.x = (CANVAS_WIDTH/SCALE/100)+4.22;
    SP2.position.y = (CANVAS_HEIGHT/SCALE/2)-6.45;
var SP2fixDef = new b2FixtureDef;
    SP2fixDef.density = 1.0;
    SP2fixDef.shape = new b2PolygonShape;
    SP2fixDef.shape.SetAsBox(0.25,0.05);
    mazeWorld.CreateBody(SP2).CreateFixture(SP2fixDef); 
    
    //Left Frame of Box
var SP3 = new b2BodyDef;
    SP3.type = b2Body.b2_staticBody;
    SP3.position.x = (CANVAS_WIDTH/SCALE/100)+2.65;
    SP3.position.y = (CANVAS_HEIGHT/SCALE/2)-6;
var SP3fixDef = new b2FixtureDef;
    SP3fixDef.density = 1.0;
    SP3fixDef.shape = new b2PolygonShape;
    SP3fixDef.shape.SetAsBox(0.05,0.4);
    mazeWorld.CreateBody(SP3).CreateFixture(SP3fixDef); 

    //Right Frame of Box
var SP4 = new b2BodyDef;
    SP4.type = b2Body.b2_staticBody;
    SP4.position.x = (CANVAS_WIDTH/SCALE/100)+4.42;
    SP4.position.y = (CANVAS_HEIGHT/SCALE/2)-6;
var SP4fixDef = new b2FixtureDef;
    SP4fixDef.density = 1.0;
    SP4fixDef.shape = new b2PolygonShape;
    SP4fixDef.shape.SetAsBox(0.05,0.4);
    mazeWorld.CreateBody(SP4).CreateFixture(SP4fixDef);    

    //BottomFrame of Box
var SP5 = new b2BodyDef;
    SP5.type = b2Body.b2_staticBody;
    SP5.position.x = (CANVAS_WIDTH/SCALE/100)+3.53;
    SP5.position.y = (CANVAS_HEIGHT/SCALE/2)-5.525;
var SP5fixDef = new b2FixtureDef;
    SP5fixDef.density = 1.0;
    SP5fixDef.shape = new b2PolygonShape;
    SP5fixDef.shape.SetAsBox(0.925,0.05);
    mazeWorld.CreateBody(SP5).CreateFixture(SP5fixDef);
}