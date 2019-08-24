$(function () {
  var i = 0; //起始的位置，现在显示第几张图；
  var LIWIDTH =52; //要移动的距离，li的固定高度
  var DURATION = 500; //过渡时间
  var LICOUNT = 3; //li的数量
  function moveTo(to) {
    if (to == undefined) {
      to = i + 1;
    }
    if (i == 0) {
      $(".border_left>div").addClass("transition");
    };
    i = to;
    $(".border_left>div").css("margin-top",-i*LIWIDTH+"px");
    if (i == LICOUNT) {
      i = 0;
      setTimeout(function () {
        $(".border_left>div").removeClass("transition");
        $(".border_left>div").css("margin-top", "0");
      }, DURATION)
    }
  };
  var timer = setInterval(function () {
    moveTo()
  }, 3000);
  $(".border_left").mouseover(function () {
    clearInterval(timer);
  })
  $(".border_left").mouseout(function () {
    timer = setInterval(function () {
      moveTo()
    }, 3000);
  });
})