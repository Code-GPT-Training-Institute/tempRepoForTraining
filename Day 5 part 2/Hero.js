class Person {
    firstName;
    lastName;
    gender;

    salary;

    constructor(nSalary) {
        this.salary = nSalary;
    }
}
export class Hero extends Person {
    title = "default title";
    power = 10;
    moves = [];

    firstName = "Default first name";

    static nickName = "Kingkong";

    static sayHello() {
        console.log("Hello...");
    }

    constructor(nTitle, nPower, nMovie, nSalary) {
        super(nSalary);
        this.title = nTitle;
        this.power = nPower;
        this.moves.push(nMovie);
    }
}
