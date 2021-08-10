class Storage {
  constructor(name, inventory = [], deliveryTime = 0) {
    this.name = name;
    this.inventory = inventory;
    this.deliveryTime = deliveryTime;
    this.next = null;
  }

  lookInLocalInventory(itemName) {
    const idx = this.inventory.map(i => i.name).indexOf(itemName);
    return this.inventory[idx]
  }

  setNext(value) {
    this.next = value;
  }

  find(name) {
    const found = this.lookInLocalInventory(name)
    if(found) {
      return {
        name: found.name,
        qty: found.qty,
        location: this.name,
        deliveryTime: (this.deliveryTime === 0) ? 'now' : `${this.deliveryTime} day(s)` 
      };
    } else if(this.next) {
      return this.next.find(name);
    } else {
      return `We dont carry ${name}`
    }
  }
}

module.exports = Storage