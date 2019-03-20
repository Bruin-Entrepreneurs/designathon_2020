var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {

		this.classList.toggle("active"); 
		var panel = this.nextElementSibling; 
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 	}); 
}


$(window).ready(function() {
  $("#about").css("opacity", 0);
});

$(window).scroll(function(){
    var heightHome = $(".home").height()/4;
    var scroll = $(window).scrollTop();
    // if(scroll > heightHome) {
    //   $(".home").css("opacity", heightHome/scroll);
    // }
    // else {
    //   $(".home").css("opacity", 1);
    // }


    var homeHeight = $(".home").height();
    var h = (scroll - (homeHeight/3.5))/((4*homeHeight/5)-(homeHeight/3.5));
    $("#about").css("opacity", h);
    $(".home").css("opacity", (1-h));
    if(scroll > (4*homeHeight/5)) {
      $(".home").css("opacity", 0);
      $("#about").css("opacity", 1);
    }

    console.log("OPACITY: : : " + $(".home").css("opacity") + "OPACITY: : : " + $("#about").css("opacity"))

  });