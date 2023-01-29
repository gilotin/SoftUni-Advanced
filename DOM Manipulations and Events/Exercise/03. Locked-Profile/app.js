function lockedProfile() {
  let buttons = Array.from(document.getElementsByTagName("button"));

  for (let button of buttons) {
    button.addEventListener("click", showInfo);
  }

  function showInfo(e) {
    let button = e.target;
    let profile = button.parentNode;
    let hiddenInfo = profile.querySelector("div");
    let lockStatus = profile.querySelectorAll("input")[0].checked;
    if (lockStatus === false) {
      switch (button.textContent) {
        case "Show more":
          hiddenInfo.style.display = "block";
          button.textContent = "Hide it";
          break;
        case "Hide it":
          hiddenInfo.style.display = "none";
          button.textContent = "Show more";
          break;
      }
    }
  }
}
