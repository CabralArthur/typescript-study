class Vehicle {
    constructor(public color: string) {
        this.color = color;
    }

    drive(): void {
        console.log('chugga chugga');
    }

    honk(): void {
        console.log('beep');
    }

    stop(): void {
        console.log('stop');
    }

    start(): void {
        console.log('start');
    }

    turn(): void {
        console.log('turn');
    }

    park(): void {
        console.log('park');
    }

    reverse(): void {
        console.log('reverse');
    }

    accelerate(): void {
        console.log('accelerate');
    }

    brake(): void {
        console.log('brake');
    }

    shift(): void {
        console.log('shift');
    }

    steer(): void {
        console.log('steer');
    }

    navigate(): void {
        console.log('navigate');
    }

    fly(): void {
        console.log('fly');
    }

    land(): void {
        console.log('land');
    }

    takeOff(): void {
        console.log('takeOff');
    }
};

class Car extends Vehicle {
    constructor(public color: string) {
        super(color);
    }

    drive(): void {
        console.log('vroom');
    }
}

const corolla = new Car('#FFF');

corolla.drive();