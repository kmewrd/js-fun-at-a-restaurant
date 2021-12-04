class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
    this.greetCustomer = function(name, isMorning) {
      if (isMorning === true) {
        return `Good morning, ${name}!`;
      } else if (isMorning === undefined || isMorning === false) {
        return `Hello, ${name}!`;
      }
    }
    this.checkForFood = function(foodItem) {
      if (restaurant.menus[foodItem.type].includes(foodItem)) {
        return `Yes, we're serving ${foodItem.name} today!`;
      }
      return `Sorry, we aren't serving ${foodItem.name} today.`;
    }
  }
}

module.exports = Chef;
