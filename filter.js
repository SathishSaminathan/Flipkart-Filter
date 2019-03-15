$(document).ready(function() {
  var width = $(window).width();
  // alert(width)

  $(".sort-option").click(function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    // $(this).toggleClass("active");
  });
  $(".sort-by").click(function(e) {
    e.stopPropagation();
    $(".sort-by-modal").fadeIn();
  });
  $(".cancel").click(() => {
    $(".sort-by-modal").fadeOut();
  });
  $(".modal-content").click(e => {
    e.stopPropagation();
  });
  $(window).click(function(e) {
    $(".sort-by-modal").fadeOut();
  });

  $(".filter-by").click(function(e) {
    e.stopPropagation();
    $(".filter-by-modal").slideDown();
  });

  $(".filter-close-btn").click(function(e) {
    var oldText = $(".filter-text").text();
    var newText = $(".filter-text").data("text");
    if (oldText === "Back") {
      e.stopPropagation();
      $(".filter-options").css("left", 0);
      $(".select-option-area").css("left", width);
      $(".filter-text")
        .text(newText)
        .data("text", oldText);
      $(".filter-icon")
        .removeClass("fa fa-arrow-left")
        .addClass("fa fa-times");
      return null;
    }
    // $(".filter-text")
    //   .text(newText)
    //   .data("text", oldText);
    $(".filter-by-modal").slideUp();
  });

  $(".filter-options").css("width", width);

  $(".filter-option").click(function() {
    // $(".filter-options").css("left", width),
    //   function() {
    //     $(".filter-options").css("left", width);
    //   };var oldText = $(".filter-text").text();
    var oldText = $(".filter-text").text();
    var newText = $(".filter-text").data("text");
    $(".filter-text")
      .text(newText)
      .data("text", oldText);
    $(".filter-icon")
      .removeClass("fa fa-times")
      .addClass("fa fa-arrow-left");
    $(".filter-options").css("left", 0);
    $(".select-option-area").css("left", 0);
  });

  $(".back-btn").click(function() {
    $(".select-option-area").css("left", width);
  });

  $(".select-option-area").css("width", width);
  $(".select-option-area").css("left", width);

  $(".select-option").click(function() {
    $(this)
      // .children(".select-left")
      // .toggleClass("active-color");
      .toggleClass('active-color')
  });
});
