/**
 * Created by ASHUTOSH on 28-Jan-17.
 */


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


// This way would also allow going to another pages anchors like so
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