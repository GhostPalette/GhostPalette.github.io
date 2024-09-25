$( document ).ready(function() {

  // Click Panel Button
  $(document).on('click', '.buttons--panel', function(e) {
    var panel = $(this).attr('panel');
    $(this).addClass('open');
    $('.work--content[panel="' + panel + '"]').addClass('open');
  });

  // Click Close Button
  $(document).on('click', '.button--close', function(e) {
    var panel = $(this).closest('.work--content').attr('panel');
    $(this).closest('.work--content').removeClass('open');
    $('.buttons--panel[panel="' + panel + '"]').removeClass('open');
  });

  // Panel Buttons Orientation


  // TODO:
  // If height is shorter, apply vertical orientation
  // Check height again on window resizing

  // For Fun:
  // -- Spin Logo on Hover or Click
  // -- 

});