allanGreeter.sayHello();
joséGreeter.sayHi();

function a ()
	{
		console.log( "Hello Coursera!");
	}

a();

var b = function ()
	{
		console.log( "Hello Coursera!");
	}

b()


var c = (
			function ()
				{
					console.log("Hello Coursera!");
				}
		);

c();


// IIEFE

(
	function ()
		{
			console.log("Hello Coursera!");
		}
)();


(
	function (name)
		{
			console.log("Hello " + name);
		}
)("Coursera!");