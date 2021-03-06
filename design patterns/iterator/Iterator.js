class Iterator {
  constructor(items = []) {
    this.index = 0;
    this.items = items;
  }

  first() {
    return this.items[0]
  }

  last() {
    return this.items[this.items.length - 1]
  }

  hasNext() {
    return this.index < this.items.length - 1
  }
  current() {
    return this.items[this.index]
  }

  prev() {
    if(this.index !== 0) {
      this.index -= 1
    }

    return this.current()
  }
  next() {
    if(this.hasNext()) {
      this.index += 1
    }

    return this.current()
  }
}

module.exports = Iterator