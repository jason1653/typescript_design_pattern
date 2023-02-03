export class Singleton {
    static instance: Singleton;

    /** getInstance */
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

const singleton = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

if (singleton === singleton2) {
    console.log(singleton);
    console.log(singleton2);
    console.log('싱글톤');
} else {
    console.log('싱글톤 아님');
}