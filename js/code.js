$( document ).ready(function() {

  // --- Calculate Screen Proportions
  function calculate_screen_proportions() {
    var body = $('body');
    var window_width = $(window).width();
    var window_height = $(window).height();
    var window_ratio = window_width / window_height;

    if( window_ratio < .5 ) {
      body.attr('layout', 'horizontal');
    } else if( window_ratio > 2 ) {
      body.attr('layout', 'vertical');
    } else {
      body.attr('layout', 'normal');
    }
  }
  calculate_screen_proportions();
  $(window).on('resize', function(e) {
    calculate_screen_proportions();
  })

  // --- Click Panel Button
  $(document).on('click', '.header--panel, .footer--menu .footer--button', function(e) {
    var panel = $(this).attr('panel');
    if( !panel ) panel = $(this).attr('page');
    $('.item--content[panel="' + panel + '"]').addClass('open');
  });

  // --- Click Close Button
  $(document).on('click', '.button--close', function(e) {
    // var panel = $(this).closest('.item--content').attr('panel');
    $(this).closest('.item--content').removeClass('open');
  });


  // TODO:

  // For Fun:
  // -- Spin Logo on Hover or Click
  // -- 

});