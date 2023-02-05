interface OrderCommand {
    execute(): void;
}

class OrderAddCommand implements OrderCommand {
    private id : number;
    constructor(id: number) {
        this.id = id;
    }
    execute(): void {
        console.log(`order add Command : ${this.id}`);
    }
}

class OrderPayCommand implements OrderCommand {
    private id : number;
    constructor(id: number) {
        this.id = id;
    }

    execute(): void {
        console.log(`order pay Command : ${this.id}`);
    }
}

class CommandProcessor {
    private commands: OrderCommand[] = [];

    addToQueue(command: OrderCommand): CommandProcessor {
        this.commands.push(command);
        return this;
    }

    processCommmands(): CommandProcessor {
        this.commands.forEach(command => command.execute());
        this.commands = [];
        return this;
    }
}

const commands = new CommandProcessor();
commands
    .addToQueue(new OrderAddCommand(1))
    .addToQueue(new OrderAddCommand(2))
    .addToQueue(new OrderPayCommand(2))
    .addToQueue(new OrderPayCommand(2))
    .processCommmands();