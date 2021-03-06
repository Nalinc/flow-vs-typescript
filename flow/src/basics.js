/* @flow */

let obj: string;
obj = 'yo';
// Error: Type 'number' is not assignable to type 'string'.
// obj = 10;

// return type can be inferred
function sayIt(what: string) {
    return `Saying: ${what}`;
}
const said: string = sayIt(obj);

// https://flowtype.org/docs/classes.html
// field declarations and methods need to be annotated when exported
export class Sayer {
    what: string;

    constructor(what: string) {
        this.what = what;
    }

    // return type if you want to
    sayIt(): string {
        return `Saying: ${this.what}`;
    }
}

// flow does not mind
/**
 * @type {number}
 */
let a = 10;
a = 'Dog';
