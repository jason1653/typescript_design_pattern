
abstract class Product {
    abstract use(): void;
}
abstract class Factory {
    public create(owner: string): Product {
        const p = this.createProduct(owner);
        this.registerProduct(p);
        return p;

    }

    protected abstract createProduct(owner: string): Product;

    protected abstract registerProduct(p: Product): void;
}


class IDCard extends Product {
    private readonly owner: string;

    constructor(owner: string) {
        super();
        console.log(`${owner}의 카드를 만듭니다`);
        this.owner = owner;
    }

    use() {
        console.log(`${this.owner}의 카드를 사용합니다`);
    }

    getOwner() {
        return this.owner;
    }
}


class IDCardFactory extends Factory {
    private owner: string | undefined;
    protected createProduct(owner: string): Product {
        return new IDCard(owner);
    }

    protected registerProduct(p: Product): void {

        console.log(`등록했습니다`);
    }

}

const factory = new IDCardFactory();
const card1 = factory.create('테스트1');
const card2 = factory.create('테스트2');
const card3 = factory.create('테스트3');

card1.use();
card2.use();
card3.use();