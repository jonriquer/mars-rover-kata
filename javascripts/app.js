// Rover Object Goes Here
var rover = {
  direction: "N", 
  x: 0,
  y: 0,
  travelLog: [],
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

function moveForward(rover) {
  if (rover.x < 10 && rover.y < 10) { //10x10 Boundraries
  switch (rover.direction) {
    case "N": rover.y -= 1;
    break;
    case "E": rover.x += 1;
    break;
    case "S": rover.y += 1;
    break;
    case "W": rover.x -= 1;
    break;
    }
    rover.travelLog.push(rover.x);
    rover.travelLog.push(rover.y);
    console.log(rover);
  }
  else console.log("Cant go Offgrid! Please BACKUP!");
}

function moveBackward(rover) {
  switch (rover.direction) {
    case "N": rover.y += 1;
    break;
    case "E": rover.x -= 1;
    break;
    case "S": rover.y -= 1;
    break;
    case "W": rover.x += 1;
    break;
    }
    rover.travelLog.push(rover.x);
    rover.travelLog.push(rover.y);
    console.log(rover);
}

function commands(commandList) {
  // Input Validation 
  for (i=0; i < commandList.length; i++) {
    if (commandList.charAt(i) != "f" && "r" && "l") 
      var validInputs = false; 
    else validInputs = true; 
  }
  // Main Function Execution
  if (validInputs == true) 
    for (i=0; i < commandList.length; i++) {
      switch (commandList.charAt(i)) {
        case "f": moveForward(rover);
        break;
        case "r": turnRight(rover);
        break;
        case "l": turnLeft(rover);
        break;
      }
    }
  else console.log("INVALID!")
}