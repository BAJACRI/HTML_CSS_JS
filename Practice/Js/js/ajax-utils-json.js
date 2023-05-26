(function (global) {
	
	// Set up a namespace for our utility
	var ajaxUtils = {};

	// Returns HTTP request object
	function getRequestObject() {

		if (global.XMLHttpRequest)
			{
				return ( new XMLHttpRequest() );
			}
		else if (global.ActiveXObject)
			{
				// For every old IE browsers (optional)
				return ( new ActiveXObject("Microsoft.XMLHTTP") );
			}
			else
				{
					global.alert("Ajax is not supported!");
					return(null);
				}

	} // END OF function getRequestObject()


	//Make an AJAX GET request to 'requestUrl'
	ajaxUtils.sendGetRequest = function ( requestUrl, responseHandler, isJsonResponse )
								{
									var request = getRequestObject();

									request.onreadystatechange = function()
																	{
																		handleResponse( request, responseHandler, isJsonResponse );
																	};

									request.open( "GET", requestUrl, true );
									// For debugging purposes
									// console.log(requestUrl);
									request.send( null ); // for POST only
								};


	// Only calls user provided 'responseHandler' function
	// if response is ready and not an error
	function handleResponse( request, responseHandler, isJsonResponse ) {
		
		if ( (request.readyState == 4) && (request.status == 200) )
			{
				// Default to isJsonResponse = true
				if (isJsonResponse == undefined)
					{
						isJsonResponse = true;
					}

				if (isJsonResponse)
					{
						responseHandler( JSON.parse(request.responseText) );
					}
				else
					{
						responseHandler( request.responseText );
					}
			}

	} // END OF function handleResponse( request, responseHandler )

	
	// Expose utility to the global object
	global.$ajaxUtils = ajaxUtils;

} // END OF function (global)
) (window);