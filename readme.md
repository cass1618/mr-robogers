Describe: beepBoop()
Test: "It should return an array with 0 if the number 0 is inputted."
Code: beepBoop(0);
Expected Output: [0]

Test: "It should return an array with 0 and 'Beep' if the number 1 is inputted."
Code: beepBoop(1);
Expected Output: [0, 'Beep!'] 

Test: "It should return an array with 0, 'Beep', and 'Boop!'  if the number 2 is inputted."
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
