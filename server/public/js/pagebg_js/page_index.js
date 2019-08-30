$(".par05>.par05_top_left").click(function(){
    var $topLeft=$(this);
    var change=$topLeft.children().last();
    var img=$topLeft.children().first();
    var $par05=$(".par05");
    if($par05.hasClass("par05_close")){
        $par05.removeClass("par05_close");
        change.html(`<span>收</span>
        <br>
        <span>起</span>`);
        img.attr("src","image/pagebg_img/pack_left.png")
    }else{
        $par05.addClass("par05_close");
        change.html(`<span>展</span>
        <br>
        <span>开</span>`);
        img.attr("src","image/pagebg_img/pack_right.png")
    }   
})