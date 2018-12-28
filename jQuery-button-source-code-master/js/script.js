//slides down paragrph directly under image when img is clicked 
$("img").click(function(){
	$(this).next().children('p').slideDown();
	
});
//it looks like next looks for the next sibling, the sibling being a div to the IMG and then it looks for children p to slide p down
//wait until page is ready
$(document).ready(function() {
	
	//sets <a> element within paragraph  to yellow  
	$("p").click(function(){
		$(this).children("a").css("background-color", "yellow"); /* returns all the <a> child elements that are 
		within this paragraph*/
		
	});
	
}); 
//when card is clicked, it is assigned class highlight and
// is highlighted but if clicked again class highlight is toggled off
$(".card").click(function(){
	$(this).toggleClass("highlight");	 
});

//cards not currently seleced will be hidden when select_btn is clicked
$("#select_btn").click(function(){
	$(".card:not(.highlight)").hide();	 
});
//all cards will now be selected
$("#all_btn").click(function(){
	$(".card").show();	 
});
//underlines all h2's amd adds border to the nav
$("h2").addClass("underline");
   $("nav").addClass("border");
   //on stream_btn click, associated stream will be highlighted only
 	$("#stream1_btn").click(function() {								//ive tried this syntax and no difference
 		$(".stream1").removeClass("highlight_stream");
		$(".stream2").removeClass("highlight_stream");
		$(".stream3").removeClass("highlight_stream");
	  	$(".stream1").addClass("highlight_stream");
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass("highlight_stream");
		$(".stream2").removeClass("highlight_stream");
		$(".stream3").removeClass("highlight_stream");
	  	$(".stream2").addClass("highlight_stream");
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass("highlight_stream");
		$(".stream2").removeClass("highlight_stream");
		$(".stream3").removeClass("highlight_stream");
	  	$(".stream3").addClass("highlight_stream");
	});

 





