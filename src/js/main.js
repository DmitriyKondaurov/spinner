//responsive height
$(document).ready(function() {
    // header dark background  on scroll
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $("#top_header").addClass("active");
            $("#sandwich").addClass("scroll");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $("#top_header").removeClass("active");
            $("#sandwich").removeClass("scroll");
        }
    });
    //sandwich icon
    $(".toggle_mnu").click(function() {
        $("#sandwich").toggleClass("active");
        // if($("#top_header").hasClass("active")) {
        //     $("#top_header").removeClass("active");
        // }
    });
    //fade out/in menu list
    $(".toggle_mnu").click(function () {
        if($("#sandwich").hasClass("active")) {
            $(".top_mnu").fadeIn(600);
            $(".top_mnu li a").removeClass("fadeOutUp animated");
            $(".top_mnu li a").addClass("fadeInUp animated");
        }
        else {
            $(".top_mnu").fadeOut(600);
            $(".top_mnu li a").addClass("fadeOutUp animated");
        }
    });
    //close menu on click
    $(".top_mnu li a").click(function () {
        $(".top_mnu").fadeOut(600);
        $("#sandwich").toggleClass("active");
    });
    //validator
    $("input, select, textarea").jqBootstrapValidation();
});
//preloader
$(window).on('load',function() {

    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});
