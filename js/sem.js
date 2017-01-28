
$(document).on('click', function(event){
    var $clickedOn = $(event.target),
        $collapsableItems = $('.collapse'),
        isToggleButton = ($clickedOn.closest('.navbar-toggle').length == 1),
        isLink = ($clickedOn.closest('a').length == 1),
        isOutsideNavbar = ($clickedOn.parents('.navbar').length == 0);

    if( (!isToggleButton && isLink) || isOutsideNavbar ) {
        $collapsableItems.each(function(){
            $(this).collapse('hide');
        });
    }
});

$(document).ready(function(){
    $(".table").hide();
});

/*function resize() {
    $("#section1").css({'height':($(window).height())+'px'});
    $("#section2").css({'height':($(window).height())+'px'});
    $("#section3").css({'height':($(window).height())+'px'});
    $("#section41").css({'height':($(window).height())+'px'});
    $("#section42").css({'height':($(window).height())+'px'});
}

$(document).ready(function() {
    resize();
    $(window).bind('resize', resize);
});*/

$(document).ready(function(){

    $("#l1 a").click(function(){
        $("#default_image").hide();
        $(".table").hide();
        $("#t1").show();
    });

    $("#l2 a").click(function(){
        $("#default_image").hide();
        $(".table").hide();
        $("#t2").show();
    });

    $("#l3 a").click(function(){
        $("#default_image").hide();
        $(".table").hide();
        $("#t3").show();
    });

    $("#l4 a").click(function(){
        $("#default_image").hide();
        $(".table").hide();
        $("#t4").show();
    });

    $("#l5 a").click(function(){
        $("#default_image").hide();
        $(".table").hide();
        $("#t5").show();
    });

    $("#l6 a").click(function(){
        $("#default_image").hide();
        $(".table").hide();
        $("#t6").show();
    });

    $("#l7 a").click(function(){
        $("#default_image").hide();
        $(".table").hide();
        $("#t7").show();
    });

    $("#l8 a").click(function(){
        $("#default_image").hide();
        $(".table").hide();
        $("#t8").show();
    });

});