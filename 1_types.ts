const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 24;
const float: number = 4.3;
const num: number = 3e10;

const str: string = 'hello typescript';

const numberArray: number[] = [1,23, 5, 7];
const numberArray1: Array<number> = [1,23, 5, 7]; /**jeneric**/

const stringArray: string[] = ['hello', 'Nazar']

const concat: [string, number] = [ 'hello', 123] /** Tuple **/

let variable: any = 42;
variable = 'new string';
variable = [];


function sayMyName(name: string): void {  /** void - the function returns nothing **/
    console.log(name)
}
sayMyName('nazar');


function throwError(message: string) : never{
        throw new Error(message)
}
throwError('this error is true')

type Login = string;
const login: Login = 'admin'  /** create type **/



type Id = string | number;  /** at compilation typing disappears **/
const id: Id = '123';
const id1: Id = 123;


type someType = string | null | undefined