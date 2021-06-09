function greetingName(storedName) {

    var NameGreet = storedName || [];

    function nameLanguage(name, language) {

        name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        if (!NameGreet.includes(name)) {
            // myCounter++
            NameGreet.push(name)
        }
        if (language === "french") {
            return 'Bonjour, ' + name
        }
        else if (language === "tshivenda") {
            return 'Ndaa, ' + name
        }
        else if (language === "spanish") {
            return 'Hola, ' + name
        } else if (NameGreet.includes(name)) {
            return "You have been greeted!";
        }
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

    function counterLocal() {
        return myCounter
    }

    function NameStoring(NameList) {
        if (!NameGreet.includes(NameList)) {
            // myCounter++
            NameGreet.push(NameList)
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