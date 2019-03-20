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
  $("#about").css("opacity", 0.2);
  if($(".about-img").css("display") == 'none') {
      $("#about").css("opacity", 0.2);
  }
  init_minis();
});

$(window).scroll(function(){
    var heightHome = $(".home").height()/4;
    var scroll = $(window).scrollTop();

    var homeHeight = $(".home").height();
    var h = (scroll - (homeHeight/3.5))/((4*homeHeight/5)-(homeHeight/3.5));
    console.log(h);
    $(".home").css("opacity", (1-h));
    $("#about").css("opacity", h + 0.2);
    if(scroll < heightHome) {
      if(($(".about-img").css("display") == 'none')) {
        $("#about").css("opacity", 0.2);
      }
      $("#about").css("opacity", 0.2);
    }
    if(scroll > (4*homeHeight/5)) {
      $(".home").css("opacity", 0.2);
      $("#about").css("opacity", 1);
    }
  });