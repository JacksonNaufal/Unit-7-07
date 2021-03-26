let numone = 0
let numtwo = 0
let numthree = 0
let answer = 0
let counter = 0
let negative = false
// These are the variables for each of my words, or numbers etc.

document.getElementById('button').addEventListener('click', button)
// This is my event listenr so the program knows what to use, and what to click

function button () {
  numone = document.getElementById('input').value
  numtwo = document.getElementById('input2').value
  numone = parseInt(numone)
  numtwo = parseInt(numtwo)
  numthree = parseInt(numthree)

  // These are my functions, so the input box knows what to use when numbers are inputted into it

  if (numone < 0) {
    negative = !negative * -1
    numone = Math.abs(numone)
  }
  if (numtwo < 0) {
    negative = !negative * -1
    numtwo = Math.abs(numtwo)
  }

  for (counter = 0; counter < numone; counter = counter + 1) {
    answer = answer + numtwo
  }
  if (negative) {
    answer = 0 - answer
  }
  document.getElementById('answer').innerHTML =
  answer
}

// Those are my ifs statements. which allows the counter to increace everytime we hit calculate, and it also allows the calculator to know if when there a - if the number is true or false, etc.
