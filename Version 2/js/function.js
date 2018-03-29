"use strict";

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

    // hover on final visual design icons
    $("#icon1").hover(function(){
       $(this).attr('src', $(this).attr('src').replace('download.png','download-hover.png'));
    }, function (){
       $(this).attr('src', $(this).attr('src').replace('download-hover.png','download.png'));
    })

    $("#icon2").hover(function(){
       $(this).attr('src', $(this).attr('src').replace('error.png','error-hover.png'));
    }, function (){
       $(this).attr('src', $(this).attr('src').replace('error-hover.png','error.png'));
    })

    $("#icon3").hover(function(){
       $(this).attr('src', $(this).attr('src').replace('in-queue.png','in-queue-hover.png'));
    }, function (){
       $(this).attr('src', $(this).attr('src').replace('in-queue-hover.png','in-queue.png'));
    })

    $("#icon5").hover(function(){
       $(this).attr('src', $(this).attr('src').replace('progress-cancel.png','progress-cancel-hover.png'));
    }, function (){
       $(this).attr('src', $(this).attr('src').replace('progress-cancel-hover.png','progress-cancel.png'));
    })

    $("#icon6").hover(function(){
       $(this).attr('src', $(this).attr('src').replace('finish-download.png','finish-download-hover.png'));
    }, function (){
       $(this).attr('src', $(this).attr('src').replace('finish-download-hover.png','finish-download.png'));
    })
});
