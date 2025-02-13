$( document ).ready(function() {

  // // --- Variables
  // var header = $('header');

  // // --- Calculate Screen Proportions
  // function calculate_screen_proportions() {
  //   var body = $('body');
  //   var window_width = $(window).width();
  //   var window_height = $(window).height();
  //   var window_ratio = window_width / window_height;

  //   if( window_ratio < .5 ) {
  //     body.attr('layout', 'horizontal');
  //   } else if( window_ratio > 2 ) {
  //     body.attr('layout', 'vertical');
  //   } else {
  //     body.attr('layout', 'normal');
  //   }
  // }
  // calculate_screen_proportions();
  // $(window).on('resize', function(e) {
  //   calculate_screen_proportions();
  // })

  // // --- Click Work Button
  // $(document).on('click', '.header--panel', function(e) {
  //   var panel = $(this).attr('panel');
  //   click_panel_button(panel);
  //   header.addClass('close');
  // });
  // // --- Click Close Work Button
  // $(document).on('click', '.main--work .button--close', function(e) {
  //   header.removeClass('close');
  //   setTimeout(function() {
  //     $('.main--work, .main--work .item--content').removeClass('open');
  //   }, 300);
  // });

  // // --- Click Page Button
  // $(document).on('click', '.footer--menu .footer--button', function(e) {
  //   var panel = $(this).attr('page');
  //   click_panel_button(panel);
  // });
  // // --- Click Close Page Button
  // $(document).on('click', '.main--pages .button--close', function(e) {
  //   $('.main--pages, .main--pages .item--content').removeClass('open');
  // });

  // // --- Click Panel Button Functions
  // function click_panel_button(panel) {
  //   // Apply Opens
  //   $('.item--content[panel="' + panel + '"]').parent().addClass('open');
  //   $('.item--content[panel="' + panel + '"]').addClass('open');
  // }

  // // --- Click Footer Menu Button
  // $(document).on('click', 'footer .footer--open', function(e) {
  //   $(this).parent('footer').toggleClass('open');
  // });


  // TODO:
  // -- Footer buttons - functionality
  // -- Responsive logo locations

  // For Fun:
  // -- Logo interaction animation
  // -- 

});