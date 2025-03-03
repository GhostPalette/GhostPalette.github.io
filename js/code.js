$( document ).ready(function() {

  // TODO:
  //    Lightbox - Project internal galleries
  //    Logo interaction animation

  // --- Anchor Link - Smooth Scroll --- //
  $(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();

    if( $(window).width() < 450 ) {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 100
      }, 500);
    } else {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top + 1
      }, 500);
    }
  });

  // --- Project Menu - Button Active State --- //

  // - Set Button to Active on Load
  project_nav_button_active();
  // - Check Section on Scroll - Set Button to Active
  $(window).on('scroll', function(e) {
    project_nav_button_active();
  })
  // - Function - Check Buttons to Set to Active
  function project_nav_button_active() {
    var workButtons = $('a.work--btn');
    workButtons.each(function(e) {
      var button = $(this);
      var workType = button.attr('data_work_type');
      var workSection = $('section[data_work_type="' + workType + '"');

      var buttonTop = button.offset().top;
      var buttonBottom = buttonTop + button.outerHeight();
      var sectionTop = workSection.offset().top;
      var sectionBottom = sectionTop + workSection.outerHeight();

      if( buttonTop > sectionTop && buttonBottom < sectionBottom) {
        button.addClass('active');
      } else {
        button.removeClass('active');
      }
    })
  }

  // --- Mobile Nav --- //

  // - Button Active State
  $('.header--mobile-btn button').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('closed');
    $('header .header--menus').toggleClass('mobile--open');
  })
  // - Menu Button - Close Menu on Click
  $('.header--menus a[href^="#"]').on('click', function(e) {
    if( $(window).width() < 450 ) {
      $(this).toggleClass('closed');
      $('header .header--menus').toggleClass('mobile--open');
    }
  })
  



});