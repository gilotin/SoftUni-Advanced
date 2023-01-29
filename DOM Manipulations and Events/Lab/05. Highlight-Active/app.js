function focused() {
    let inputs = document.getElementsByTagName('input');
    
   for( let input of inputs){
    input.addEventListener('focus', focusIput);
    input.addEventListener('blur', blurInput);
   }

   function focusIput(event){
    event.target.parentElement.classList.add('focused');
   }
   
   function blurInput(event){
    event.target.parentElement.classList.remove('focused');
   }
}