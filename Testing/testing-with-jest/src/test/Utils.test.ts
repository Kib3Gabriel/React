import { getStringInfo, toUpper } from "../app/Utils"

// describe('Utils tests suite', () => {
//     //put your tests here
    
//     test('uppercase', () =>{
//         const result = toUpper('kibe')
//         expect(result).toBe('KIBE')
//     })
//     test('should return uppercase', () => {
//         const result = toUpper('abc')
//         //now go ahead an do assertions 
//         expect(result).toBe('ABC')
//     })
// })



describe('Utils tests suite', () => {
    it('should return uppercase', () => {
        //Arrange: set up any required variables or methods being tested
        const input = 'gabriEL'
        const expected = 'GABRIELz'
        const sut = toUpper

        //Act: execute the method or function being tested
        const result = toUpper(input)

        // assert
        expect(result).toBe(expected)
    })


    //more tests suits 
    //toBe is used for primitive values 
    it.only('should return info for valid strings', () => {
        const actual = getStringInfo('My-String')

        expect(actual.lowerCase).toBe('my-string')

        //toEqual 
        //an object is not a primitive, so toBe will fail
        //we need to use toEqual for objects
        // expect(actual.extraInfo).toBe({})
        expect(actual.extraInfo).toEqual({})

        expect("Hello, Jest!").toMatch("Jest");

        const fruits = ["apple", "banana", "orange"];
        expect(fruits).toContain("banana");
        // expect(fruits).toContain("mango");
        expect(fruits).toHaveLength(3);

        // Asserts that an object contains a specific property
        const user = { name: "Alamin", age: 25 };
        expect(user).toHaveProperty("name");
        expect(user).toHaveProperty("age", 25);

        // //test arrays
        // //we passed the exact sequence
        // expect(actual.characters).toEqual(["M", "y", "-", "S", "t", "r", "i", "n", "g"])
        // expect(actual.characters).toContain("M");

        // //what if the string chars are passed in different sequences
        // //Matches any array made up entirely of elements in the provided array. You can use it inside toEqual or toBeCalledWith instead of a literal value.
        // expect(actual.characters).toEqual(
        //     expect.arrayContaining(["S", "t", "r", "i", "n", "g", "M", "y", "-" ])
        // )

        // expect(actual.extraInfo).toBeTruthy()
    })


})
