function addRomanNumeralSeries(number, romanNumerals) {
    for (let i = 0; i < number; i++) {
        if(i > 2) { // Cannot have a series characters with more than 3 identical characters
            break;
        }
        romanNumerals.push("I");
    }
}

export function encode1(number) {
    const romanNumerals = [];
    if (number < 4) {
        addRomanNumeralSeries(number, romanNumerals);
    } else if (number === 4) {
        return "IV";
    } else if (number >= 5 && number < 9) {
        romanNumerals.push("V");
        addRomanNumeralSeries(number-5, romanNumerals);
    } else if (number === 9) {
        return "IX";
    } else if (number >= 10 && number < 14) {
        romanNumerals.push("X");
        addRomanNumeralSeries(number-10, romanNumerals);
    } else if (number === 14) {
        return "XIV";
    } else if (number >= 15 && number < 19) {
        romanNumerals.push("XV");
        addRomanNumeralSeries(number-15, romanNumerals);
    } else if (number === 19) {
        romanNumerals.push("XIX");
    } else if (number >= 20 && number < 24) {
        romanNumerals.push("XX");
        addRomanNumeralSeries(number-20, romanNumerals);
    }
    return romanNumerals.join("");
}

