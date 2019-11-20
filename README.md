Worlds can currently be changed by setting Level = "Maze","Mario", "Frogger"
and uncommenting the command to create the worlds

    createMaze();
    createMarioMap();
    createFroggerMap();


Attempted Ideas:
- Attempted to create a tilemap that would generate the map initially. (2D Array Looping): Failed (Not Enough time to explore)
- Created idle animation that would keep pacman facing the direction he was travelling in (Success)
- Pathfinding of ghosts based on X and Y of pacman (Not enough time to actually put in error correction of the obstacles in the way)
    Ended up randomly picking directions for ghosts to travel in. Planning on doing some sort of delay to allow more spontanous movements
    or some sort of randomisation to pick more 'creative' routes to get to Pacman



Issues:
- World Swapping 
- Ghost AI (Basic Pathfinding possible)

Successes:
- For Loop using math to generate blocks with functions
- Attempted ID usage to identify the right ghosts


Notes:

World is cleared with DestroyWorld(WorldName)

Various parts incompleted but functionally there