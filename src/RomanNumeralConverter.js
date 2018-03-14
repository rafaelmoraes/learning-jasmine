class RomanNumeralConverter {
    
    constructor(romanNumber) {
        const ROMANS = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M:1000
        };
        this.romans = ROMANS;
        this.romanNumber = romanNumber;
        this.result = 0;
    };
    
    toInteger() {
        if (this.result == 0) {
            this.result = this.romans[this.romanNumber[0]];
            let previous, 
                current, 
                size = this.romanNumber.length;

            for (var i = 1; i < size; i++) {
                previous = this.romans[this.romanNumber[i - 1]];
                current = this.romans[this.romanNumber[i]]; 
                if (current > previous) {
                    this.result = current - this.result;       
                } else {
                    this.result += current;
                }
            }
        }
        return this.result;
    };
}