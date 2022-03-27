import {encode} from "../src/RomanNumeralsEncoder";

describe("For RomanNumeralsEncoder, ", () => {
    test("No error is thrown when encoded with number", () => {
        expect(() => encode(1)).not.toThrow();
    });

    test(`1 is encoded as "I"`, () => {
        expect(encode(1)).toBe("I");
    });

    test(`2 is encoded as "II"`, () => {
        expect(encode(2)).toBe("II")
    });

    test(`3 is encoded as "III"`, () => {
        expect(encode(3)).toBe("III");
    });

    test(`4 is encoded as "IV"`, () => {
        expect(encode(4)).toBe("IV");
    });

    test(`5 is encoded as "V"`, () => {
        expect(encode(5)).toBe("V");
    })

    test(`6 is encoded as "VI"`, () => {
        expect(encode(6)).toBe("VI");
    })



/*    it ("should handle small numbers", () => {
        Test.assertEquals(solution(5), 'V', '5 should, "V"')
        Test.assertEquals(solution(9), 'IX', '9 should, "IX"')
        Test.assertEquals(solution(10), 'X', '10 should, "X"')
        Test.assertEquals(solution(11), 'XI')
        Test.assertEquals(solution(15), 'XV')
        Test.assertEquals(solution(19), 'XIX')
        Test.assertEquals(solution(22), 'XXII')

    });
 */
});
