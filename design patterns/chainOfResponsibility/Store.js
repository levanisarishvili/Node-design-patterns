const Storage = require('./Storage')

class Store {

    constructor(name, inventory=[]) {
        this.name = name;

        const floor = new Storage('store floor', inventory.floor);
        const backroom = new Storage('store backroom', inventory.backroom);
        const localStore = new Storage('store localStore', inventory.localStore);
        const warehouse = new Storage('store warehouse', inventory.warehouse);

        floor.setNext(backroom)
        backroom.setNext(localStore)
        localStore.setNext(warehouse)
        this.storage = floor
    }

    find(itemName) {
        return this.storage.find(itemName);
    }

}

module.exports = Store;
