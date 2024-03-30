jQuery(
  (function ($) {
    "use strict";
    $(".mean-menu").meanmenu({ meanScreenWidth: "1199" });
    $(window).on("scroll", function () {
      $(window).scrollTop() >= 200
        ? $(".main-navbar-area").addClass("stickyadd")
        : $(".main-navbar-area").removeClass("stickyadd");
    });
    $(".side-option-button").on("click", function (e) {
      $(".side-option-responsive > .side-option-inner").toggleClass("active");
      e.preventDefault();
    });
    $(".language-button").on("click", function (e) {
      $(".language > .menu").toggle();
      e.preventDefault();
    });
    $("#control li").on("click", function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
    $(".youtube-popup").magnificPopup({
      disableOn: 320,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
    $(".btn-search").magnificPopup({
      removalDelay: 500,
      callbacks: {
        beforeOpen: function () {
          this.st.mainClass = this.st.el.attr("data-effect");
        },
      },
      midClick: true,
    });
    $(".testimonial-slider").owlCarousel({
      loop: true,
      margin: 30,
      dots: false,
      addClassActive: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 8500,
      smartSpeed: 250,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 991: { items: 2 } },
      rtl: true,
    });
    var testimonialSlider = $(".testimonial-slider");

    function testimonialSliderClasses() {
      testimonialSlider.each(function () {
        $(this).find(".owl-item").removeClass("firstactiveitem");
        $(this)
          .find(".owl-item.active")
          .each(function (index) {
            if (index === 0) {
              $(this).addClass("firstactiveitem");
            }
          });
      });
    }

    testimonialSliderClasses();
    testimonialSlider.on("translated.owl.carousel", function (event) {
      testimonialSliderClasses();
    });
    $(".testimonial-slider-two").owlCarousel({
      loop: true,
      margin: 30,
      dots: false,
      nav: true,
      navText: [
        "<i class='bx bxs-chevron-left'></i>",
        "<i class='bx bxs-chevron-right'></i>",
      ],
      addClassActive: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 8500,
      smartSpeed: 250,
      items: 1,
      rtl: true,
    });
    $(".testimonial-slider-three").owlCarousel({
      loop: true,
      margin: 30,
      dots: true,
      addClassActive: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 8500,
      smartSpeed: 250,
      items: 1,
      rtl: true,
    });
    $(".services-slider").owlCarousel({
      loop: true,
      center: true,
      margin: 30,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 991: { items: 3 } },
      rtl: true,
    });
    $(".services-slider-two").owlCarousel({
      loop: true,
      margin: 0,
      dots: false,
      navContainer: "#serviceSlider",
      navText: [
        "<i class='bx bxs-chevron-left'></i>",
        "<i class='bx bxs-chevron-right'></i>",
      ],
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 991: { items: 3 } },
      rtl: true,
    });
    $(".service-details-slider").owlCarousel({
      loop: true,
      margin: 30,
      dots: false,
      nav: true,
      navText: [
        "<i class='bx bxs-chevron-left'></i>",
        "<i class='bx bxs-chevron-right'></i>",
      ],
      addClassActive: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 8500,
      smartSpeed: 250,
      items: 1,
      rtl: true,
    });
    $(".project-details-slider").owlCarousel({
      loop: true,
      margin: 30,
      dots: false,
      nav: true,
      navText: [
        "<i class='bx bxs-chevron-left'></i>",
        "<i class='bx bxs-chevron-right'></i>",
      ],
      addClassActive: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 8500,
      smartSpeed: 250,
      items: 1,
      rtl: true,
    });
    $(".team-slider").owlCarousel({
      loop: true,
      margin: 30,
      dots: false,
      navContainer: "#teamSlider",
      navText: [
        "<i class='bx bxs-chevron-left'></i>",
        "<i class='bx bxs-chevron-right'></i>",
      ],
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 991: { items: 3 } },
      rtl: true,
    });
    $("body").append(
      "<div class='go-top'><i class='bx bx-up-arrow-alt'></i></div>"
    );
    $(window).on("scroll", function () {
      var scrolled = $(window).scrollTop();
      if (scrolled > 600) $(".go-top").addClass("active");
      if (scrolled < 600) $(".go-top").removeClass("active");
    });
    $(".go-top").on("click", function () {
      $("html, body").animate({ scrollTop: "0" }, 500);
    });
    $("body").append(
      "<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>"
    );

    function makeTimer() {
      var endTime = new Date("December 20, 2022 17:00:00 PDT");
      var endTime = Date.parse(endTime) / 1000;
      var now = new Date();
      var now = Date.parse(now) / 1000;
      var timeLeft = endTime - now;
      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );
      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }
      $("#days .h1").html(days);
      $("#hours .h1").html(hours);
      $("#minutes .h1").html(minutes);
      $("#seconds .h1").html(seconds);
    }

    setInterval(function () {
      makeTimer();
    }, 0);
    $(".newsletter-form")
      .validator()
      .on("submit", function (event) {
        if (event.isDefaultPrevented()) {
          formErrorSub();
          submitMSGSub(false, "Invalid E-mail.");
        } else {
          event.preventDefault();
        }
      });

    function callbackFunction(resp) {
      if (resp.result === "success") {
        formSuccessSub();
      } else {
        formErrorSub();
      }
    }

    function formSuccessSub() {
      $(".newsletter-form")[0].reset();
      submitMSGSub(true, "Thank you for subscribing!");
      setTimeout(function () {
        $("#validator-newsletter").addClass("hide");
      }, 4000);
    }

    function formErrorSub() {
      $(".newsletter-form").addClass("animated shake");
      setTimeout(function () {
        $(".newsletter-form").removeClass("animated shake");
      }, 1000);
    }

    function submitMSGSub(valid, msg) {
      if (valid) {
        var msgClasses = "validation-success";
      } else {
        var msgClasses = "validation-danger";
      }
      $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }

    $(".newsletter-form").ajaxChimp({
      url: "https://hibootstrap.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",
      callback: callbackFunction,
    });
    $(window).on("load", function (e) {
      $("#preloader")
        .delay(500)
        .queue(function () {
          $(this).remove();
        });
    });
    $("select").niceSelect();
  })(jQuery)
);

function setTheme(themeName) {
  localStorage.setItem("facty_rtl_theme", themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  if (localStorage.getItem("facty_rtl_theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}

(function () {
  if (localStorage.getItem("facty_rtl_theme") === "theme-dark") {
    setTheme("theme-dark");
    document.getElementById("slider").checked = false;
  } else {
    setTheme("theme-light");
    document.getElementById("slider").checked = true;
  }
})();

/* Start Edit Here  */

$(document).ready(function () {
  $(".partners-slider").owlCarousel({
    autoplay: true,
    loop: true,
    items: 5,
    rtl: true,
    addClassActive: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
    smartSpeed: 200,
    rtl: true,
    responsive: {
      0: { items: 2 },
      768: { items: 3 },
      991: { items: 4 },
      1200: { items: 5 },
    },
  });
});
