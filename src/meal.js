function nameMenuItem(name) {
  return `Delicious ${name}`;
}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  };
}

function addIngredients(ingredient, list) {
  if (list.includes(ingredient) === false) {
    return list.push(ingredient);
  }
}

function formatPrice(price) {
  return `$${price}`;
}

function decreasePrice(price) {
  return ((price/10) * 9).toFixed(2);
}

function createRecipe(title, ingredients, type) {
  return {
    title: title,
    ingredients: ingredients,
    type: type
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
