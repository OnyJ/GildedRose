// import Item from "../Item";

// class FirstBasicProduct extends Item {
// constructor(item) {
// this.item = item;
// }
// updateSellIn(sellInChange) {
// if (this.item.sellIn > 0) this.item.sellIn -= sellInChange;
// }
//
// updateQuality(qualityChange) {
// if (this.item.quality > 0) this.item.quality -= qualityChange;
// }
//
// updateExpired() {
// if (this.item.sellIn === 0) this.updateQuality(2);
// }
//
// update() {
// this.updateSellIn(1);
// this.updateQuality(1);
// this.updateExpired();
// return this.item;
// }
// }

// var { Item } = require("../Item");

export default class BasicProduct {
  // class BasicProduct {
  constructor(item) {
    this.item = item;
  }

  update() {
    let updated = new UpdateBasicProduct(this.item);
    updated.update();
    return this.item;
  }
}

class UpdateBasicProduct extends BasicProduct {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    let updated = new UpdateBasicProductSellIn(this.item);
    updated.update(1);

    updated = new UpdateBasicProductQuality(this.item);
    updated.update(1);

    updated = new UpdateBasicProductExpired(this.item);
    updated.update(2);

    this.item = updated;
    return this.item;
  }
}

// SellIn

class UpdateBasicProductSellIn extends BasicProduct {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update(change) {
    if (this.item.sellIn > 0) this.item.sellIn -= change;
    return this.item;
  }
}

// Quality

class UpdateBasicProductQuality extends BasicProduct {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update(change) {
    if (this.item.quality > 0) this.item.quality -= change;

    return this.item;
  }
}

// Expired

class UpdateBasicProductExpired extends BasicProduct {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update(change) {
    if (this.item.sellIn === 0) this.updateQuality(change);

    return this.item;
  }
}
