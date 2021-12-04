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
  if (restaurantName.menus.breakfast.includes(menuItem)) {
    
  } else if (restaurantName.menus.lunch.includes(menuItem)) {

  } else if (restaurantName.menus.dinner.includes(menuItem)) {

  } else {
    if (menuItem.type === "breakfast") {
      return restaurantName.menus.breakfast.push(menuItem);
    } else if (menuItem.type === "lunch") {
      return restaurantName.menus.lunch.push(menuItem);
    } else if (menuItem.type === "dinner") {
      return restaurantName.menus.dinner.push(menuItem);
    } else {

    }
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
