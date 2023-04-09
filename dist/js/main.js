//  Toggle the "show" class on the nav-list when the hamburger-menu is clicked

  $(document).ready(function () {
    $(".hamburger-menu").click(function () {
      $(".nav-list").toggleClass("show");
    });
  });
  
  