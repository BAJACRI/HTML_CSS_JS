document.addEventListener("DOMContentLoaded", 
	function (event)
		{
			function sayHello(event) {

				console.log(event);
				this.textContent = "Said it!";

				var name = document.getElementById("name").value; 
				var message = "Hello " + name + "!";
				message ="<h2>" + message + "</h2>";

				document.getElementById("content").innerHTML = message;

				if (name === 'student')
					{
						var title = document.querySelector("#title").textContent;
						title += " & lovin'it!";
						document.querySelector("h1").textContent = title;
					}
			}

			// Unobstrusive event binding
			document.querySelector("button").onclick = sayHello;

			document.querySelector("body").addEventListener("mousemove",
				function (event) {
					if (event.shiftKey === true)
						{
							console.log("X: " + event.clientX);
							console.log("Y: " + event.clientY);
						}
				}
			);
		}
	);

