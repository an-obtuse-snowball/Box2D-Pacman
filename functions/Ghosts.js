/*function createGhostEntity(name, world) {
var ghostDef = new b2FixtureDef;
ghostDef.density = 1.0;
ghostDef.restitution = 0;			//'Bounciness'
ghostDef.shape = new b2CircleShape(0.15);
var GhostBodyDef = new b2BodyDef;
GhostBodyDef.type = b2Body.b2_dynamicBody;
     switch(name) {
            case "Pink":
            GhostBodyDef.position.x = PinkGhostCoords[0];
            GhostBodyDef.position.y = PinkGhostCoords[1];
            break;
            case "Blue":
            GhostBodyDef.position.x = BlueGhostCoords[0];
            GhostBodyDef.position.y = BlueGhostCoords[1];
            break;
            case "Orange":
            GhostBodyDef.position.x = OrangeGhostCoords[0];
            GhostBodyDef.position.y = OrangeGhostCoords[1];
            break;
            case "Red":
            GhostBodyDef.position.x = RedGhostCoords[0];
            GhostBodyDef.position.y = RedGhostCoords[1];
            break;
     
Ghost = mazeWorld.CreateBody(GhostBodyDef).CreateFixture(ghostDef);
Ghost.GetBody().SetFixedRotation(true);
Ghost.GetBody().SetUserData({id: name});
}}*/

var blueRightSpeed = 2,  blueLeftSpeed = 4;
var redRightSpeed = 2,  redLeftSpeed = 2;
var pinkRightSpeed = 4,  pinkLeftSpeed = 2;
var orangeRightSpeed = 2,  orangeLeftSpeed = 2;

// Ghost Directions:   Blue,  "Red",   "Pink",  "Orange". 
var ghostDirection = ["Left", "Right", "Left" , "Right"];

function createMazeOrangeGhost() {
    var ghostDef = new b2FixtureDef;
ghostDef.density = 1.0;
ghostDef.restitution = 0;			//'Bounciness'
ghostDef.shape = new b2CircleShape(0.15);
var GhostBodyDef = new b2BodyDef;
GhostBodyDef.type = b2Body.b2_dynamicBody;
GhostBodyDef.position.x = OrangeGhostCoords[0];
GhostBodyDef.position.y = OrangeGhostCoords[1];
OrangeGhost2D = mazeWorld.CreateBody(GhostBodyDef).CreateFixture(ghostDef);
OrangeGhost2D.GetBody().SetFixedRotation(true);
OrangeGhost2D.GetBody().SetUserData({id: "OrangeGhost2D"});
}

function createMazeBlueGhost() {
    var ghostDef = new b2FixtureDef;
ghostDef.density = 1.0;
ghostDef.restitution = 0;			//'Bounciness'
ghostDef.shape = new b2CircleShape(0.15);
var GhostBodyDef = new b2BodyDef;
GhostBodyDef.type = b2Body.b2_dynamicBody;
GhostBodyDef.position.x = BlueGhostCoords[0];
GhostBodyDef.position.y = BlueGhostCoords[1];
BlueGhost2D = mazeWorld.CreateBody(GhostBodyDef).CreateFixture(ghostDef);
BlueGhost2D.GetBody().SetFixedRotation(true);
BlueGhost2D.GetBody().SetUserData({id: "BlueGhost2D"});
    

}

function createMazePinkGhost() {
    var ghostDef = new b2FixtureDef;
ghostDef.density = 1.0;
ghostDef.restitution = 0;			//'Bounciness'
ghostDef.shape = new b2CircleShape(0.15);
var GhostBodyDef = new b2BodyDef;
GhostBodyDef.type = b2Body.b2_dynamicBody;
GhostBodyDef.position.x = PinkGhostCoords[0];
GhostBodyDef.position.y = PinkGhostCoords[1];
PinkGhost2D = mazeWorld.CreateBody(GhostBodyDef).CreateFixture(ghostDef);
PinkGhost2D.GetBody().SetFixedRotation(true);
PinkGhost2D.GetBody().SetUserData({id: "PinkGhost2D"});
}

function createMazeRedGhost() {
var ghostDef = new b2FixtureDef;
ghostDef.density = 1.0;
ghostDef.restitution = 0;			//'Bounciness'
ghostDef.shape = new b2CircleShape(0.15);
var GhostBodyDef = new b2BodyDef;
GhostBodyDef.type = b2Body.b2_dynamicBody;
GhostBodyDef.position.x = RedGhostCoords[0];
GhostBodyDef.position.y = RedGhostCoords[1];
RedGhost2D = mazeWorld.CreateBody(GhostBodyDef).CreateFixture(ghostDef);
RedGhost2D.GetBody().SetFixedRotation(true);
RedGhost2D.GetBody().SetUserData({id: "RedGhost2D"});
}


