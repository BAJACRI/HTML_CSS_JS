// Event handling
document.addEventListener( "DOMContentLoaded", 
	function (event)
		{
			// Unobstrusive event binding
			document.querySelector("button").addEventListener( "click",
				function ()
					{
						var self = this;
						var name = "";

						//Call server to get name
						$ajaxUtils.sendGetRequest( "./data/name.txt",
								function (request) {
									self.name = request.responseText;
								}
							); // END OF $ajaxUtils.sendGetRequest( "/data/name.txt",

						document.querySelector("#content").innerHTML = "<h2>Hello " + self.name + "!</h2>";
					}
				); // END OF document.querySelector("button").addEventListener( "click"
		}
	); // END OF document.addEventListener( "DOMContentLoaded"