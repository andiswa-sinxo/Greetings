describe("Greeting name", function () {
    it("Should return the language selected and the name entered in French", function () {
        let greetingLang = greetingName()

        assert.equal("Bonjour Thato",greetingLang.nameLanguage("Thato","french"));
        assert.equal("Bonjour Yolanda",greetingLang.nameLanguage("Yolanda","french"));
        assert.equal("Bonjour Anelisa",greetingLang.nameLanguage("Anelisa","french"));
        assert.equal("Bonjour Pinky",greetingLang.nameLanguage("Pinky","french"));
    });

    it("Should return the language selected and the name entered in Tshivenda", function () {
        let greetingLang = greetingName()

        assert.equal("Ndaa Andiswa",greetingLang.nameLanguage("Andiswa","tshivenda"));
        assert.equal("Ndaa Likho",greetingLang.nameLanguage("Likho","tshivenda"));
        assert.equal("Ndaa Linathi",greetingLang.nameLanguage("Linathi","tshivenda"));
        assert.equal("Ndaa Swazi",greetingLang.nameLanguage("Swazi","tshivenda"));
    });

    it("Should return the language selected and the name entered in Spanish", function () {
        let greetingLang = greetingName()

        assert.equal("Hola Raizu",greetingLang.nameLanguage("Raizu","spanish"));
        assert.equal("Hola Lele",greetingLang.nameLanguage("Lele","spanish"));
        assert.equal("Hola Ncebakazi",greetingLang.nameLanguage("Ncebakazi","spanish"));
        assert.equal("Hola Okuhle",greetingLang.nameLanguage("Okuhle","spanish"));
    });
  
describe("Uppercase and lowercase", function () {
    it("Should return name entered with first letter uppercase if the name is written in lowercase", function () {
        let greetingLang = greetingName()

        assert.equal("Hola Raizu",greetingLang.nameLanguage("raizu","spanish"));
        assert.equal("Ndaa Tebogo",greetingLang.nameLanguage("tebogo","tshivenda"));
        assert.equal("Bonjour Thato",greetingLang.nameLanguage("thato","french"));
        assert.equal("Hola Ndalo",greetingLang.nameLanguage("ndalo","spanish"));
    });
    it("Should return name entered with first letter uppercase if the names are written with lowercase lettes", function () {
        let greetingLang = greetingName()

        assert.equal("Hola Raizu",greetingLang.nameLanguage("RAIZU","spanish"));
        assert.equal("Ndaa Tebogo",greetingLang.nameLanguage("TEBOGO","tshivenda"));
        assert.equal("Bonjour Thato",greetingLang.nameLanguage("THATO","french"));
        assert.equal("Hola Ndalo",greetingLang.nameLanguage("NDALO","spanish"));
    });

describe("A counter", function () {
    it("Should return 2 if there two names greeted in two different languages", function () {
            let greetingLang = greetingName()

            greetingLang.nameLanguage("Thato","french")
            greetingLang.nameLanguage("Andiswa","spanish")

            assert.equal(2 ,greetingLang.counterLocal());
            
        });
        it("Should return 4 if there four names greeted in two different languages", function () {
            let greetingLang = greetingName()

            greetingLang.nameLanguage("Thato","french")
            greetingLang.nameLanguage("Andiswa","spanish")
            greetingLang.nameLanguage("Sinazo","tshivenda")
            greetingLang.nameLanguage("Anda","spanish")

            assert.equal(4 ,greetingLang.counterLocal());
            
        });
});


describe("an emptyText", function () {
    it("Should return please enter a name , if there is no name entered", function () {
        let greetingLang = greetingName()

        assert.equal("Please enter a name",greetingLang.emptyText(""));
        
    });
});

describe("enterNumber", function () {
    it("Should return please enter a name , if there is a number entered", function () {
        let greetingLang = greetingName()

        assert.equal("Please enter a valid name",greetingLang.enterNumber(19));
        
    });
});
});
});
