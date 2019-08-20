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
})