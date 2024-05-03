// anchors and icons styling
$(document).ready(function () {
  $(".side-container a").click(function () {
    // Remove 'active' class from all anchor tags
    $(".side-container a").removeClass("active");
    // Add 'active' class to the clicked anchor tag
    $(this).addClass("active");

    // Hide all 'black' icons and show all 'white' icons
    $(".white").addClass("not-active");
    $(".black").removeClass("not-active");

    // Show 'black' icon and hide 'white' icon for the clicked anchor tag
    $(this).find(".black").addClass("not-active");
    $(this).find(".white").removeClass("not-active");
  });
  $("a").click(function () {
    var href = $(this).attr("href");
    console.log(href);
    var id = href.replace("#", "");
    var element = $(".section-container#" + id);
    $(".section-container").removeClass("active-section");
    element.addClass("active-section");
  });
  // smooth scroll
  $("a").click(function (event) {
    event.preventDefault(); // Prevent the default action
    var href = $(this).attr("href");
    console.log(href);
    var id = href.replace("#", "");
    var element = $(".section-container#" + id);
    $(".section-container").removeClass("active-section");
    element.addClass("active-section");

    // Smooth scroll
    $("html, body").animate(
      {
        scrollTop: $(href).offset().top,
      },
      500
    ); // 2000 is the duration of the animation in milliseconds
  });
});
//
