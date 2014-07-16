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

$(document).ready(function(){
  $("form.user_input").submit(function(event){
     var side1 = parseInt($("#side1").val());
     var side2 = parseInt($("#side2").val());
     var side3 = parseInt($("#side3").val());
     var output = triangleTracker(side1, side2, side3);
    console.log(output[0]);
    if (output[0] === 'equilateral'){
      $("#equilateral").append("<li>" + output[1] + "</li>");
    } else if (output[0] === 'isosceles'){
        $("#isosceles").append("<li>" + output[1] + "</li>");
    } else if (output[0] === 'scalene'){
        $("#scalene").append("<li>" + output[1] + "</li>");
    } else {
        alert(output);
    }
    $("input#side1").val("");
    $("input#side2").val("");
    $("input#side3").val("");

    console.log(output);
    event.preventDefault();
  });
});
