"use strict";

/* 
TO ADD LATER:
- scroll up arrow that appears when user starts scrolling down on page
        http://jsfiddle.net/robert/fjXSq/
        https://stackoverflow.com/questions/5980237/show-back-to-top-link-element-using-jquery-when-you-scroll-down
*/

// ==================================================================

// open ux/ui project page
function openProjectUX() {
    window.location.href = "ux-ui-project.html";
}

// detect if element is scrolled into view, change bg image
var scrollEventHandler = function() {

    // if project 1 is scrolled into view
    if(isScrolledIntoView(document.getElementsByClassName('box-col2')[0])) {
        $("#projects").css("background-image", "url('img/ab-logo.png')");
        console.log("IN view");
    } else {
        $("#projects").css("background-image", "url('img/placeholder.png')");
        console.log("OUT of view");
    }
}

$(document).scroll(scrollEventHandler);

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}

// ==================================================================

// jquery
$(document).ready(function() {

    // smooth scrolling for all <a> elements to their target
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {
            window.location.hash = target;
        });
    });
});
