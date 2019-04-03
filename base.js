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


var second_acc = document.getElementsByClassName("hover_show_div");
var third_acc = document.getElementsByClassName("schedule_content_div")
var k;
function handler_create ( param ) {
  return function() {
    var next_div = third_acc[param]
    if (next_div.style.display == 'none') {
      next_div.style.display = '';
    } else {
      next_div.style.display = 'none';
    }

    /* Clear the corresponding next divs for other elements */
    for (k=0; k<second_acc.length+1; k++){
      console.log("k", k);
      console.log("param: ", param);
      if (k != param){
        var next_div = third_acc[k]
        next_div.style.display = 'none';
      } else {
        var next_div = third_acc[k]
        next_div.style.display = '';
      }
    }
  }
}
for (k = 0; k < second_acc.length; k++) {
  second_acc[k].addEventListener("mouseover", handler_create(k))
  // second_acc[k].addEventListener("mouseleave", handler_create(k))
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