$(document).ready(function () {
  var header = $("#header");

  // Function to update the header styles
  function updateHeaderStyles() {
    if ($(window).scrollTop() > 0) {
      header.addClass("scroll shadow-sm");
      $(".nav-link").removeClass("text-white").addClass("text-black");
    } else {
      header.removeClass("scroll shadow-sm");
      $(".nav-link").removeClass("text-black").addClass("text-white");
    }
  }

  // Function to handle smooth scrolling when a navigation link is clicked
  $(".nav-link").on("click", function (e) {
    e.preventDefault(); // Prevent the default behavior of the link
    var targetId = $(this).attr("href"); // Get the target section's ID from the link's href attribute
    var targetElement = $(targetId); // Find the target element using the ID

    if (targetElement.length) {
      // Check if the target element exists on the page
      var offset = targetElement.offset().top - header.outerHeight(); // Calculate the scroll offset
      $("html, body").animate(
        {
          scrollTop: offset,
        },
        1000 // Adjust the animation duration as needed
      );
    }
  });

  // Initial call to set styles on page load
  updateHeaderStyles();

  $(window).scroll(function () {
    // Call the function on scroll to update styles
    updateHeaderStyles();
  });
});
