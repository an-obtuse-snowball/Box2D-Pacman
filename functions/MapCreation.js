//Creates blocks in conjuction with the generateMaze() function
function createBlock(id, type, x, y) {
    //Defines the fixture and density 
    fixtureBlocks[id] = new b2FixtureDef;
    fixtureBlocks[id].density = 0;
    fixtureBlocks[id].friction = 0;

    bodyBlocks[id] = new b2BodyDef;
    bodyBlocks[id].type = b2Body.b2_staticBody;
    //Places the entity (X,Y)
    bodyBlocks[id].position.x = x;
    bodyBlocks[id].position.y = y;
    //Defines the shape, width and height
    fixtureBlocks[id].shape = new b2PolygonShape;
    fixtureBlocks[id].shape.SetAsBox(0.05, 0.05);
    //Creates Entity
    blockArray[id] = mazeWorld.CreateBody(bodyBlocks[id]).CreateFixture(fixtureBlocks[id]);

    blockArray[id].GetBody().SetUserData({
        id: id
    });

}

function createMarioBlock(id, x, y, w, h) {
    //Defines the fixture and density 
    fixtureBlocks[id] = new b2FixtureDef;
    fixtureBlocks[id].density = 0;
    fixtureBlocks[id].friction = 0;

    bodyBlocks[id] = new b2BodyDef;
    bodyBlocks[id].type = b2Body.b2_staticBody;
    //Places the entity (X,Y)
    bodyBlocks[id].position.x = x;
    bodyBlocks[id].position.y = y;
    //Defines the shape, width and height
    fixtureBlocks[id].shape = new b2PolygonShape;
    fixtureBlocks[id].shape.SetAsBox(w, h);
    //Creates Entity
    blockArray[id] = marioWorld.CreateBody(bodyBlocks[id]).CreateFixture(fixtureBlocks[id]);

    blockArray[id].GetBody().SetUserData({
        id: id
    });

}

function generateMazeExits() {
    createEntry("North", 3.8, 0.1, 0.5, 0);
}
//Creates a Maze Exit, (ID, xCoord, yCoord, Width, Height)
function createEntry(id, x, y, w, h) {
    //Defines the fixture and density 
    entryFixture = new b2FixtureDef;
    entryFixture.density = 0;
    entryFixture.friction = 0;

    entryFixture.isSensor = true;
    
    entryDef = new b2BodyDef;
    entryDef.type = b2Body.b2_staticBody;
    //Places the entity (X,Y)
    entryDef.position.x = x;
    entryDef.position.y = y;
    //Defines the shape, width and height
    entryFixture.shape = new b2PolygonShape;
    entryFixture.shape.SetAsBox(w, h);
    //Creates entryFixtureEntity
    Exit = mazeWorld.CreateBody(entryDef).CreateFixture(entryFixture);

    Exit.GetBody().SetUserData({
        id: id
    });

}

function createFroggerBlock(id, type, x, y) {
    //Defines the fixture and density 
    fixtureBlocks[id] = new b2FixtureDef;
    fixtureBlocks[id].density = 0;
    fixtureBlocks[id].friction = 0;

    bodyBlocks[id] = new b2BodyDef;
    bodyBlocks[id].type = b2Body.b2_staticBody;
    //Places the entity (X,Y)
    bodyBlocks[id].position.x = x;
    bodyBlocks[id].position.y = y;
    //Defines the shape, width and height
    fixtureBlocks[id].shape = new b2PolygonShape;
    fixtureBlocks[id].shape.SetAsBox(0.05, 0.05);
    //Creates Entity
    blockArray[id] = froggerWorld.CreateBody(bodyBlocks[id]).CreateFixture(fixtureBlocks[id]);

    blockArray[id].GetBody().SetUserData({
        id: id
    });

}

var count = 0;

function GeneratePills() {
    x = 0.5;
    y = 0.5;
    for (yCoord = 0; yCoord < 20; yCoord++) {
        for (xCoord = 0; xCoord < 16; xCoord++) {

            count++;

            CreatePill(count, 0.1, x, y);
            x = x + 0.445
        }
        x = 0.5;
        y = y + 0.4;

    }
}

