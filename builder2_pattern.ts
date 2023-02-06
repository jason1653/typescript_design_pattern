class Car {
    private engine: string;

    private airbag: boolean;

    private color: string;

    private cameraSensor: boolean;

    private AEB: boolean;

    constructor(engine: string, airbag: boolean, color: string, cameraSensor: boolean, AEB: boolean) {
        this.engine = engine;
        this.airbag = airbag;
        this.color = color;
        this.cameraSensor = cameraSensor;
        this.AEB = AEB;
    }
}


class CarBuilder {
    private engine: string = '';

    private airbag: boolean = false

    private color: string = '';

    private cameraSensor: boolean = false;

    private AEB: boolean = false;

    public setEngine(engine: string): CarBuilder {
        this.engine = engine;
        return this;
    }

    public setAirbag(airbag: boolean): CarBuilder {
        this.airbag = airbag;
        return this;
    }

    public setColor(color: string): CarBuilder {
        this.color = color;
        return this;
    }

    public setCameraSensor(cameraSensor: boolean): CarBuilder {
        this.cameraSensor = cameraSensor;
        return this;
    }

    public setAEB(AEB: boolean): CarBuilder {
        this.AEB = AEB;
        return this;
    }

    public build(): Car {
        return new Car(this.engine, this.airbag, this.color, this.cameraSensor, this.AEB);
    }
}

const car1 = new Car('v8', true, 'red', true, true);

console.log(car1);

const builder = new CarBuilder()
    .setAEB(false)
    .setAirbag(true)
    .setCameraSensor(true)
    .setColor('blue')
    .setEngine('v6');

const random = Math.random();
const car2 = builder.setEngine("v1").build();

console.log(builder);
console.log(car2);