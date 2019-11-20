function handleComplete() {
        var pacManSprite = new createjs.SpriteSheet({
        framerate: 60,
        images: [loader.getResult("Pacman")],
        frames: {
            regX: 7.5,
            height: 15,
            width: 15,
            regY: 7.5,
            count: 12,
            spacing: 1,
            margin: 0
        },
        animations: {
            "standRight": [1, 1, "standRight", 0],
            "standDown": [4, 4, "standDown", 0],
            "standLeft": [7, 7, "standLeft", 0],
            "standUp": [10, 10, "standUp", 0],
            "moveRight": [0, 2, "moveRight", 0.3],
            "moveDown": [3, 5, "moveDown", 0.3],
            "moveLeft": [6, 8, "moveLeft", 0.3],
            "moveUp": [9, 11, "moveUp", 0.3]
        }
    });
    
        var blueGhostSprite = new createjs.SpriteSheet({
        framerate: 60,
        images: [loader.getResult("BlueGhost")],
        frames: {
            regX: 5,
            height: 14,
            width: 14,
            regY: 5,
            count: 8,
            spacing: 0,
            margin: 0
        },
        animations: {
            "facingUp": [0, 1, "moveRight", 0.1],
            "facingDown": [2, 3, "moveDown", 0.1],
            "facingLeft": [4, 5, "moveLeft", 0.1],
            "facingRight": [6, 7, "moveUp", 0.1]
        }
    });
    
        var orangeGhostSprite = new createjs.SpriteSheet({
        framerate: 60,
        images: [loader.getResult("OrangeGhost")],
        frames: {
            regX: 7,
            height: 14,
            width: 14,
            regY: 5,
            count: 8,
            spacing: 0,
            margin: 0
        },
        animations: {
            "facingUp": [0, 1, "moveRight", 0.1],
            "facingDown": [2, 3, "moveDown", 0.1],
            "facingLeft": [4, 5, "moveLeft", 0.1],
            "facingRight": [6, 7, "moveUp", 0.1]
        }
    });

        var pinkGhostSprite = new createjs.SpriteSheet({
        framerate: 60,
        images: [loader.getResult("PinkGhost")],
        frames: {
            regX: 7,
            height: 14,
            width: 14,
            regY: 5,
            count: 8,
            spacing: 0,
            margin: 0
        },
        animations: {
            "facingUp": [0, 1, "moveRight", 0.1],
            "facingDown": [2, 3, "moveDown", 0.1],
            "facingLeft": [4, 5, "moveLeft", 0.1],
            "facingRight": [6, 7, "moveUp", 0.1]
        }
    });
    
        var redGhostSprite = new createjs.SpriteSheet({
        framerate: 60,
        images: [loader.getResult("RedGhost")],
        frames: {
            regX: 7,
            height: 14,
            width: 14,
            regY: 5,
            count: 8,
            spacing: 0,
            margin: 0
        },
        animations: {
            "facingUp": [0, 1, "moveRight", 0.1],
            "facingDown": [2, 3, "moveDown", 0.1],
            "facingLeft": [4, 5, "moveLeft", 0.1],
            "facingRight": [6, 7, "moveUp", 0.1]
        }
    });

    easelPacman = new createjs.Sprite(pacManSprite, "standRight");
    easelPacman.snapToPixel = true;

    OrangeGhostEasel = new createjs.Sprite(orangeGhostSprite, "facingRight");
    OrangeGhostEasel.snapToPixel = true;
    
    BlueGhostEasel = new createjs.Sprite(blueGhostSprite, "facingRight");
    BlueGhostEasel.snapToPixel = true;
    
    PinkGhostEasel = new createjs.Sprite(pinkGhostSprite, "facingRight");
    PinkGhostEasel.snapToPixel = true;
    
    RedGhostEasel = new createjs.Sprite(redGhostSprite, "facingRight");
    RedGhostEasel.snapToPixel = true;
    
    stage.addChild(PinkGhostEasel, OrangeGhostEasel,BlueGhostEasel, RedGhostEasel, easelPacman);

    createjs.Ticker.setFPS(30);
    createjs.Ticker.timineMode = createjs.Ticker.RAF
    createjs.Ticker.addEventListener("tick", tick);


    //   var pillSprite1 = new createjs.Bitmap(loader.getResult("Pill"));
    //    pillSprite1.setTransform(x, y, 5, 5);
    //    pillSprite1.w = 5;
    //    pillSprite1.h = 5;
    //
    //    stage.addChild(pillSprite1);





};

function tick(e) {
    update();
    stage.update();

}