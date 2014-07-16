var triangle = {
  triangleType : function() {
    var sortedSides = [this.side1, this.side2, this.side3].sort(function(a, b) {
      return a - b;
    });

    this.shortSide = sortedSides[0];
    this.longSide = sortedSides[1];
    this.hypotenuse = sortedSides[2];

    if (this.shortSide === this.longSide && this.longSide === this.hypotenuse){
      return("equilateral");
    }else if (this.shortSide === this.longSide || this.longSide === this.hypotenuse || this.shortSide === this.hypotenuse){
      return("isosceles");
    }else if (this.shortSide !== this.longSide && this.shortSide !== this.hypotenuse ){
      return('scalene');
    }else {
      return("impossible");
    }
  }
};

$(document).ready(function(){
  $("form.user_input").submit(function(event){
     triangle.side1 = parseInt($("#side1").val());
     triangle.side2 = parseInt($("#side2").val());
     triangle.side3 = parseInt($("#side3").val());
     var output = triangle.triangleType();
     console.log(triangle.triangleType());
     console.log(output);
    if (output === 'equilateral'){
      $("#equilateral").append("<li>" + triangle.shortSide +', '+ triangle.longSide +', '+ triangle.hypotenuse  + "</li>");
    } else if (output === 'isosceles'){
        $("#isosceles").append("<li>"+ triangle.shortSide +', '+ triangle.longSide +', '+ triangle.hypotenuse  + "</li>");
    } else if (output === 'scalene'){
        $("#scalene").append("<li>"+ triangle.shortSide +', '+ triangle.longSide +', '+ triangle.hypotenuse  + "</li>");
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
