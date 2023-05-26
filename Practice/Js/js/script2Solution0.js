(
	function (window)
		{
			var joséGreeter = {};

			joséGreeter.name = "José";

			var greeting = "Hi ";

			joséGreeter.sayHi = function ()	{
												console.log( greeting + joséGreeter.name );
											}
			window.joséGreeter = joséGreeter;
		}
)(window);

