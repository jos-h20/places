describe('places', function() {
  it("creates a new place with the given properties", function() {
    var testPlace = new place("Portland", "St John's bridge", "January");
    expect(testPlace.area).to.equal("Portland");
    expect(testPlace.landmark).to.equal("St John's bridge");
    expect(testPlace.date).to.equal("January");
  });


});
