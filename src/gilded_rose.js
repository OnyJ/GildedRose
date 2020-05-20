class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {}
}

// class Shop2 {
// constructor(items = []) {
// this.items = items;
// }
//
// updateQuality() {
// this.items.forEach((item) => {});
// }
// }

class AgedBrie {
  constructor(item) {
    this.item = item;
  }
  // - si qualité < 50 alors qualité++
  // - si sellin < 11 changeQualité = 2
  // - si sellin < 6 changeQualité = 3
  // - si sellin === 0 qualité = 0
  // - si périmé, qualité diminue * 2

  increaseQuality(qualityChange) {
    if (this.item.quality < 50) this.item.quality += qualityChange;
  }

  defineQualityChange() {
    let qualityChange = 1;
    if (this.item.sellIn < 11) qualityChange = 2;
    if (this.item.sellIn < 6) qualityChange = 3;
    return qualityChange;
  }

  checkExpired() {
    if (this.item.sellIn === 0) this.quality = 0;
  }

  update() {
    const qualityChange = this.defineQualityChange();
    this.increaseQuality(qualityChange);
    this.checkExpired();
  }
}

class Backstage {
  constructor() {}

  update() {
    // - si qualité < 50 alors qualité++
    // - si sellin < 11 changeQualité = 2
    // - si sellin < 6 changeQualité = 3
    // - si sellin === 0 qualité = 0
    // - si périmé, qualité diminue * 2
  }
}

class Sulfuras {
  // - qualité = 80
}

class IsConjured {
  constructor() {}

  check() {
    // - si .name.includes("Conjured")
    // updateConjured =>
    // - si qualité > 0 qualité -= 2 * changeQualité
    // - si périmé, qualité diminue * 4
  }
}

class BasicProduct {
  constructor(item) {
    this.item = item;
  }
  // - si sellin > 0 alors --
  // - si qualité > 0 alors --
  // - si périmé, qualité diminue * 2

  updateSellIn(sellInChange) {
    if (this.item.sellIn > 0) this.item.sellIn -= sellInChange;
  }

  updateQuality(qualityChange) {
    if (this.item.quality > 0) this.item.quality -= qualityChange;
  }

  updateExpired() {
    if (this.item.sellIn === 0) this.updateQuality(2);
  }

  update() {
    this.updateSellIn(1);
    this.updateQuality(1);
    this.updateExpired();
    return this.item;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    // global :
    // - toutes qualités comprises entre 0 et 50

    for (var i = 0; i < this.items.length; i++) {
      if (
        this.items[i].name != "Aged Brie" &&
        this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
      ) {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (
            this.items[i].name == "Backstage passes to a TAFKAL80ETC concert"
          ) {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != "Aged Brie") {
          if (
            this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
          ) {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality =
              this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop,
  BasicProduct,
};
