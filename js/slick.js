$(function () {
  $(".e-f-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    cssEase: "linear",
    prevArrow: ".e-f-gallery-list-left",
    nextArrow: ".e-f-gallery-list-right",
  });
});

$(function () {
  $(".e-f-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    cssEase: "linear",
    prevArrow: ".e-f-reviews-list-left",
    nextArrow: ".e-f-reviews-list-right",
  });
});
$(function () {
  $(".e-f-features-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".e-f-features-list-left",
    nextArrow: ".e-f-features-list-right",
  });
});
