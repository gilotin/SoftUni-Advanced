function validate() {
  let input = document.getElementById("email");
  let value = input.value;

  let pattern = /[a-z]+@[a-z]+.[a-z]+/gm;

  input.addEventListener("change", checkMail);

  function checkMail(event) {
    if (event.target.value.match(pattern)) {
      event.target.className = '';
      return;
    } else {
      event.target.className = "error";
    }
  }
}
