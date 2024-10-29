function expect(actual: number) {
    return {
        toBe(expected: number) {
            if (actual !== expected) {
                throw new Error(`Expected ${actual} to be ${expected}`);
            }
        }
    };
}

function test(description: string, callback: () => Promise<void> | void) {
    Promise.resolve(callback())
        .then(() => console.log(`✅✅ ${description}`))
        .catch((error) => {
            console.error(`❌❌ ${description}`);
            console.error(error);
        });
}

// Using the test suite
import { sub, sum } from "./1";

test('subtraction of 3 and 2 should be 1', async () => {
    const result = await sub(3, 2);
    const expected = 1;
    expect(result).toBe(expected);
});

test('sum of 10 and 7 should be 17', async () => {
    const result = await sum(10, 7);
    const expected = 7;
    expect(result).toBe(expected);
});
