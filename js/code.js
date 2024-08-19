$( document ).ready(function() {

  // Variables
  var body = $('body.page--home');
  var animation_items = $('.animation--items');

  // Functions
  function begin_animations() {
    animation_items.addClass('open');
    body.addClass('animation--start');
  }
  function end_animations() {
    setTimeout(() => {
      body.addClass('animation--end');
      // Reset Animation
      setTimeout(() => {
        animation_items.removeClass('open');
        body.removeClass('animation--start animation--end');
      }, 1000);
    }, 250);
  }

  // Click - Work Panel Button
  $(document).on('click', '.home--buttons button', function(e) {
    // Begin Animation
    // begin_animations();

    // Change Page Content

    // End Animation
    // end_animations();
  });

  // // Click - Work Close Button
  // $(document).on('click', 'button.work--close', function(e) {
  //   console.log('close');
  // });
  
});