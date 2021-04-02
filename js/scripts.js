//INPUT: number
//OUPUT: array with elements equal to number+1
//for each element:
//If .includes(3) -> "Won't you be my neighbor?"
//Else if .includes(2) -> "Boop!"
//Else if .includes(1) -> "Beep!"
//Else -> number

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