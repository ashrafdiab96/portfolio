/* Move between sections using navbar */
$('nav a').click(function () {
    let aHref = $(this).attr('href');                       // get any href attribute in navbar
    let aOffset = $(aHref).offset().top;                    // get the distance between href and the top
    $('body, html').animate({scrollTop: aOffset}, 1000);    // go to section in delay 1 sec
});


let statisticsTop = $('#statistics').offset().top;

window.onscroll = function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("myNav").style.position = "fixed";
    document.getElementById("myNav").style.backgroundColor = "#fff";
    document.getElementById("myNav").style.height = "70px";
    document.getElementById("myNav").style.borderBottom = "1px solid #6f42c1";
  }

  else {
    document.getElementById("myNav").style.position = "absolute";
    document.getElementById("myNav").style.backgroundColor = "transparent";
    document.getElementById("myNav").style.height = "100px";
    document.getElementById("myNav").style.border = "none";
  }

  $("nav li").on("click", function() {
      $(this).addClass('active').siblings().removeClass('active');
  });
}
