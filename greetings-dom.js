var inputNameElement = document.querySelector(".inputName");
var greetBtnElement = document.querySelector(".greetBtn");
var languageElement = document.querySelector(".language");
var resetElement = document.querySelector(".resetBtn");
var counterElement = document.querySelector(".counter");
var displayElement = document.querySelector(".display");


var counterLocal = [];

if (localStorage["name"]) {
    counterLocal = JSON.parse(localStorage.getItem("name"))
}

var nameInst = greetingName(counterLocal)

function greet() {
    var checkedGreetBtn = document.querySelector("input[name='input']:checked");

    if (checkedGreetBtn) {
        var check = checkedGreetBtn.value
        var input = inputNameElement.value
        console.log(check, input)
        nameInst.NameStoring(input)
        displayElement.innerHTML = nameInst.nameLanguage(input, check);
        counterElement.innerHTML = nameInst.lengthName()
        localStorage.setItem('name', JSON.stringify(nameInst.getStoredName()))

    }


}

function refresh() {
    localStorage.clear()
    location.reload()
    displayElement.innerHTML = '';
    counterElement.innerHTML = 0;

}

resetElement.addEventListener('click', refresh)
greetBtnElement.addEventListener('click', greet)

