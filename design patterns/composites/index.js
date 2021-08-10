var CatalogItem = require('./CatalogItem');
var CatalogGroup = require('./CatalogGroup');

var boots = new CatalogItem("Leather Boots", 79.99);
var sneakers = new CatalogItem("Kicks", 39.99);
var flipFlops = new CatalogItem("California work boots", 19.99);

const groupShoes = new CatalogGroup("Shoes and such", [boots, sneakers, flipFlops]);
const groupFood = new CatalogGroup("Food FOR WHILE YOU TRY ON CLOTHES", [
  new CatalogItem("Milkshake", 3.44),
  new CatalogItem("Marmalade", 34),
])


const keychain = new CatalogItem("keychain", .99)

const cat = new CatalogGroup("Clothes and fod", [keychain, groupShoes, groupFood])


cat.print()