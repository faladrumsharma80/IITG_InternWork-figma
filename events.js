(function($) {
  $.fn.timeline = function() {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
    };
    selectors.item.eq(0).addClass(selectors.activeClass);

    var itemLength = selectors.item.length;
    $(window).scroll(function() {
      var pos = $(this).scrollTop();
      var windowHeight = $(window).height();
      var windowMid = pos + windowHeight / 2;

      selectors.item.each(function(i) {
        var min = $(this).offset().top;
        var max = $(this).height() + $(this).offset().top;
        
        if (windowMid >= min && windowMid <= max) {
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    });
  };
})(jQuery);

$("#timeline-1").timeline();
