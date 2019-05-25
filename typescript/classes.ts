interface UserInterface {
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();
}

class User implements UserInterface {
    public name: string;
    public email: string;
    public age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User created ' + this.name);
    }

    public register() {
        console.log(this.name + ' is now registered')
    }

    public payInvoice() {
        console.log(this.name + ' paid invoice')
    }
}

let george = new User('George', 'geosimos@gmail.com', 27)

console.log(george.age)
console.log(george.register())

class Member extends User {
    public id: number;

    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age);
        this.id = id;
    }

    payInvoice() {
        super.payInvoice()
    }
}


let mike: User = new Member(1, 'mike', 'mike@gmail.com', 29);

console.log(mike.payInvoice())