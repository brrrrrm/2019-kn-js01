
console.log(    $(".box2").width()           );
console.log(    $(".box2").innerWidth()      );
console.log(    $(".box2").outerWidth()      );
console.log(    $(".box2").outerWidth(true)  );
console.log(    $(".box2").position().left  );

var gap = [];
$(".page").each(function(i){
  gap[i] = $(this).position().top;
});
console.log(gap);

$(".navs > li").click(function(){
  var n = $(this).data("page");
  $("html, body").stop().animate({"scrollTop": gap[n]+"px"}, 1000);
});
