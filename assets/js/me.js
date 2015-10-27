$("img.lazy").lazyload();
//
<!-- Add some JavaScript to enable toggling the descriptions when an image is tapped on a touchscreen device -->
$(function () {
  // See if this is a touch device
  if ('ontouchstart' in window) {
    // Set the correct body class
    $('body').removeClass('no-touch').addClass('touch');

    // Add the touch toggle to show text
    $('div.boxInner img').click(function () {
      $(this).closest('.boxInner').toggleClass('touchFocus');
    });
  }
});

if ($('#galleria').length) {
  // Load the classic theme
  Galleria.loadTheme('/galleria/classic/galleria.classic.min.js');

  // Initialize Galleria
  Galleria.run('#galleria');
}

var curPage = $('#list').attr('data-page');
var page = null;
function nav(dir) {
  if (dir === 'right') {
    page = +curPage + 1;
  } else {
    if (curPage > 1) {
      page = +curPage - 1;
    }
  }
  if (page) {
    location.href = '/page/' + page;
  }
}
if ($('#list').length) {
  $(document).keydown(function (e) {
    if (e.which === 39) { // next
      nav('right');
    } else if (e.which === 37) { //last
      nav('left');
    }
  });
  $(function () {
    $('.nav_left').on('click', function () {
      nav('left');
    });
    $('.nav_right').on('click', function () {
      nav('right');
    });
  });
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-62649444-1', 'auto');
ga('send', 'pageview');
