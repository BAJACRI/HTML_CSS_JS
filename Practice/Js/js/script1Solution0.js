(
	function (window)
		{
			var allanGreeter = {};

			allanGreeter.name = "Allan";

			var greeting = "Hello ";

			allanGreeter.sayHello = function ()	{
													console.log( greeting + allanGreeter.name );
												}

			window.allanGreeter = allanGreeter;
		}

)(window);
