function expect(actual:number){
    return {
        toBe(expected:number){
           if(actual !== expected){
            throw new Error (`Expected ${actual} to be ${expected}`);
           }
        }
        // toEqual(expected:number){
        //     if(actual !== expected){
        //         throw new Error( `Expected ${actual} to be ${expected}`);
        //     }
        // }
    }
}

function test(description:string, callback:() => void){
    try {
        callback()
        console.log(`✅✅ ${description}`)
    } catch (error) {
        console.error(`❌❌ ${description}`)
        console.error(error)
    }
}


import {sub, sum} from './1';
test('sum of 3 and 7 should be 10', () => {
    const result = sum(3, 7);  
    const expected = 10;      
    expect(result).toBe(expected);
});

test('some of 5 and 5 should be 10', () =>{
    const result = sub(5,5)
    const expected = 8;
    expect(result).toBe(expected);
})

