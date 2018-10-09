import "../sass/index.sass";
import "../css/reset.css";
import "../css/normalize.css";
import "../libs/jQuery.mmenu-master/dist/jquery.mmenu.js";
import "../libs/jQuery.mmenu-master/dist/jquery.mmenu.css";
import "../libs/fullpage/fullpage.css";
import "../libs/fullpage/fullpage.js";
import "../libs/jQuery.mmenu-master/dist/addons/pagescroll/jquery.mmenu.pagescroll.js";
import "../libs/jQuery.mmenu-master/dist/extensions/positioning/jquery.mmenu.positioning.css";

$(function() {
  $("#my-menu").mmenu(
    {
      // options
      extensions: [
        "theme-white",
        "listview-justify",
        "border-full",
        "swadow-page",
        "pagedim-black"
      ],
      navbar: {
        title: '<img src ="src/img/Logo-3.png">'
      },
      pageScroll: true
    },
    {
      // configuration
      offCanvas: {
        pageNodetype: "section"
      },
      clone: true
    }
  );
  $(".mh-head.mm-sticky").mhead({
    scroll: {
      hide: 200
    }
  });
  $(".mh-head:not(.mm-sticky)").mhead({
    scroll: false
  });
  $("body").on("click", 'a[href^="#/"]', function() {
    alert("Thank you for clicking, but that's a demo link.");
    return false;
  });
});
$(document).ready(function() {
  $("#my-menu").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});
// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  mySticky();
};

// Get the navbar
var navbar = document.getElementById("head-menu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function mySticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
