function notify(message) {
  let divContent = document.getElementById("notification");

  divContent.textContent = message;

  divContent.style.display = "block";

  divContent.addEventListener("click", toggleDisplStyle);

  function toggleDisplStyle(e) {
  
    e.target.style.display = "none";
  }
}
