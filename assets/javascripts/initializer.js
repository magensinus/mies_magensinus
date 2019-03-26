// Initializer

bindEvents = function() {
  $(".overlay").hide();
  $(".altai-center").altaiCenter();
  $(".altai-panel").altaiPanel({
    trim: 112
  });
  $(".altai-toggle").altaiToggle({
    effect: "fade",
    wrapper: false,
    close: false
  });
  // If object found run actions
  if ($('.universal.main').length > 0) {
    var divHeight = $('.universal.main').innerHeight();
    $('.responsive-navigation').css('min-height', divHeight + 'px');
  }
  if ($('.universal.hero').length > 0) {
    var divHeight = $('.universal.hero').innerHeight();
    $('.responsive-navigation').css('min-height', divHeight + 'px');
    $(".responsive-panel").css('min-height', divHeight + 'px');
  }
  if ($('a.gallery').length > 0) {
    $("a.gallery").featherlightGallery({
      previousIcon: "«",
      nextIcon: "»",
      galleryFadeIn: 300,
      openSpeed: 300
    });
  }
};

bindWrappers = function() {
  var divs = $("div.articles div.articles-box div.articles-item");
  var wrapper = "<div class='left auto'></div>";
  var divWidth = $(".articles").width();

  if (divWidth <= 360) {
    for(var i = 0; i < divs.length; i+=2) {
      divs.slice(i, i+2).wrapAll("<div class='left wide'></div>");
    }
  } else if (divWidth <= 480) {
    for(var i = 0; i < divs.length; i+=2) {
      divs.slice(i, i+2).wrapAll("<div class='left wide'></div>");
    }
  } else if (divWidth <= 720) {
    for(var i = 0; i < divs.length; i+=3) {
      divs.slice(i, i+3).wrapAll("<div class='left wide'></div>");
    }
  } else if (divWidth <= 960) {
    for(var i = 0; i < divs.length; i+=4) {
      divs.slice(i, i+4).wrapAll("<div class='left wide'></div>");
    }
  }
}

$(document).on( "turbolinks:load", function() {
  bindEvents();
  bindWrappers();
  Turbolinks.clearCache();
});

$(window).resize(function() {
  bindWrappers();
  $(".altai-panel").altaiPanel({
    trim: 112
  });
  var divHeight = $('.universal.main').innerHeight();
  $('.responsive-navigation').css('min-height', divHeight + 'px');
  Turbolinks.clearCache();
});

$(window).trigger('resize');
