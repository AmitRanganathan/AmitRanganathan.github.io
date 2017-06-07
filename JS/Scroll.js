
jQuery(function() {
  jQuery('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = jQuery(this.hash);
      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        jQuery('html,body').animate({
          scrollTop: target.offset().top -50
        }, 1500);
        return false;
      }
    }
  });
});

function aud_play_pause() {
		  var myAudio = document.getElementById("myAudio");
		  if (myAudio.paused) {
		    myAudio.play();
		  } else {
		    myAudio.pause();
		  }
		}