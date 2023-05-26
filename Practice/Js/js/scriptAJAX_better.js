// Event handling
document.addEventListener( "DOMContentLoaded", 
	function (event)
		{
			// Unobstrusive event binding
			document.querySelector("button").addEventListener( "click",
				function ()
					{
						//Call server to get name
						$ajaxUtils.sendGetRequest( "./data/name.txt",
								function (request) {
									var name = request.responseText;

									// For debugging purposes
									// console.log(self.name);

									document.querySelector("#content").innerHTML = "<h2>Hello " + name + "!";
								}
							); // END OF $ajaxUtils.sendGetRequest( "/data/name.txt",

					}
				); // END OF document.querySelector("button").addEventListener( "click"
		}
	); // END OF document.addEventListener( "DOMContentLoaded"