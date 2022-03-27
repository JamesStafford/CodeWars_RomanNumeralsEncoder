import {encode} from "../src/RomanNumeralsEncoder";

describe("For RomanNumeralsEncoder, ", () => {
    test("No error is thrown when encoded with number", () => {
        expect(() => encode(1)).not.toThrow();
    });

    test.each([
        [1, "I"],
        [2, "II"],
        [3, "III"],
        [4, "IV"],
        [5, "V"],
        [6, "VI"],
        [7, "VII"],
        [8, "VIII"],
        [9, "IX"],
        [10, "X"],
        [11, "XI"],
        [14, "XIV"],
        [15, "XV"],
        [16, "XVI"],
        [19, "XIX"],
        [20, "XX"],
        [21, "XXI"],
        [22, "XXII"]
    ])(`%i is encoded as "%s"`, (arabicNumber, romanNumeral) => {
        expect(encode(arabicNumber)).toBe(romanNumeral);
    });

/*    it ("should handle small numbers", () => {
        Test.assertEquals(solution(22), 'XXII')

    });
 */
});
