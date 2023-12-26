// Task 4

function Device(){
    this.state = false;
    this.switch = function(){
        if (this.state === false) {
            this.state = true;
        } else {
            this.state = false;
        }
    }
}


function Freezer(name, power, color){
    this.name = name;
    this.power = power;
    this.type = 'freezer';
    this.color = color;
    this.info = function(){
        console.log(`It is ${this.type}: ${this.name}. Color is ${this.color}. Power is ${this.power}. State is ${this.state}`)
    }
}

function Tv(name, power, diag){
    this.name = name;
    this.power = power;
    this.type = "tv";
    this.diag = diag;
    this.info = function(){
        console.log(`It is ${this.type}: ${this.name}. Diagonal is ${this.diag}. Power is ${this.power}. State is ${this.state}`)
    }
}

Freezer.prototype = new Device();
Tv.prototype = new Device();

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