var pillSprite = [];

function CreatePill(id, size, x, y) {

    pillDef[id] = new b2FixtureDef;
    pillDef[id].density = 0;
    pillDef[id].friction = 0;
    pillDef[id].shape = new b2CircleShape(size);
    pillDef[id].isSensor = true;
    pills[id] = new b2BodyDef;
    pills[id].type = b2Body.b2_staticBody;
    //Places the entity (X,Y)
    pills[id].position.x = x;
    pills[id].position.y = y;
    //Creates Entity
    blockArray[id] = mazeWorld.CreateBody(pills[id]).CreateFixture(pillDef[id]);
    blockArray[id].GetBody().SetUserData({
        id: "Pill" + id
    });

    
    pillSprite[id] = new createjs.Bitmap(loader.getResult("Pill"));
    pillSprite[id].setTransform(x, y, 0.4, 0.4);
    
    stage.addChild(pillSprite[id]);
    
}

function createMaze() {
    document.getElementById('box2dCanvas').style.backgroundImage = "url(assets/maze.png)";
    document.getElementById('easeljsCanvas').style.backgroundImage = "url(assets/maze.png)";

    generateMaze();
    generateMazeExits();
    //World Shift WIP
    createMazePacman(PacmanCoords[0], PacmanCoords[1]);
    GeneratePills();
    //- EaselJS WIP
    createMazeBlueGhost();
    createMazeOrangeGhost();
    createMazePinkGhost();
    createMazeRedGhost();

}

