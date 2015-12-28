describe("Gilded Rose", function() {

    it("should 1", function() {
    var name = "+5 Dexterity Vest";
    items = [ new Item(name, 10, 20) ];
    update_quality();
    expect(items[0].name).toEqual(name);
    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(19);
  });

  it("should 2", function() {
    var name = "Aged Brie";
    items = [ new Item(name, 2, 0) ];
    update_quality();
    expect(items[0].name).toEqual(name);
    expect(items[0].sell_in).toEqual(1);
    expect(items[0].quality).toEqual(1);
  });

  it("should 3", function() {
    var name = "Elixir of the Mongoose";
    items = [ new Item(name, 5, 7) ];
    update_quality();
    expect(items[0].name).toEqual(name);
    expect(items[0].sell_in).toEqual(4);
    expect(items[0].quality).toEqual(6);
  });

  it("should 4", function() {
    var name = "Backstage passes to a TAFKAL80ETC concert";
    items = [ new Item(name, 15, 20) ];
    update_quality();
    expect(items[0].name).toEqual(name);
    expect(items[0].sell_in).toEqual(14);
    expect(items[0].quality).toEqual(21);
  });

  it("should 5", function() {
    var name = "Backstage passes to a TAFKAL80ETC concert";
    items = [ new Item(name, 10, 49) ];
    update_quality();
    expect(items[0].name).toEqual(name);
    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(50);
  });

  it("should 6", function() {
    var name = "Backstage passes to a TAFKAL80ETC concert";
    items = [ new Item(name, 5, 49) ];
    update_quality();
    expect(items[0].name).toEqual(name);
    expect(items[0].sell_in).toEqual(4);
    expect(items[0].quality).toEqual(50);
  });

  it("should 7", function() {
    var name = "Sulfuras, Hand of Ragnaros";
    items = [ new Item(name, 0, 80) ];
    update_quality();
    expect(items[0].name).toEqual(name);
    expect(items[0].sell_in).toEqual(0);
    expect(items[0].quality).toEqual(80);
  });

  it("should 8", function() {
    var name = "Sulfuras, Hand of Ragnaros";
    items = [ new Item(name, -1, 80) ];
    update_quality();
    expect(items[0].name).toEqual(name);
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(80);
  });
  
});
