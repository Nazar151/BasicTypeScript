interface Person {
    name: string;
    age: number;
}
type PersonKeys = keyof Person // 'name' | 'age'
const myName: PersonKeys = 'name'
let key: PersonKeys = 'name'
key = 'age'

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeyNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>  //'name' | 'email'
type UserKeyNoMeta2 = Pick<User, 'name' | 'email'> //'name' | 'email'


let u1: UserKeyNoMeta1= 'name'
console.log(u1);
