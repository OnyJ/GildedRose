import Item from "../src/Item";
import BasicProduct from "../src/products/BasicProduct";
import AgedBrie from "../src/products/AgedBrie";
import BackStage from "../src/products/BackStage";
import Sulfuras from "../src/products/Sulfuras";

describe("GildedRose shop manager", function () {
  var listItems;

  beforeEach(function () {
    listItems = [];
  });

  it("Reduces by 1 Basic Items's quality and sellIn", function () {
    listItems.push(new Item("+5 Dexterity Vest", 10, 20));
    listItems.push(new Item("Mana Cake", 3, 6));

    var expectedV2 = [
      { sellIn: 9, quality: 19 },
      { sellIn: 2, quality: 5 },
    ];

    let myTestItems = [];
    listItems.forEach((item) => {
      const basicProduct = new BasicProduct(item);
      myTestItems.push(basicProduct.update());
    });

    expectedV2.forEach(function (testCase, idx) {
      expect(myTestItems[idx].quality).toBe(testCase.quality);
      expect(myTestItems[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  //
  // it("Augmenter la qualité de 1 pour Aged Brie et Backstage passes", function () {
  // listItems.push(new Item("Aged Brie", 20, 30));
  // listItems.push(
  // new Item("Backstage passes to a TAFKAL80ETC concert", 20, 30)
  // );
  //
  // var expected = [
  // { sellIn: 19, quality: 31 },
  // { sellIn: 19, quality: 31 },
  // ];
  //
  // let testItems = [];
  // listItems.forEach((item) => {
  // const aged = new AgedBrie(item);
  // testItems.push(aged.update());
  // });
  // expected.forEach(function (testCase, idx) {
  // expect(testItems[idx].quality).toBe(testCase.quality);
  // expect(testItems[idx].sellIn).toBe(testCase.sellIn);
  // });
  // });
});
