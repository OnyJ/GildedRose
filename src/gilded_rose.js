class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    // global :
    // - toutes qualités comprises entre 0 et 50

    // updateAgedBrie =>
    // - si qualité < 50 alors qualité++
    // - si sellin < 11 changeQualité = 2
    // - si sellin < 6 changeQualité = 3
    // - si sellin === 0 qualité = 0
    // - si périmé, qualité diminue * 2

    // updateBackStage =>
    // - si qualité < 50 alors qualité++
    // - si sellin < 11 changeQualité = 2
    // - si sellin < 6 changeQualité = 3
    // - si sellin === 0 qualité = 0
    // - si périmé, qualité diminue * 2

    // updateSulfuras =>
    // - si qualité < 50 alors qualité++

    // checkConjured =>
    // - si .name.includes("Conjured")
    // updateConjured =>
    // - si qualité > 0 qualité -= 2 * changeQualité

    // updateBasicProduct =>
    // - si sellin > 0 alors --
    // - si qualité > 0 alors --

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
};