/*-----------------FROGGER WORLD-------------------*/
function createOrangeGhost(x, y) {
    var ghostDef = new b2FixtureDef;
ghostDef.density = 1.0;
ghostDef.restitution = 0;			//'Bounciness'
ghostDef.shape = new b2CircleShape(0.15);
var GhostBodyDef = new b2BodyDef;
GhostBodyDef.type = b2Body.b2_dynamicBody;
GhostBodyDef.position.x = x;
GhostBodyDef.position.y = y;
OrangeGhost2D = froggerWorld.CreateBody(GhostBodyDef).CreateFixture(ghostDef);
OrangeGhost2D.GetBody().SetFixedRotation(true);
OrangeGhost2D.GetBody().SetUserData({id: "OrangeGhost2D"});
}

function createBlueGhost(x,y) {
    var ghostDef = new b2FixtureDef;
ghostDef.density = 1.0;
ghostDef.restitution = 0;			//'Bounciness'
ghostDef.shape = new b2CircleShape(0.15);
var GhostBodyDef = new b2BodyDef;
GhostBodyDef.type = b2Body.b2_dynamicBody;
GhostBodyDef.position.x = x;
GhostBodyDef.position.y = y;
BlueGhost2D = froggerWorld.CreateBody(GhostBodyDef).CreateFixture(ghostDef);
BlueGhost2D.GetBody().SetFixedRotation(true);
BlueGhost2D.GetBody().SetUserData({id: "BlueGhost2D"});
    

}

function createPinkGhost(x,y) {
    var ghostDef = new b2FixtureDef;
ghostDef.density = 1.0;
ghostDef.restitution = 0;			//'Bounciness'
ghostDef.shape = new b2CircleShape(0.15);
var GhostBodyDef = new b2BodyDef;
GhostBodyDef.type = b2Body.b2_dynamicBody;
GhostBodyDef.position.x = x;
GhostBodyDef.position.y = y;
PinkGhost2D = froggerWorld.CreateBody(GhostBodyDef).CreateFixture(ghostDef);
PinkGhost2D.GetBody().SetFixedRotation(true);
PinkGhost2D.GetBody().SetUserData({id: "PinkGhost2D"});
}

function createRedGhost(x,y) {
var ghostDef = new b2FixtureDef;
ghostDef.density = 1.0;
ghostDef.restitution = 0;			//'Bounciness'
ghostDef.shape = new b2CircleShape(0.15);
var GhostBodyDef = new b2BodyDef;
GhostBodyDef.type = b2Body.b2_dynamicBody;
GhostBodyDef.position.x = x;
GhostBodyDef.position.y = y;
RedGhost2D = froggerWorld.CreateBody(GhostBodyDef).CreateFixture(ghostDef);
RedGhost2D.GetBody().SetFixedRotation(true);
RedGhost2D.GetBody().SetUserData({id: "RedGhost2D"});
}

/*-----------------MARIO WORLD-------------------*/
function createMarioOrangeGhost(x, y) {
    var ghostDef = new b2FixtureDef;
ghostDef.density = 1.0;
ghostDef.restitution = 0;			//'Bounciness'
ghostDef.shape = new b2CircleShape(0.15);
var GhostBodyDef = new b2BodyDef;
GhostBodyDef.type = b2Body.b2_dynamicBody;
GhostBodyDef.position.x = x;
GhostBodyDef.position.y = y;
OrangeGhost2D = marioWorld.CreateBody(GhostBodyDef).CreateFixture(ghostDef);
OrangeGhost2D.GetBody().SetFixedRotation(true);
OrangeGhost2D.GetBody().SetUserData({id: "OrangeGhost2D"});
}

function createMarioBlueGhost(x,y) {
    var ghostDef = new b2FixtureDef;
ghostDef.density = 1.0;
ghostDef.restitution = 0;			//'Bounciness'
ghostDef.shape = new b2CircleShape(0.15);
var GhostBodyDef = new b2BodyDef;
GhostBodyDef.type = b2Body.b2_dynamicBody;
GhostBodyDef.position.x = x;
GhostBodyDef.position.y = y;
BlueGhost2D = marioWorld.CreateBody(GhostBodyDef).CreateFixture(ghostDef);
BlueGhost2D.GetBody().SetFixedRotation(true);
BlueGhost2D.GetBody().SetUserData({id: "BlueGhost2D"});
    

}

function createMarioPinkGhost(x,y) {
    var ghostDef = new b2FixtureDef;
ghostDef.density = 1.0;
ghostDef.restitution = 0;			//'Bounciness'
ghostDef.shape = new b2CircleShape(0.15);
var GhostBodyDef = new b2BodyDef;
GhostBodyDef.type = b2Body.b2_dynamicBody;
GhostBodyDef.position.x = x;
GhostBodyDef.position.y = y;
PinkGhost2D = marioWorld.CreateBody(GhostBodyDef).CreateFixture(ghostDef);
PinkGhost2D.GetBody().SetFixedRotation(true);
PinkGhost2D.GetBody().SetUserData({id: "PinkGhost2D"});
}

