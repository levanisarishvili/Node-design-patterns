class Shopper {

    constructor(name) {
        this.name = name;
    }

    notify(storeName, discount) {
        console.log(`${this.name}, there is a sale at ${storeName}! ${discount}% off every sale`);
    }
}

module.exports = Shopper;
