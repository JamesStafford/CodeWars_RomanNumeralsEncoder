export function encode1(number) {
    const romanNumerals = [];
    if (number < 4) {
        for(let i = 0; i < number; i++){
            romanNumerals.push("I");
        }
    } else if (number === 4) {
        return "IV";
    } else if (number === 5) {
        return "V";
    } else if (number > 5 && number < 10) {
        romanNumerals.push("V");
        for (let i = 0; i < (number-5); i++) {
            romanNumerals.push("I");
        }
    }
    return romanNumerals.join("");
}
