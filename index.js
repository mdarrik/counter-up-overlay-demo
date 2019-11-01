import CounterUp from 'counterup2';
let counter = document.getElementById('counter');
const durationInMilliseconds = 1000
const countTotal = 10000

function startCounter() {
  counter.innerText = countTotal
  console.log(new Date())
 CounterUp(counter, {
  duration: durationInMilliseconds,
})
}

document.onload = startCounter()


