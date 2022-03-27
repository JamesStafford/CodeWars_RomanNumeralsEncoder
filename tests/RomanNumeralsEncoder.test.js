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

    test(`7 is encoded as "VII"`, () => {
        expect(encode(7)).toBe("VII");
    })

    test(`8 is encoded as "VIII"`, () => {
        expect(encode(8)).toBe("VIII");
    })

    test(`9 is encoded as "IX"`, () => {
        expect(encode(9)).toBe("IX");
    })

    test(`10 is encoded as "X"`, () => {
        expect(encode(10)).toBe("X");
    })

    test(`11 is encoded as "XI"`, () => {
        expect(encode(11)).toBe("XI");
    });

    test(`14 is encoded as "XIV"`, () => {
        expect(encode(14)).toBe("XIV");
    });

    test(`14 is encoded as "XIV"`, () => {
        expect(encode(14)).toBe("XIV");
    });

    test(`15 is encoded as "XV"`, () => {
        expect(encode(15)).toBe("XV");
    });

    test(`16 is encoded as "XVI"`, () => {
        expect(encode(16)).toBe("XVI");
    });

    test(`19 is encoded as "XIX"`, () => {
        expect(encode(19)).toBe("XIX");
    });

/*    it ("should handle small numbers", () => {
        Test.assertEquals(solution(22), 'XXII')

    });
 */
});
