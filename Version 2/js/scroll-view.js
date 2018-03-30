"use strict";

// scroll event
$(window).on("scroll", function() {
    hideArrow();
});

// hide down arrow if scrolling out of overview section 
function hideArrow() {
    if (isScrolledIntoView(document.getElementsByClassName('shadow-box-small')[0])) {
        $("#down-arrow").show();
    } else {
        $("#down-arrow").hide();
    }
}

// checks if an element is completely scrolled into view
function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}