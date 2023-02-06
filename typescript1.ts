let str: string = "hello Typescript"
let isAct: boolean = false

let strArray: string[] = ['h', 'd', 's']
let numArray: Array<number> = [1, 3, 5, 8, 4]

// Functions

function logInfo(name: string, age: number): void {
    console.log('Info: ${name}, ${age}')
}

logInfo('Arthur', 25)

function calc(a: number, b: number | string) {
    if (typeof b === 'string') b = +b
    return a + b
}
 console.log(calc(2, 4))

 // Class ES6

 class Server {
    static VERSION = '1.0.3'

    private status: string = "working"

    constructor(public name: string, protected ip: number) {}

    public turnOn() {
        this.status = "working"
    }

    protected turnOff() {
        this.status = "offline"
    }

    public getStatus(): string {
        return this.status
    }
 }

 const server: Server = new Server("AWS", 1234)
 

 // Interfaces

 interface UserInterface {
    name: string
    age: 25
    logInfo: () => void
    id?: any
 }

 const user: UserInterface = {
    name: 'Vladilen', 
    age: 25,
    logInfo() {
        console.log(this.name + '' + this.age)
    }
 }

 // Interface and Classes

 interface SayHello {
    sayHello: () => void
 }

 class Human implements SayHello {
    constructor(private name: string, private age: number) {}
     sayHello () {
        console.log(this.name + 'Hello!')
     }
 }

 // Generics

 const arr: Array<any> = [1, 2, 3, 4]

 interface Users {
    id: number
    name: string
    age: number
 }

 const users1: Array<Users> = [
    {id: 1, name: "V", age: 2},
    {id: 2, name: "E", age: 23}
 ]

 const users2: Users[] = [
    {id: 1, name: "V", age: 2},
    {id: 2, name: "E", age: 23}
 ]