import {encode} from "../src/RomanNumeralsEncoder";

describe("For RomanNumeralsEncoder, ", () => {
    test("No error is thrown when encoded with number", () => {
        expect(() => encode(1)).not.toThrow();
    });

    test(`1 is encoded as "I"`, () => {
        expect(encode(1)).toBe("I");
    });

    test(`2 is encoded as "II`, () => {
        expect(encode(2)).toBe("II")
    })

/*    it ("should handle small numbers", () => {
        Test.assertEquals(solution(1), 'I', '1 should, "I"')
        Test.assertEquals(solution(2), 'II', '2 should, "II"')
        Test.assertEquals(solution(3), 'III', '3 should, "III"')
        Test.assertEquals(solution(4), 'IV', '4 should, "IV"')
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
