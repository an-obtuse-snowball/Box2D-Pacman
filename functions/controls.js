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
function jump() { 
    easelPacman.gotoAndPlay("moveUp");
    pacMan.GetBody().ApplyImpulse(new b2Vec2(0, -0.5), pacMan.GetBody().GetWorldCenter());
}