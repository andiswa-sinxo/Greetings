var inputNameElement = document.querySelector(".inputName");
var greetBtnElement = document.querySelector(".greetBtn");
var languageElement = document.querySelector(".language");
var resetElement = document.querySelector(".reset");
var counterElement = document.querySelector(".counter");
var displayElement = document.querySelector(".display");

var nameInst = greetingName()

function greet() {
    var checkedGreetBtn = document.querySelector("input[name='input']:checked");

    if (checkedGreetBtn) {
        var check = checkedGreetBtn.value
        var input = inputNameElement.value
        console.log(check, input)

        // alert(checkedGreetBtn.value, inputNameElement.value)
        displayElement.innerHTML = nameInst.nameLanguage(input, check);
        counterElement.innerHTML = nameInst.counterLocal()

    }
    // displayElement.innerHTML = "uytguyrtytrftyrftrdftdt"


}

greetBtnElement.addEventListener('click', greet)

