// import Item from "../Item";
var { Item } = require("../Item");

// export default class Backstage extends Item {
class Backstage extends Item {
  constructor(item) {
    this.item = item;
  }
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

  decreaseSellIn() {
    this.item.sellIn--;
  }

  update() {
    const qualityChange = this.defineQualityChange();
    this.increaseQuality(qualityChange);
    this.decreaseSellIn();
    this.checkExpired();
    return this.item;
  }
}
