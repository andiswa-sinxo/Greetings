function greetingName(){
    var myCounter = 0

    function nameLanguage(name,language){
     name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        if( language === "French"){
            myCounter++;
            return 'Bonjour ' + name
        }
        else if (language === "Tshivenda"){
            myCounter++;
            return 'Ndaa ' + name
        }
        else if (language === "Spanish"){
            myCounter++;
            return 'Hola ' + name
        }
    } 

    function emptyText(name){
        if(name === ""){
            return "Please enter a name"
        }
    }

    function enterNumber(name){
        if(name === Number(name)){
            return "Please enter a name"
        }
    }

    function counterLocal(){
        return myCounter
    }
    
    return {
        nameLanguage,
        emptyText,
        enterNumber,
        counterLocal
    }
}