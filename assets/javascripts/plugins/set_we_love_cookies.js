// Set We love cookies

$.set_we_love_cookies = function() {
  var trigger;
  trigger = $(".we_love_cookies");
  if (trigger[0]) {
    trigger.click(function(e) {
      e.preventDefault();
      Cookies.set("WeLoveCookies", "Yummmmmmmmmy!", {
        expires: 30
      });
      location.reload();
    });
    return;
  }
};
