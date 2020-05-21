import Item from "../Item";

export default class IsConjured extends Item {
  constructor() {}

  check() {
    // - si .name.includes("Conjured")
    // updateConjured =>
    // - si qualité > 0 qualité -= 2 * changeQualité
    // - si périmé, qualité diminue * 4
  }
}
