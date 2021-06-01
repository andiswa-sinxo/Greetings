function greetingName(){
    var myCounter = 0

    function nameLanguage(name,language){
        // var inputName = name,language

     name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        if( language === "french"){
            myCounter++;
            return 'Bonjour ' + name
        }
        else if (language === "tshivenda"){
            myCounter++;
            return 'Ndaa ' + name
        }
        else if (language === "spanish"){
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
            return "Please enter a valid name"
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