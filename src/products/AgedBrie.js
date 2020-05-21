export default class AgedBrie {
  constructor(item) {
    this.item = item;
  }
  // constructor(name, sellIn, quality) {
  // super(name, sellIn, quality);
  // }

  update() {
    // let item = { name, sellIn, quality };
    let updated = new AgedBrieUpdate(this.item);
    updated.update();
    return this.item;
  }
}

// Global update

class AgedBrieUpdate extends AgedBrie {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    // let this.item = { name, sellIn, quality };
    let qualityChange = new AgedBrieDefineQualityChange(this.item);
    // console.log(">>>>>>>>>>>>>>>>>>>> quality");
    // console.log(qualityChange);
    qualityChange.update();

    let updated = new AgedBrieIncreaseQuality(this.item);
    updated.update(qualityChange);

    updated = new AgedBrieDecreaseSellIn(this.item);
    updated.update();
    console.log("updated");
    console.log(updated.item);

    updated = new AgedBrieCheckExpired(this.item);
    updated.update();

    this.item = updated;
    return this.item;
  }
}

// Increase quality

class AgedBrieIncreaseQuality extends AgedBrie {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update(qualityChange) {
    // let this.item = { name, sellIn, quality };
    if (this.item.quality < 50) this.item.quality += qualityChange;
    return this.item;
  }
}

class AgedBrieDefineQualityChange extends AgedBrie {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    let qualityChange = 1;
    // let this.item = { name, sellIn, quality };
    if (this.item.sellIn < 11) qualityChange = 2;
    if (this.item.sellIn < 6) qualityChange = 3;
    console.log(">>>>>>>>>>>>>>>>>>>> quality");
    console.log(qualityChange);
    return qualityChange;
  }
}

// Expired

class AgedBrieCheckExpired extends AgedBrie {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    // let this.item = { name, sellIn, quality };
    if (this.item.sellIn === 0) quality = 0;
    return this.item;
  }
}

// Decrease sellIn

class AgedBrieDecreaseSellIn extends AgedBrie {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    // let this.item = { name, sellIn, quality };
    this.item.sellIn--;
    return this.item;
  }
}
