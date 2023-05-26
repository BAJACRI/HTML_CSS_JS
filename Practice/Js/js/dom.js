console.log( document.getElementById("title") );

console.log( document instanceof HTMLDocument);

function sayHello() {
	var name = document.getElementById("name").value; 
	console.log( document.getElementById("name").value );

	var message = "Hello " + name + "!";
	document.getElementById("content").textContent = message;

	var message0 ="<h2>" + message + "</h2>";

	document.getElementById("content").textContent = message0;

	document.getElementById("content").innerHTML = message0;

	if (name === 'student')
		{
			var title = document.querySelector("#title").textContent;
			title += " & lovin'it!";
			// document.querySelector("#title").textContent = title;
			document.querySelector("h1").textContent = title;
		}
}