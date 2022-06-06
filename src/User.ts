interface User {
    firstName: string,
    lastName: string,
    nickname: string
    sayHi(name:string): string;
    fullName():string
}

interface Human{
    health:number
}

class Player implements User,Human {
    constructor(
        public firstName: string,
        public lastName: string,
        public nickname: string,
        public health:number,
        ){}
    sayHi(name: string): string {
        return `Hello ${name}. My name is ${this.fullName()}`
        
    }
    fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}
const nico = new Player("nico", "las", "니꼬",10);
