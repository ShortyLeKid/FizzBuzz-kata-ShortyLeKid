export class FizzBuzz {
    
    constructor() {
        this.fizzDivider = 3;
        this.fizz = "Fizz";
        this.buzzDivider = 5;
        this.buzz = "Buzz";
        this.fizzBuzzDivider = 15;
        this.fizzBuzz = "FizzBuzz";
    }
    
    convert(numberToConvert) {
        if (this.isMultipleOf(numberToConvert, this.fizzBuzzDivider)) {
            return this.fizzBuzz;
        }

        if (this.isMultipleOf(numberToConvert, this.fizzDivider)) {
            return this.fizz;
        } 
        
        if (this.isMultipleOf(numberToConvert, this.buzzDivider)) {
            return this.buzz;
        }

        return numberToConvert.toString();
    }
    
    isMultipleOf(number, divider) {
        return number % divider === 0;
    }
}