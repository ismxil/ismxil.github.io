$(function() {
    $(".lazy").lazy({
        effect: "fadeIn",
        effectTime: 1e3,
        threshold: 1e3
    })
});
$(window).on("load", function() {
    $(".lazy-video").hide();
    $(window).scroll(function() {
        $(".lazy-video:not(.lazy-loaded)").each(function() {
            var rect = this.getBoundingClientRect();
            if (rect.top < window.innerHeight * 2) {
                $(this).attr("src", $(this).attr("data-src")).addClass("lazy-loaded").fadeIn(1e3)
            }
        })
    });
    $(window).scroll()
});
