$(function() {

    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".mobile-mnu").slideToggle();
        $(".welcome-section").toggleClass("welcome-section-mover");
        return false;
    });


    $(".adv-icon").equalHeights();
    $(".adv-desc").equalHeights();



});
