abstract class Builder {
    public abstract makeTitle(title: string): void;

    public abstract makeString(str: string): void;

    public abstract makeItems(items: string[]): void;

    public abstract close(): void;
}

class Director {
    private builder: Builder;

    constructor(builder: Builder) {
        this.builder = builder;
    }

    public construct(): void {
        this.builder.makeTitle('Greeting');
        this.builder.makeString('아침과 낮에');
        this.builder.makeItems(['좋은 아침입니다.', '안녕하세요.']);
        this.builder.makeString('밤에');
        this.builder.makeItems(['안녕하세요.', '안녕히 주무세요.', '안녕히 계세요.']);
        this.builder.close();
    }
}

class HTMLBuilder extends Builder {
    private filename: string = "untitled.html";
    private sb: string = "";


    makeItems(items: string[]): void {
        this.sb += "<ul>";
        for (let i = 0; i < items.length; i++) {
            this.sb += "<li>" + items[i] + "</li>";
        }
        this.sb += "</ul>";
    }

    makeString(str: string): void {
        this.sb += "<p>" + str + "</p>";
    }

    makeTitle(title: string): void {
        this.filename = title + ".html";
        this.sb += "<html><head><title>" + title + "</title></head><body>";
        this.sb += "<h1>" + title + "</h1>";
    }

    close(): void {
        this.sb += "</body></html>";
        console.log(this.sb);
    }

    getHTML(): string {
        return this.sb;
    }
}

class TextBuilder extends Builder {
    private sb: string = "";

    makeItems(items: string[]): void {
        for (let i = 0; i < items.length; i++) {
            this.sb += "  - " + items[i] + "\n";
        }
    }

    makeString(str: string): void {
        this.sb += "■" + str + "\n";
    }

    makeTitle(title: string): void {
        this.sb += "==============================\n";
        this.sb += "『" + title + "』\n";
        this.sb += "\n";
    }

    close(): void {
        this.sb += "==============================\n";
    }

    getResult(): string {
        return this.sb;
    }
}

const textBuilder = new TextBuilder();
const director = new Director(textBuilder);
director.construct();
const result = textBuilder.getResult();
console.log(result);

const htmlBuilder = new HTMLBuilder();
const director2 = new Director(htmlBuilder);
director2.construct();
const result2 = htmlBuilder.getHTML();
console.log(result2);
