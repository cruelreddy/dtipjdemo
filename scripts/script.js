let links = document.querySelectorAll('.nav-links li');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function (e) {
    for (let j = 0; j < links.length; j++) {
      links[j].classList.remove('active');
    }
    e.target.classList.add('active');
  });
}

let headerHeight = $("nav").height();

$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]').
not('[href="#0"]').
click(function (event) {
  // On-page links
  if (
  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&

  location.hostname == this.hostname)
  {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    var scrollToPosition = $(target).offset().top - headerHeight;
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: scrollToPosition },
      750, function () {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) {// Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

export function myFunction(){
    let clearId;
    clearTimeout(clearId);
    clearId= setTimeout(()=>{document.getElementById('js-loader').style.display = 'none';
          document.querySelectorAll('.hidden').forEach((el) => {
          el.classList.remove('hidden');
       });
        
    },1000);
    
    
          
      
      
     }
