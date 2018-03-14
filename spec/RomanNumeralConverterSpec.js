describe("Roman numeral converter to integer", ()=> {
    
    it("should convert 'I' to '1'", ()=> {
        c = new RomanNumeralConverter("I");

        expect(c.toInteger()).toEqual(1);
    });

    it("should convert 'II' to '2'", ()=> {
        c = new RomanNumeralConverter("II");

        expect(c.toInteger()).toEqual(2);
    });

    it("should convert 'III' to '3'", ()=> {
        c = new RomanNumeralConverter("III");

        expect(c.toInteger()).toEqual(3);
    });

    it("should convert 'IV' to '4'", ()=> {
        c = new RomanNumeralConverter("IV");

        expect(c.toInteger()).toEqual(4);
    });

    it("should convert 'V' to '5'", ()=> {
        c = new RomanNumeralConverter("V");

        expect(c.toInteger()).toEqual(5);
    });

    it("should convert 'VI' to '6'", ()=> {
        c = new RomanNumeralConverter("VI");

        expect(c.toInteger()).toEqual(6);
    });

    it("should convert 'VII' to '7'", ()=> {
        c = new RomanNumeralConverter("VII");

        expect(c.toInteger()).toEqual(7);
    });

    it("should convert 'VIII' to '8'", ()=> {
        c = new RomanNumeralConverter("VIII");

        expect(c.toInteger()).toEqual(8);
    });

    it("should convert 'IX' to '9'", ()=> {
        c = new RomanNumeralConverter("IX");

        expect(c.toInteger()).toEqual(9);
    });

    it("should convert 'X' to '10'", ()=> {
        c = new RomanNumeralConverter("X");

        expect(c.toInteger()).toEqual(10);
    });

    it("should convet 'MMDCLVIII' to '2658'", ()=> {
        c = new RomanNumeralConverter("MMDCLVIII");

        expect(c.toInteger()).toEqual(2658);
    });
})