function createMarioRedGhost(x,y) {
var ghostDef = new b2FixtureDef;
ghostDef.density = 1.0;
ghostDef.restitution = 0;			//'Bounciness'
ghostDef.shape = new b2CircleShape(0.15);
var GhostBodyDef = new b2BodyDef;
GhostBodyDef.type = b2Body.b2_dynamicBody;
GhostBodyDef.position.x = x;
GhostBodyDef.position.y = y;
RedGhost2D = marioWorld.CreateBody(GhostBodyDef).CreateFixture(ghostDef);
RedGhost2D.GetBody().SetFixedRotation(true);
RedGhost2D.GetBody().SetUserData({id: "RedGhost2D"});
}

function froggerMovement(ghost, ghostNo, ghostSpeedLeft, ghostSpeedRight) {
    
    //console.log(ghostDirection[ghostNo]);
    //console.log(ghost.GetBody().GetPosition().x);
    
    if (ghost.GetBody().GetPosition().x >0.4 && ghostDirection[ghostNo] == "Left") {
        
        
        ghost.GetBody().SetLinearVelocity(new b2Vec2(0,0));
        ghost.GetBody().SetLinearVelocity(new b2Vec2(-ghostSpeedLeft,0));
    }
    
    if (ghost.GetBody().GetPosition().x <0.6 && ghostDirection[ghostNo] == "Left") { 
        ghostDirection[ghostNo] = "Right"; 
    }
    
    
    
    if (ghost.GetBody().GetPosition().x >0.4 && ghostDirection[ghostNo] == "Right") {
        
        
        ghost.GetBody().SetLinearVelocity(new b2Vec2(0,0));
        ghost.GetBody().SetLinearVelocity(new b2Vec2(ghostSpeedRight,0));
    }
    
    if (ghost.GetBody().GetPosition().x >6.9 && ghostDirection[ghostNo] == "Right") { ghostDirection[ghostNo] = "Left"; }
    
    
    
            
/*switch(ghostDirection) {
        case "Left":
         ghost.GetBody().SetLinearVelocity(new b2Vec2(-ghostSpeedLeft,0));
         if(ghost.GetBody().GetPosition().x <2) {
        console.log(ghost.GetBody().GetPosition().x);
             ghostDirection = "Right";
             break;
         }
        break;
    
    case "Right":
        ghost.GetBody().SetLinearVelocity(new b2Vec2(ghostSpeedRight,0));
                 if(ghost.GetBody().GetPosition().x >7) {
        console.log(ghost.GetBody().GetPosition().x);
             ghostDirection = "Left";
                     break;
         }
        break;
        
}*/


    
}
function handleMovement() {
    if(pacMan.GetBody().GetPosition().y < 6) {
        gameStart = true;
        }
if(gameStart = true) {
    redGhostMovement();
    blueGhostMovement();
    pinkGhostMovement();
    orangeGhostMovement();
}
}


    /*if(pacMan.GetBody().GetPosition().x < RedGhost2D.GetBody().GetPosition().x) {
    RedGhost2D.GetBody().SetLinearVelocity(new b2Vec2(0,0));
    RedGhost2D.GetBody().ApplyImpulse(new b2Vec2(-0.1, 0), pacMan.GetBody().GetWorldCenter());
    }
    if(pacMan.GetBody().GetPosition().x > RedGhost2D.GetBody().GetPosition().x) {
    RedGhost2D.GetBody().SetLinearVelocity(new b2Vec2(0,0));
    RedGhost2D.GetBody().ApplyImpulse(new b2Vec2(0.1, 0), pacMan.GetBody().GetWorldCenter());
    }
    if(pacMan.GetBody().GetPosition().y > RedGhost2D.GetBody().GetPosition().y) {
    RedGhost2D.GetBody().SetLinearVelocity(new b2Vec2(0,0));
    RedGhost2D.GetBody().ApplyImpulse(new b2Vec2(0, 0.1), pacMan.GetBody().GetWorldCenter());
    }
    if(pacMan.GetBody().GetPosition().y < RedGhost2D.GetBody().GetPosition().y) {
    RedGhost2D.GetBody().SetLinearVelocity(new b2Vec2(0,0));
    RedGhost2D.GetBody().ApplyImpulse(new b2Vec2(0, -0.1), pacMan.GetBody().GetWorldCenter());
        
    }*/



