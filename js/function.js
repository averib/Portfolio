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

// scroll event
$(window).on("scroll", function() {
    projectInView();
});

// change bg of project 1 section if scrolled into view
function projectInView() {
    // project 1
    if (isScrolledIntoView(document.getElementsByClassName('prj1')[0])) {
        $("#project1").css("background-image", "url('img/ab-logo-white.png')");
    } else {
        $("#project1").css("background-image", "url('img/placeholder.png')");
    }

    // project 2
    if (isScrolledIntoView(document.getElementsByClassName('prj2')[0])) {
        $("#project2").css("background-image", "url('img/visual-design.png')");
    } else {
        $("#project2").css("background-image", "url('img/visual-design-sketch.png')");
    }

    // if project 3 is in view
    if (isScrolledIntoView(document.getElementsByClassName('prj3')[0])) {
        $("#project3").css("background-image", "url('img/art-gallery.png')");
    } else {
        $("#project3").css("background-image", "url('img/art-gallery-sketch.png')");
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
