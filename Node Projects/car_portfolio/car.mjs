// WORK IN PROGRESS


// create data structures
let x = 0;
let y = 0;

let direction = 0; // 0 == right, 1 == down, 2 == left, 3 == up

let map = []

let peeks = peek();

// manouver out of corner at the start
while (peeks == false) {
    myTurn();
    peeks = peek();
}


for (let i = 0; i < 1000; i++) {

    // stop when goal was found
    if (atGoal() == true) {
        break;
    }

    myMove();

    if (hasAlreadySeen([x,y]) == true) {
        turnLeft();
    } else {
        myTurn();
    }

    peeks = peek();

    if (peeks == true) {
        continue
    } else {
        while (peeks == false) {
            //turn left
            turnLeft();
            peeks = peek();
        }
    }
}




// Helper functions
function myMove() {
    map.push([x,y]);
    move();
    if (direction == 0) {
        x++;
    } else if (direction == 1) {
        y--;
    } else if (direction == 2) {
        x--;
    } else if (direction == 3) {
        y++;
    }
}

function turnLeft() {
    myTurn();
    myTurn();
    myTurn();
}

function myTurn() {

    direction = (direction + 1) % 4;
    turn();
}

function hasAlreadySeen([x, y]) {
    for (let position of map) {
        if (position[0] == x && position[1] == y) {
            return true;
        }
        return false;
    }
}