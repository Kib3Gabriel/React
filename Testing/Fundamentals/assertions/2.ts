import { sub, sum } from "./1";

let resultSum, expectedSum

resultSum = sum(5,5)
expectedSum = 10


let resultSub = sub(5,2)
let expectSub = 2

expect(resultSum).toBe(expectedSum)
expect(resultSub).toBe(expectSub)

//lets do some abstraction 
//to create a simple assertion lib 
function expect(actual: number) {
    return {
        toBe(expected: number) {
            if(actual !== expected) {
                throw new Error(`Result is not equal to expected`)
            }else{
                console.log("👍😁")
            }
        }
    }
}