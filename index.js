import CounterUp from 'counterup2';
let counter = document.getElementById('counter');
const durationInMilliseconds = 10000

document.onload = CounterUp(counter, {
  duration: durationInMilliseconds
})


