//----------------------CONTROLS----------------------------//
//On Keypress, log the keycode and which key was pressed down
$(window).keydown(function(e) {
	console.log(e.keyCode)
	if(e.keyCode == 65) {
	console.log("left-down");
    move_left();
    
}
	if(e.keyCode == 68) {
	console.log("right-down");
    move_right();
}
	if(e.keyCode == 87) {
    if(Level !="Mario") {
	console.log("up-down");
    move_up();
    } else {
        jump();
    }
}
	if(e.keyCode == 83) {
	console.log("down-down");
    move_down();
}
    if(e.keyCode == 46) {
        DestroyWorld(mazeWorld);
    }

});
//On Keypress, log the keycode and which key was pressed up
$(window).keyup(function(e) {
	console.log(e.keyCode)
	if(e.keyCode == 65) {
    moving = false;
    stop("Left");
}
	if(e.keyCode == 68) {
    moving = false;
    stop("Right");    
}
	if(e.keyCode == 87) {
    moving = false;
    stop("Up");
}
	if(e.keyCode == 83) {
    moving = false;
    stop("Down");
}
});
function stop(Direction) {
movementLock = false;
    switch(Direction) {
            case "Left":
                easelPacman.gotoAndPlay("standLeft");
            break;
            
            case "Up":
                easelPacman.gotoAndPlay("standUp");
            break;
            
            case "Right":
                easelPacman.gotoAndPlay("standRight");
            break;
            
            case "Down":
                easelPacman.gotoAndPlay("standDown");
            break;
    }
    pacMan.GetBody().SetLinearVelocity(new b2Vec2(0,0));
}
function move_left() {
    if(movementLock == false) {
    easelPacman.gotoAndPlay("moveLeft");
    movementLock = true;
    }
    pacMan.GetBody().SetLinearVelocity(new b2Vec2(0,0));
    pacMan.GetBody().ApplyImpulse(new b2Vec2(-0.2, 0), pacMan.GetBody().GetWorldCenter());
}
function move_right() {
    if(movementLock == false) { 
    easelPacman.gotoAndPlay("moveRight");
    movementLock = true;
    }
    pacMan.GetBody().SetLinearVelocity(new b2Vec2(0,0));
    pacMan.GetBody().ApplyImpulse(new b2Vec2(0.2, 0), pacMan.GetBody().GetWorldCenter());
}
function move_up() { 
    if(movementLock == false) { 
    easelPacman.gotoAndPlay("moveUp");
    movementLock = true;
    }
    pacMan.GetBody().SetLinearVelocity(new b2Vec2(0,0));
    pacMan.GetBody().ApplyImpulse(new b2Vec2(0, -0.2), pacMan.GetBody().GetWorldCenter());
}
function move_down() { 
    if(movementLock == false) { 
    easelPacman.gotoAndPlay("moveDown");
    movementLock = true;
    }
    pacMan.GetBody().SetLinearVelocity(new b2Vec2(0,0));
    pacMan.GetBody().ApplyImpulse(new b2Vec2(0, 0.2), pacMan.GetBody().GetWorldCenter());

}
//Switches the Level Mode
function switchLevel(toLevel){
    switch(toLevel) {        
        case "Maze":
        DestroyWorld(Level);
        Level = "Maze"
        break;
        
        case "Frogger":
        DestroyWorld(Level);
        Level = "Frogger"
        createFroggerMap();
        break;
        
        case "Mario":
        DestroyWorld(Level);
        Level = "Mario"
        break;
    }
}

function DestroyWorld(world) {
    
    stage.removeAllChildren();
    for (var worldList = world.GetBodyList(); worldList; worldList = worldList.GetNext()) {

    destroyMe.push(world.GetBodyList());

   for (var i in destroyMe) {
       world.DestroyBody(destroyMe[i]);
   }
    destroyMe.length = 0;

}
}
//~~Utility Functions~~
//use to track x and y of mouse for positioning on main level map
function grabCoords() {
OrangeGhostCoords = [OrangeGhost2D.GetBody().GetPosition().x*SCALE, OrangeGhost2D.GetBody().GetPosition().y*SCALE];
BlueGhostCoords = [BlueGhost2D.GetBody().GetPosition().x*SCALE, BlueGhost2D.GetBody().GetPosition().y*SCALE];
PinkGhostCoords = [PinkGhost2D.GetBody().GetPosition().x*SCALE, PinkGhost2D.GetBody().GetPosition().y*SCALE];
RedGhostCoords = [RedGhost2D.GetBody().GetPosition().x*SCALE, RedGhost2D.GetBody().GetPosition().y*SCALE];
    
console.log("Orange: " + OrangeGhostCoords);
console.log("Blue: "+BlueGhostCoords);
console.log("Pink: "+PinkGhostCoords);
console.log("Red: "+RedGhostCoords);
}