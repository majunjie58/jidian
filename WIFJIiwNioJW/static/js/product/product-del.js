$(document).ready(function () {
    $(window).on("scroll", function () {
        $(window).scrollTop() >= $("#header").height() ? $(".pro_del-title-bg").addClass("product-nav-fixed") : $(".pro_del-title-bg").removeClass("product-nav-fixed")
    });
});