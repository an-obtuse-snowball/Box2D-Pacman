function splash(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
        createMaze();
      break;
    }
  }

}
//Instantiate Pacman
function createMazePacman() {
var pacDef = new b2FixtureDef;
pacDef.density = 1.0;
pacDef.restitution = 0;			//'Bounciness'
pacDef.shape = new b2CircleShape(0.2);
var pacBodyDef = new b2BodyDef;
pacBodyDef.type = b2Body.b2_dynamicBody;
pacBodyDef.position.x = (SCALE/100)+PacmanCoords[0];
pacBodyDef.position.y = (SCALE/3)-PacmanCoords[1];
pacMan = mazeWorld.CreateBody(pacBodyDef).CreateFixture(pacDef);
pacMan.GetBody().SetFixedRotation(true);
pacMan.GetBody().SetUserData({id: "Pacman"});

}

function createMarioPacman(X,Y) {
var pacDef = new b2FixtureDef;
pacDef.density = 1.0;
pacDef.restitution = 0;			//'Bounciness'
pacDef.shape = new b2CircleShape(0.2);
var pacBodyDef = new b2BodyDef;
pacBodyDef.type = b2Body.b2_dynamicBody;
pacBodyDef.position.x = X;
pacBodyDef.position.y = Y;
pacMan = marioWorld.CreateBody(pacBodyDef).CreateFixture(pacDef);
pacMan.GetBody().SetFixedRotation(true);
pacMan.GetBody().SetUserData({id: "Pacman"});
}
function createFroggerPacman(X,Y) {
var pacDef = new b2FixtureDef;
pacDef.density = 1.0;
pacDef.restitution = 0;			//'Bounciness'
pacDef.shape = new b2CircleShape(0.2);
var pacBodyDef = new b2BodyDef;
pacBodyDef.type = b2Body.b2_dynamicBody;
pacBodyDef.position.x = X;
pacBodyDef.position.y = Y;
pacMan = froggerWorld.CreateBody(pacBodyDef).CreateFixture(pacDef);
pacMan.GetBody().SetFixedRotation(true);
pacMan.GetBody().SetUserData({id: "froggerPacman"});
}