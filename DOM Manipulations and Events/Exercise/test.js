let value = 100;
outer();

function outer() {
  let outerValue = 200;

        function inner() {
            let innerValue = 150;
            console.log(outerValue);
        }
        inner()
}
