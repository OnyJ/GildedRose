// export default class Item {

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {}
}

// or
// module.exports = { Item };

export default Item;
