//---------------------DECLARATIONS-------------------//
var b2Vec2 = Box2D.Common.Math.b2Vec2;
var b2BodyDef = Box2D.Dynamics.b2BodyDef;
var b2Body = Box2D.Dynamics.b2Body;
var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
var b2Fixture = Box2D.Dynamics.b2Fixture;
var b2World = Box2D.Dynamics.b2World;
var b2MassData = Box2D.Collision.Shapes.b2MassData;
var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;

var SCALE = 30; 			//recommended
var widthScale = 232/SCALE;
var heightScale = 256/SCALE;

var pacMan;
var easelPacman;
var easelCanvas, easelContext, box2dCanvas, box2dContext;
var movementLock = false;
var debugDraw = new b2DebugDraw();
var STEP = 20;
var TIMESTEP = 1/STEP;
var fixtureBlocks = [];
var bodyBlocks = [];
var blockArray = [];
var blockCounter = 0;
var pills = [];
var pillDef = [];
var Level = "Maze";
var destroyMe = [];
var gameStart = false;

    easelCanvas = document.getElementById('easeljsCanvas');
    box2dCanvas = document.getElementById('box2dCanvas');
    easelContext = easelCanvas.getContext('2d');
    box2dContext = box2dCanvas.getContext('2d');
    stage = new createjs.Stage(easelCanvas);
    stage.snapPixelsEnabled = true;

    w = stage.canvas.width;
    h = stage.canvas.height;


//---------------------WORLD-------------------------//
//Creates the worlds and declares physics configs
var mazeWorld = new b2World(new b2Vec2(0,0),false);
var marioWorld = new b2World(new b2Vec2(0, 4),false);
var froggerWorld = new b2World(new b2Vec2(0, 0), false);

PacmanCoords = [3.53, 6.2];
OrangeGhostCoords = [3.2, 3.8];
BlueGhostCoords = [4.4, 3.8];
RedGhostCoords = [4.4, 4.2];
PinkGhostCoords = [3.2, 4.2];


        manifest = [
            {src: "pacman.png", id:"Pacman"}, //Pacman Spritemap
            {src: "pacdot.png", id:"Pill"}, //Pill
            {src: "PinkGhost.png", id:"PinkGhost"},
            {src: "OrangeGhost.png", id:"OrangeGhost"},
            {src: "BlueGhost.png", id:"BlueGhost"},
            {src: "RedGhost.png", id:"RedGhost"}            
        ];
loader = new createjs.LoadQueue(false);
loader.addEventListener("complete", handleComplete);
loader.loadManifest(manifest, true, "assets/");
        
debugDraw.SetSprite(document.getElementById("box2dCanvas").getContext("2d"));
debugDraw.SetDrawScale(SCALE);
debugDraw.SetFillAlpha(0.1);
debugDraw.SetLineThickness(1.0);
debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
mazeWorld.SetDebugDraw(debugDraw);
froggerWorld.SetDebugDraw(debugDraw);
marioWorld.SetDebugDraw(debugDraw);
    
    createMaze();
    //createMarioMap();
    //createFroggerMap();