function redGhostMovement() {
var choice = Math.floor(Math.random() * 4) + 1;
    switch(choice) {
        case 1: //up
            RedGhost2D.GetBody().SetLinearVelocity(new b2Vec2(0,0));
            RedGhost2D.GetBody().ApplyImpulse(new b2Vec2(0, -0.4), pacMan.GetBody().GetWorldCenter());
        break;
        case 2: //Right
            RedGhost2D.GetBody().SetLinearVelocity(new b2Vec2(0,0));
            RedGhost2D.GetBody().ApplyImpulse(new b2Vec2(0.7, 0), pacMan.GetBody().GetWorldCenter());
        break;
        case 3: //Down
            RedGhost2D.GetBody().SetLinearVelocity(new b2Vec2(0,0));
            RedGhost2D.GetBody().ApplyImpulse(new b2Vec2(0, 0.3), pacMan.GetBody().GetWorldCenter());
        break;
        case 4: //Left
            RedGhost2D.GetBody().SetLinearVelocity(new b2Vec2(0,0));
            RedGhost2D.GetBody().ApplyImpulse(new b2Vec2(0, -0.1), pacMan.GetBody().GetWorldCenter());
        break;
        
}
}


function blueGhostMovement() {
var choice = Math.floor(Math.random() * 4) + 1;
    switch(choice) {
        case 1: //up
            BlueGhost2D.GetBody().SetLinearVelocity(new b2Vec2(0,0));
            BlueGhost2D.GetBody().ApplyImpulse(new b2Vec2(0, -0.1), pacMan.GetBody().GetWorldCenter());
        break;
        case 2: //Right
            BlueGhost2D.GetBody().SetLinearVelocity(new b2Vec2(0,0));
            BlueGhost2D.GetBody().ApplyImpulse(new b2Vec2(0.1, 0), pacMan.GetBody().GetWorldCenter());
        break;
        case 3: //Down
            BlueGhost2D.GetBody().SetLinearVelocity(new b2Vec2(0,0));
            BlueGhost2D.GetBody().ApplyImpulse(new b2Vec2(0, 0.1), pacMan.GetBody().GetWorldCenter());
        break;
        case 4: //Left
            BlueGhost2D.GetBody().SetLinearVelocity(new b2Vec2(0,0));
            BlueGhost2D.GetBody().ApplyImpulse(new b2Vec2(0, -0.1), pacMan.GetBody().GetWorldCenter());
        break;
        
}
}

function pinkGhostMovement() {
var choice = Math.floor(Math.random() * 4) + 1;
    switch(choice) {
        case 1: //up
            PinkGhost2D.GetBody().SetLinearVelocity(new b2Vec2(0,0));
            PinkGhost2D.GetBody().ApplyImpulse(new b2Vec2(0, -0.1), pacMan.GetBody().GetWorldCenter());
        break;
        case 2: //Right
            PinkGhost2D.GetBody().SetLinearVelocity(new b2Vec2(0,0));
            PinkGhost2D.GetBody().ApplyImpulse(new b2Vec2(0.1, 0), pacMan.GetBody().GetWorldCenter());
        break;
        case 3: //Down
            PinkGhost2D.GetBody().SetLinearVelocity(new b2Vec2(0,0));
            PinkGhost2D.GetBody().ApplyImpulse(new b2Vec2(0, 0.1), pacMan.GetBody().GetWorldCenter());
        break;
        case 4: //Left
            PinkGhost2D.GetBody().SetLinearVelocity(new b2Vec2(0,0));
            PinkGhost2D.GetBody().ApplyImpulse(new b2Vec2(0, -0.1), pacMan.GetBody().GetWorldCenter());
        break;
        
}
}
function orangeGhostMovement() {
console.log(TIMESTEP);
var choice = Math.floor(Math.random() * 4) + 1;
    switch(choice) {
        case 1: //up
            OrangeGhost2D.GetBody().SetLinearVelocity(new b2Vec2(0,0));
            OrangeGhost2D.GetBody().ApplyImpulse(new b2Vec2(0, -0.1), pacMan.GetBody().GetWorldCenter());
        break;
        case 2: //Right
            OrangeGhost2D.GetBody().SetLinearVelocity(new b2Vec2(0,0));
            OrangeGhost2D.GetBody().ApplyImpulse(new b2Vec2(0.1, 0), pacMan.GetBody().GetWorldCenter());
        break;
        case 3: //Down
            OrangeGhost2D.GetBody().SetLinearVelocity(new b2Vec2(0,0));
            OrangeGhost2D.GetBody().ApplyImpulse(new b2Vec2(0, 0.1), pacMan.GetBody().GetWorldCenter());
        break;
        case 4: //Left
            OrangeGhost2D.GetBody().SetLinearVelocity(new b2Vec2(0,0));
            OrangeGhost2D.GetBody().ApplyImpulse(new b2Vec2(0, -0.1), pacMan.GetBody().GetWorldCenter());
        break;
        
}
}