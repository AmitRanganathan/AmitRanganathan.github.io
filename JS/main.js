
$(document).ready(main);

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

// javascript code for play/pause button 
function aud_play_pause() {
		  var myAudio = document.getElementById("myAudio");
      var butn= document.getElementById("demo");

		  if (myAudio.paused) {
		    myAudio.play();
        butn.innerHTML = "Pause" //sets text of button to pause
		  } else {
		    myAudio.pause();
        butn.innerHTML = "Play" //sets text of button to play
		  }
}
// end of background music code

function main(){
  $('.everything').hide();
  $('.everything').fadeIn(4000);

  $(".images").hide();

  $(".whiteboardImages").on("click", function(){
    $(this).next().slideToggle(400);
   

  })


}

window.onload = function() {
    document.getElementById("myAudio").play();
}

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});



































