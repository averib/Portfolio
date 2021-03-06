// scroll event
$(window).on("scroll", function() {
    projectInView();
});

// change bg of project section if scrolled into view
function projectInView() {
    // project 1
    if (isScrolledIntoView(document.getElementsByClassName('prj')[0])) {
        $("#project1").css("background-image", "url('img/wwm-app.png')");
    } else {
        $("#project1").css("background-image", "url('img/wwm-app-sketch.png')");
    }

    // project 2
    if (isScrolledIntoView(document.getElementsByClassName('prj')[1])) {
        $("#project2").css("background-image", "url('img/visual-design.png')");
    } else {
        $("#project2").css("background-image", "url('img/visual-design-sketch.png')");
    }

    // if project 3 is in view
    // if (isScrolledIntoView(document.getElementsByClassName('prj')[2])) {
    //     $("#project3").css("background-image", "url('img/art-gallery.png')");
    //     $(".prj3-h1").css("color", "white");
    //     $(".prj3-p").css("color", "#CCC");
    // } else {
    //     $("#project3").css("background-image", "url('img/art-gallery-sketch.png')");
    //     $(".prj3-h1").css("color", "#272727");
    //     $(".prj3-p").css("color", "#878787");
    // }
}

// checks if an element is completely scrolled into view
function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}