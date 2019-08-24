$(function () {
  var i = 0; //起始的位置，现在显示第几张图；
  var LIWIDTH = 270; //要移动的距离，li的固定宽度
  var DURATION = 500; //过渡时间
  var LICOUNT = 4; //li的数量
  var ulImgs = document.getElementById("ul-imgs"); //轮播图的ul
  var ulIdxs = document.getElementById("ul-idxs"); //小圆点的ul
  var lis = ulIdxs.children; //四个小圆点
  function moveTo(to) {
    if (to == undefined) {
      to = i + 1;
    }
    if (i == 0) {
      ulImgs.className = "transition"
    };
    i = to;
    ulImgs.style.marginLeft = -i * LIWIDTH + "px";
    for (var li of lis) {
      li.className = ""
    }
    if (i == LICOUNT) {
      i = 0;
      setTimeout(function () {
        ulImgs.className = "";
        ulImgs.style.marginLeft = 0;
      }, DURATION)
    }
    lis[i].className = "active";
  };
  var interval = 3000;
  var timer = setInterval(function () {
    moveTo()
  }, 3000);
  var banner = document.getElementById("banner");
  banner.onmouseover = function () {
    clearInterval(timer);
  }
  banner.onmouseout = function () {
    timer = setInterval(function () {
      moveTo()
    }, 3000);
  };
  var ulIdxs = document.getElementById("ul-idxs");
  var canClick = true;
  ulIdxs.onclick = function (e) {
    if (canClick) {
      var li = e.target;
      if (li.nodeName == "LI") {
        if (li.className !== "active") {
          for (var i = 0; i < lis.length; i++) {
            if (lis[i] == li) {
              break;
            }
          }
          moveTo(i);
          setTimeout(function () {
            canClick = true;
          }, DURATION);
        }
      }
    }
  }
})