// BUSINESS LOGIC
function validateInput (userNumber) {
  if ((!isNaN(userNumber))&& (userNumber>=0)) {
    return true;
  }
  else {
    return false;
  }
}

function beepBoop (userNumber) {
  let array = [];
  for (let i = 0; i <= userNumber; i++) {
    if (i.toString().includes('3')) {
      array.push("Won't you be my neighbor?");
    } else if (i.toString().includes('2')){
      array.push("Boop!");
    } else if (i.toString().includes('1')){
      array.push("Beep!");
    } else {
      array.push(i);
    }
  }
  return array;
}

function showEach(beepBoopArray) {
  for (let i = 0; i < beepBoopArray.length; i++) {
    setTimeout (function() {
    $(".beep-boop").text(beepBoopArray[i]);
    }, ((400*i)+((i%2)+1)*300)
    )
  } 
}

function showString(beepBoopString) {
  $("#fullList").text(beepBoopString);
}

function spaceArray(array) {
  let string = array.join("* *");
  return string.split("*")
}

//UI LOGIC
$(document).ready(function() {
  $("#robogers").hover(function() {
    $("#credit").toggle();
  });
  $("#click").click(function() {
    $("#fullList").toggle();
  });
  $("#beep-boop").submit(function(event) {
    event.preventDefault();

    const valid = validateInput($("#number").val());
      if (!valid) {
        alert("Please enter an integer greater than zero.")
      }
    const userNumber = $("#number").val();
    const beepBoopArray = beepBoop(userNumber);
    const beepBoopString = beepBoopArray.join(", ");
    const beepBoopDisplay = spaceArray(beepBoopArray);        
    showEach(beepBoopDisplay);
    showString(beepBoopString);
  });
});
