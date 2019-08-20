$(function(){
  $(window).on("scroll", function() {
    if ($(this).scrollTop() >= 52) {
      $(".nav_bg").addClass("nav_fixed");
      $(".qr_op").css("opacity", "1");
      $(".align-content-start>li>a").addClass("nav_fcolor");
      $(".align-content-start>li>span").addClass("wg_span2");
    } else {
      $(".nav_bg").removeClass("nav_fixed");
      $(".qr_op").css("opacity", "0");
      $(".align-content-start>li>a").removeClass("nav_fcolor");
      $(".align-content-start>li>span").removeClass("wg_span2");
    }
  });
  $(".ul2>li:nth-child(9)").hover(function(){
    $(".nav_bg").addClass("gf_bg");
    $(".gf_nav").addClass("gf_enter");
  },function(){
    $(".nav_bg").removeClass("gf_bg");
    $(".gf_nav").removeClass("gf_enter");
  });
  $(".gf_nav").hover(function(){
    $(".nav_bg").addClass("gf_bg");
    $(".gf_nav").addClass("gf_enter");
  },function(){
    $(".nav_bg").removeClass("gf_bg");
    $(".gf_nav").removeClass("gf_enter");
  });
  $.ajax({
      url:"http://localhost:8080/news",
      type:"get",
      dataType:"json",
      success:function(result){
        var html = "";
        for (var nw of result) {
          html += `<div class="new_big">
          <div class=" new_margin position-relative">
            <a class="d-inline-block px-3 py-1 h5 new position-absolute mt-5 text-dark" href="javascript:;">新闻</a>
            <div class="d-inline-block new_right  mt-5">
              <h4><a class="text-dark" href="javascript:;">${nw.newtime} ${nw.ntitle}</a></h4>
              <p><a class="text-secondary" href="javascript:;">${nw.ncontent}</a></p>
            </div>
          </div>
        </div>`
        }
        $("#new_content").html(html);
      }
    });
})