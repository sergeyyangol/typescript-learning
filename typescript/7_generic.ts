const arrayOfNumber: Array<number> = [1, 1, 2, 3, 5, 8];
const arrayOfStrings: Array<string> = ['Hello', 'POC'];

function reverse<T>(array: T[]): T[] {
    return array.reverse();
}

reverse(arrayOfNumber);
reverse(arrayOfStrings);
