var inputNameElement = document.querySelector(".inputName");
var greetBtnElement = document.querySelector(".greetBtn");
var languageElement = document.querySelector(".language");
var resetElement = document.querySelector(".resetBtn");
var counterElement = document.querySelector(".counter");
var displayElement = document.querySelector(".display");
var errorMsgElement = document.querySelector(".errorMsg")
var storageMsgElement = document.querySelector(".storageMsg")


var counterLocal = [];

if (localStorage["name"]) {
    counterLocal = JSON.parse(localStorage.getItem("name"));
}

var nameInst = greetingName(counterLocal)

if (counterLocal) {
    counterElement.innerHTML = counterLocal.length;
}

function greet() {
    const alpha = /^([A-Za-z])+$/g;

    var checkedGreetBtn = document.querySelector("input[name='input']:checked");

    var input = inputNameElement.value

   
    if (input === "") {
        errorMsgElement.innerHTML = nameInst.emptyText(input)
        errorMsgElement.classList.add("warningColor")
        setTimeout(function () {
            errorMsgElement.innerHTML = "";
        }, 2000);
    } else if (checkedGreetBtn === null) {
        errorMsgElement.innerHTML = "Please select langugae"
        errorMsgElement.classList.add("warningColor")
        setTimeout(function () {
            errorMsgElement.innerHTML = "";
        }, 2000);
    } else if (!alpha.test(inputNameElement.value)) {
        errorMsgElement.innerHTML = nameInst.enterNumber(!alpha.test(inputNameElement.value))
        errorMsgElement.classList.add("warningColor")
        setTimeout(function() {
            errorMsgElement.innerHTML = ""
        }, 2000);

    }




    else if (checkedGreetBtn) {
        var check = checkedGreetBtn.value
        console.log(check,input)

        nameInst.NameStoring(input)
        displayElement.innerHTML = nameInst.nameLanguage(input, check);
        errorMsgElement.innerHTML = "You have been greated!!"
        errorMsgElement.classList.add("colorChange")
        setTimeout(function() {
            errorMsgElement.innerHTML = ""
        },2000);

        localStorage.setItem('name', JSON.stringify(nameInst.getStoredName()))

        counterElement.innerHTML = counterLocal.length

    }

        inputNameElement.value = "";
        


}

function refresh() {
     
        setTimeout(function() {
            localStorage.clear(),
            location.reload();
        },2000);

        setTimeout(function() {
            storageMsgElement.innerHTML = "Storage cleared successfully";
        },1000);

        displayElement.innerHTML = '';

    // counterElement.innerHTML = 0;
    
}

resetElement.addEventListener('click', refresh)
greetBtnElement.addEventListener('click', greet)

