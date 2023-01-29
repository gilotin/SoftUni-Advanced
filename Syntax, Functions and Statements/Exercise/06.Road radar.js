function roadRadar(currentSpeed, area) {
  let speedLimit = 0;
  let status;
  switch (area) {
    case "motorway":
      speedLimit = 130;
      break;
    case "interstate":
      speedLimit = 90;
      break;
    case "city":
      speedLimit = 50;
      break;
    case "residential":
      speedLimit = 20;
      break;
  }
  if (currentSpeed <= speedLimit) {
    console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`);
  } else {
    if (Math.abs(speedLimit - currentSpeed) <= 20) {
      status = "speeding";
    } else if (Math.abs(speedLimit - currentSpeed) <= 40) {
      status = "excessive speeding";
    } else {
      status = "reckless driving";
    }
    console.log(
      `The speed is ${Math.abs(
        currentSpeed - speedLimit
      )} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    );
  }
}
roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");
