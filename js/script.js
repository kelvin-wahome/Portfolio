$(document).ready(function() {
  window.onload = function () {
    typeWriter()
  };
  var i = 0;
  var txt = 'Hello, my name is Gift Lumumba';
  var speed = 200;

  function typeWriter() {
      if (i < txt.length) {
          document.getElementById("demoo").innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
      }
  }

  // navbar initially hidden
  $('.navbar').hide();

  // display tooltip on page load
  $('.tooltip').tooltip('show');

  var scrollLink = $('.sections');

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });

  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {

      var sectionOffset = $(this.hash).offset().top - 20;

      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }

      // navbar fade-in/fade-out
      if (scrollbarLocation > 550) {
        $('.navbar').fadeIn();
      } else {
        $('.navbar').fadeOut();
      }
    });

  });
  // Navbar popup
  $(window).on('sections', function() {

  });

});
// end of smooth scrolling


// word substitution
var length = $(".scroll-words").length;
var p = 0;
var u = 0;
while(u<10000) {
for(i=0;i<length;i++){
  $( ".scroll-list" ).animate({
    marginTop: "-"+(i*2)+".55em"
  }, 2000 );
  p = i+1;
}

if(p==length){
for(j=p-1;j>=0;j--){
  $( ".scroll-list" ).animate({
    marginTop: "-"+(j*2)+".55em"
  }, 2000 );
}
}
u++;
}