//---------------Game Callback-----------------//
//handles update process for each tick
function update() {


    switch(Level) {
        case "Maze": 
            
        handleMovement();
            grabCoords();
            
        easelPacman.x = pacMan.GetBody().GetPosition().x*SCALE;
        easelPacman.y = pacMan.GetBody().GetPosition().y*SCALE;
        BlueGhostEasel.x = BlueGhost2D.GetBody().GetPosition().x*SCALE;
        BlueGhostEasel.y = BlueGhost2D.GetBody().GetPosition().y*SCALE;
        OrangeGhostEasel.x = OrangeGhost2D.GetBody().GetPosition().x*SCALE;
        OrangeGhostEasel.y = OrangeGhost2D.GetBody().GetPosition().y*SCALE;
        RedGhostEasel.x = RedGhost2D.GetBody().GetPosition().x*SCALE;
        RedGhostEasel.y = RedGhost2D.GetBody().GetPosition().y*SCALE;
        PinkGhostEasel.x = PinkGhost2D.GetBody().GetPosition().x*SCALE;
        PinkGhostEasel.y = PinkGhost2D.GetBody().GetPosition().y*SCALE;
        
        mazeWorld.DrawDebugData();
        mazeWorld.ClearForces();

    
   for (var i in destroyMe) {
	mazeWorld.DestroyBody(destroyMe[i]);
   }
   destroyMe.length = 0;
            
        mazeWorld.Step(
		TIMESTEP,		//frame-rate 
		10,		//Velocity iterations
		10		//Positiion iterations
);
            break;
        case "Mario":
        easelPacman.x = pacMan.GetBody().GetPosition().x*SCALE;
        easelPacman.y = pacMan.GetBody().GetPosition().y*SCALE;
        BlueGhostEasel.x = BlueGhost2D.GetBody().GetPosition().x*SCALE;
        BlueGhostEasel.y = BlueGhost2D.GetBody().GetPosition().y*SCALE;
        OrangeGhostEasel.x = OrangeGhost2D.GetBody().GetPosition().x*SCALE;
        OrangeGhostEasel.y = OrangeGhost2D.GetBody().GetPosition().y*SCALE;
        RedGhostEasel.x = RedGhost2D.GetBody().GetPosition().x*SCALE;
        RedGhostEasel.y = RedGhost2D.GetBody().GetPosition().y*SCALE;
        PinkGhostEasel.x = PinkGhost2D.GetBody().GetPosition().x*SCALE;
        PinkGhostEasel.y = PinkGhost2D.GetBody().GetPosition().y*SCALE;
        marioWorld.DrawDebugData();
        marioWorld.ClearForces();
        marioWorld.Step(
		TIMESTEP,		//frame-rate 
		10,		//Velocity iterations
		10		//Positiion iterations
);
            break;
        case "Frogger":
        easelPacman.x = pacMan.GetBody().GetPosition().x*SCALE;
        easelPacman.y = pacMan.GetBody().GetPosition().y*SCALE;
        BlueGhostEasel.x = BlueGhost2D.GetBody().GetPosition().x*SCALE;
        BlueGhostEasel.y = BlueGhost2D.GetBody().GetPosition().y*SCALE;
        OrangeGhostEasel.x = OrangeGhost2D.GetBody().GetPosition().x*SCALE;
        OrangeGhostEasel.y = OrangeGhost2D.GetBody().GetPosition().y*SCALE;
        RedGhostEasel.x = RedGhost2D.GetBody().GetPosition().x*SCALE;
        RedGhostEasel.y = RedGhost2D.GetBody().GetPosition().y*SCALE;
        PinkGhostEasel.x = PinkGhost2D.GetBody().GetPosition().x*SCALE;
        PinkGhostEasel.y = PinkGhost2D.GetBody().GetPosition().y*SCALE;
            
        froggerMovement(BlueGhost2D, 0, blueLeftSpeed, blueRightSpeed);
        froggerMovement(RedGhost2D, 1, redLeftSpeed, redRightSpeed);
        froggerMovement(PinkGhost2D, 2, pinkLeftSpeed, pinkRightSpeed);
        froggerMovement(OrangeGhost2D, 3, orangeLeftSpeed, orangeRightSpeed);
            
        froggerWorld.Step(
		TIMESTEP,		//frame-rate 
		10,		//Velocity iterations
		10		//Positiion iterations
);
            froggerWorld.DrawDebugData();
            froggerWorld.ClearForces();
        //this.froggerWorld.SetContactListener(listener);
            
   for (var i in destroyMe) {
	froggerWorld.DestroyBody(destroyMe[i]);
   }
   destroyMe.length = 0;
            break;
        }
}

var listener = new Box2D.Dynamics.b2ContactListener;
    listener.BeginContact = function(contact) {

	itemA = contact.GetFixtureA().GetBody().GetUserData().id;
	itemB = contact.GetFixtureB().GetBody().GetUserData().id;
        
        if(itemA == "Pacman" && itemB.includes("Pill"))  {
            if(itemA.includes("Pill")) {
               destroyMe.push(contact.GetFixtureA().GetBody());
               } else if (itemB.includes("Pill")) {
               destroyMe.push(contact.GetFixtureB().GetBody());
               }
        }
                if(itemA == "Pacman" && itemB.includes("North"))  {
            if(itemA.includes("North")) {
               DestroyWorld();
                createFroggerMap();
               } else if (itemB.includes("Pacman")) {
               DestroyWorld();
                createFroggerMap();
               }
        }

        }
    
this.mazeWorld.SetContactListener(listener);