document.getElementById('button').addEventListener('click', button)

let numone = 0
let numtwo = 0
let numthree = 0
let answer = 0
let calculation = 0
let counter = 0

function button () {
  numone = document.getElementById('input').value
  numtwo = document.getElementById('input2').value
  numone = parseInt(numone)
  numtwo = parseInt(numtwo)
  numthree = parseInt(numthree)


  for (counter = 0; counter < numone; counter = counter + 1) {
    answer = answer + numtwo
    calculation = calculation - numtwo
 }
 document.getElementById('answer').innerHTML =
  answer
  document.getElementById('answertwo').innerHTML =
 calculation
 }
