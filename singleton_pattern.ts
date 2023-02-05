export class Singleton_pattern {
    static instance: Singleton_pattern;

    /** getInstance */
    public static getInstance(): Singleton_pattern {
        if (!Singleton_pattern.instance) {
            Singleton_pattern.instance = new Singleton_pattern();
        }
        return Singleton_pattern.instance;
    }
}

const singleton = Singleton_pattern.getInstance();
const singleton2 = Singleton_pattern.getInstance();

if (singleton === singleton2) {
    console.log(singleton);
    console.log(singleton2);
    console.log('싱글톤');
} else {
    console.log('싱글톤 아님');
}