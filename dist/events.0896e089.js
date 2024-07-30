(function($1) {
    $1.fn.timeline = function() {
        var selectors = {
            id: $1(this),
            item: $1(this).find(".timeline-item"),
            activeClass: "timeline-item--active",
            img: ".timeline__img"
        };
        selectors.item.eq(0).addClass(selectors.activeClass);
        selectors.id.css("background-image", "url(" + selectors.item.first().find(selectors.img).attr("src") + ")");
        var itemLength = selectors.item.length;
        $1(window).scroll(function() {
            var pos = $1(this).scrollTop();
            var windowHeight = $1(window).height();
            var windowMid = pos + windowHeight / 2;
            selectors.item.each(function(i) {
                var min = $1(this).offset().top;
                var max = $1(this).height() + $1(this).offset().top;
                if (windowMid >= min && windowMid <= max) {
                    selectors.id.css("background-image", "url(" + $1(this).find(selectors.img).attr("src") + ")");
                    selectors.item.removeClass(selectors.activeClass);
                    $1(this).addClass(selectors.activeClass);
                }
            });
        });
    };
})(jQuery);
$("#timeline-1").timeline();

//# sourceMappingURL=events.0896e089.js.map
