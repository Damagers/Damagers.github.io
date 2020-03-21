document.addEventListener("DOMContentLoaded", function() {

	$(document).ready(function(){
	    $(".navbar").on("click","a", function (event) {
	        event.preventDefault();
	        var id  = $(this).attr('href'),
	            top = $(id).offset().top;
	        $('body,html').animate({scrollTop: top}, 1500);
	    });
	});
	function countup(className){
		var countBlockTop = $("."+className).offset().top;
		var windowHeight = window.innerHeight;
		var show = true;
					
		$(window).scroll( function (){
			if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){ 
				show = false;
						
				$('.'+className).spincrement({
					from: 1,
					duration: 2500,
				});
			}
		})	
	}
        $(function() {
					countup("count_of", $(".count_of").text());
        });

	$(".selection button").click(function() {
		$(".selection button").removeClass("active-button");
		$(this).addClass("active-button");
	});
});
