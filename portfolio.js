// function scrollToElement(elementSelector, instance = 0) {
//     // Select all elements that match the given selector
//     const elements = document.querySelectorAll(elementSelector);
//     // Check if there are elements matching the selector and if the requested instance exists
//     if (elements.length > instance) {
//         // Scroll to the specified instance of the element
//         elements[instance].scrollIntoView({ behavior: 'smooth' });
//     }
// }

// const link1 = document.getElementById("link1");
// const link2 = document.getElementById("link2");

// link1.addEventListener('click', () => {
//     scrollToElement('.header');
// });

// link2.addEventListener('click', () => {
//     // Scroll to the second element with "header" class
//     scrollToElement('.header', 1);
// });
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });