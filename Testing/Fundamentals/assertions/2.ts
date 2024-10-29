import { sub, sum } from "./1";

let result, expected

result = sum(5,5)
expected = 10


let resultSub = sub(5,2)
let expectSub = 3

expect(result).toBe(expected)
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