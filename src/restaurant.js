function createRestaurant(restaurantName) {
  return {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
}

function addMenuItem(restaurantName, menuItem) {
  var list = restaurantName.menus[menuItem.type];
  if (list.includes(menuItem) === false) {
    restaurantName.menus[menuItem.type].push(menuItem);
  }
}

function removeMenuItem(restaurantName, menuItem, menuType) {
  var list = restaurantName.menus[menuType];
  for (var i = 0; i < list.length; i++) {
    if (list[i].name.includes(menuItem)) {
      restaurantName.menus[menuType].splice(i, 1);
      return `No one is eating our ${menuItem} - it has been removed from the ${menuType} menu!`;
    }
  }
  return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`;
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
