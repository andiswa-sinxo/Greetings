describe("Greeting name", function () {
    it("Should return the language selected and the name entered in French", function () {
        let greetingLang = greetingName()

        assert.equal("Bonjour Thato",greetingLang.nameLanguage("Thato","French"));
        assert.equal("Bonjour Yolanda",greetingLang.nameLanguage("Yolanda","French"));
        assert.equal("Bonjour Anelisa",greetingLang.nameLanguage("Anelisa","French"));
        assert.equal("Bonjour Pinky",greetingLang.nameLanguage("Pinky","French"));
    });

    it("Should return the language selected and the name entered in Tshivenda", function () {
        let greetingLang = greetingName()

        assert.equal("Ndaa Andiswa",greetingLang.nameLanguage("Andiswa","Tshivenda"));
        assert.equal("Ndaa Likho",greetingLang.nameLanguage("Likho","Tshivenda"));
        assert.equal("Ndaa Linathi",greetingLang.nameLanguage("Linathi","Tshivenda"));
        assert.equal("Ndaa Swazi",greetingLang.nameLanguage("Swazi","Tshivenda"));
    });

    it("Should return the language selected and the name entered in Spanish", function () {
        let greetingLang = greetingName()

        assert.equal("Hola Raizu",greetingLang.nameLanguage("Raizu","Spanish"));
        assert.equal("Hola Lele",greetingLang.nameLanguage("Lele","Spanish"));
        assert.equal("Hola Ncebakazi",greetingLang.nameLanguage("Ncebakazi","Spanish"));
        assert.equal("Hola Okuhle",greetingLang.nameLanguage("Okuhle","Spanish"));
    });
  
describe("Uppercase and lowercase", function () {
    it("Should return name entered with first letter uppercase if the name is written in lowercase", function () {
        let greetingLang = greetingName()

        assert.equal("Hola Raizu",greetingLang.nameLanguage("raizu","Spanish"));
        assert.equal("Ndaa Tebogo",greetingLang.nameLanguage("tebogo","Tshivenda"));
        assert.equal("Bonjour Thato",greetingLang.nameLanguage("thato","French"));
        assert.equal("Hola Ndalo",greetingLang.nameLanguage("ndalo","Spanish"));
    });
    it("Should return name entered with first letter uppercase if the names are written with lowercase lettes", function () {
        let greetingLang = greetingName()

        assert.equal("Hola Raizu",greetingLang.nameLanguage("RAIZU","Spanish"));
        assert.equal("Ndaa Tebogo",greetingLang.nameLanguage("TEBOGO","Tshivenda"));
        assert.equal("Bonjour Thato",greetingLang.nameLanguage("THATO","French"));
        assert.equal("Hola Ndalo",greetingLang.nameLanguage("NDALO","Spanish"));
    });

describe("A counter", function () {
    it("Should return 2 if there two names greeted in two different languages", function () {
            let greetingLang = greetingName()

            greetingLang.nameLanguage("Thato","French")
            greetingLang.nameLanguage("Andiswa","Spanish")

            assert.equal(2 ,greetingLang.counterLocal());
            
        });
        it("Should return 4 if there four names greeted in two different languages", function () {
            let greetingLang = greetingName()

            greetingLang.nameLanguage("Thato","French")
            greetingLang.nameLanguage("Andiswa","Spanish")
            greetingLang.nameLanguage("Sinazo","Tshivenda")
            greetingLang.nameLanguage("Anda","Spanish")

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

        assert.equal("Please enter a name",greetingLang.enterNumber(19));
        
    });
});
});
});
