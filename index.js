class Breakfast {
  constructor(food, drink) {
    this.food = food
    this.drink = drink
  }
}

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad
    this.soup = soup
    this.drink = drink
  }
}

let firstLunch = new Lunch ("ceaser", "chicken", "water")

class Dinner {
  constructor(salad, soup, entree, dessert) {
    this.salad = salad
    this.soup = soup
    this.entree = entree
    this._dessert = dessert
  }
}