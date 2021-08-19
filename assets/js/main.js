// $ = require('jquery');

$(function(){
  $(".site-topnav .trigger").on("click", function () {
    $(".site-topnav .nav").toggleClass("active");
  });
});