function generateMaze() {
    x = 0.065;
    y = 0.18;
    //Generate Top Left Wall
    for (j = 0; j < 45; j++) {
        x = x + 0.15;
        createBlock(j, "wall", x, y);
        j++;

    }
    //For ExitGate
    for (j = 50; j < 56; j++) {
        x = x + 0.18;
        j++;
    }
    //Generate Top Right Wall
    for (j = 56; j < 102; j++) {
        x = x + 0.15;
        createBlock(j, "wall", x, y);
        j++;
    }
    y = y + 0.65;
    for (i = 0; i < 4; i++) {
        x = 0.66;
        //Top Row Islands
        for (j = 0; j < 12; j++) {
            x = x + 0.15;
            createBlock(j, "wall", x, y);
            j++;
        }
        x = 2;
        for (j = 25; j < 40; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
            j++;
        }
        x = 4.45;
        for (j = 70; j < 84; j++) {
            x = x + 0.15;
            createBlock(j, "wall", x, y);
            j++;
        }
        x = 6;
        for (j = 25; j < 36; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
            j++;
        }
        y = y + 0.15;
    }
    x = 3.65;
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 3; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
            j++;
        }
        x = 3.65;
        y = y + 0.15;
    }
    y = 1.925;
    x = 0.66;
    //Creates second row of islands and
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 12; j++) {
            x = x + 0.15;
            createBlock(j, "wall", x, y);
            j++;
        }
        x = 2;
        for (j = 30; j < 33; j++) {
            x = x + 0.15;
            createBlock(j, "wall", x, y);
            j++;
        }
        x = 2.8;
        for (j = 40; j < 65; j++) {
            x = x + 0.15;
            createBlock(j, "wall", x, y);
            j++;
        }
        x = 5.25;
        for (j = 30; j < 33; j++) {
            x = x + 0.15;
            createBlock(j, "wall", x, y);
            j++;
        }
        x = 6;
        for (j = 34; j < 45; j++) {
            x = x + 0.15;
            createBlock(j, "wall", x, y);
            j++;
        }
        x = 0.66;
        y = y + 0.15;

    }
    for (i = 0; i < 3; i++) {
        x = 2;
        for (j = 30; j < 33; j++) {
            x = x + 0.15;
            createBlock(j, "wall", x, y);
            j++;
        }
        x = 3.625;
        for (j = 40; j < 43; j++) {
            x = x + 0.15;
            createBlock(j, "wall", x, y);
            j++;
        }
        x = 5.25;
        for (j = 30; j < 33; j++) {
            x = x + 0.15;
            createBlock(j, "wall", x, y);
            j++;
        }
        x = 2;
        y = y + 0.15;
    }
    y = y + 0.025;
    x = 0.05;
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 5; j++) {
            x = x + 0.15;
            createBlock(j, "wall", x, y);
        }
        x = 1.25;
        for (j = 0; j < 2; j++) {
            x = x + 0.15;
            createBlock(j, "wall", x, y);
        }
        x = 2;
        for (j = 30; j < 44; j++) {
            x = x + 0.16;
            createBlock(j, "wall", x, y);
            j++;
        }
        x = 3.6;
        for (j = 30; j < 34; j++) {
            x = x + 0.16;
            createBlock(j, "wall", x, y);
            j++;
        }
        x = 4.4;
        for (j = 34; j < 48; j++) {
            x = x + 0.16;
            createBlock(j, "wall", x, y);
            j++;
        }
        x = 6;
        for (j = 34; j < 38; j++) {
            x = x + 0.16;
            createBlock(j, "wall", x, y);
            j++;
        }
        x = 6.7;
        for (j = 34; j < 44; j++) {
            x = x + 0.16;
            createBlock(j, "wall", x, y);
            j++;
        }
        y = y + 0.15;
        x = 0.05;
    }
    y = y + 0.025;
    x = 0.05;
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 1; j++) {
            x = x + 0.16;
            createBlock(j, "wall", x, y);
        }
        x = 1.25;
        for (j = 0; j < 2; j++) {
            x = x + 0.15;
            createBlock(j, "wall", x, y);
        }
        x = 6;
        for (j = 0; j < 2; j++) {
            x = x + 0.16;
            createBlock(j, "wall", x, y);
        }
        x = 7.35;
        for (j = 0; j < 1; j++) {
            x = x + 0.16;
            createBlock(j, "wall", x, y);
        }
        y = y + 0.15;
        x = 0.05;
    }
    y = y + 0.025;
    x = 0.05;

    for (i = 0; i < 2; i++) {
        x = 2.85;
        for (j = 0; j < 4; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 4.2;
        for (j = 0; j < 4; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
    }

    y = y + 0.025;
    x = 0.05;
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 1; j++) {
            x = x + 0.16;
            createBlock(j, "wall", x, y);
        }
        x = 0.7;
        for (j = 0; j < 6; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 2.05;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 2.85;
        for (j = 0; j < 1; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 4.6;
        for (j = 0; j < 1; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 5.26;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 6;
        for (j = 0; j < 6; j++) {
            x = x + 0.16;
            createBlock(j, "wall", x, y);
        }
        x = 7.35;
        for (j = 0; j < 1; j++) {
            x = x + 0.16;
            createBlock(j, "wall", x, y);
        }
        y = y + 0.15;
        x = 0.05;
    }
    y = y + 0.025;
    x = 0.05;
    for (i = 0; i < 3; i++) {
        x = 2.05;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 2.85;
        x = x + 0.14;
        createBlock(j, "wall", x, y);
        x = 4.6;
        x = x + 0.14;
        createBlock(j, "wall", x, y);
        x = 5.25;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        y = y + 0.15;
    }
    y = y + 0.025;
    x = 0.05;
    for (i = 0; i < 1; i++) {
        x = 0.7;
        for (j = 0; j < 6; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 2.05;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 2.85;
        x = x + 0.14;
        createBlock(j, "wall", x, y);
        x = 4.6;
        x = x + 0.14;
        createBlock(j, "wall", x, y);
        x = 5.25;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 6.05;
        for (j = 0; j < 6; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        y = y + 0.15;
    }
    y = y + 0.025;
    x = 0.05;
    for (i = 0; i < 1; i++) {
        x = 0.7;
        for (j = 0; j < 6; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 2.05;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 2.875;
        for (j = 0; j < 17; j++) {
            x = x + 0.11;
            createBlock(j, "wall", x, y);
        }
        x = 5.25;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 6.05;
        for (j = 0; j < 6; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        y = y + 0.15;
    }
    y = y + 0.025;
    x = 0.05;
    for (i = 0; i < 3; i++) {
        x = 1.25;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 2.05;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }

        x = 5.25;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 6.05;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        y = y + 0.15;
    }
    y = y + 0.025;
    x = 0.05;
    for (i = 0; i < 2; i++) {
        x = 0.2;
        for (j = 0; j < 4; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 1.25;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 2.05;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }

        x = 5.25;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 2.8;
        for (j = 0; j < 14; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 6.05;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 6.8;
        for (j = 0; j < 4; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        y = y + 0.15;
    }
    y = y + 0.5;
    for (i = 0; i < 2; i++) {
        x = 0.7;
        for (j = 0; j < 6; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 2.1;
        for (j = 0; j < 7; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 3.65;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 4.5;
        for (j = 0; j < 7; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 6.1;
        for (j = 0; j < 6; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        y = y + 0.15;
    }
    for (i = 0; i < 3; i++) {
        x = 1.25;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }

        x = 3.65;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }

        x = 6.1;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        y = y + 0.15;
    }
    for (i = 0; i < 2; i++) {
        x = 0.1;
        for (j = 0; j < 5; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 1.25;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 2.05;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }

        x = 2.8;
        for (j = 0; j < 14; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 5.25;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 6.1;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 6.8;
        for (j = 0; j < 5; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        y = y + 0.15;
    }

    for (i = 0; i < 3; i++) {
        x = 2.05;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 3.65;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 5.25;
        for (j = 0; j < 2; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        y = y + 0.175;
    }
    for (i = 0; i < 2; i++) {
        x = 0.75;
        for (j = 0; j < 6; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 2.05;
        for (j = 0; j < 8; j++) {
            x = x + 0.14;
            createBlock(j, "wall", x, y);
        }
        x = 3.65;
        for (j = 0; j < 2; j++) {
            x = x + 0.15;
            createBlock(j, "wall", x, y);
        }
        x = 4.5;
        for (j = 0; j < 7; j++) {
            x = x + 0.15;
            createBlock(j, "wall", x, y);
        }
        x = 6.1;
        for (j = 0; j < 6; j++) {
            x = x + 0.15;
            createBlock(j, "wall", x, y);
        }
        y = y + 0.125;
    }
    y = y + 0.6
    for (i = 0; i < 1; i++) {
        x = 0.1;
        for (j = 0; j < 23; j++) {
            x = x + 0.15;
            createBlock(j, "wall", x, y);
        }


        x = 4;
        for (j = 0; j < 23; j++) {
            x = x + 0.15;
            createBlock(j, "wall", x, y);
        }
        y = y + 0.125;
    }
    y = 0.18;
    for (i = 0; i < 25; i++) {
        x = 0.2
        createBlock(j, "wall", x, y);
        y = y + 0.15;
    }
    y = y + 0.45;
    for (i = 0; i < 27; i++) {
        x = 0.2
        createBlock(j, "wall", x, y);
        y = y + 0.15;
    }
    y = 0.18;
    for (i = 0; i < 25; i++) {
        x = 7.5
        createBlock(j, "wall", x, y);
        y = y + 0.15;
    }
    y = y + 0.45;
    for (i = 0; i < 27; i++) {
        x = 7.5
        createBlock(j, "wall", x, y);
        y = y + 0.15;
    }

}

//instantiates the frogger level
function createFroggerMap(Entry) {
    Level = "Frogger";
    document.getElementById('box2dCanvas').style.backgroundImage = "url(assets/froggerlevel.png)";
    document.getElementById('easeljsCanvas').style.backgroundImage = "url(assets/froggerlevel.png)";

    northExitFixture = new b2FixtureDef;
    northExitFixture.density = 0;
    northExitFixture.friction = 0;

    northExitDef = new b2BodyDef;
    northExitDef.type = b2Body.b2_staticBody;
    //Places the entity (X,Y)
    northExitDef.position.x = 4;
    northExitDef.position.y = 0.1;
    //Defines the shape, width and height
    northExitFixture.shape = new b2PolygonShape;
    northExitFixture.shape.SetAsBox(4, 0.05);
    //Creates Entity
    northExit = froggerWorld.CreateBody(northExitDef).CreateFixture(northExitFixture);

    northExit.GetBody().SetUserData({
        id: "froggerNorthExit"
    });
    
    southExitFixture = new b2FixtureDef;
    southExitFixture.density = 0;
    southExitFixture.friction = 0;

    southExitDef = new b2BodyDef;
    southExitDef.type = b2Body.b2_staticBody;
    //Places the entity (X,Y)
    southExitDef.position.x = 4;
    southExitDef.position.y = 8.45;
    //Defines the shape, width and height
    southExitFixture.shape = new b2PolygonShape;
    southExitFixture.shape.SetAsBox(4, 0.05);
    //Creates Entity
    southExit = froggerWorld.CreateBody(southExitDef).CreateFixture(southExitFixture);

    southExit.GetBody().SetUserData({
        id: "froggerSouthExit"
    });
    
    eastWallFixture = new b2FixtureDef;
    eastWallFixture.density = 0;
    eastWallFixture.friction = 0;

    eastWallDef = new b2BodyDef;
    eastWallDef.type = b2Body.b2_staticBody;
    //Places the entity (X,Y)
    eastWallDef.position.x = 7.7;
    eastWallDef.position.y = 4.5;
    //Defines the shape, width and height
    eastWallFixture.shape = new b2PolygonShape;
    eastWallFixture.shape.SetAsBox(0.05, 5);
    //Creates Entity
    eastWall = froggerWorld.CreateBody(eastWallDef).CreateFixture(eastWallFixture);

    southExit.GetBody().SetUserData({
        id: "froggerEastWall"
    });
    
    westWallFixture = new b2FixtureDef;
    westWallFixture.density = 0;
    westWallFixture.friction = 0;

    westWallDef = new b2BodyDef;
    westWallDef.type = b2Body.b2_staticBody;
    //Places the entity (X,Y)
    westWallDef.position.x = 0.1;
    westWallDef.position.y = 4.5;
    //Defines the shape, width and height
    westWallFixture.shape = new b2PolygonShape;
    westWallFixture.shape.SetAsBox(0.05, 5);
    //Creates Entity
    westWall = froggerWorld.CreateBody(westWallDef).CreateFixture(westWallFixture);

    southExit.GetBody().SetUserData({
        id: "froggerWestWall"
    });
    if(Entry == "North") {
    createFroggerPacman(3.75,0.5);
        } else {
             createFroggerPacman(3.75,8);
        }
    createOrangeGhost(0.5,4.5);
    createBlueGhost(7,2.1);
    createPinkGhost(6,5.5);
    createRedGhost(0.5,6.25);

}

function createMarioMap(Entry) {
    Level = "Mario";
    document.getElementById('box2dCanvas').style.backgroundImage = "url(assets/mariolevel.png)";
    document.getElementById('easeljsCanvas').style.backgroundImage = "url(assets/mariolevel.png)";
    createMarioBlock("Platform", 1,5.15,0.9,0);
    createMarioBlock("Platform", 1.15,4.9,0.3,0);
    createMarioBlock("Platform", 1.7,4.7,0.5,0);
    createMarioBlock("Platform", 1.7,4.7,0.5,0);
    createMarioBlock("Platform", 2.75,4.4,0.85,0);
    createMarioBlock("Platform", 4,4.85,1,0);
    createMarioBlock("Platform", 4.9,4.6,0.3,0);
    createMarioBlock("Platform", 5.4,4.45,0.3,0);
    createMarioBlock("Platform", 5.8,4.3,0.3,0);
    createMarioBlock("Platform", 6.8,4.6,0.9,0);
    createMarioBlock("Platform", 5.6,4.85,0.3,0);
    createMarioBlock("Platform", 6,5,0.3,0);
    createMarioBlock("Platform", 6.5,5.2,0.3,0);
    createMarioBlock("Platform", 5.4,5.35,0.9,0);
    createMarioPacman(0.5,5);
    createMarioBlueGhost(3,4);
    createMarioRedGhost(2,4.1);
    createMarioPinkGhost(4,4);
    createMarioOrangeGhost(4.6, 5);

}


function makePills() {

}