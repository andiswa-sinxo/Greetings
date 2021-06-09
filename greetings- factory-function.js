function greetingName(storedName) {

    var NameGreet = storedName || [];

    function nameLanguage(names, language) {

        var string = names.toLowerCase();
        var name = string.charAt(0).toUpperCase() + string.slice(1);

       
        if (language === "french") {
            return 'Bonjour, ' + name
        }
        if (language === "tshivenda") {
            return 'Ndaa, ' + name
        }
        if (language === "spanish") {
            return 'Hola, ' + name

        } 
        
        // else if (NameGreet.includes(name)) {
        //     return "You have been greeted!";
        // }
    }

    function emptyText(name) {
        if (name === "") {
            return "Please enter a name";
        }
    }

    function enterNumber(name) {
        if (name === Number(name)) {
            return "Please enter a valid name"
        }
    }

    // function counterLocal() {
    //     return myCounter
    // }

    function NameStoring(names) {

        var string = names.toLowerCase();
        var name = string.charAt(0).toUpperCase() + string.slice(1);


        if (!NameGreet.includes(name)) {
            // myCounter++
            NameGreet.push(name)
            return
        } else {
            return "You have been greeted!"
        }

    }

    function lengthName() {
        return NameGreet.length
    }

    function getStoredName() {
        return NameGreet
    }

    return {
        nameLanguage,
        emptyText,
        enterNumber,
        counterLocal,
        NameStoring,
        lengthName,
        getStoredName

    }
}