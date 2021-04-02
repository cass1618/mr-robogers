// BUSINESS LOGIC
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

// UI LOGIC
$(document).ready(function() {
  $("#beep-boop").submit(function(event) {
    event.preventDefault();

    const userNumber = $("#number").val();
    $(".beep-boop").text(beepBoop(userNumber));

    $("ouput").show();
  });
});