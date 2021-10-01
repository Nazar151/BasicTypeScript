class Typescript {
    version: string
    constructor(version: string) {
    this.version = version
    }
    info(name: string){
        return `[${name}]: Typescript ${this.version}`
    }
}

class car {
    readonly model: string;                 /** readOnly - можна перезаписати тільки в конструкторі **/
    readonly numberOfWheels: number = 4
    constructor(theModel: string) {
        this.model = theModel
    }
}

class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {       /** короткій запис, одразу оприділяємо в конструкторі модель **/
    }
}

//---------------------------модифікатори-----------------------
class Animal {
    protected voice: string = '';/** protected-(захищений), мають доступ всі класси які наслідуються окрім інстанса - ʼconst catʼ - але можемо викликати його через ф-цію 'setVoice'**/
    public color: string = 'grey'      /** public - доступні для всіх класів і інстансів **/
    constructor() {
        this.go()
    }

    private go() {                    /** private тільки в середені класу в якому прописані **/
        console.log('go')
    }

}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}
const cat = new Cat();
cat.setVoice('go')
console.log(cat.color);
console.log(cat)

//------------------абстрактні класи---------------

abstract class Component {
    abstract render(): void;
    abstract info(): string;
}

class AppComponent extends Component {
    render(): void {
        console.log('component on render')
    }
    info(): string {
        return "this is info";
    }
}
















