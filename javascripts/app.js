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
  function fieldCheck () {
    for (r=0; r < field.length; r++) {
      var row = field[r];
      for (c=0; c < row.length; c++){
        var column = row[c];
        if (column === "O" || rover2) {
          console.log("Obstacle ahead @" + field[r][c] + ", Turn!");
          var clear = false;
        }
      }
    }
  }
  fieldCheck()
  if (clear === false) {
  
  }
  //10x10 Boundraries
  if (rover.x < 9 && rover.y < 9) { 
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

    var currentRow = rover.y;
    var currentCol = rover.x;

    field[currentRow][currentCol].push(rover.x, rover.y);
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
    if (commandList.charAt(i) != "f" && "r" && "l" && "b") validInputs = false;
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
        case "b": moveBackward(rover);
      }
    }
  else console.log("INVALID Input!")
}

var field = [
    //0   //1   //2   //3   //4   //5   //6   //7   //8   //9
  [rover, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, "O", null, null],
  [null, null, "O", null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, "O", null, null, null, null, null],
  [null, null, null, null, null, null, rover2, null, null, null],
  [null, "O", null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, "O", null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null]
]



var rover2 = {
  direction: "W", 
  x: 6,
  y: 6,
  travelLog: [],
}