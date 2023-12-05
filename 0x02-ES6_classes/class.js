class Human {
    constructor(intel, reason, token, agi_idx) {
        this.intel = intel;
        this.reason = reason;
        this.token = token;
        this.agi_idx = agi_idx;
    }
    speakAgi() {
        return 'I live';
    }
}

const agi_v1 = new Human(4, 'intermediate', '6k', 6);
console.log(agi_v1);
console.log(`This AGI is: ${agi_v1}`);
//  getter

// new new_agi() {
//     return this.agi_idx;
// }

// setter

// static classes can only be perofrmed on the clas not the instances of the class
console.log(Human.speakAgi);


class Asi extends Human {
    constructor(speak, analyze) {
        super(4, 'intermediate', '6k', 6)
        this.speak = speak
        this.analyze = analyze
    }
}

const semblance = new Asi()