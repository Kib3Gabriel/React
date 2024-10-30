import { funcUpper, getStringInfo, StringUtils, toUpper } from "../app/Utils"

// AAA
describe('Utils tests suite', () => {
    // it('should return uppercase', () => {
    //     // Arrange: set up any required variables or methods being tested
    //     const input = 'gabriEL'
    //     const expected = 'GABRIEL'
    //     const sut = toUpper

    //     //Act: execute the method or function being tested
    //     const result = sut(input)

    //     // assert
    //     expect(result).toBe(expected)
    // })

    // //toBe is used for primitive values 
    // // it.only = only this suit will be executed
    // it.only('should return info for valid strings', () => {
    //     const actual = getStringInfo('My-String')

    //     expect(actual.lowerCase).toBe('my-string')

    //     //toEqual 
    //     //an object is not a primitive, so toBe will fail
    //     expect(actual.extraInfo).toEqual({})

    //     //check if an item is the string (value) provided
    //     expect("Hello, Jest!").toMatch("Hello");

    //     const fruits = ["apple", "banana", "orange"];
    //     expect(fruits).toContain("banana");
    //     // expect(fruits).toContain("mango");
    //     expect(fruits).toHaveLength(3);

    //     // Asserts that an object contains a specific property
    //     const user = { name: "Alamin", age: 25 };
    //     expect(user).toHaveProperty("name");
    //     expect(user).toHaveProperty("age", 25);
    // })


    // test suite with multiple structure
    describe('getStringInfo from args MY-String should', () => {
        it('return right length', () => {
            const actual = getStringInfo('My-String')
            expect(actual).toHaveLength(9);   //passes if the length is of provided string is 9
        })

        it('return lower  case', () => {
            const actual = getStringInfo('My-String')
            expect(actual.lowerCase).toBe('my-string')
        })
        it('return upper case', () => {
            const actual = getStringInfo('MY-String')
            expect(actual.UpperCase).toBe('MY-STRING')
        })
    })

})



//Parameterized tests
//Apply AAA
describe('UpperCase', () => {
    it.each([
        ['abc', 'ABC'],
        ['hello', 'HELLO'],
        ['deLuffy', 'DELUFFY']
    ])('Should return uppercase of the input string "%s"', (input: string, expected: string) => {
        // Arrange
        const sut = funcUpper
        // Action
        const result = sut(input)
        // Assert
        expect(result).toBe(expected)
    })

})




describe('thowing error', () => {
    let sut: StringUtils

    beforeEach(() => {
        sut = new StringUtils
    })

    //should throw an error for numeric input
    it('throws an error when input contains numbers', () => {
        expect(() => sut.toUpperCase('123')).toThrowError('Invalid argument: input must be a non-empty alphabetic string');
    });

    //throw an error for alphanumeric input
    it('throws an error when input contains alphanumeric characters', () => {
        expect(() => sut.toUpperCase('abc123')).toThrowError('Invalid argument: input must be a non-empty alphabetic string');
    });

    // Test case: should pass and return uppercase for valid alphabetic input
    it('returns uppercase for valid alphabetic input', () => {
        const result = sut.toUpperCase('hello');
        expect(result).toBe('HELLO');
    });
})
