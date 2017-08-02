
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

window.onload = function() {
    var x = $('.items:visible').prop('id');
    $(".content").css({"display": "none"});
    $(x).css({"display": "block"});
};

/*window.onbeforeunload = function() {
    return "Data will be lost if you leave the page, are you sure?";
};*/
/*
var flag=0;

$(document).ready(function(){

    $("#cse-btn-1").click(function(){
        flag=1;
        window.location.href = "sem.html";
    });
    $("#cse-btn-2").click(function(){
        flag=2;
        window.location.href = "sem.html";
    });
    $("#cse-btn-3").click(function(){
        flag=3;
        window.location.href = "sem.html";
    });
    $("#cse-btn-4").click(function(){
        flag=4;
        window.location.href = "sem.html";
    });
    $("#cse-btn-5").click(function(){
        flag=5;
        window.location.href = "sem.html";
    });
    $("#cse-btn-6").click(function(){
        flag=6;
        window.location.href = "sem.html";
    });
    $("#cse-btn-7").click(function(){
        flag=7;
        window.location.href = "sem.html";
    });
    $("#cse-btn-8").click(function(){
        flag=8;
        window.location.href = "sem.html";
    });

});
/*
$(document).ready(function () {
    if(flag==1)
    {
        $(".content").hide();
        $("#cse-sem-1").show();
    }
    else if(flag==2)
    {
        $(".content").hide();
        $("#cse-sem-2").show();
    }
    else if(flag==3)
    {
        $(".content").hide();
        $("#cse-sem-3").show();
    }
    else if(flag==4)
    {
        $(".content").hide();
        $("#cse-sem-4").show();
    }
    else if(flag==5)
    {
        $(".content").hide();
        $("#cse-sem-5").show();
    }
    else if(flag==6)
    {
        $(".content").hide();
        $("#cse-sem-6").show();
    }
    else if(flag==7)
    {
        $(".content").hide();
        $("#cse-sem-7").show();
    }
    else if(flag==8)
    {
        $(".content").hide();
        $("#cse-sem-8").show();
    }
});
*/
