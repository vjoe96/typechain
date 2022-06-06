type Words = {
    [key: string]: string;
};
class Dict {
    private words: Words;
    constructor() {
        this.words = {};
    }
    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(term: string) {
        return this.words[term];
    }
    remove(word: string) {
        if (this.words[word] !== undefined) {
            delete this.words[word];
        }
    }
    modify(word: Word) {
        this.words[word.term] = word.def;
    }
}
class Word {
    constructor(
        public readonly term: string,
        public readonly def: string
    ) { }

}
const kimchi = new Word("김치", "한국의 음식");
const dict = new Dict();
dict.add(kimchi);
console.log(dict.def("김치"))
dict.remove("김치");
console.log(dict.def("김치"))
