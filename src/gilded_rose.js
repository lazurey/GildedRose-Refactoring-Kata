function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

function update_quality() {
  var QUALITY_FULL = 50;
  var AGED_BRIE = 'Aged Brie',
      BACKSTAGE = 'Backstage passes to a TAFKAL80ETC concert',
      SULFURAS = 'Sulfuras, Hand of Ragnaros';
  var whiteListArr = [AGED_BRIE, BACKSTAGE, SULFURAS];

  function _increase(q) { return (q < QUALITY_FULL) ? 1 : 0; }
  function _decrease(q) { return (q > 0) ? -1 : 0; }

  for (var i = 0; i < items.length; i++) {
    var name = items[i].name,
        quality = items[i].quality,
        sell_in = items[i].sell_in;

    quality += (whiteListArr.indexOf(name) === -1) ? _decrease(quality) : _increase(quality)

    sell_in -= (name !== SULFURAS) ? 1 : 0;

    if (sell_in < 0) {
      quality += (whiteListArr.indexOf(name) === -1) ? _decrease(quality) : 0;
      quality += (name === AGED_BRIE) ? _increase(quality) : 0;
      quality = (name === BACKSTAGE) ? 0 : quality;
    }

    items[i].quality = quality;
    items[i].sell_in = sell_in;

  }
}