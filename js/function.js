"use strict";

// testing purposes
console.log("JavaScript is running on this page");

// ==================================================================

/* 
TO ADD LATER:
- scroll up arrow that appears when user starts scrolling down on page
        http://jsfiddle.net/robert/fjXSq/
        https://stackoverflow.com/questions/5980237/show-back-to-top-link-element-using-jquery-when-you-scroll-down
*/

// test
function openProject() {
    window.location.href = "ux-ui-project.html"
}

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