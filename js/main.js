// sticky navbar

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 300) {
      $(".go-to-top-btn").addClass("show");
    } else {
      $(".go-to-top-btn").removeClass("show");
    }
  });

  $(".go-to-top-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  // typing animation
  var typed = new Typed(".typing", {
    strings: [
      "Full-Stack Developer",
      "Software Engineer",
      "Freelancer",
      "Designer",
      "Passionate Cook",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing2", {
    strings: [
      "Full-Stack Developer",
      "Software Engineer",
      "Freelancer",
      "Designer",
      "Passionate Cook",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // navbar menu button

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});
