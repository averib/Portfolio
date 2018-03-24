"use strict";

// open ux/ui project page
function openProjectUX() {
    window.location.href = "ux-ui-project.html";
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
