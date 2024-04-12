// expand accordion
$.fn.expand = function () {
    // finds the height of the wrapped content to get full height
    const expandedHeight = $(this).find(".faq-text").innerHeight();

    // expand to the height of wrapped content
    $(this)
        .find(".faq-body")
        .css({
            height: `${expandedHeight}px`,
        });

    // add expanded class
    $(this).addClass("expanded");
};

// collapse accordion
$.fn.collapse = function () {
    $(this).find(".faq-body").css({
        height: "0px",
    });
    // remove expanded class
    $(this).removeClass("expanded");
};

// on window load
$(() => {
    // on-click handler
    $(".faq").on("click", function (e) {
        // check if the item is already expanded
        const expanded = $(this).hasClass("expanded");

        if (expanded) {
            // collapse the item
            $(this).collapse();
        } else {
            // collapse any other opened faq
            $(this).siblings(".expanded").collapse();
            // and expand this faq
            $(this).expand();
        }
    });
});
