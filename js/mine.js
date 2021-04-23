/* Move between sections using navbar */
$('nav a').click(function () {
    let aHref = $(this).attr('href');                       // get any href attribute in navbar
    let aOffset = $(aHref).offset().top;                    // get the distance between href and the top
    $('body, html').animate({scrollTop: aOffset}, 1000);    // go to section in delay 1 sec
});

/* Change navbar style depending on vertical distance */
window.onscroll = function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("myNav").style.position = "fixed";
    document.getElementById("myNav").style.backgroundColor = "#fff";
    document.getElementById("myNav").style.height = "70px";
    document.getElementById("myNav").style.borderBottom = "1px solid #6f42c1";
  } else {
    document.getElementById("myNav").style.position = "absolute";
    document.getElementById("myNav").style.backgroundColor = "transparent";
    document.getElementById("myNav").style.height = "100px";
    document.getElementById("myNav").style.border = "none";
  }
  /*
   * Change navbar links when click on it
   * Add class active to clicked link and remove it from other links
   */
  $("nav li").on("click", function() {
      $(this).addClass('active').siblings().removeClass('active');
  });
    
    /* Show and hide go-to-top button depend on vertical distance */
    if ($(window).scrollTop() <= $("#about").offset().top) {
        $("#goTopBtn").css({'display': 'none'}, 200);
    }
    if ($(window).scrollTop() >= $("#about").offset().top) {
        $("#goTopBtn").css({'display': 'block'}, 200);
}

/* Move to top page after click on go-to-top button */
$("#goTopBtn").on("click", function () {
    $('body, html').animate({scrollTop: 0}, 1000);
});
