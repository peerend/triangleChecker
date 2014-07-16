function triangleTracker(side1, side2, side3){

  var sortedSides = [side1, side2, side3].sort(function(a, b) {
    return a - b;
  });
  var shortSide = sortedSides[0];
  var longSide = sortedSides[1];
  var hypotenuse = sortedSides[2];

  if (shortSide + longSide < hypotenuse)
    return("impossible");

  var triangle = {
  shortSide : shortSide,
  longSide : longSide,
  hypotenuse : hypotenuse,
  triangleType : function() {
    if (this.shortSide === this.longSide && this.longSide === this.hypotenuse){
      return("equilateral");
    }else if (this.shortSide === this.longSide || this.longSide === this.hypotenuse || this.shortSide === this.hypotenuse){
      return("isosceles");
    }else{
      return('scalene');
    }
  }
  }

  return [triangle.triangleType(), [triangle.shortSide, triangle.longSide, triangle.hypotenuse]];
};
//   else if (shortSide === longSide && longSide === hypotenuse){
//     triangle = {"equilateral": sortedSides};
//     console.log(triangle);
//     return(triangle);
//   }else if (shortSide === longSide){
//     triangle = {"isosceles": sortedSides};
//     return(triangle);
//   }else
//     triangle = {"scalene": sortedSides};
//     return(triangle);
// };

$(document).ready(function(){
  $("form.user_input").submit(function(event){
     var side1 = parseInt($("#side1").val());
     var side2 = parseInt($("#side2").val());
     var side3 = parseInt($("#side3").val());
     var output = triangleTracker(side1, side2, side3);

    if (output === "scalene")
        $("#grammar").text("a")
    else
        $("#grammar").text("an")

    $("#classification").text(output);
    $("#result").show();
    event.preventDefault();
  });
});
