$(document).ready(function () {
  var header = $("#header");

  // Function to update the header styles
  function updateHeaderStyles() {
    if ($(window).scrollTop() > 0) {
      header.addClass("scroll shadow-sm"); // Add the 'scroll' and 'shadow-sm' classes
      // Change font color of navigation links to black
      $(".nav-link").removeClass("text-white").addClass("text-black");
    } else {
      header.removeClass("scroll shadow-sm"); // Remove the 'scroll' and 'shadow-sm' classes
      // Change font color of navigation links to white
      $(".nav-link").removeClass("text-black").addClass("text-white");
    }
  }

  // Initial call to set styles on page load
  updateHeaderStyles();

  $(window).scroll(function () {
    // Call the function on scroll to update styles
    updateHeaderStyles();
  });
});
