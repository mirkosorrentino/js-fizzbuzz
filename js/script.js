let containerElem = document.querySelector(".container")
let boxClass;
for (let i=1; i <= 100; i++) {

    if ((i%3 === 0) && (i%5 === 0)) {
        console.log("FizzBuzz");
        boxText = "FizzBuzz";
    } else if (i%3 === 0) {
        console.log("Fizz");
        boxText = "Fizz";
    } else if (i%5 === 0) {
        console.log("Buzz");
        boxText = "Buzz";
    } else {
        console.log(i);
        boxText = i;
    }

    containerElem.innerHTML += `<div class="box">${boxText}</div>`
}