<script>// This tells the document to pull up the function once the page is done loading and is fully ready
			$(document).ready(function(){
	// create a  boolean and set it to true
	 		var isLightOn = true;
	 // create the jquery id and make it clickable
	 		$("#LightSwitch").click(function(){
	 			flipTheLightSwitch();
	 		});

	 // then you can set what happens if that function is true or false
	 function flipTheLightSwitch(){
	 		if (isLightOn){
	 			alert(" it's On ");
	 			isLightOn = false
	 		}else{
	 			alert(" it's off ");
	 			isLightOn = true;
	 		}
	 	}
	 	// the below function will cause an alert when the mouse is hovering over the word or area on the webpage that activates it
	 });	$(document).ready(function(){
   			 $("#p1").hover(function(){
       			alert("Go Away");
    },			function(){
        		alert("I warned you!");
    }); 

   			 // ths is another click function that activates the divs to fade in
});			$(document).ready(function(){
				$("#div3").click(function(){
					$("#div2").remove();
				})
})
			// Lastly this function makes one of the Divs dissapear when clicked

			$(document).ready(function(){
			$("button").click(function(){
       			 $("#div1").fadeIn();
        		$("#div2").fadeIn("slow");
        		$("#div3").fadeIn(3000); })  });
			</script
