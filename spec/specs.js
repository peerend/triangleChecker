
describe ("triangleTracker", function(){
  it("Given two lengths whose sum is less than the third, will classify the triangle as impossible", function(){
  	triangleTracker(10,1,4).should.equal("impossible");
  });
  it("Given three lengths that are all equal, will classify the triangle as equilateral and return its lengths", function(){
    triangleTracker(3,3,3).should.eql(['equilateral', [3, 3, 3]]);
  });
    it("Given no lengths that are equal, will classify the triangle as scalene and return its lengths", function(){
    triangleTracker(3,5,4).should.eql(['scalene', [3, 4, 5]]);
  });
    it("Given two lengths that are equal, will classify the triangle as isosceles and return its lengths", function(){
    triangleTracker(3,4,4).should.eql(['isosceles', [3, 4, 4]]);
  });

});
