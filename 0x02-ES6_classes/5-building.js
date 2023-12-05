class Building {
    constructor(sqft) {
        if (typeof sqft !== 'number') throw new Error();
        this._sqft = sqft;
        this.evacuationWarningMessage();
    }

    get sqft() {
        return this._sqft;
    }

    evacuationWarningMessage() {
        if (new.target === Building) throw new Error("Building is an abstract class and cannot be instantiated directly");
    }
}

export default Building;