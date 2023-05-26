// Event handling
document.addEventListener( "DOMContentLoaded", 
	function (event)
		{
			// Unobstrusive event binding
			document.querySelector("button").addEventListener( "click",
				function ()
					{
						//Call server to get name
						$ajaxUtils.sendGetRequest( "./data/db.json",
								function (res) {
									var message = res.firstName + " " + res.lastName;

									if (res.likesChineseFood)
										{
											message += " likes Chinese food";
										}
									else
										{
											message += " does not like Chinese food";
										}

									message += " and uses ";
									message += res.numberOfDisplays;
									message += " displays for coding.";

									// For debugging purposes
									// console.log(self.name);

									document.querySelector("#content").innerHTML = "<h2>" + message + "</h2>";
								}
							); // END OF $ajaxUtils.sendGetRequest( "/data/name.txt",

					}
				); // END OF document.querySelector("button").addEventListener( "click"
		}
	); // END OF document.addEventListener( "DOMContentLoaded"