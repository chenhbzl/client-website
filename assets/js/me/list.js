if ($('#list').length) {
  $("img.lazy").lazyload({effect : "fadeIn"});
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

  var href = location.href;
  var i = href.lastIndexOf('/');
  var curPage = href.substring(i + 1);
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
      var newHref = href.substring(0, i);
      location.href = newHref + '/' + page;
    }
  }
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
    $('.theme-box').on('click', function () {
      if ($(this).hasClass('show')) {
        $(this).removeClass('show');
      } else {
        $(this).addClass('show');
      }
    })
  });
}