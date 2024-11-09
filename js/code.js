$( document ).ready(function() {

  // --- Variables
  var header = $('header');

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

  // --- Click Work Button
  $(document).on('click', '.header--panel', function(e) {
    var panel = $(this).attr('panel');
    click_panel_button(panel);
    header.addClass('close');
  });

  // --- Click Page Button
  $(document).on('click', '.footer--menu .footer--button', function(e) {
    var panel = $(this).attr('page');
    click_panel_button(panel);
  });

  // --- Click Close Buttons
  $(document).on('click', '.item--content .item--header .button--close', function(e) {
    close_panel_button();
  });

  // --- Click Panel Button Functions
  function click_panel_button(panel) {
    // Clear Opens
    close_panel_button();
    // Apply Opens
    $('.item--content[panel="' + panel + '"]').parent().addClass('open');
    $('.item--content[panel="' + panel + '"]').addClass('open');
  }
  function close_panel_button() {
    $('.item--content').removeClass('open');
    $('.main--work, .main--pages').removeClass('open');
    header.removeClass('close');
  }


  // TODO:

  // For Fun:
  // -- Spin Logo on Hover or Click
  // -- 

});