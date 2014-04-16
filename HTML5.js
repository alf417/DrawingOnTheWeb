//canvas1
		var canvas1 = document.getElementById("canvas1");
		var context1 = canvas1.getContext("2d");
		var width = canvas1.width;			
		var height = canvas1.height;

		var wildflowers = new Image();
		var texas = new Image();
		wildflowers.src = "wildflowers.jpg";
		texas.src = "texas.jpg";

		var wildflowersPosition = -600;
		var texasPosition = 600;
		var pixelShift = 3;

		function drawImages() {
			animation = requestAnimationFrame(drawImages);
			if (wildflowersPosition <= 0) {
				context1.clearRect(0, 0, width, height);
				context1.globalCompositeOperation = "multiply";
				context1.drawImage(wildflowers, wildflowersPosition, 0);
				context1.drawImage(texas, texasPosition, 0);
				wildflowersPosition += pixelShift;
				texasPosition -= pixelShift;
			}
			else {
				cancelAnimationFrame(animation);
			}
		}
		window.addEventListener("load", drawImages, false);

//canvas2
		var canvas2 = document.getElementById("canvas2");
		var context2 = canvas2.getContext("2d");
		var gradient = context2.createLinearGradient(20, 0, 350, 0);
			gradient.addColorStop(0, "blue");
			gradient.addColorStop(0.2, "green");
			gradient.addColorStop(0.4, "yellow");
			gradient.addColorStop(0.6, "blue");
			gradient.addColorStop(0.8, "green");
			gradient.addColorStop(1, "yellow");

			context2.font = "48px Helvetiva";
			context2.strokeStyle = gradient;

			function textPattern() {
				for (var i = 1; i < 7; i++) {
					context2.strokeText("    Welcome to Texas", 20, 225);
					context2.translate(20, 20);
				}
			}		
		window.addEventListener("load", textPattern, false);	

//canvas3
		var canvas3 = document.getElementById("canvas3");
		var context3 = canvas3.getContext("2d");

		photo = document.getElementById('bluebonnet');

		function drawImage() {
			context3.drawImage(photo, 0, 0);
			context3.strokeStyle = "darkBlue";
			context3.strokeRect(20, 20, 560, 410);
		}
		window.addEventListener("load", drawImage, false);