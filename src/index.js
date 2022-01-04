module.exports = function toReadable(number) {
    number = Number(number);
    if (number == 0) {
        return "zero";
    }
    let units = [
        0,
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let tens= [
        0,
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let secondTen = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let output = "";
    if (number > 99) {
        output =
            output + units[(number - (number % 100)) / 100] + " " + "hundred";
        if (number % 100 == 0) {
            return output;
        }
    }
    if (number % 100 < 20 && number % 100 > 9) {
        if (number > 100) {
            output = output + " ";
        }
        output = output + secondTen[number % 10];
        return output;
    }
    if (number % 100 < 10 && number % 100 > 0) {
        if (number > 100) {
            output = output + " ";
        }
        output = output + units[number % 10];
        return output;
    }
    if (number % 100 > 19) {
        if (number > 100) {
            output = output + " ";
        }
        output = output + tens[((number % 100) - (number % 10)) / 10];
        if (number % 10 != 0) {
            output = output + " " + units[number % 10];
        }
        return output;
    }
};