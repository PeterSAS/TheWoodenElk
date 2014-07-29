$(document).ready(function () {
    $(document).on("scroll", onScroll);

    $('#navigation .nav li a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active-nav');
        })
        $(this).addClass('active-nav');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#navigation a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navigation ul li a').removeClass("active-nav");
            currLink.addClass("active-nav");
        }
        else{
            currLink.removeClass("active-nav");
        }
    });
}

$(function() {
  $('#slides').superslides({
	play: 9000,
  });
});
$(window).on('hashchange', function(e){
	if(location.hash == "#Home")
	{
		window.location.hash = "";
		location.hash.replace('#','');
	}
});