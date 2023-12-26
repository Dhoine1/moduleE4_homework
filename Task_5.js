//Task 5

class Device{
    constructor(){
        this.state = false;
    }

    switch = function(){
        if (this.state === false) {
            this.state = true;
        } else {
            this.state = false;
        }
    }
}

class Freezer extends Device{
    constructor(name, power, color, state){
        super(state);
        this.name = name;
        this.power = power;
        this.type = 'freezer';
        this.color = color;
    }

    info(){
        console.log(`It is ${this.type}: ${this.name}. Color is ${this.color}. Power is ${this.power}. State is ${this.state}`)
    }
}

class Tv extends Device{
    constructor(name, power, diag, state){
        super(state);
        this.name = name;
        this.power = power;
        this.type = "tv";
        this.diag = diag;
    }

    info(){
    console.log(`It is ${this.type}: ${this.name}. Diagonal is ${this.diag}. Power is ${this.power}. State is ${this.state}`)
    }
}

const samsung = new Tv('Samsung UE85AU7100UXCE', 300, 85);
const indesit = new Freezer('Indesit ITR 4180 W', 100,'white');

function totalPower(...devices){
    let sum = 0;
    for (let item of devices){
        if (item.state) { sum += item.power; }
    }
    return sum;
}

samsung.switch();
indesit.switch();
samsung.info();
indesit.info();
console.log('Total power is ' + totalPower(samsung, indesit));