function add (a: number, b: number): number {
return a + b
}

const sum = add(20, 30);
console.log(sum);

function toUpperCase(str: string): string {
    return str.trim().toUpperCase()       /** trim() - заберає пробіли, білі знаки**/
}

const myName = toUpperCase('    nazar volkov i illia volkov    ')
console.log(myName);

//----------------------------Перегрузка функцій--------------------------------------------
interface MyPosition {
    x: number | undefined,
    y: number | undefined
}

interface MyPositionWithDefault extends MyPosition{
    default: string
}

function position() : MyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
    if(!a &&  !b){
        return{ x: undefined, y: undefined}
    }
    if(a && !b){
        return {x: a, y: undefined, default: a.toString()}
    }
      return {x: a, y: b}
}

console.log('Empty: ', position())
console.log('one param: ', position(42))
console.log('two params: ', position(42, 56))
















