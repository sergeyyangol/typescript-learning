const str: string = 'HELLO';

const isFetching: boolean = false;

const int: number = 42;

const numberArray: number[] = [1, 1, 2, 3, 5];
const numberArray2: Array<number> = [1, 1, 2, 3, 5]; // Generic type

const words: string[] = ['hello', 'typescript'];

// tuple
const contacts: [string, number] = ['Sergey', 80508800996];

// Any
let variable: any = 42;

variable = '42';

// =====================

function sayMyName(name: string): void { // nothing return
    console.log(name);
}

sayMyName('Heisenberg');

// Never
function throwError(message: string) {
    throw new Error(message);
}

// custom Type
type Login = string;

const login: Login = 'asaf';
// const login2: Login = 2; // error
