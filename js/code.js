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
  
// --- Lightbox --- //
  var lightbox = $("#lightbox");
  
  // - On Project Image Click
  $('.work--project > img').on('click', function(e) {
    // Generate Project Gallery
    var projectImages = $(this).siblings('.project--gallery').clone();
    if( projectImages.length > 0 ) {
      lightbox.find('.lightbox--gallery').append(projectImages);
      if( projectImages.attr('totalcount') > 1 ) {
        lightbox.find('.lightbox--thumbnails').append(projectImages.clone());
        lightbox.attr('thumbnails', 'true');
      }
    }
    // Open Lightbox
    lightbox.removeClass('closed');
  });

  // - Lightbox Close - Click
  $('.lightbox--close').on('click', function(e) {
    // Close Lightbox
    lightbox.addClass('closed');
    lightbox.attr('current', '1');
    // Clear Project Gallery
    $('.lightbox--gallery').empty();
    $('.lightbox--thumbnails').empty();
    lightbox.attr('thumbnails', 'false');
  });

  // - Function - Switch Gallery Slide Active
  function gallery_slide_change(newSlide) {
    lightbox.attr('current', newSlide);
  }
  // - Gallery Thumbnail Clicked
  $(document).on('click', '.lightbox--thumbnails img', function(e) {
    var newCount = $(this).attr('count');
    if( newCount ) {
      gallery_slide_change(newCount);
    }
  })
  // - Gallery Arrow Clicked
  $('.lightbox--arrows button').on('click', function(e) {
    var currentCount = lightbox.attr('current');
    var maxCount = lightbox.find('.project--gallery').attr('totalcount');
    var newCount = 1;
    if( $(this).attr('direction') === 'prev' ) {
      newCount = parseInt(currentCount) - 1;
      if( newCount === 0 ) newCount = maxCount;
    } else {
      if( currentCount === maxCount ) {
        newCount = 1;
      } else {
        newCount = parseInt(currentCount) + 1;
      }
    }
    lightbox.attr('current', newCount);
  })

});