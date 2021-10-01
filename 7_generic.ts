const arrayNumbers: Array<number> = [1, 2, 3, 4, 5];
const arrayString: Array<string> = ['hello', 'my', 'word'];

function reverse<T>(array: T[]): T[] {
return array.reverse()
}

console.log(reverse(arrayNumbers));;
console.log(reverse(arrayString));;

const mixed = reverse([...arrayString, ...arrayNumbers]);
console.log(mixed);
