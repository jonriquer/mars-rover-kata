// Rover Object Goes Here
var rover = {
  direction: "N", 
  x: 0,
  y: 0,
}
// ======================

// ======================
function turnLeft(rover){
  switch (rover.direction) {
    case "N": rover.direction = "W";
    break;
    case "E": rover.direction = "N";
    break;
    case "S": rover.direction = "E";
    break;
    case "W": rover.direction = "S";
    break;
  }
  console.log(rover.direction);
}

function turnRight(rover){
  switch (rover.direction) {
    case "N": rover.direction = "E";
    break;
    case "E": rover.direction = "S";
    break;
    case "S": rover.direction = "W";
    break;
    case "W": rover.direction = "N";
    break;  
  }
  console.log(rover.direction);
}

function moveForward(rover){
  switch (rover) {
    case "N": rover.x = 0;
    break;
    case "E": rover.x = +1;
    break;
    case "S": rover.x = 0;
    break;
    case "W": rover.x = -1;
    break;
  }
  switch (rover) {
    case "N": rover.y = -1;
    break;
    case "E": rover.y = 0;
    break;
    case "S": rover.y = 1;
    break;
    case "W": rover.y = 0;
    break;
  }
  console.log(rover.x, rover.y, rover.direction);
}
