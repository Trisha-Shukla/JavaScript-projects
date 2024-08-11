let startTime=0;
let elapsedTime=0;
let timerInterval;

startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    // timerEl.textContent = formatTime(elapsedTime);
    console.log(Math.floor((elapsedTime % (1000 * 60)) / 1000));
  }, 10);

//   clearInterval(timerInterval)
  
  