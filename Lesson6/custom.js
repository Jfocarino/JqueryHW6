<script>

	//$()

	//$(document)

	//$(document).ready()

	//$(document).ready(function){}

	$(document).ready(function)(){


		var isLightOn = true;

		$("LightsSwitch").click(function)(){
			flipTheLightsSwitch
		});

		$("#ball").click(function){
			var windowWidth = $(window).width();

			console.log(windowWidth)
			console.log $("#ball").position() )
			if($("ball").position == windowWidth){
				$("#ball").animate( (left))
			}

			}
		}

		function flipTheLightsSwitch(){
			if (isLightOn) ({
				$("body").css("background", "black");
				$("#LightsSwitch").val("TurnLights On");
				$("#square").fadeout(3000);
				isLightOn = false;
			)};
		)else(
				$("body").css("background", "yellow");
				$("#LightsSwitch").val("Turn Lights Off");
				$("#square").fadeout(3000);
				isLightOn = false
				)};

			if (isLightOn) {
			alert(" :) ");
			isLightOn = false;
		}else{
			alert("it's off");
			isLightOn = true;
		}

	</script>