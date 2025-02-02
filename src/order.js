function takeOrder(order, orderTypeList) {
  if (orderTypeList.length < 3) {
    return orderTypeList.push(order)
  }
}

function refundOrder(orderNumber, orderTypeList) {
  for (var i = 0; i < orderTypeList.length; i++) {
    if (orderTypeList[i].orderNumber === orderNumber) {
      orderTypeList.splice(i, 1);
    }
  }
}

function listItems(orderTypeList) {
  var newList = [];
  for (var i = 0; i < orderTypeList.length; i++) {
    newList.push(orderTypeList[i].item);
  }
  return newList.join(", ");
}

function searchOrder(orderTypeList, item) {
  var allItems = [];
  for (var i = 0; i < orderTypeList.length; i++) {
    allItems.push(orderTypeList[i].item);
  }
  return allItems.includes(item);
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
