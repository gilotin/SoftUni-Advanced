function validate() {
    let input = document.getElementById('email');

    input.addEventListener('change', onChange)


    function onChange(e){
       let email = e.target.value;
       let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

       if(pattern.test(email)){
        e.target.classList.remove('error');
       }else{
        e.target.classList.add('error');
       }
    }
}