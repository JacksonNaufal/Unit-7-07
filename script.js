document.getElementById('button').addEventListener('click', button)

let numone = 0
let numtwo = 0
let numthree = 0
let answer = 0
let counter = 0
let negative = false

function button () {
  numone = document.getElementById('input').value
  numtwo = document.getElementById('input2').value
  numone = parseInt(numone)
  numtwo = parseInt(numtwo)
  numthree = parseInt(numthree)

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
