# Mr. Robogers

### By Cassandra Copp

## Description

This webapp asks the user for a number.  It then lists numbers from 0 to inputted number but it replaces all numbers containing 3 with "Won't you be my neighbor?", all numbers containing 2 but not 3 with "Boop!", and all numbers containing 1 but not 2 or 3 with "Beep!".

## Technologies Used

* HTML
* CSS
* Javscript
* JQuery

## Setup Instructions

[Click here to access live web page](https://cass1618.github.io/mr-robogers/)

To download project and run locally:
1. Clone the repository from GitHub
1. Open the mr.robogers folder
1. Open "index.html" using your web browser

## Known bugs

The application allows an additional number to be submitted before the first animation is finished, and both sequences display simultaneously.  However, the full array still displays properly when "Click here to view full list" is clicked.  So it does allow the user to use the application repeatedly.

## Licence

[MIT](https://opensource.org/licenses/MIT)

Copywrite (c) Cassandra Copp 2021.

## Contact Information

[github.com/cass1618](http://github.com/cass1618)

## TESTING

Describe: beepBoop()
Test: "It should return an array with 0 if the number 0 is inputted."
Code: beepBoop(0);
Expected Output: [0]

Test: "It should return an error message if a non-number string is entered."
Code: beepBoop(string);
Expected output: Alert "Please enter an integer greater than zero."

Test: "It should return an error message if a non-integer number is entered."
Code: beepBoop($);
Expected output: Alert "Please enter an integer greater than zero."

Test: "It should return an error message if a negative number is entered."
Code: beepBoop(-1);
Expected output: Alert "Please enter an integer greater than zero."

Test: "It should return an array with 0 and 'Beep' if the number 1 is inputted."
Code: beepBoop(1);
Expected Output: [0, 'Beep!'] 

Test: "It should return an array with 0, 'Beep', and 'Boop!' if the number 2 is inputted."
Code: beepBoop(2);
Expected Output: [0, 'Beep!', 'Boop!']

Test: "It should return an array with 0, 'Beep', 'Boop!', and "Won't you be my neighbor?" if the number 3 is inputted."
Code: beepBoop(3);
Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?"]

Test: "It should return an array with 0, 'Beep', 'Boop!', 'Won't you be my neighbor?', and 4 if the number 4 is inputted."
Code: beepBoop(4);
Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4]

Test: "It should return an array with 0, 'Beep', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, and 'Beep!' if the number 10 is inputted."
Code: beepBoop(10);
Expected Output: [0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4,  5,  6,  7,  8, 9, 'Beep!']

Test: "It should return an array with 0, 'Beep', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', and 'Boop!' if the number 12 is inputted."
Code: beepBoop(12);
Expected Output: [0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4,  5,  6,  7,  8, 9, 'Beep!', 'Beep!', 'Boop!']

Test: "It should return an array with 0, 'Beep', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', and 'Won't you be my neighbor?' if the number 13 is inputted."
Code: beepBoop(13);
Expected Output: [0, 'Beep!', 'Boop!',' Won't you be my neighbor?', '4','5','6','7','8','9', 'Beep!', 'Beep!', 'Boop!', 'Won't you be my neighbor?']

Test: "It should return an array with 0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', 'Won't you be my neighbor?', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Boop!', 'Boop!', 'Boop!', 'Won't you be my neighbor?', 'Boop!', 'Boop!', 'Boop!', 'Boop!', 'Boop!', 'Boop!', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 40, 'Beep!', and 'Boop!' if the number 42 is entered.
Code: beepBoop(42);
Expected Output: [0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', 'Won't you be my neighbor?', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Boop!', 'Boop!', 'Boop!', 'Won't you be my neighbor?', 'Boop!', 'Boop!', 'Boop!', 'Boop!', 'Boop!', 'Boop!', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 'Won't you be my neighbor?', 40, 'Beep!', 'Boop!']