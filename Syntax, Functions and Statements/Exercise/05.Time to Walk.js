function timeToWalk(steps, stepRatio, speed) {
  let distance = steps * stepRatio;
  let speedInSec = speed / 3.6;
  let rests = Math.floor(distance / 500);
  let time = distance / speedInSec;

  let timeInHour = Math.floor(time / 3600);
  let timeInMin = Math.floor(time / 60);
  let timeInSec = Math.ceil(time - timeInMin * 60);
  timeInMin += rests;
  timeInMin = timeInMin % 60;
  if (timeInHour < 10) {
    timeInHour = `0${timeInHour}`;
  }
  if (timeInMin < 10) {
    timeInMin = `0${timeInMin}`;
  }
  if (timeInSec < 10) {
    timeInSec = `0${timeInSec}`;
  }

  console.log(`${timeInHour}:${timeInMin}:${timeInSec}`);
}
timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.70, 5.5)



// ver 2 

function timeToWalk(numOfSteps, footprint, velocity) {
    function setFormat(num) {
      return num < 10 ? "0" + num : num;e
    }
  
    let distance = numOfSteps * footprint;
    velocity /= 3.6;
    let allSeconds = distance / velocity + Math.floor(distance / 500) * 60;
    allSeconds = Math.round(allSeconds, 0);
  
    let time = new Date(0, 0, 0, 0, 0, allSeconds);
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
  
    console.log(`${setFormat(hours)}:${setFormat(minutes)}:${setFormat(seconds)}`);
  }
  