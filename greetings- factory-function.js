function greetingName(storedName) {

    const alpha = /^([A-Za-z])+$/g;;

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
        
    }

    function emptyText(name) {
        if (name === "") {
            return "Please enter a name.";
        }
    }

    function enterNumber(name) {
        
            return "Please enter a valid name.";
    }

    

    function NameStoring(names) {

        var string = names.toLowerCase();
        var name = string.charAt(0).toUpperCase() + string.slice(1);


        if (!NameGreet.includes(name)) {
            NameGreet.push(name)
            return
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
        NameStoring,
        lengthName,
        getStoredName

    }
}