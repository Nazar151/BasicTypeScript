interface Rect {
    readonly id: string | number    /** readonly - модифікатор який визначає що тип тільки для читання ми не можемо його змінити **/
    color?: string                  /** ? - визначає що параметр не обов'язковий **/
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#cccc'
}

const rect2: Rect = {
    id: 1234,
    size: {
        width: 40,
        height: 30
    },
}

rect2.color = 'black'

const rect3 = {} as Rect   /** до бєкту rect3 просвоюється тип Rect  **/
const rect4 = <Rect>{}    /** стара версія **/

//----------------------------наслідування-------------------------------

interface RectWithArea extends Rect {
    getArea: () => number
}
const rect5: RectWithArea = {
    id: 12345,
    size: {
        width: 20,
        height: 30
    },
    getArea() : number {
        return this.size.width * this.size.height
    }
}
rect5.color = 'white'

//----------------------------імплементація-------------------------------

interface IClock {
    time: Date
    setTime(date: Date): void
}
class Clock implements IClock {
    time: Date = new Date();
    setTime(date: Date): void {
        this.time = date
    }
}

const clock = new Clock()
console.log(clock);

//----------------------------------------------------------------------
interface IStyles {
    [key: string]: string
}

const css: IStyles = {
    border: '1px solid black',
    marginTop: '10px',
    borderRadius: '5px'
}











